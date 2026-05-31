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
    title:      { de: "In den Himmel", en: "Into the Sky" },
    subtitle:   { de: "Vom Boden bis ins Weltall — fliegende Tiere, Flugzeuge und Raumfahrt auf ihrer wahren Höhe.",
                  en: "From the ground to outer space — flying animals, aircraft and spacecraft at their true altitude." },
    start:      { de: "Abheben ↑", en: "Lift off ↑" },
    inspired:   { de: "Inspiriert von neal.fun/deep-sea", en: "Inspired by neal.fun/deep-sea" },
    jump:       { de: "Springe zu …", en: "Jump to …" },
    scrollHint: { de: "↑ Scrolle nach oben, um aufzusteigen", en: "↑ Scroll up to ascend" },
    tapHint:    { de: "Tipp: Objekt antippen oder anklicken für Details.", en: "Tip: tap or click any object for details." },
    ground:     { de: "Meereshöhe · 0 m", en: "Sea level · 0 m" },
  };

  function applyStaticI18n() {
    document.documentElement.lang = lang;
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

      const imgTag = it.img
        ? `<img src="${it.img}" alt="${it.name[lang]}" loading="lazy" decoding="async"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">`
        : "";
      el.innerHTML = `
        ${imgTag}
        <div class="placeholder" style="display:${it.img ? "none" : "flex"}">${it.emoji}</div>
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
    { alt: 100000, label: { de: "Grenze zum Weltraum", en: "Edge of space" } },
    { alt: 384400000, label: { de: "Mondbahn", en: "Moon's orbit" } },
    { alt: 149600000000, label: { de: "Die Sonne (1 AE)", en: "The Sun (1 AU)" } },
    { alt: 40000000000000000, label: { de: "Nächster Stern", en: "Nearest star" } },
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

  // Große Akt-Banner an den Übergängen (Eintritt = untere Grenze `from`).
  function buildSections() {
    const frag = document.createDocumentFragment();
    for (const s of SECTIONS) {
      if (s.from <= 0) continue;                 // "Atmosphäre" am Boden braucht kein Banner
      const el = document.createElement("div");
      el.className = "section-banner";
      el.style.top = altToY(s.from) + "px";
      el.innerHTML = `<span class="section-title">${s.name[lang]}</span>`;
      frag.appendChild(el);
    }
    secLayer.replaceChildren(frag);
  }

  // Name des aktuellen Akts (für den Höhenmesser).
  function currentSectionName(alt) {
    for (const s of SECTIONS) if (alt >= s.from && alt < s.to) return s.name[lang];
    return SECTIONS[SECTIONS.length - 1].name[lang];
  }

  const CLOUDS = [
    { alt: 700,  emoji: "☁️", x: 18, factor: 0.12 },
    { alt: 1400, emoji: "☁️", x: 70, factor: 0.18 },
    { alt: 2600, emoji: "🌥️", x: 40, factor: 0.10 },
    { alt: 5500, emoji: "☁️", x: 82, factor: 0.20 },
    { alt: 9000, emoji: "🌫️", x: 25, factor: 0.14 },
  ];
  let cloudEls = [];
  function buildClouds() {
    const frag = document.createDocumentFragment();
    cloudEls = CLOUDS.map((c) => {
      const el = document.createElement("div");
      el.className = "cloud";
      el.textContent = c.emoji;
      el.style.top = altToY(c.alt) + "px";
      el.style.left = c.x + "%";
      el.dataset.factor = c.factor;
      frag.appendChild(el);
      return el;
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
    vw = canvas.width = window.innerWidth;
    vh = canvas.height = window.innerHeight;
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

  // Festes Sternenfeld im DOM-Koordinatenraum (oberer/Weltraum-Bereich).
  // Dezente Farbtöne (überwiegend weiß, einige bläulich/gelblich) für Tiefe.
  const STAR_TINTS = ["#ffffff", "#ffffff", "#ffffff", "#dfe9ff", "#fff1d6", "#ffe3c8"];
  const STARS = [];
  function buildStars() {
    STARS.length = 0;
    const maxY = SPACE_PX + GROUND_PX * 0.35;   // bis knapp in die obere Atmosphäre
    for (let i = 0; i < 560; i++) {
      const ydom = Math.random() * maxY;
      const base = Math.random() * 0.6 + 0.4;
      // Alpha hängt nur an der (festen) Höhe des Sterns -> einmalig vorberechnen,
      // statt pro Frame groundPxToAlt()+starAlpha() für jeden Stern aufzurufen.
      const a = starAlpha(groundPxToAlt(TOTAL_HEIGHT - ydom)) * base;
      STARS.push({
        x: Math.random(),
        ydom,
        r: Math.random() * 1.4 + 0.3,
        a,
        c: STAR_TINTS[(Math.random() * STAR_TINTS.length) | 0],
      });
    }
  }

  function starAlpha(alt) { return clamp01((alt - 30000) / (120000 - 30000)); }

  function drawBg() {
    const st = window.scrollY;
    const altTop = groundPxToAlt(TOTAL_HEIGHT - st);
    const altBottom = groundPxToAlt(TOTAL_HEIGHT - (st + vh));
    const g = ctx.createLinearGradient(0, 0, 0, vh);
    g.addColorStop(0, rgb(colorAt(altTop)));
    g.addColorStop(1, rgb(colorAt(altBottom)));
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, vw, vh);

    // Sterne (Alpha ist vorberechnet, s. buildStars)
    for (const s of STARS) {
      if (s.a <= 0.01) continue;
      const screenY = s.ydom - st;
      if (screenY < -2 || screenY > vh + 2) continue;
      ctx.globalAlpha = s.a;
      ctx.fillStyle = s.c;
      ctx.beginPath();
      ctx.arc(s.x * vw, screenY, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

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
    if (prefersReduced()) return;        // keine Parallax-Bewegung bei reduzierter Bewegung
    for (const el of cloudEls) {
      const f = parseFloat(el.dataset.factor);
      el.style.transform = `translateY(${st * f}px)`;
    }
  }

  let ticking = false;
  function onFrame() {
    drawBg();
    updateAltimeter();
    updateParallax(window.scrollY);
    ticking = false;
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
    buildSections();
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
  function init() {
    sceneEl.style.height = TOTAL_HEIGHT + "px";
    resize();
    applyStaticI18n();
    buildStars();
    buildScene();
    buildAtmosphere();
    buildMilestones();
    buildSections();
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

    // Start-Overlay
    const overlay = document.getElementById("start-overlay");
    const hideOverlay = () => {
      overlay.classList.add("hide");
      document.body.classList.remove("is-loading");
      window.scrollTo(0, document.body.scrollHeight);     // sicher am Boden bleiben
      requestFrame();
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
