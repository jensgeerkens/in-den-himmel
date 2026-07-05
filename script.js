/* ============================================================================
   script.js — "In den Himmel"
   Skalierung, Szenen-Aufbau, Canvas-Hintergrund, Höhenmesser, Interaktion.
   Läuft als klassisches Script (kein Modul) direkt unter file://.
   ========================================================================== */
(function () {
  "use strict";

  /* ---------------------------------------------------------------------
     1) HÖHEN-SKALIERUNG  (unten linear in Metern, oben logarithmisch in km)
     --------------------------------------------------------------------- */
  const SEGMENTS = [            // [lo_m, hi_m, px_pro_m]
    [0, 100, 40], [100, 1000, 8], [1000, 5000, 2],
    [5000, 12000, 0.8], [12000, 40000, 0.22], [40000, 100000, 0.12],
  ];
  const SEG = []; let acc = 0;
  for (const [lo, hi, ppm] of SEGMENTS) {
    const h = (hi - lo) * ppm;
    SEG.push({ lo, hi, ppm, startPx: acc, heightPx: h });
    acc += h;
  }
  const GROUND_PX = acc;                  // Höhe des linearen Teils

  const LOG_MIN_KM = 100;                 // 100 km = Kármán-Linie
  const LOG_MAX_KM = 5e23;                // bis zum Rand des beobachtbaren Universums
  const PX_PER_DECADE = 5000;
  const logKm = (km) => Math.log10(km);
  const SPACE_PX = (logKm(LOG_MAX_KM) - logKm(LOG_MIN_KM)) * PX_PER_DECADE;
  const TOTAL_HEIGHT = GROUND_PX + SPACE_PX;

  function altToGroundPx(alt_m) {         // Pixel vom Boden gemessen
    if (alt_m <= 0) return 0;
    if (alt_m <= 100000) {
      for (const s of SEG) if (alt_m <= s.hi) return s.startPx + (alt_m - s.lo) * s.ppm;
    }
    const km = alt_m / 1000;
    return GROUND_PX + (logKm(km) - logKm(LOG_MIN_KM)) * PX_PER_DECADE;
  }
  const altToY = (alt_m) => TOTAL_HEIGHT - altToGroundPx(alt_m);   // DOM-top

  function groundPxToAlt(gpx) {           // Umkehrung (für den Höhenmesser)
    if (gpx <= 0) return 0;
    if (gpx <= GROUND_PX) {
      for (const s of SEG) {
        const e = s.startPx + s.heightPx;
        if (gpx <= e) return s.lo + (gpx - s.startPx) / s.ppm;
      }
    }
    const km = Math.pow(10, logKm(LOG_MIN_KM) + (gpx - GROUND_PX) / PX_PER_DECADE);
    return km * 1000;
  }

  /* ---------------------------------------------------------------------
     2) HILFSFUNKTIONEN
     --------------------------------------------------------------------- */
  let lang = "de";

  // Reduced-Motion einmal cachen (kein matchMedia pro Frame) und bei Änderung nachziehen.
  const reduceMQ = window.matchMedia("(prefers-reduced-motion: reduce)");
  let reducedMotion = reduceMQ.matches;
  const onReduceChange = () => { reducedMotion = reduceMQ.matches; };
  if (reduceMQ.addEventListener) reduceMQ.addEventListener("change", onReduceChange);
  else if (reduceMQ.addListener) reduceMQ.addListener(onReduceChange);

  const LY_KM = 9.4607e12;                 // Kilometer pro Lichtjahr
  function formatAlt(m, lg = lang) {
    const loc = lg === "de" ? "de-DE" : "en-US";
    const fmt = (x, d) => x.toLocaleString(loc, { maximumFractionDigits: d, minimumFractionDigits: d });
    if (m < 100000) return Math.round(m).toLocaleString(loc) + " m";   // bis 100 km in Metern
    const km = m / 1000;
    if (km < LY_KM) {                       // bis ~1 Lichtjahr in Kilometern
      if (km < 1e6) return Math.round(km).toLocaleString(loc) + " km";
      if (km < 1e9) return fmt(km / 1e6, 1) + (lg === "de" ? " Mio. km" : " million km");
      return fmt(km / 1e9, 1) + (lg === "de" ? " Mrd. km" : " billion km");
    }
    const ly = km / LY_KM;                  // darüber in Lichtjahren
    const u = lg === "de" ? "Lichtjahre" : "light-years";
    if (ly < 1000) return fmt(ly, 1) + " " + u;
    if (ly < 1e6) return Math.round(ly).toLocaleString(loc) + " " + u;
    if (ly < 1e9) return fmt(ly / 1e6, 1) + (lg === "de" ? " Mio. " : " million ") + u;
    return fmt(ly / 1e9, 1) + (lg === "de" ? " Mrd. " : " billion ") + u;
  }

  const NOTE_LABELS = {
    extremereignis: { de: "Einzelrekord", en: "single record" },
    extremwert:     { de: "Extremwert",   en: "extreme value" },
    laborwert:      { de: "Laborwert",    en: "lab value" },
    bodenhoehe:     { de: "Standorthöhe", en: "ground elevation" },
    unsicher:       { de: "unsicher",     en: "uncertain" },
    typisch:        null,
    referenz:       null,
  };

  const I18N = {
    pageTitle:  { de: "In den Himmel — Wie hoch fliegen Tiere?",
                  en: "Into the Sky — How high do animals fly?" },
    pageDesc:   { de: "Scrolle vom Boden bis ins Weltall und entdecke fliegende Tiere, Flugzeuge und Raumfahrt auf ihrer wahren Höhe.",
                  en: "Scroll from the ground to outer space and discover flying animals, aircraft and spacecraft at their true altitude." },
    title:      { de: "In den Himmel", en: "Into the Sky" },
    subtitle:   { de: "Vom Boden bis ins Weltall: fliegende Tiere, Flugzeuge und Raumfahrt auf ihrer wahren Höhe.",
                  en: "From the ground to outer space: flying animals, aircraft and spacecraft at their true altitude." },
    start:      { de: "Abheben ↑", en: "Lift off ↑" },
    inspired:   { de: "Inspiriert von neal.fun/deep-sea", en: "Inspired by neal.fun/deep-sea" },
    jump:       { de: "Springe zu …", en: "Jump to …" },
    scrollHint: { de: "↑ Scrolle nach oben, um aufzusteigen", en: "↑ Scroll up to ascend" },
    tapHint:    { de: "Tipp: Objekt antippen oder anklicken für Details.", en: "Tip: tap or click any object for details." },
    ground:     { de: "Meereshöhe · 0 m", en: "Sea level · 0 m" },
  };

  /* Texte für die inszenierten Momente (Kármán-Payoff + Finale). */
  const MOMENTS = {
    karmanKicker:  { de: "100 Kilometer", en: "100 kilometres" },
    karmanTitle:   { de: "Die Grenze zum Weltraum", en: "The Edge of Space" },
    karmanSub:     { de: "Kármán-Linie. Ab hier trägt die Luft keine Flügel mehr, nur noch Bahnen.",
                     en: "The Kármán line. Beyond it air no longer carries wings, only orbits." },
    finaleKicker:  { de: "Ende der Reise", en: "End of the journey" },
    finaleTitle:   { de: "46,5 Milliarden Lichtjahre", en: "46.5 billion light-years" },
    finaleText:    { de: "Weiter sehen wir nicht. Nicht weil das Universum hier endet, sondern weil das Licht nicht älter ist als 13,8 Milliarden Jahre. Es hatte schlicht noch keine Zeit, uns von weiter draußen zu erreichen.",
                     en: "This is as far as we can see. Not because the universe ends here, but because light is no older than 13.8 billion years. It simply has not had time to reach us from farther out." },
    finaleStatObj: { de: "Objekte auf der Reise", en: "objects on the way" },
    finaleStatSpan:{ de: "vom Boden bis zum Rand", en: "from the ground to the edge" },
    backToGround:  { de: "Zurück zum Boden ↓", en: "Back to the ground ↓" },
  };

  function applyStaticI18n() {
    document.documentElement.lang = lang;
    document.title = I18N.pageTitle[lang];
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", I18N.pageDesc[lang]);
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (I18N[key]) el.textContent = I18N[key][lang];
    });
  }

  /* ---------------------------------------------------------------------
     3) DOM-AUFBAU
     --------------------------------------------------------------------- */
  const sceneEl   = document.getElementById("scene");
  const objLayer  = document.getElementById("objects-layer");
  const ITEM_BY_ID = new Map(SKY_DATA.map((d) => [d.id, d]));   // schnelle Suche für Delegation
  const atmoLayer = document.getElementById("atmosphere-layer");
  const cloudLayer= document.getElementById("cloud-layer");
  const msLayer   = document.getElementById("milestone-layer");
  const secLayer  = document.getElementById("section-layer");
  const karmanLayer = document.getElementById("karman-layer");
  const finaleLayer = document.getElementById("finale-layer");

  const LANE_X = [50, 30, 70, 16, 84];     // Prozent: Mitte zuerst, dann auffächern
  const ITEM_H = 215;                       // ungefähre Item-Höhe inkl. Beschriftung

  function buildScene() {
    // 1) Position berechnen und von oben (große Höhe) nach unten sortieren
    const nodes = SKY_DATA
      .map((it) => ({ it, y: altToY(it.altitude_m) }))
      .sort((a, b) => a.y - b.y);
    // 2) Spuren so vergeben, dass sich Items nicht überlappen
    const laneBottom = LANE_X.map(() => -Infinity);
    for (const n of nodes) {
      let lane = LANE_X.findIndex((_, i) => n.y >= laneBottom[i]);
      if (lane === -1) {                      // alle belegt -> freieste Spur
        lane = 0; for (let i = 1; i < laneBottom.length; i++) if (laneBottom[i] < laneBottom[lane]) lane = i;
      }
      laneBottom[lane] = n.y + ITEM_H;
      n.lane = lane;
    }
    // 3) DOM erzeugen
    const frag = document.createDocumentFragment();
    for (const n of nodes) {
      const it = n.it;
      const el = document.createElement("figure");
      el.className = `sky-item cat-${it.cat}`;
      el.style.top = n.y + "px";
      el.style.left = LANE_X[n.lane] + "%";
      el.dataset.id = it.id;
      el.tabIndex = 0;
      el.setAttribute("role", "button");
      el.setAttribute("aria-label", `${it.name[lang]} – ${formatAlt(it.altitude_m)}`);

      const note = NOTE_LABELS[it.note];
      const badge = note ? `<span class="note-badge note-${it.note}">${note[lang]}</span>` : "";
      const yr = SPACE_YEARS[it.id] ? `<span class="year">${SPACE_YEARS[it.id]}</span>` : "";

      // Foto -> WebP (max. 320 px) mit echten width/height gegen CLS; Emoji bleibt onerror-Fallback.
      const webp = it.img ? it.img.replace(/\.(jpe?g|png)$/i, ".webp") : "";
      const dim = (typeof IMG_DIMS !== "undefined" && it.img && IMG_DIMS[it.img]) ? IMG_DIMS[it.img] : null;
      const dimAttr = dim ? ` width="${dim[0]}" height="${dim[1]}"` : "";
      const imgTag = it.img
        ? `<img src="${webp}"${dimAttr} alt="${it.name[lang]}" loading="lazy" decoding="async"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">`
        : "";
      // Kein Foto -> freigestellte SVG-Bildsprache (Kugeln/Icons); Emoji nur noch stiller Fallback.
      const svg = (!it.img && typeof skyVisual === "function") ? skyVisual(it.id) : null;
      const visualTag = svg ? `<div class="sky-visual" aria-hidden="true">${svg}</div>` : "";
      const showPh = !it.img && !svg;
      el.innerHTML = `
        ${imgTag}${visualTag}
        <div class="placeholder" style="display:${showPh ? "flex" : "none"}">${it.emoji}</div>
        <figcaption>
          <span class="name">${it.name[lang]}${yr}</span>
          <span class="alt">${formatAlt(it.altitude_m)}</span>
          ${badge}
        </figcaption>`;
      frag.appendChild(el);
    }
    objLayer.replaceChildren(frag);
  }

  function buildAtmosphere() {
    const frag = document.createDocumentFragment();
    for (const L of ATMOSPHERE_LAYERS) {
      const top = altToY(L.to);
      const band = document.createElement("div");
      band.className = "atmo-band";
      band.style.top = top + "px";
      band.style.height = (altToY(L.from) - top) + "px";
      band.innerHTML = `<span class="atmo-label">${L.name[lang]}</span>`;
      frag.appendChild(band);
    }
    atmoLayer.replaceChildren(frag);
  }

  const MILESTONES = [
    { alt: 8849,  label: { de: "Mount Everest", en: "Mount Everest" } },
    { alt: 12000, label: { de: "Reiseflughöhe Jets", en: "Airliner cruise" } },
    { alt: 19000, label: { de: "Armstrong-Grenze", en: "Armstrong limit" } },
    { alt: 100000, label: { de: "Grenze zum Weltraum", en: "Edge of space" } },
    { alt: 408000, label: { de: "Raumstation ISS", en: "ISS orbit" } },
    { alt: 35786000, label: { de: "Geostationäre Bahn", en: "Geostationary orbit" } },
    { alt: 384400000, label: { de: "Mondbahn", en: "Moon's orbit" } },
    { alt: 149600000000, label: { de: "Die Sonne (1 AE)", en: "The Sun (1 AU)" } },
    { alt: 5910000000000, label: { de: "Pluto-Bahn", en: "Pluto's orbit" } },
    { alt: 25800000000000, label: { de: "Voyager 1", en: "Voyager 1" } },
    { alt: 40000000000000000, label: { de: "Nächster Stern", en: "Nearest star" } },
    { alt: 246000000000000000000, label: { de: "Zentrum der Milchstraße", en: "Milky Way centre" } },
    { alt: 2.365e22, label: { de: "Andromeda-Galaxie", en: "Andromeda galaxy" } },
    { alt: 439900000000000000000000000, label: { de: "Rand des Universums", en: "Edge of the universe" } },
  ];
  function buildMilestones() {
    const frag = document.createDocumentFragment();
    for (const m of MILESTONES) {
      const el = document.createElement("div");
      el.className = "milestone";
      el.style.top = altToY(m.alt) + "px";
      el.innerHTML = `<span class="milestone-label">${m.label[lang]} · ${formatAlt(m.alt)}</span>`;
      frag.appendChild(el);
    }
    msLayer.replaceChildren(frag);
  }

  // Dezente Höhen-Ticks am linken Rand (jede Zehnerpotenz), rein orientierend.
  const tickLayer = document.getElementById("tick-layer");
  function buildTicks() {
    const frag = document.createDocumentFragment();
    for (let e = 2; e <= 26; e++) {              // 100 m … 1e26 m
      const alt = Math.pow(10, e);
      const y = altToY(alt);
      if (y < 0 || y > TOTAL_HEIGHT) continue;
      const el = document.createElement("div");
      el.className = "height-tick";
      el.style.top = y + "px";
      el.innerHTML = `<span class="tick-label">${formatAlt(alt)}</span>`;
      frag.appendChild(el);
    }
    tickLayer.replaceChildren(frag);
  }

  // Beiläufige Zwischen-Facts in den langen Lücken (rein additiv, aus data.js GAP_FACTS).
  const gapLayer = document.getElementById("gapfact-layer");
  function buildGapFacts() {
    if (typeof GAP_FACTS === "undefined") return;
    const frag = document.createDocumentFragment();
    for (const f of GAP_FACTS) {
      const el = document.createElement("div");
      el.className = "gap-fact";
      el.style.top = altToY(f.alt) + "px";
      const txt = document.createElement("p");
      txt.className = "gap-fact-text";
      txt.textContent = f[lang];
      el.appendChild(txt);
      frag.appendChild(el);
    }
    gapLayer.replaceChildren(frag);
  }

  // Große Akt-Banner an den Übergängen (Eintritt = untere Grenze `from`).
  function buildSections() {
    const frag = document.createDocumentFragment();
    for (const s of SECTIONS) {
      if (s.from <= 0) continue;                 // "Atmosphäre" am Boden braucht kein Banner
      const el = document.createElement("div");
      el.className = "section-banner" + (s.from === KARMAN_ALT ? " section-karman" : "");
      el.style.top = altToY(s.from) + "px";
      el.innerHTML = `<span class="section-title">${s.name[lang]}</span>`;
      frag.appendChild(el);
    }
    secLayer.replaceChildren(frag);
  }

  /* Kármán-Payoff bei 100 km: Erdkrümmung als flacher SVG-Bogen mit blauer
     Atmosphären-Linie + Airglow. Rein dekorativ, im Szenen-Layer verankert. */
  const KARMAN_ALT = 100000;
  function buildKarman() {
    const y = altToY(KARMAN_ALT);
    const wrap = document.createElement("div");
    wrap.className = "karman-scene";
    wrap.style.top = y + "px";                     // die 100-km-Linie liegt am oberen Rand des Bogens
    wrap.setAttribute("aria-hidden", "true");
    wrap.innerHTML = `
      <svg class="karman-svg" viewBox="0 0 1440 520" preserveAspectRatio="xMidYMin slice" focusable="false">
        <defs>
          <radialGradient id="karmanEarth" cx="50%" cy="150%" r="90%">
            <stop offset="0%" stop-color="#0a1f4a"/>
            <stop offset="60%" stop-color="#040c22"/>
            <stop offset="100%" stop-color="#02060f"/>
          </radialGradient>
          <linearGradient id="karmanGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="rgba(90,170,255,0)"/>
            <stop offset="55%" stop-color="rgba(90,175,255,0.28)"/>
            <stop offset="82%" stop-color="rgba(150,220,255,0.55)"/>
            <stop offset="100%" stop-color="rgba(120,255,215,0.30)"/>
          </linearGradient>
        </defs>
        <!-- Atmosphären-Glow über der Kante -->
        <path d="M0,300 C360,214 1080,214 1440,300 L1440,470 C1080,398 360,398 0,470 Z" fill="url(#karmanGlow)"/>
        <!-- Erdkörper (gekrümmt) -->
        <path d="M0,318 C360,232 1080,232 1440,318 L1440,520 L0,520 Z" fill="url(#karmanEarth)"/>
        <!-- dünne blaue Atmosphären-Linie auf der Kante -->
        <path d="M0,318 C360,232 1080,232 1440,318" fill="none" stroke="#9fd8ff" stroke-width="2.4" stroke-linecap="round" opacity="0.9"/>
        <!-- feiner Airglow-Faden knapp darüber -->
        <path d="M0,300 C360,214 1080,214 1440,300" fill="none" stroke="rgba(150,255,215,0.5)" stroke-width="1.2"/>
      </svg>`;
    karmanLayer.replaceChildren(wrap);
  }

  /* Finale am Universumsrand: CMB-Textur + große zweisprachige Schluss-Card. */
  function buildFinale() {
    const topAlt = SECTIONS[SECTIONS.length - 1].to;      // 50 Mrd. Lj (oberste Dekade)
    const dropAlt = 14e9 * 9.4607e15;                     // Beginn der obersten Dekade
    const top = altToY(topAlt);
    const bottom = altToY(dropAlt);
    const wrap = document.createElement("div");
    wrap.className = "finale-scene";
    wrap.style.top = top + "px";
    wrap.style.height = (bottom - top) + "px";
    wrap.setAttribute("aria-hidden", "false");

    const kicker = MOMENTS.finaleKicker[lang];
    const title  = MOMENTS.finaleTitle[lang];
    const text   = MOMENTS.finaleText[lang];
    const objN   = SKY_DATA.length.toLocaleString(lang === "de" ? "de-DE" : "en-US");
    const statObj = MOMENTS.finaleStatObj[lang];
    const statSpan = MOMENTS.finaleStatSpan[lang];
    const spanVal = formatAlt(4.399e26);        // 46,5 Mrd. Lj — konsistent mit dem Meilenstein

    wrap.innerHTML = `
      <div class="finale-cmb" aria-hidden="true"></div>
      <div class="finale-card">
        <p class="finale-kicker">${kicker}</p>
        <h2 class="finale-title">${title}</h2>
        <p class="finale-text">${text}</p>
        <div class="finale-stats">
          <div class="finale-stat"><span class="finale-stat-num">${objN}</span><span class="finale-stat-lbl">${statObj}</span></div>
          <div class="finale-stat"><span class="finale-stat-num">${spanVal}</span><span class="finale-stat-lbl">${statSpan}</span></div>
        </div>
        <button type="button" class="finale-back" id="finale-back-btn">${MOMENTS.backToGround[lang]}</button>
      </div>`;
    finaleLayer.replaceChildren(wrap);
    const btn = wrap.querySelector("#finale-back-btn");
    btn.addEventListener("click", () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: prefersReduced() ? "auto" : "smooth" });
    });
  }

  // Name des aktuellen Akts (für den Höhenmesser).
  function currentSectionName(alt) {
    for (const s of SECTIONS) if (alt >= s.from && alt < s.to) return s.name[lang];
    return SECTIONS[SECTIONS.length - 1].name[lang];
  }

  // Weiche PNG-Wolken in zwei Tiefenebenen (fern/nah). factor = Parallax-Stärke.
  // layer 0 = fern (klein, blass, langsam), layer 1 = nah (groß, kräftig, schnell).
  const CLOUDS = [
    { alt: 600,  img: "cloud-b", x: 22, w: 190, op: 0.9,  factor: 0.22, layer: 1 },
    { alt: 900,  img: "cloud-a", x: 68, w: 150, op: 0.7,  factor: 0.12, layer: 0 },
    { alt: 1500, img: "cloud-a", x: 40, w: 220, op: 0.92, factor: 0.24, layer: 1 },
    { alt: 2400, img: "cloud-c", x: 78, w: 170, op: 0.6,  factor: 0.10, layer: 0 },
    { alt: 3200, img: "cloud-b", x: 30, w: 240, op: 0.9,  factor: 0.26, layer: 1 },
    { alt: 5200, img: "cloud-a", x: 62, w: 150, op: 0.55, factor: 0.11, layer: 0 },
    { alt: 6500, img: "cloud-c", x: 24, w: 260, op: 0.85, factor: 0.28, layer: 1 },
    { alt: 9000, img: "cloud-c", x: 72, w: 200, op: 0.45, factor: 0.09, layer: 0 },
  ];
  let cloudEls = [];       // [{ el, factor, baseTop }] — Faktoren einmalig gecacht (kein dataset-Parse pro Frame)
  function buildClouds() {
    const frag = document.createDocumentFragment();
    cloudEls = CLOUDS.map((c) => {
      const el = document.createElement("img");
      el.className = "cloud cloud-l" + c.layer;
      el.src = "images/clouds/" + c.img + ".png";
      el.alt = "";
      el.setAttribute("aria-hidden", "true");
      el.decoding = "async";
      el.loading = "lazy";
      el.style.width = c.w + "px";
      el.style.opacity = c.op;
      // Wolken liegen im linearen Boden-Bereich; DOM-top clampen, damit die Parallax-
      // Verschiebung sie nie unter den Boden schiebt (Void-Bug).
      const baseTop = Math.min(TOTAL_HEIGHT, Math.max(0, altToY(c.alt)));
      el.style.top = baseTop + "px";
      el.style.left = c.x + "%";
      frag.appendChild(el);
      return { el, factor: c.factor, baseTop };
    });
    cloudLayer.replaceChildren(frag);
  }

  /* ---------------------------------------------------------------------
     4) HINTERGRUND-CANVAS (Gradient + Sterne)
     --------------------------------------------------------------------- */
  const canvas = document.getElementById("bg");
  const ctx = canvas.getContext("2d");
  let vw = 0, vh = 0;

  function resize() {
    vw = window.innerWidth;
    vh = window.innerHeight;
    // Hi-DPI-Schärfe: Backing-Store auf min(dpr, 2) skalieren, CSS-Größe bleibt in CSS-Pixeln.
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(vw * dpr);
    canvas.height = Math.round(vh * dpr);
    canvas.style.width = vw + "px";
    canvas.style.height = vh + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);   // Zeichnen weiter in CSS-Pixel-Koordinaten (vw/vh)
  }

  const clamp01 = (t) => Math.max(0, Math.min(1, t));
  function lerpC(a, b, t) { return [0, 1, 2].map((i) => Math.round(a[i] + (b[i] - a[i]) * clamp01(t))); }
  const rgb = (c) => `rgb(${c[0]},${c[1]},${c[2]})`;

  function colorAt(alt) {
    for (let i = 0; i < SKY_COLORS.length - 1; i++) {
      const a = SKY_COLORS[i], b = SKY_COLORS[i + 1];
      if (alt <= b.alt) return lerpC(a.c, b.c, (alt - a.alt) / (b.alt - a.alt));
    }
    return SKY_COLORS[SKY_COLORS.length - 1].c;
  }

  function starAlpha(alt) { return clamp01((alt - 30000) / (120000 - 30000)); }

  // DOM-y-Bereich des Weltraums (ab ~30 km sichtbar) für höhenabhängige Sterndichte.
  const STAR_TOP_Y = 0;                                   // Rand des Universums (ganz oben)
  const STAR_BOTTOM_Y = SPACE_PX + GROUND_PX * 0.35;      // knapp in die obere Atmosphäre
  // DOM-y-Bänder markanter Regionen (aus SECTIONS-Höhen, rein präsentativ).
  const MW_Y0 = altToY(130000 * 9.4607e15);              // Milchstraße (obere Grenze)
  const MW_Y1 = altToY(140 * 9.4607e15);                 // Milchstraße (untere Grenze)
  const SUN_Y = altToY(149600000000);                    // 1 AE — Zodiakallicht
  // Weiche Nebel-Farbfelder in den Deep-Space-Dekaden (DOM-y, Farbe, Radius).
  const NEBULAE = [
    { y: altToY(1e3 * 9.4607e15), x: 0.30, r: 360, c: [120, 90, 200] },
    { y: altToY(2e4 * 9.4607e15), x: 0.72, r: 300, c: [210, 90, 150] },
    { y: altToY(5e6 * 9.4607e15), x: 0.42, r: 420, c: [80, 120, 210] },
    { y: altToY(2e8 * 9.4607e15), x: 0.62, r: 380, c: [150, 110, 210] },
    { y: altToY(6e9 * 9.4607e15), x: 0.36, r: 460, c: [90, 100, 180] },
  ];

  // Festes Sternenfeld im DOM-Koordinatenraum. Drei Parallax-Schichten (f) für Tiefe,
  // höhenabhängige Dichte (mehr/kleiner tief im All, weniger/größer nahe der Atmosphäre).
  const STAR_TINTS = ["#ffffff", "#ffffff", "#ffffff", "#dfe9ff", "#cfe0ff", "#fff1d6", "#ffe3c8"];
  const STAR_LAYERS = [0.90, 0.96, 1.0];
  const STARS = [];
  let noisePattern = null;
  function buildStars() {
    STARS.length = 0;
    const span = STAR_BOTTOM_Y - STAR_TOP_Y;
    const N = 1000;
    for (let i = 0; i < N; i++) {
      const ydom = STAR_TOP_Y + Math.random() * span;
      const alt = groundPxToAlt(TOTAL_HEIGHT - ydom);
      const depth = clamp01(1 - (ydom - STAR_TOP_Y) / span);   // 1 = ganz oben (tief im All)
      // tief im All: mehr, kleinere, hellere Sterne; nahe Atmosphäre: dünner
      if (Math.random() > 0.35 + depth * 0.65) continue;
      const base = Math.random() * 0.6 + 0.4;
      const a = starAlpha(alt) * base;
      // dichteres, helleres Band in der Milchstraßen-Region
      const inMW = ydom >= MW_Y0 && ydom <= MW_Y1;
      const layer = (Math.random() * STAR_LAYERS.length) | 0;
      STARS.push({
        x: Math.random(),
        ydom,
        r: (Math.random() * 1.2 + 0.25) * (1 - depth * 0.35),
        a: Math.min(1, a * (inMW ? 1.35 : 1)),
        c: STAR_TINTS[(Math.random() * STAR_TINTS.length) | 0],
        f: STAR_LAYERS[layer],
        tw: Math.random() < 0.28,             // Teilmenge funkelt (gegated)
        ph: Math.random() * Math.PI * 2,
      });
    }
    // 64×64-Rauschkachel einmalig für Dithering gegen Banding im Gradient.
    if (!noisePattern) {
      const nc = document.createElement("canvas");
      nc.width = nc.height = 64;
      const nx = nc.getContext("2d");
      const img = nx.createImageData(64, 64);
      for (let i = 0; i < img.data.length; i += 4) {
        const v = (Math.random() * 255) | 0;
        img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
        img.data[i + 3] = 10;                 // sehr niedriges Alpha
      }
      nx.putImageData(img, 0, 0);
      noisePattern = ctx.createPattern(nc, "repeat");
    }
  }

  function drawBg(now) {
    const st = window.scrollY;
    const altTop = groundPxToAlt(TOTAL_HEIGHT - st);
    const altBottom = groundPxToAlt(TOTAL_HEIGHT - (st + vh));
    const g = ctx.createLinearGradient(0, 0, 0, vh);
    g.addColorStop(0, rgb(colorAt(altTop)));
    g.addColorStop(1, rgb(colorAt(altBottom)));
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, vw, vh);

    // Dithering: feine Rauschkachel über den Verlauf legen (killt Banding).
    if (noisePattern) {
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = noisePattern;
      ctx.fillRect(0, 0, vw, vh);
      ctx.globalAlpha = 1;
    }

    // Zodiakallicht: warmer, weicher Kegel nahe der Sonne (1 AE).
    const sunScreen = SUN_Y - st;
    if (sunScreen > -vh && sunScreen < vh * 2) {
      const zg = ctx.createRadialGradient(vw * 0.5, sunScreen, 0, vw * 0.5, sunScreen, vh * 0.9);
      zg.addColorStop(0, "rgba(255,225,170,0.10)");
      zg.addColorStop(1, "rgba(255,225,170,0)");
      ctx.fillStyle = zg;
      ctx.fillRect(0, 0, vw, vh);
    }

    // Nebel-Farbfelder (weiche radiale Blobs) in den Deep-Space-Dekaden.
    for (const n of NEBULAE) {
      const sy = n.y - st;
      if (sy < -n.r || sy > vh + n.r) continue;
      const ng = ctx.createRadialGradient(n.x * vw, sy, 0, n.x * vw, sy, n.r);
      ng.addColorStop(0, `rgba(${n.c[0]},${n.c[1]},${n.c[2]},0.16)`);
      ng.addColorStop(0.5, `rgba(${n.c[0]},${n.c[1]},${n.c[2]},0.06)`);
      ng.addColorStop(1, `rgba(${n.c[0]},${n.c[1]},${n.c[2]},0)`);
      ctx.fillStyle = ng;
      ctx.fillRect(0, 0, vw, vh);
    }

    // Milchstraßen-Band: diagonaler, weicher Lichtstreifen in der Milchstraßen-Region.
    const mwTop = MW_Y0 - st, mwBot = MW_Y1 - st;
    if (mwBot > 0 && mwTop < vh) {
      ctx.save();
      const cy = (mwTop + mwBot) / 2;
      ctx.translate(vw / 2, cy);
      ctx.rotate(-0.32);
      const bandH = Math.min(vh * 0.9, Math.max(140, (mwBot - mwTop) * 0.5));
      const bg = ctx.createLinearGradient(0, -bandH, 0, bandH);
      bg.addColorStop(0, "rgba(180,195,255,0)");
      bg.addColorStop(0.5, "rgba(200,210,255,0.10)");
      bg.addColorStop(1, "rgba(180,195,255,0)");
      ctx.fillStyle = bg;
      ctx.fillRect(-vw, -bandH, vw * 2, bandH * 2);
      ctx.restore();
    }

    // Sterne (Alpha vorberechnet). Parallax-Faktor pro Schicht; Twinkle nur gegated.
    const doTwinkle = !reducedMotion && !document.hidden && now != null;
    for (const s of STARS) {
      if (s.a <= 0.01) continue;
      const screenY = s.ydom - st * (reducedMotion ? 1 : s.f);
      if (screenY < -2 || screenY > vh + 2) continue;
      let a = s.a;
      if (doTwinkle && s.tw) a *= 0.7 + 0.3 * Math.sin(now * 0.002 + s.ph);
      ctx.globalAlpha = a;
      ctx.fillStyle = s.c;
      ctx.beginPath();
      ctx.arc(s.x * vw, screenY, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  /* Twinkle-Loop: Dauer-rAF NUR wenn erlaubt (kein reduced-motion, Tab sichtbar,
     Sichthöhe > ~30 km, also Sterne überhaupt sichtbar). Sonst still. */
  let twinkleRAF = null;
  function twinkleActive() {
    return !reducedMotion && !document.hidden && currentScrollAlt() > 30000;
  }
  function twinkleLoop(now) {
    drawBg(now);
    updateAltimeter();
    updateParallax(window.scrollY);
    twinkleRAF = twinkleActive() ? requestAnimationFrame(twinkleLoop) : null;
  }
  function maybeStartTwinkle() {
    if (!twinkleRAF && twinkleActive()) twinkleRAF = requestAnimationFrame(twinkleLoop);
  }
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) { if (twinkleRAF) { cancelAnimationFrame(twinkleRAF); twinkleRAF = null; } }
    else maybeStartTwinkle();
  });

  /* ---------------------------------------------------------------------
     5) HÖHENMESSER + PARALLAX (im rAF-Loop)
     --------------------------------------------------------------------- */
  const altNumber = document.getElementById("alt-number");
  const altLayerName = document.getElementById("alt-layer-name");
  const altBarFill = document.getElementById("alt-bar-fill");

  function currentLayerName(alt) {
    for (const L of ATMOSPHERE_LAYERS) if (alt >= L.from && alt < L.to) return L.name[lang];
    return ATMOSPHERE_LAYERS[ATMOSPHERE_LAYERS.length - 1].name[lang];
  }

  function updateAltimeter() {
    const st = window.scrollY;
    const gpxMid = TOTAL_HEIGHT - (st + vh / 2);
    const alt = Math.max(0, groundPxToAlt(gpxMid));
    altNumber.textContent = formatAlt(alt);
    altLayerName.textContent = alt < 100000 ? currentLayerName(alt) : currentSectionName(alt);
    const pct = clamp01(altToGroundPx(alt) / TOTAL_HEIGHT) * 100;
    altBarFill.style.width = pct.toFixed(1) + "%";
  }

  function updateParallax(st) {
    if (reducedMotion) return;           // keine Parallax-Bewegung bei reduzierter Bewegung
    for (const c of cloudEls) {
      // Verschiebung so begrenzen, dass die Wolke nie unter die Szenen-Unterkante rutscht.
      const shift = Math.max(-c.baseTop, Math.min(st * c.factor, TOTAL_HEIGHT - c.baseTop));
      c.el.style.transform = `translateY(${shift}px)`;
    }
  }

  let ticking = false;
  function onFrame() {
    ticking = false;
    if (twinkleRAF) return;              // Twinkle-Loop rendert bereits jeden Frame
    drawBg();
    updateAltimeter();
    updateParallax(window.scrollY);
    maybeStartTwinkle();                 // beim Scrollen in den Weltraum den Funkel-Loop starten
  }
  function requestFrame() { if (!ticking) { requestAnimationFrame(onFrame); ticking = true; } }

  /* ---------------------------------------------------------------------
     6) DETAIL-MODAL  (kategorisierte Sektionen, barrierefrei)
     --------------------------------------------------------------------- */
  const modal = document.getElementById("detail-modal");
  const modalCard = modal.querySelector(".modal-card");
  const modalBody = modal.querySelector(".modal-body");
  let modalReturnFocus = null;          // Element, das beim Schließen Fokus zurückbekommt

  /* ---------------------------------------------------------------------
     6c) GRÖSSEN-SKALA — "Wenn die Erde eine Murmel wäre…"
     Universelle Vergleichs-Box. Erscheint im Modal als erste Sektion,
     sobald SIZES_M[id] gepflegt ist. Skaliert size_m und altitude_m
     auf den Maßstab Erde=1cm und übersetzt in Alltags-Anker.
     --------------------------------------------------------------------- */
  function _scaleLookup(m, lg, table) {
    const loc = lg === "de" ? "de-DE" : "en-US";
    const num = (x, d = 2) => x.toLocaleString(loc, { maximumFractionDigits: d });
    for (const [maxV, phrase] of table) {
      if (m < maxV) return phrase(m, num, lg);
    }
    return table[table.length - 1][1](m, num, lg);
  }

  // Wörterbuch für GRÖSSEN ("…wäre wie …")
  const SIZE_PHRASES = [
    [1e-9,  (m, num, lg) => lg === "de" ? `unsichtbar klein (~${num(m * 1e9, 2)} Nanometer)` : `invisibly small (~${num(m * 1e9, 2)} nm)`],
    [1e-7,  (m, num, lg) => lg === "de" ? `kleiner als sichtbares Licht (~${num(m * 1e9, 0)} nm)` : `smaller than visible light (~${num(m * 1e9, 0)} nm)`],
    [1e-5,  (m, num, lg) => lg === "de" ? `wie eine Bakterie (~${num(m * 1e6, 1)} µm)` : `like a bacterium (~${num(m * 1e6, 1)} µm)`],
    [1e-4,  (m, num, lg) => lg === "de" ? `wie ein Pollenkorn (~${num(m * 1e6, 0)} µm)` : `like a pollen grain (~${num(m * 1e6, 0)} µm)`],
    [1e-3,  (m, num, lg) => lg === "de" ? `wie eine Hautzelle (~${num(m * 1000, 2)} mm)` : `like a skin cell (~${num(m * 1000, 2)} mm)`],
    [5e-3,  (m, num, lg) => lg === "de" ? `wie ein Sandkorn (${num(m * 1000, 1)} mm)` : `like a grain of sand (${num(m * 1000, 1)} mm)`],
    [0.02,  (m, num, lg) => lg === "de" ? `wie eine Erbse (${num(m * 1000, 0)} mm)` : `like a pea (${num(m * 1000, 0)} mm)`],
    [0.06,  (m, num, lg) => lg === "de" ? `wie ein Tischtennisball (${num(m * 100, 1)} cm)` : `like a ping-pong ball (${num(m * 100, 1)} cm)`],
    [0.15,  (m, num, lg) => lg === "de" ? `wie ein Tennisball (${num(m * 100, 0)} cm)` : `like a tennis ball (${num(m * 100, 0)} cm)`],
    [0.5,   (m, num, lg) => lg === "de" ? `wie ein Fußball (${num(m * 100, 0)} cm)` : `like a football (${num(m * 100, 0)} cm)`],
    [2,     (m, num, lg) => lg === "de" ? `wie ein Beach Ball (${num(m, 2)} m)` : `like a beach ball (${num(m, 2)} m)`],
    [10,    (m, num, lg) => lg === "de" ? `wie ein Auto (${num(m, 1)} m)` : `like a car (${num(m, 1)} m)`],
    [30,    (m, num, lg) => lg === "de" ? `wie ein Reisebus (${num(m, 0)} m)` : `like a bus (${num(m, 0)} m)`],
    [100,   (m, num, lg) => lg === "de" ? `wie ein Hochhaus (${num(m, 0)} m)` : `like a tall building (${num(m, 0)} m)`],
    [500,   (m, num, lg) => lg === "de" ? `wie ein Wolkenkratzer (${num(m, 0)} m)` : `like a skyscraper (${num(m, 0)} m)`],
    [5e3,   (m, num, lg) => lg === "de" ? `wie ein Stadtviertel (${num(m / 1000, 2)} km)` : `like a city block (${num(m / 1000, 2)} km)`],
    [50e3,  (m, num, lg) => lg === "de" ? `wie eine Großstadt (${num(m / 1000, 0)} km)` : `like a large city (${num(m / 1000, 0)} km)`],
    [200e3, (m, num, lg) => lg === "de" ? `wie ein Bundesland (~${num(m / 1000, 0)} km)` : `like a province (~${num(m / 1000, 0)} km)`],
    [700e3, (m, num, lg) => lg === "de" ? `Strecke Berlin → Hamburg (~${num(m / 1000, 0)} km)` : `Berlin to Hamburg (~${num(m / 1000, 0)} km)`],
    [3e6,   (m, num, lg) => lg === "de" ? `Mitteleuropa quer (~${num(m / 1000, 0)} km)` : `across central Europe (~${num(m / 1000, 0)} km)`],
    [15e6,  (m, num, lg) => lg === "de" ? `1/3 Erdumfang (~${num(m / 1000, 0)} km)` : `1/3 Earth's circumference (~${num(m / 1000, 0)} km)`],
    [1e9,   (m, num, lg) => lg === "de" ? `~${num(m / 1e6, 1)} Mio km — Erdoberfläche-Skala gesprengt!` : `~${num(m / 1e6, 1)} million km — beyond Earth scale!`],
    [Infinity, (m, num, lg) => lg === "de" ? `~${num(m / 1e9, 2)} Mrd km — selbst die Skala bricht zusammen` : `~${num(m / 1e9, 2)} billion km — even the scale breaks down`],
  ];

  // Wörterbuch für DISTANZEN ("…wäre … entfernt")
  const DIST_PHRASES = [
    [1e-3,  (m, num, lg) => lg === "de" ? `direkt anliegend (${num(m * 1000, 2)} mm)` : `touching (${num(m * 1000, 2)} mm)`],
    [0.05,  (m, num, lg) => lg === "de" ? `in der Hand (${num(m * 100, 1)} cm)` : `in your hand (${num(m * 100, 1)} cm)`],
    [1,     (m, num, lg) => lg === "de" ? `auf dem Tisch (${num(m * 100, 0)} cm)` : `on the table (${num(m * 100, 0)} cm)`],
    [10,    (m, num, lg) => lg === "de" ? `im Zimmer (${num(m, 1)} m)` : `across the room (${num(m, 1)} m)`],
    [100,   (m, num, lg) => lg === "de" ? `wie ein Fußballfeld weit (${num(m, 0)} m)` : `a football field away (${num(m, 0)} m)`],
    [1500,  (m, num, lg) => lg === "de" ? `wenige Gehminuten weit (${num(m, 0)} m)` : `a short walk away (${num(m, 0)} m)`],
    [15e3,  (m, num, lg) => lg === "de" ? `Großstadt-quer (${num(m / 1000, 1)} km)` : `across a city (${num(m / 1000, 1)} km)`],
    [200e3, (m, num, lg) => lg === "de" ? `Nachbarbundesland (${num(m / 1000, 0)} km)` : `to the next region (${num(m / 1000, 0)} km)`],
    [3e6,   (m, num, lg) => lg === "de" ? `Mitteleuropa weit (${num(m / 1000, 0)} km)` : `across central Europe (${num(m / 1000, 0)} km)`],
    [4e7,   (m, num, lg) => lg === "de" ? `einmal um die Erde (${num(m / 1000, 0)} km)` : `around the Earth (${num(m / 1000, 0)} km)`],
    [Infinity, (m, num, lg) => lg === "de" ? `~${num(m / 1e6, 1)} Mio km — jenseits aller Alltagsentfernungen` : `~${num(m / 1e6, 1)} million km — beyond everyday scale`],
  ];

  function formatScaledLength(m, lg) { return _scaleLookup(m, lg, SIZE_PHRASES); }
  function formatScaledDistance(m, lg) { return _scaleLookup(m, lg, DIST_PHRASES); }

  // Größen-Treppe als SVG-Paar-Sequenz (für ausgewählte Mega-Objekte aus dd_compare.js).
  // Pro Schritt-Paar (prev, curr) ein Mini-SVG mit zwei proportional skalierten Kreisen.
  // Sqrt-Skala für visuell angenehme Größenverhältnisse, Mindestradius 1px gegen "verschwinden".
  function buildCompareSection(it) {
    if (typeof SKY_COMPARE === "undefined") return null;
    const data = SKY_COMPARE[it.id];
    if (!data || !data.steps || data.steps.length < 2) return null;

    const SVG_NS = "http://www.w3.org/2000/svg";
    const W = 380, H = 100;
    const PAD = 14;
    const MAX_R = 36;
    const MIN_R = 1.5;

    const sec = document.createElement("section");
    sec.className = "compare-card";
    const h = document.createElement("h3");
    h.className = "compare-card-title";
    h.textContent = lang === "de" ? "Größen-Treppe" : "Size ladder";
    sec.appendChild(h);

    const loc = lang === "de" ? "de-DE" : "en-US";
    const fmtRatio = (r) => {
      const n = r >= 1000 ? Math.round(r / 100) * 100 : Math.round(r);
      return n.toLocaleString(loc) + (lang === "de" ? "×" : "×");
    };

    for (let i = 0; i < data.steps.length - 1; i++) {
      const a = data.steps[i], b = data.steps[i + 1];
      const ratio = b.size_m / a.size_m;
      // sqrt-Skala: bei ratio=100 sieht prev ~10% von curr; bei ratio=10.000 sieht prev ~1% von curr.
      const bigR = MAX_R;
      const smallR = Math.max(MIN_R, MAX_R / Math.sqrt(ratio));

      const row = document.createElement("div");
      row.className = "compare-step";

      const svg = document.createElementNS(SVG_NS, "svg");
      svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
      svg.setAttribute("role", "img");
      svg.setAttribute("aria-label",
        (lang === "de" ? `${a.label.de} im Vergleich zu ${b.label.de}, ${fmtRatio(ratio)} größer`
                       : `${a.label.en} compared to ${b.label.en}, ${fmtRatio(ratio)} larger`));

      const circA = document.createElementNS(SVG_NS, "circle");
      circA.setAttribute("cx", PAD + MAX_R);
      circA.setAttribute("cy", H / 2 - 6);
      circA.setAttribute("r", smallR);
      circA.setAttribute("fill", "rgba(150, 205, 255, 0.85)");
      circA.setAttribute("stroke", "rgba(255,255,255,0.6)");
      circA.setAttribute("stroke-width", "0.8");
      svg.appendChild(circA);

      const labelA = document.createElementNS(SVG_NS, "text");
      labelA.setAttribute("x", PAD + MAX_R);
      labelA.setAttribute("y", H - 8);
      labelA.setAttribute("text-anchor", "middle");
      labelA.setAttribute("fill", "rgba(220,235,255,0.85)");
      labelA.setAttribute("font-size", "11");
      labelA.textContent = a.label[lang];
      svg.appendChild(labelA);

      // Ratio-Text Mitte
      const ratioTxt = document.createElementNS(SVG_NS, "text");
      ratioTxt.setAttribute("x", W / 2);
      ratioTxt.setAttribute("y", H / 2 - 4);
      ratioTxt.setAttribute("text-anchor", "middle");
      ratioTxt.setAttribute("fill", "var(--accent)");
      ratioTxt.setAttribute("font-size", "14");
      ratioTxt.setAttribute("font-weight", "700");
      ratioTxt.textContent = fmtRatio(ratio);
      svg.appendChild(ratioTxt);

      // Pfeil
      const arrow = document.createElementNS(SVG_NS, "text");
      arrow.setAttribute("x", W / 2);
      arrow.setAttribute("y", H / 2 + 14);
      arrow.setAttribute("text-anchor", "middle");
      arrow.setAttribute("fill", "rgba(180,210,255,0.55)");
      arrow.setAttribute("font-size", "12");
      arrow.textContent = "→";
      svg.appendChild(arrow);

      const circB = document.createElementNS(SVG_NS, "circle");
      circB.setAttribute("cx", W - PAD - MAX_R);
      circB.setAttribute("cy", H / 2 - 6);
      circB.setAttribute("r", bigR);
      circB.setAttribute("fill", b.highlight ? "rgba(255, 180, 90, 0.85)" : "rgba(150, 205, 255, 0.85)");
      circB.setAttribute("stroke", "rgba(255,255,255,0.6)");
      circB.setAttribute("stroke-width", "0.8");
      svg.appendChild(circB);

      const labelB = document.createElementNS(SVG_NS, "text");
      labelB.setAttribute("x", W - PAD - MAX_R);
      labelB.setAttribute("y", H - 8);
      labelB.setAttribute("text-anchor", "middle");
      labelB.setAttribute("fill", b.highlight ? "rgba(255,210,140,1)" : "rgba(220,235,255,0.95)");
      labelB.setAttribute("font-size", "11");
      labelB.setAttribute("font-weight", b.highlight ? "700" : "400");
      labelB.textContent = b.label[lang];
      svg.appendChild(labelB);

      row.appendChild(svg);
      sec.appendChild(row);
    }
    return sec;
  }

  function buildScaleSection(it) {
    const data = (typeof SIZES_M !== "undefined") ? SIZES_M[it.id] : null;
    if (!data) return null;

    const SCALE = 1e-2 / EARTH_DIAMETER_M;             // 1 cm pro Erddurchmesser
    const scaledSize = data.size_m * SCALE;
    const scaledDist = it.altitude_m * SCALE;

    const sec = document.createElement("section");
    sec.className = "scale-card";

    const h = document.createElement("h3");
    h.className = "scale-card-title";
    h.textContent = lang === "de"
      ? "Wenn die Erde so groß wäre wie eine Murmel (1 cm) …"
      : "If Earth were the size of a marble (1 cm) …";
    sec.appendChild(h);

    const addRow = (labelTxt, valueTxt, extraCls) => {
      const row = document.createElement("div");
      row.className = "scale-row" + (extraCls ? " " + extraCls : "");
      const lbl = document.createElement("span");
      lbl.className = "scale-row-label";
      lbl.textContent = labelTxt;
      const val = document.createElement("span");
      val.className = "scale-row-value";
      val.textContent = valueTxt;
      row.append(lbl, val);
      sec.appendChild(row);
    };

    addRow(data.note[lang], formatScaledLength(scaledSize, lang));

    if (scaledDist > 0 && scaledDist < 5e7) {
      addRow(lang === "de" ? "Distanz von uns" : "Distance from us", formatScaledDistance(scaledDist, lang));
    } else if (scaledDist >= 5e7) {
      const note = document.createElement("div");
      note.className = "scale-row--note";
      note.textContent = lang === "de"
        ? "Die echte Distanz sprengt die Murmel-Skala vollständig."
        : "The actual distance breaks the marble scale completely.";
      sec.appendChild(note);
    }
    return sec;
  }

  // Baut den ausführlichen Rumpf: Beschreibungs-Absätze + kategorisierte Key-Fact-Gruppen.
  // Fällt sauber auf `fact` zurück, wenn kein SKY_DETAILS-Eintrag existiert.
  function renderModalBody(it) {
    const det = (typeof SKY_DETAILS !== "undefined") ? SKY_DETAILS[it.id] : null;
    const frag = document.createDocumentFragment();

    // GRÖSSEN-SKALA + ggf. GRÖSSEN-TREPPE als erste Blöcke (wenn vorhanden)
    const scaleBox = buildScaleSection(it);
    if (scaleBox) frag.appendChild(scaleBox);
    const compareBox = buildCompareSection(it);
    if (compareBox) frag.appendChild(compareBox);

    const paragraphs = det && det.desc && det.desc[lang] && det.desc[lang].length
      ? det.desc[lang]
      : [it.fact[lang]];                // Rückfall: der bestehende Kurzfakt
    for (const p of paragraphs) {
      const para = document.createElement("p");
      para.className = "modal-para";
      para.textContent = p;
      frag.appendChild(para);
    }

    if (det && det.groups) {
      for (const g of det.groups) {
        const sec = document.createElement("section");
        sec.className = "modal-group";
        const h = document.createElement("h3");
        h.className = "modal-group-title";
        h.textContent = g.title[lang];
        sec.appendChild(h);
        const dl = document.createElement("dl");
        dl.className = "modal-rows";
        for (const r of g.rows) {
          const dt = document.createElement("dt");
          dt.textContent = r.label[lang];
          const dd = document.createElement("dd");
          dd.textContent = r.value[lang];
          dl.appendChild(dt);
          dl.appendChild(dd);
        }
        sec.appendChild(dl);
        frag.appendChild(sec);
      }
    }
    modalBody.replaceChildren(frag);
  }

  function openModal(it) {
    if (!it) return;
    modalReturnFocus = document.activeElement;
    modal.querySelector(".modal-emoji").textContent = it.emoji;
    const yr = SPACE_YEARS[it.id] ? `  ·  ${SPACE_YEARS[it.id]}` : "";
    modal.querySelector(".modal-name").textContent = it.name[lang] + yr;
    modal.querySelector(".modal-sci").textContent = it.sci || "";
    modal.querySelector(".modal-alt").textContent = formatAlt(it.altitude_m);
    renderModalBody(it);
    const note = NOTE_LABELS[it.note];
    const noteTxt = note ? ` · ${note[lang]}` : "";
    const credit = it.credit ? `${it.credit}${it.license ? " (" + it.license + ")" : ""}` : "";
    const srcLabel = lang === "de" ? "Quelle" : "Source";
    // Meta sicher per DOM-API aufbauen (kein innerHTML mit interpolierter URL).
    const meta = modal.querySelector(".modal-meta");
    meta.textContent = `${credit}${noteTxt}`;
    if (it.source) {
      meta.appendChild(document.createTextNode(" · "));
      const a = document.createElement("a");
      a.href = it.source;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = srcLabel;
      meta.appendChild(a);
    }
    modal.hidden = false;
    sceneEl.setAttribute("aria-hidden", "true");
    modalBody.scrollTop = 0;
    modalCard.scrollTop = 0;
    modal.querySelector(".modal-close").focus();
  }

  function closeModal() {
    if (modal.hidden) return;
    modal.hidden = true;
    sceneEl.removeAttribute("aria-hidden");
    if (modalReturnFocus && typeof modalReturnFocus.focus === "function") modalReturnFocus.focus();
    modalReturnFocus = null;
  }

  // Fokusfalle: Tab zykliert innerhalb der Modal-Card.
  function trapFocus(e) {
    if (modal.hidden || e.key !== "Tab") return;
    const focusables = modalCard.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (!focusables.length) return;
    const first = focusables[0], last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  modal.querySelector(".modal-close").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
    else trapFocus(e);
  });

  /* ---------------------------------------------------------------------
     6b) HOVER-POPUP + EVENT-DELEGATION  (ein Popup für alle 155 Items)
     --------------------------------------------------------------------- */
  const hoverPopup = document.getElementById("hover-popup");
  const supportsHover = window.matchMedia("(hover: hover)").matches;
  let hoverItemEl = null;

  function hidePopup() { hoverPopup.hidden = true; hoverItemEl = null; }

  function showPopup(el, it) {
    const yr = SPACE_YEARS[it.id] ? ` · ${SPACE_YEARS[it.id]}` : "";
    const frag = document.createDocumentFragment();
    const name = document.createElement("div");
    name.className = "hp-name";
    name.textContent = it.name[lang] + yr;
    const alt = document.createElement("div");
    alt.className = "hp-alt";
    alt.textContent = formatAlt(it.altitude_m);
    const fact = document.createElement("div");
    fact.className = "hp-fact";
    fact.textContent = it.fact[lang];
    frag.append(name, alt, fact);
    hoverPopup.replaceChildren(frag);
    hoverPopup.hidden = false;
    positionPopup(el);
  }

  function positionPopup(el) {
    const r = el.getBoundingClientRect();
    const pw = hoverPopup.offsetWidth, ph = hoverPopup.offsetHeight;
    let left = r.left + r.width / 2 - pw / 2;
    left = Math.max(8, Math.min(left, window.innerWidth - pw - 8));
    let top = r.top - ph - 10;                 // bevorzugt oberhalb des Items
    if (top < 8) top = r.bottom + 10;          // sonst darunter
    hoverPopup.style.left = left + "px";
    hoverPopup.style.top = top + "px";
  }

  function itemFromEvent(e) {
    const el = e.target.closest && e.target.closest(".sky-item");
    if (!el) return null;
    const it = ITEM_BY_ID.get(el.dataset.id);
    return it ? { el, it } : null;
  }

  function setupInteraction() {
    objLayer.addEventListener("click", (e) => {
      const hit = itemFromEvent(e);
      if (hit) { hidePopup(); openModal(hit.it); }
    });
    objLayer.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " " && e.key !== "Spacebar") return;
      const hit = itemFromEvent(e);
      if (hit) { e.preventDefault(); hidePopup(); openModal(hit.it); }
    });

    if (!supportsHover) return;                // Touch: kein Popup, Tap öffnet direkt das Modal
    objLayer.addEventListener("mouseover", (e) => {
      const hit = itemFromEvent(e);
      if (hit && hit.el !== hoverItemEl) { hoverItemEl = hit.el; showPopup(hit.el, hit.it); }
    });
    objLayer.addEventListener("mouseout", (e) => {
      if (hoverItemEl && (!e.relatedTarget || !hoverItemEl.contains(e.relatedTarget))) hidePopup();
    });
    objLayer.addEventListener("focusin", (e) => {     // Keyboard-Fokus zeigt das Popup ebenfalls
      const hit = itemFromEvent(e);
      if (hit) { hoverItemEl = hit.el; showPopup(hit.el, hit.it); }
    });
    objLayer.addEventListener("focusout", hidePopup);
    window.addEventListener("scroll", hidePopup, { passive: true });   // Popup ist fixed → bei Scroll ausblenden
  }

  /* ---------------------------------------------------------------------
     7) TELEPORT-MENÜ
     --------------------------------------------------------------------- */
  const teleportList = document.getElementById("teleport-list");
  function buildTeleport() {
    const frag = document.createDocumentFragment();
    for (const t of TELEPORT_TARGETS) {
      const li = document.createElement("li");
      const btn = document.createElement("button");       // echtes Button = nativ tastaturbedienbar
      btn.type = "button";
      btn.textContent = t.label[lang];
      btn.addEventListener("click", () => {
        const targetTop = altToY(t.alt);                 // DOM-top des Ziels
        const y = Math.max(0, targetTop - window.innerHeight / 2);
        document.getElementById("teleport-menu").removeAttribute("open");
        window.scrollTo({ top: y, behavior: prefersReduced() ? "auto" : "smooth" });
      });
      li.appendChild(btn);
      frag.appendChild(li);
    }
    teleportList.replaceChildren(frag);
  }
  const prefersReduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------------------
     7b) OBJEKT-NAVIGATION — Pfeil-Buttons + Tastatur
     Springt zum nächsthöheren / nächsttieferen Item in SKY_DATA, bezogen auf
     die aktuelle Viewport-Mitte. Komplementär zum Teleport (Akt-Sprung).
     --------------------------------------------------------------------- */
  const SORTED_BY_ALT = SKY_DATA.slice().sort((a, b) => a.altitude_m - b.altitude_m);
  const navUpBtn   = document.getElementById("next-object");   // ↑ = höher
  const navDownBtn = document.getElementById("prev-object");   // ↓ = tiefer

  function currentScrollAlt() {
    const centerY = window.scrollY + window.innerHeight / 2;
    const groundPx = TOTAL_HEIGHT - centerY;
    return groundPxToAlt(Math.max(0, groundPx));
  }

  function jumpObject(dir) {                       // +1 = höher, -1 = tiefer
    const alt = currentScrollAlt();
    const EPS = Math.max(1, alt * 1e-4);           // robust gegen Rundungsfehler in log-skala
    let target = null;
    if (dir > 0) {
      target = SORTED_BY_ALT.find((it) => it.altitude_m > alt + EPS);
    } else {
      for (let i = SORTED_BY_ALT.length - 1; i >= 0; i--) {
        if (SORTED_BY_ALT[i].altitude_m < alt - EPS) { target = SORTED_BY_ALT[i]; break; }
      }
    }
    if (!target) return;
    const y = Math.max(0, altToY(target.altitude_m) - window.innerHeight / 2);
    window.scrollTo({ top: y, behavior: prefersReduced() ? "auto" : "smooth" });
  }

  function updateNavButtons() {
    const alt = currentScrollAlt();
    const EPS = Math.max(1, alt * 1e-4);
    navUpBtn.disabled   = !SORTED_BY_ALT.some((it) => it.altitude_m > alt + EPS);
    navDownBtn.disabled = !SORTED_BY_ALT.some((it) => it.altitude_m < alt - EPS);
  }

  navUpBtn.addEventListener("click", () => jumpObject(+1));
  navDownBtn.addEventListener("click", () => jumpObject(-1));

  document.addEventListener("keydown", (e) => {
    if (!modal.hidden) return;                     // Modal offen -> dessen Tastatur-Logik gilt
    const ae = document.activeElement;
    if (ae && /^(INPUT|TEXTAREA|SELECT)$/.test(ae.tagName)) return;
    if (e.key === "ArrowUp")   { e.preventDefault(); jumpObject(+1); }
    if (e.key === "ArrowDown") { e.preventDefault(); jumpObject(-1); }
  });

  let navTickQueued = false;
  window.addEventListener("scroll", () => {
    if (navTickQueued) return;
    navTickQueued = true;
    requestAnimationFrame(() => { navTickQueued = false; updateNavButtons(); });
  }, { passive: true });
  updateNavButtons();

  /* ---------------------------------------------------------------------
     8) SPRACHE
     --------------------------------------------------------------------- */
  function setLang(newLang) {
    if (newLang === lang) return;
    lang = newLang;
    const keepGpx = TOTAL_HEIGHT - window.scrollY;       // Scrollposition (Boden-px) merken
    document.querySelectorAll("#lang-toggle button").forEach((b) => {
      const on = b.dataset.lang === lang;
      b.classList.toggle("active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    applyStaticI18n();
    buildScene();
    buildAtmosphere();
    buildMilestones();
    buildTicks();
    buildGapFacts();
    buildSections();
    buildKarman();
    buildFinale();
    buildTeleport();
    const h = document.documentElement; const wasReady = h.classList.contains("ready");
    h.classList.remove("ready");                          // Smooth aus, sonst springt es
    window.scrollTo(0, TOTAL_HEIGHT - keepGpx);           // Position unverändert lassen
    if (wasReady) requestAnimationFrame(() => h.classList.add("ready"));
    requestFrame();
  }
  document.querySelectorAll("#lang-toggle button").forEach((b) =>
    b.addEventListener("click", () => setLang(b.dataset.lang)));

  /* ---------------------------------------------------------------------
     9) INIT
     --------------------------------------------------------------------- */
  // Sanfter Aufstieg mit ease-in-out über eine feste Dauer (rAF-getweent).
  function animateAscent(targetY, duration) {
    const startY = window.scrollY;
    const dist = targetY - startY;
    if (Math.abs(dist) < 2) { requestFrame(); return; }
    const t0 = performance.now();
    const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    function step(now) {
      const p = Math.min(1, (now - t0) / duration);
      // behavior:'auto' überschreibt das CSS scroll-behavior:smooth der .ready-Phase,
      // sonst würde jeder Frame eine eigene Smooth-Animation auslösen (Ruckeln).
      window.scrollTo({ top: startY + dist * ease(p), behavior: "auto" });
      requestFrame();
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function init() {
    sceneEl.style.height = TOTAL_HEIGHT + "px";
    resize();
    applyStaticI18n();
    buildStars();
    buildScene();
    buildAtmosphere();
    buildMilestones();
    buildTicks();
    buildGapFacts();
    buildSections();
    buildKarman();
    buildFinale();
    buildClouds();
    buildTeleport();
    setupInteraction();                 // Event-Delegation + Hover-Popup (einmalig)

    // Start am Boden (ganz unten), bevor irgendetwas sichtbar wird.
    window.scrollTo(0, document.body.scrollHeight);
    drawBg();
    updateAltimeter();

    requestAnimationFrame(() => {
      document.documentElement.classList.add("ready");
      window.addEventListener("scroll", requestFrame, { passive: true });
      window.addEventListener("resize", () => { resize(); requestFrame(); });
    });

    // Start-Overlay: "Abheben" löst einen erlebten Aufstieg aus (~1,5 s),
    // der die inverse Scroll-Richtung durch Bewegung lehrt.
    const overlay = document.getElementById("start-overlay");
    const ASCENT_TARGET = Math.max(0, altToY(50) - window.innerHeight / 2);   // Haussperling (50 m)
    const hideOverlay = () => {
      overlay.classList.add("hide");
      document.body.classList.remove("is-loading");
      window.scrollTo(0, document.body.scrollHeight);     // sicher am Boden starten
      if (prefersReduced()) {
        window.scrollTo(0, ASCENT_TARGET);                // direkter Sprung ohne Animation
        requestFrame();
        return;
      }
      animateAscent(ASCENT_TARGET, 1500);
    };
    document.getElementById("start-btn").addEventListener("click", hideOverlay);

    // Scroll-Hinweis nach erstem Scrollen ausblenden
    const hint = document.getElementById("scroll-hint");
    window.addEventListener("scroll", function once() {
      hint.style.opacity = "0";
      window.removeEventListener("scroll", once);
    }, { passive: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
