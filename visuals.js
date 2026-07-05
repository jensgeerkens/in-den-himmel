/* ============================================================================
   visuals.js — "In den Himmel"
   Rein praesentative SVG-Bildsprache fuer die 45 Objekte ohne Foto.
   Keine wissenschaftlichen Daten. Vanilla, laeuft unter file://.
   Exportiert skyVisual(id, cat) -> SVG-String oder null (dann greift Foto/Emoji).
   Alle Icons: viewBox 0 0 100 100, transparenter Hintergrund, helle Toene fuer
   Sichtbarkeit gegen den dunklen Weltraum. Kein Kreis-Chip-Rahmen.
   ========================================================================== */
(function () {
  "use strict";

  /* --- Planeten-/Sternkugel mit radialem Licht --------------------------- */
  function sphere(id, base, light, dark, opts) {
    opts = opts || {};
    const r = opts.r || 42;
    const vb = opts.vb || "0 0 100 100";
    const cx = opts.cx || 50;
    return `<svg class="sv" viewBox="${vb}" aria-hidden="true">
      <defs><radialGradient id="g_${id}" cx="36%" cy="31%" r="74%">
        <stop offset="0%" stop-color="${light}"/>
        <stop offset="50%" stop-color="${base}"/>
        <stop offset="100%" stop-color="${dark}"/></radialGradient>
        <clipPath id="c_${id}"><circle cx="${cx}" cy="50" r="${r}"/></clipPath></defs>
      ${opts.behind || ""}
      <circle cx="${cx}" cy="50" r="${r}" fill="url(#g_${id})"/>
      ${opts.inner ? `<g clip-path="url(#c_${id})">${opts.inner}</g>` : ""}
      <circle cx="${cx}" cy="50" r="${r}" fill="none" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
      ${opts.front || ""}
    </svg>`;
  }

  const PLANETS = {
    merkur:  ["#8f8378", "#c9bcac", "#3c372f"],
    venus:   ["#d9bd78", "#f3e3af", "#786230"],
    mars:    ["#c0562a", "#e79b6b", "#5f210b"],
    uranus:  ["#9fdbe0", "#d6f3f5", "#48939b"],
    neptun:  ["#4063c4", "#84a2ea", "#1c3474"],
    pluto:   ["#c3ac92", "#e6d6bd", "#685642"],
  };

  const bands = (col1, col2) => `
    <ellipse cx="50" cy="34" rx="48" ry="3.5" fill="${col1}" opacity="0.5"/>
    <ellipse cx="50" cy="44" rx="48" ry="5"   fill="${col2}" opacity="0.45"/>
    <ellipse cx="50" cy="56" rx="48" ry="4.5" fill="${col1}" opacity="0.4"/>
    <ellipse cx="50" cy="65" rx="48" ry="3"   fill="${col2}" opacity="0.4"/>`;

  const craters = `
    <circle cx="38" cy="40" r="6"  fill="rgba(70,70,80,0.35)"/>
    <circle cx="60" cy="58" r="8"  fill="rgba(70,70,80,0.3)"/>
    <circle cx="55" cy="34" r="3.5" fill="rgba(70,70,80,0.3)"/>
    <circle cx="44" cy="62" r="4"  fill="rgba(70,70,80,0.28)"/>
    <circle cx="66" cy="42" r="3"  fill="rgba(70,70,80,0.28)"/>`;

  function sun() {
    return `<svg class="sv" viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        <radialGradient id="sun_glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="rgba(255,214,110,0.55)"/>
          <stop offset="55%" stop-color="rgba(255,160,50,0.28)"/>
          <stop offset="100%" stop-color="rgba(255,140,30,0)"/></radialGradient>
        <radialGradient id="sun_core" cx="42%" cy="38%" r="65%">
          <stop offset="0%" stop-color="#fff7d2"/>
          <stop offset="55%" stop-color="#ffd257"/>
          <stop offset="100%" stop-color="#ff9422"/></radialGradient>
      </defs>
      <circle cx="50" cy="50" r="49" fill="url(#sun_glow)"/>
      <circle cx="50" cy="50" r="31" fill="url(#sun_core)"/>
      <circle cx="50" cy="50" r="31" fill="none" stroke="rgba(255,240,180,0.5)" stroke-width="1"/>
    </svg>`;
  }

  function star(id, base, light, dark) {
    return `<svg class="sv" viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        <radialGradient id="stg_${id}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${light}"/>
          <stop offset="35%" stop-color="${base}"/>
          <stop offset="100%" stop-color="rgba(0,0,0,0)"/></radialGradient>
      </defs>
      <g stroke="${light}" stroke-width="1.4" opacity="0.7">
        <line x1="50" y1="8" x2="50" y2="92"/>
        <line x1="8" y1="50" x2="92" y2="50"/>
      </g>
      <circle cx="50" cy="50" r="42" fill="url(#stg_${id})"/>
      <circle cx="50" cy="50" r="15" fill="${light}"/>
    </svg>`;
  }

  function galaxy(id, coreCol, armCol) {
    return `<svg class="sv" viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        <radialGradient id="gx_${id}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fff5e8"/>
          <stop offset="30%" stop-color="${coreCol}"/>
          <stop offset="100%" stop-color="rgba(0,0,0,0)"/></radialGradient>
      </defs>
      <g transform="rotate(-24 50 50)">
        <ellipse cx="50" cy="50" rx="46" ry="16" fill="${armCol}" opacity="0.28"/>
        <path d="M50,50 C68,44 78,54 74,66 C70,76 56,74 52,66" fill="none" stroke="${armCol}" stroke-width="3" opacity="0.55" stroke-linecap="round"/>
        <path d="M50,50 C32,56 22,46 26,34 C30,24 44,26 48,34" fill="none" stroke="${armCol}" stroke-width="3" opacity="0.55" stroke-linecap="round"/>
        <ellipse cx="50" cy="50" rx="30" ry="11" fill="url(#gx_${id})"/>
        <circle cx="50" cy="50" r="7" fill="#fff6ea"/>
      </g>
    </svg>`;
  }

  function universe() {
    // Beobachtbares Universum: dunkle Kugel mit kosmischem Netz aus Knoten + Filamenten.
    let web = "";
    const pts = [[30,28],[52,20],[72,34],[64,56],[78,68],[46,66],[26,54],[38,44],[58,40],[44,80],[70,80]];
    for (let i = 0; i < pts.length; i++) {
      const [x, y] = pts[i];
      const near = pts[(i + 3) % pts.length];
      web += `<line x1="${x}" y1="${y}" x2="${near[0]}" y2="${near[1]}" stroke="rgba(150,180,255,0.28)" stroke-width="0.8"/>`;
    }
    for (const [x, y] of pts) web += `<circle cx="${x}" cy="${y}" r="1.9" fill="rgba(200,220,255,0.9)"/>`;
    return `<svg class="sv" viewBox="0 0 100 100" aria-hidden="true">
      <defs><radialGradient id="uni_g" cx="50%" cy="45%" r="55%">
        <stop offset="0%" stop-color="#141b3e"/>
        <stop offset="70%" stop-color="#080c22"/>
        <stop offset="100%" stop-color="rgba(4,6,16,0)"/></radialGradient>
        <clipPath id="uni_c"><circle cx="50" cy="50" r="44"/></clipPath></defs>
      <circle cx="50" cy="50" r="46" fill="url(#uni_g)"/>
      <g clip-path="url(#uni_c)">${web}</g>
      <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(140,170,255,0.25)" stroke-width="1"/>
    </svg>`;
  }

  function cosmicWeb() {
    // Grossraeumige Struktur / Great Wall: Filament-Knoten.
    let s = "";
    const nodes = [[20,64],[34,50],[30,74],[48,58],[52,38],[66,50],[62,72],[78,44],[80,66]];
    for (let i = 0; i < nodes.length - 1; i++)
      s += `<line x1="${nodes[i][0]}" y1="${nodes[i][1]}" x2="${nodes[i+1][0]}" y2="${nodes[i+1][1]}" stroke="rgba(170,150,255,0.4)" stroke-width="1"/>`;
    for (const [x, y] of nodes) {
      s += `<circle cx="${x}" cy="${y}" r="3.4" fill="rgba(200,180,255,0.25)"/>`;
      s += `<circle cx="${x}" cy="${y}" r="1.5" fill="rgba(225,215,255,0.95)"/>`;
    }
    return `<svg class="sv" viewBox="0 0 100 100" aria-hidden="true">${s}</svg>`;
  }

  function gwMerger() {
    return `<svg class="sv" viewBox="0 0 100 100" aria-hidden="true">
      <g fill="none" stroke="rgba(140,180,255,0.4)">
        <ellipse cx="50" cy="50" rx="44" ry="20" stroke-width="1.2"/>
        <ellipse cx="50" cy="50" rx="32" ry="14" stroke-width="1"/>
        <ellipse cx="50" cy="50" rx="20" ry="9" stroke-width="0.8"/>
      </g>
      <g>
        <circle cx="38" cy="50" r="10" fill="#05060c" stroke="rgba(255,170,70,0.8)" stroke-width="1.5"/>
        <circle cx="62" cy="50" r="9" fill="#05060c" stroke="rgba(255,150,90,0.8)" stroke-width="1.5"/>
      </g>
    </svg>`;
  }

  /* --- Technik-Icons (strichbasiert, helle Metall-/Folientoene) ---------- */
  const MET = "#cdd6e2", MET_D = "#8a97ab", PANEL = "#2a4a8a", CELL = "#5fb0e0", GOLD = "#d9b45a";

  function iconISS() {
    return `<svg class="sv" viewBox="0 0 100 100" aria-hidden="true">
      <g stroke="${MET_D}" stroke-width="1">
        <line x1="10" y1="50" x2="90" y2="50" stroke="${MET}" stroke-width="3"/>
        <g fill="${PANEL}" stroke="${CELL}" stroke-width="0.6">
          <rect x="8" y="34" width="20" height="12" rx="1"/><rect x="8" y="54" width="20" height="12" rx="1"/>
          <rect x="72" y="34" width="20" height="12" rx="1"/><rect x="72" y="54" width="20" height="12" rx="1"/>
        </g>
        <g fill="${MET}">
          <rect x="42" y="43" width="16" height="14" rx="3"/>
          <rect x="38" y="46" width="24" height="8" rx="2"/>
        </g>
        <line x1="50" y1="43" x2="50" y2="30" stroke="${MET}" stroke-width="2"/>
        <circle cx="50" cy="28" r="2.5" fill="${MET}"/>
      </g>
    </svg>`;
  }

  function iconStation() {  // Mir: modularer Cluster
    return `<svg class="sv" viewBox="0 0 100 100" aria-hidden="true">
      <g stroke="${MET_D}" stroke-width="0.8">
        <g fill="${PANEL}" stroke="${CELL}" stroke-width="0.6">
          <rect x="6" y="44" width="22" height="10" rx="1"/><rect x="72" y="44" width="22" height="10" rx="1"/>
          <rect x="45" y="8" width="10" height="20" rx="1"/>
        </g>
        <g fill="${MET}">
          <rect x="40" y="42" width="20" height="14" rx="3"/>
          <rect x="28" y="45" width="18" height="8" rx="2"/>
          <rect x="54" y="45" width="18" height="8" rx="2"/>
          <rect x="45" y="30" width="10" height="16" rx="2"/>
          <rect x="45" y="54" width="10" height="16" rx="2"/>
        </g>
      </g>
    </svg>`;
  }

  function iconProbe(dishCol) {  // Voyager & Co.: grosse Parabolschuessel + Bus + Ausleger
    dishCol = dishCol || "#e9eef5";
    return `<svg class="sv" viewBox="0 0 100 100" aria-hidden="true">
      <g stroke="${MET_D}" stroke-width="1">
        <line x1="50" y1="52" x2="10" y2="82" stroke="${MET}" stroke-width="2"/>
        <line x1="52" y1="50" x2="90" y2="24" stroke="${MET}" stroke-width="1.5"/>
        <circle cx="90" cy="24" r="2" fill="${MET}"/>
        <ellipse cx="50" cy="34" rx="30" ry="30" fill="${dishCol}" stroke="${MET_D}" stroke-width="1.2" opacity="0.95"/>
        <ellipse cx="50" cy="34" rx="20" ry="20" fill="none" stroke="${MET_D}" stroke-width="0.6" opacity="0.6"/>
        <line x1="50" y1="34" x2="50" y2="20" stroke="${MET_D}" stroke-width="1"/>
        <circle cx="50" cy="20" r="2.5" fill="${MET}"/>
        <rect x="42" y="56" width="16" height="14" rx="2" fill="${GOLD}"/>
      </g>
    </svg>`;
  }

  function iconSatellite() {  // generischer Nutzsatellit (GPS/GEO/Venera)
    return `<svg class="sv" viewBox="0 0 100 100" aria-hidden="true">
      <g stroke="${MET_D}" stroke-width="0.8">
        <g fill="${PANEL}" stroke="${CELL}" stroke-width="0.6">
          <rect x="6" y="40" width="30" height="20" rx="1"/><rect x="64" y="40" width="30" height="20" rx="1"/>
        </g>
        <line x1="6" y1="50" x2="94" y2="50" stroke="${MET}" stroke-width="1.5"/>
        <rect x="38" y="38" width="24" height="24" rx="3" fill="${GOLD}"/>
        <ellipse cx="50" cy="28" rx="9" ry="4" fill="${MET}"/>
        <line x1="50" y1="32" x2="50" y2="38" stroke="${MET}" stroke-width="1.5"/>
      </g>
    </svg>`;
  }

  function iconSputnik() {
    return `<svg class="sv" viewBox="0 0 100 100" aria-hidden="true">
      <g stroke="${MET}" stroke-width="1.6" stroke-linecap="round">
        <line x1="50" y1="42" x2="20" y2="14"/><line x1="50" y1="42" x2="80" y2="14"/>
        <line x1="50" y1="58" x2="22" y2="86"/><line x1="50" y1="58" x2="78" y2="86"/>
      </g>
      <circle cx="50" cy="50" r="18" fill="url(#spg)"/>
      <defs><radialGradient id="spg" cx="38%" cy="34%" r="70%">
        <stop offset="0%" stop-color="#eef2f7"/><stop offset="100%" stop-color="#7d8698"/></radialGradient></defs>
      <ellipse cx="43" cy="43" rx="5" ry="3" fill="rgba(255,255,255,0.6)"/>
    </svg>`;
  }

  function iconHubble() {
    return `<svg class="sv" viewBox="0 0 100 100" aria-hidden="true">
      <g stroke="${MET_D}" stroke-width="0.8">
        <g fill="${PANEL}" stroke="${CELL}" stroke-width="0.6">
          <rect x="8" y="40" width="18" height="20" rx="1"/><rect x="74" y="40" width="18" height="20" rx="1"/>
        </g>
        <rect x="34" y="30" width="32" height="40" rx="8" fill="#c9b06a"/>
        <rect x="34" y="30" width="32" height="10" rx="4" fill="#8a97ab"/>
        <ellipse cx="50" cy="32" rx="14" ry="4" fill="#1a2230"/>
        <line x1="26" y1="50" x2="34" y2="50" stroke="${MET}" stroke-width="1.5"/>
        <line x1="66" y1="50" x2="74" y2="50" stroke="${MET}" stroke-width="1.5"/>
      </g>
    </svg>`;
  }

  function iconJWST() {
    // Goldener Spiegel (Hexagon-Wabe) ueber rautenfoermigem Sonnenschild.
    const hexes = [[50,30],[42,36],[58,36],[34,42],[50,42],[66,42],[42,48],[58,48]];
    let mirror = "";
    for (const [x, y] of hexes)
      mirror += `<circle cx="${x}" cy="${y}" r="4.6" fill="${GOLD}" stroke="#a5822f" stroke-width="0.5"/>`;
    return `<svg class="sv" viewBox="0 0 100 100" aria-hidden="true">
      <polygon points="10,74 50,58 90,74 50,90" fill="#3a4a72" stroke="#6f86c0" stroke-width="0.8" opacity="0.85"/>
      <polygon points="16,72 50,60 84,72 50,84" fill="none" stroke="#8ea6e0" stroke-width="0.6" opacity="0.6"/>
      ${mirror}
      <line x1="50" y1="54" x2="50" y2="58" stroke="${MET}" stroke-width="1.4"/>
    </svg>`;
  }

  function iconRover() {  // Curiosity
    return `<svg class="sv" viewBox="0 0 100 100" aria-hidden="true">
      <g stroke="${MET_D}" stroke-width="1" fill="none">
        <rect x="26" y="46" width="40" height="18" rx="3" fill="${MET}"/>
        <line x1="60" y1="46" x2="72" y2="30" stroke="${MET}" stroke-width="2"/>
        <rect x="68" y="24" width="10" height="8" rx="1" fill="${MET}"/>
        <circle cx="72" cy="20" r="2" fill="${MET}"/>
        <g fill="#33465f" stroke="${MET_D}">
          <circle cx="30" cy="70" r="7"/><circle cx="46" cy="70" r="7"/><circle cx="62" cy="70" r="7"/>
        </g>
        <line x1="26" y1="64" x2="66" y2="64" stroke="${MET_D}" stroke-width="1.5"/>
        <rect x="18" y="42" width="8" height="10" rx="1" fill="${GOLD}"/>
      </g>
    </svg>`;
  }

  function iconLander() {  // Chang'e-artiger Lander
    return `<svg class="sv" viewBox="0 0 100 100" aria-hidden="true">
      <g stroke="${MET_D}" stroke-width="1">
        <rect x="34" y="38" width="32" height="22" rx="3" fill="#d8c07a"/>
        <g fill="${PANEL}" stroke="${CELL}" stroke-width="0.6">
          <rect x="12" y="42" width="20" height="12" rx="1"/><rect x="68" y="42" width="20" height="12" rx="1"/>
        </g>
        <line x1="38" y1="60" x2="26" y2="80" stroke="${MET}" stroke-width="2"/>
        <line x1="62" y1="60" x2="74" y2="80" stroke="${MET}" stroke-width="2"/>
        <line x1="50" y1="60" x2="50" y2="80" stroke="${MET}" stroke-width="2"/>
        <line x1="20" y1="82" x2="32" y2="82" stroke="${MET}" stroke-width="2"/>
        <line x1="68" y1="82" x2="80" y2="82" stroke="${MET}" stroke-width="2"/>
        <line x1="44" y1="82" x2="56" y2="82" stroke="${MET}" stroke-width="2"/>
      </g>
    </svg>`;
  }

  function iconRocket() {
    return `<svg class="sv" viewBox="0 0 100 100" aria-hidden="true">
      <path d="M50,10 C60,22 62,44 60,64 L40,64 C38,44 40,22 50,10 Z" fill="#e6ebf2" stroke="${MET_D}" stroke-width="1"/>
      <circle cx="50" cy="34" r="5" fill="#5fb0e0"/>
      <path d="M40,58 L28,74 L40,68 Z" fill="#c74a3a"/>
      <path d="M60,58 L72,74 L60,68 Z" fill="#c74a3a"/>
      <path d="M44,66 L56,66 L52,90 Q50,96 48,90 Z" fill="url(#flame)"/>
      <defs><linearGradient id="flame" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ffd257"/><stop offset="100%" stop-color="rgba(255,90,30,0.2)"/></linearGradient></defs>
    </svg>`;
  }

  function iconAstronaut(visor) {
    visor = visor || "#233a63";
    return `<svg class="sv" viewBox="0 0 100 100" aria-hidden="true">
      <g stroke="${MET_D}" stroke-width="1">
        <path d="M30,64 Q30,50 50,50 Q70,50 70,64 L70,80 L30,80 Z" fill="#eef1f6"/>
        <circle cx="50" cy="36" r="22" fill="#f2f4f8" stroke="${MET_D}" stroke-width="1.5"/>
        <path d="M34,34 Q50,22 66,34 Q66,48 50,50 Q34,48 34,34 Z" fill="${visor}"/>
        <ellipse cx="42" cy="33" rx="6" ry="4" fill="rgba(255,255,255,0.35)"/>
        <rect x="44" y="60" width="12" height="8" rx="2" fill="#cdd6e2"/>
      </g>
    </svg>`;
  }

  function iconCapsuleDog() {  // Laika / Belka & Strelka
    return `<svg class="sv" viewBox="0 0 100 100" aria-hidden="true">
      <g stroke="${MET_D}" stroke-width="1">
        <path d="M50,16 C64,16 72,34 72,52 C72,70 62,82 50,82 C38,82 28,70 28,52 C28,34 36,16 50,16 Z" fill="#dfe4ec"/>
        <path d="M28,52 C28,34 36,16 50,16 C64,16 72,34 72,52 Z" fill="#c74a3a" opacity="0.25"/>
        <circle cx="50" cy="52" r="13" fill="#101826"/>
        <g fill="#e8c98f">
          <circle cx="50" cy="52" r="8"/>
          <path d="M44,47 l-3,-6 l5,3 Z"/><path d="M56,47 l3,-6 l-5,3 Z"/>
          <circle cx="47" cy="51" r="1.2" fill="#101826"/><circle cx="53" cy="51" r="1.2" fill="#101826"/>
          <circle cx="50" cy="55" r="1.6" fill="#101826"/>
        </g>
      </g>
    </svg>`;
  }

  function iconParachute() {  // Eustace / StratEx
    return `<svg class="sv" viewBox="0 0 100 100" aria-hidden="true">
      <path d="M18,44 Q50,6 82,44 Q66,40 50,40 Q34,40 18,44 Z" fill="#e2e7ef" stroke="${MET_D}" stroke-width="1"/>
      <g stroke="${MET_D}" stroke-width="0.8">
        <line x1="18" y1="44" x2="50" y2="44"/><line x1="34" y1="42" x2="50" y2="44"/>
        <line x1="66" y1="42" x2="50" y2="44"/><line x1="82" y1="44" x2="50" y2="44"/>
      </g>
      <g stroke="${MET}" stroke-width="0.8">
        <line x1="18" y1="44" x2="47" y2="72"/><line x1="82" y1="44" x2="53" y2="72"/>
      </g>
      <circle cx="50" cy="76" r="7" fill="#eef1f6"/>
      <path d="M46,82 l0,10 M54,82 l0,10" stroke="#eef1f6" stroke-width="2.5"/>
    </svg>`;
  }

  function iconBird() {  // Doppelschnepfe (Silhouette)
    return `<svg class="sv" viewBox="0 0 100 100" aria-hidden="true">
      <path d="M50,52 C34,30 14,32 8,44 C22,44 34,50 44,58 C30,60 20,66 16,74 C30,66 44,64 54,66 C70,68 84,60 90,46 C80,54 66,54 56,50 C64,44 70,36 70,28 C62,38 56,46 50,52 Z"
        fill="#2b3a4d" stroke="#4a6178" stroke-width="1"/>
      <circle cx="62" cy="34" r="2" fill="#0f1a26"/>
    </svg>`;
  }

  function iconEdgeOfSpace() {  // Kármán-Referenzmarke
    return `<svg class="sv" viewBox="0 0 100 100" aria-hidden="true">
      <path d="M8,70 Q50,44 92,70" fill="none" stroke="#7fc6ff" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M8,62 Q50,36 92,62" fill="none" stroke="rgba(150,255,215,0.5)" stroke-width="1.2"/>
      <path d="M8,70 Q50,44 92,70 L92,92 L8,92 Z" fill="rgba(10,30,70,0.55)"/>
      <g fill="#fff">
        <circle cx="30" cy="26" r="1.3"/><circle cx="54" cy="18" r="1.6"/>
        <circle cx="72" cy="30" r="1.2"/><circle cx="44" cy="34" r="1"/>
      </g>
    </svg>`;
  }

  /* --- Zuordnung id -> Visual --------------------------------------------- */
  const BUILDERS = {
    // Sonne, Mond, Planeten, Sterne
    sonne: sun,
    mond: () => sphere("mond", "#c9cad0", "#f0f0f4", "#5f6068", { inner: craters }),
    luna2: () => iconProbe("#d7dbe2"),
    merkur: () => sphere("merkur", PLANETS.merkur[0], PLANETS.merkur[1], PLANETS.merkur[2]),
    venus: () => sphere("venus", PLANETS.venus[0], PLANETS.venus[1], PLANETS.venus[2], { inner: bands("#f0dca0", "#c9a860") }),
    mars: () => sphere("mars", PLANETS.mars[0], PLANETS.mars[1], PLANETS.mars[2], {
      inner: `<ellipse cx="50" cy="16" rx="14" ry="6" fill="rgba(255,255,255,0.7)"/><ellipse cx="50" cy="84" rx="12" ry="5" fill="rgba(255,255,255,0.6)"/>` }),
    jupiter: () => sphere("jupiter", "#cba46f", "#ecd3a6", "#7c5230", { inner: bands("#a9784a", "#e0c69a") +
      `<ellipse cx="60" cy="58" rx="7" ry="4" fill="#b5623a" opacity="0.7"/>` }),
    saturn: () => sphere("saturn", "#dcc389", "#f2e2b4", "#8a7040", {
      vb: "0 0 120 100", cx: 60, r: 34,
      behind: `<g transform="rotate(-16 60 50)"><ellipse cx="60" cy="50" rx="56" ry="15" fill="none" stroke="#e0cf9e" stroke-width="7" opacity="0.9"/><ellipse cx="60" cy="50" rx="56" ry="15" fill="none" stroke="#b89a5c" stroke-width="2" opacity="0.7"/></g>`,
      front: `<g transform="rotate(-16 60 50)"><path d="M14,54 A56 15 0 0 0 106 54" fill="none" stroke="#e6d5a4" stroke-width="7" opacity="0.9"/></g>` }),
    uranus: () => sphere("uranus", PLANETS.uranus[0], PLANETS.uranus[1], PLANETS.uranus[2]),
    neptun: () => sphere("neptun", PLANETS.neptun[0], PLANETS.neptun[1], PLANETS.neptun[2],
      { inner: `<ellipse cx="60" cy="58" rx="6" ry="3.5" fill="#1c3474" opacity="0.7"/>` }),
    pluto: () => sphere("pluto", PLANETS.pluto[0], PLANETS.pluto[1], PLANETS.pluto[2],
      { inner: `<path d="M40,58 L52,50 L60,60 L50,68 Z" fill="rgba(255,250,235,0.5)"/>` }),
    proxima: () => star("proxima", "#ff7a4d", "#ffcaa8", "#b03a1a"),
    rigel: () => star("rigel", "#8fb4ff", "#dbe7ff", "#4f74c8"),

    // Raumfahrt-Technik
    iss: iconISS,
    mir: iconStation,
    hubble: iconHubble,
    jwst: iconJWST,
    voyager1: () => iconProbe("#e9eef5"),
    voyager2: () => iconProbe("#e9eef5"),
    newhorizons: () => iconProbe("#d9c58a"),
    parker: () => iconProbe("#e9eef5"),
    venera7: () => iconProbe("#dcd2b0"),
    sputnik1: iconSputnik,
    gps: iconSatellite,
    geo: iconSatellite,
    curiosity: iconRover,
    changge6: iconLander,
    x15: iconRocket,
    artemis1: iconRocket,

    // Bemannte Missionen (Astronaut, Visor-Varianten)
    gagarin: () => iconAstronaut("#233a63"),
    tereshkova: () => iconAstronaut("#3a2350"),
    gemini11: () => iconAstronaut("#204a4a"),
    apollo13: () => iconAstronaut("#4a3a20"),
    polaris: () => iconAstronaut("#2a2a3a"),
    artemis2: () => iconAstronaut("#26406a"),

    // Tiere in Kapseln, Sprung, Vogel, Referenz
    laika: iconCapsuleDog,
    belka_strelka: iconCapsuleDog,
    eustace: iconParachute,
    doppelschnepfe: iconBird,
    karman: iconEdgeOfSpace,

    // Kosmische Objekte
    galaxis: () => galaxy("galaxis", "#ffe6b0", "#bcd0ff"),
    andromeda: () => galaxy("andromeda", "#ffe0c0", "#c8b8ff"),
    universum: universe,
    herculescorona: cosmicWeb,
    gw150914: gwMerger,
  };

  window.skyVisual = function (id) {
    const b = BUILDERS[id];
    return b ? b() : null;
  };
})();
