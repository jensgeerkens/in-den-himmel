/* ============================================================================
   sizes.js — Größen-Lookup (Durchmesser / Länge / Ereignishorizont) in METERN.
   Wird vom buildScaleSection-Renderer in script.js gelesen.

   `ref` (informativ): was 'size_m' semantisch ist
     - "diameter"  : Durchmesser (Planet, Stern, Galaxie)
     - "length"    : Länge (Flugzeug, Tier-Körperlänge, Bauwerk-Höhe)
     - "wingspan"  : Flügelspannweite (Schmetterlinge)
     - "horizon"   : Ereignishorizont-Durchmesser (Schwarzes Loch)
     - "extent"    : größte Ausdehnung (Cluster, Wall, Void, Heliopause…)

   Konzept-Einträge ohne sinnvolle Größe (darkmatter, darkenergy) sind weggelassen;
   der Renderer rendert dann einfach keine Skala für sie.
   ========================================================================== */
const SIZES_M = {

  /* ===== BODEN-EBENE ===== */

  /* Vögel — Körperlänge */
  spatz:           { size_m: 0.16,    ref: "length",   note: { de: "Körperlänge",         en: "body length" } },
  schwalbe:        { size_m: 0.18,    ref: "length",   note: { de: "Körperlänge",         en: "body length" } },
  mauersegler:     { size_m: 0.17,    ref: "length",   note: { de: "Körperlänge",         en: "body length" } },
  steinadler:      { size_m: 0.85,    ref: "length",   note: { de: "Körperlänge",         en: "body length" } },
  bartgeier:       { size_m: 1.15,    ref: "length",   note: { de: "Körperlänge",         en: "body length" } },
  streifengans:    { size_m: 0.78,    ref: "length",   note: { de: "Körperlänge",         en: "body length" } },
  singschwan:      { size_m: 1.50,    ref: "length",   note: { de: "Körperlänge",         en: "body length" } },
  alpendohle:      { size_m: 0.38,    ref: "length",   note: { de: "Körperlänge",         en: "body length" } },
  doppelschnepfe:  { size_m: 0.28,    ref: "length",   note: { de: "Körperlänge",         en: "body length" } },
  kranich:         { size_m: 1.20,    ref: "length",   note: { de: "Körperlänge",         en: "body length" } },
  sperbergeier:    { size_m: 0.95,    ref: "length",   note: { de: "Körperlänge",         en: "body length" } },

  /* Insekten / Spinne / Fledermaus */
  marienkaefer:    { size_m: 0.008,   ref: "length",   note: { de: "Körperlänge",         en: "body length" } },
  distelfalter:    { size_m: 0.06,    ref: "wingspan", note: { de: "Flügelspannweite",    en: "wingspan" } },
  monarch:         { size_m: 0.10,    ref: "wingspan", note: { de: "Flügelspannweite",    en: "wingspan" } },
  hummel:          { size_m: 0.022,   ref: "length",   note: { de: "Körperlänge",         en: "body length" } },
  fledermaus:      { size_m: 0.10,    ref: "length",   note: { de: "Körperlänge",         en: "body length" } },
  spinne:          { size_m: 0.005,   ref: "length",   note: { de: "Körperlänge",         en: "body length" } },

  /* Bauwerke / Berge */
  burj:            { size_m: 828,     ref: "length",   note: { de: "Bauhöhe",             en: "structural height" } },
  montblanc:       { size_m: 4808,    ref: "length",   note: { de: "Gipfelhöhe ü. NN",    en: "summit elevation" } },
  everest:         { size_m: 8849,    ref: "length",   note: { de: "Gipfelhöhe ü. NN",    en: "summit elevation" } },

  /* Aircraft / Ballons */
  drohne:          { size_m: 0.35,    ref: "length",   note: { de: "Diagonale (DJI Phantom)", en: "diagonal (DJI Phantom)" } },
  jet:             { size_m: 70.7,    ref: "length",   note: { de: "Rumpflänge (B747)",   en: "fuselage length (B747)" } },
  helikopter:      { size_m: 18,      ref: "length",   note: { de: "Rumpflänge",          en: "fuselage length" } },
  concorde:        { size_m: 61.7,    ref: "length",   note: { de: "Rumpflänge",          en: "fuselage length" } },
  u2:              { size_m: 19.2,    ref: "length",   note: { de: "Rumpflänge",          en: "fuselage length" } },
  ballon:          { size_m: 60,      ref: "diameter", note: { de: "Hüllen-Durchmesser",  en: "envelope diameter" } },
  sr71:            { size_m: 32.7,    ref: "length",   note: { de: "Rumpflänge",          en: "fuselage length" } },
  wetterballon:    { size_m: 1.5,     ref: "diameter", note: { de: "Hüllen-Durchmesser",  en: "envelope diameter" } },
  mig25:           { size_m: 22,      ref: "length",   note: { de: "Rumpflänge",          en: "fuselage length" } },
  stratos:         { size_m: 60,      ref: "diameter", note: { de: "Hüllen-Durchmesser (Stratos)", en: "envelope diameter (Stratos)" } },
  eustace:         { size_m: 100,     ref: "diameter", note: { de: "Hüllen-Durchmesser (StratEx)", en: "envelope diameter (StratEx)" } },

  /* ===== RAUMFAHRT ===== */

  /* bemannt */
  x15:             { size_m: 15.5,    ref: "length",   note: { de: "Rumpflänge",          en: "fuselage length" } },
  iss:             { size_m: 109,     ref: "length",   note: { de: "größte Ausdehnung",   en: "max extent" } },
  gemini11:        { size_m: 5.6,     ref: "length",   note: { de: "Kapsellänge",         en: "capsule length" } },
  apollo13:        { size_m: 11,      ref: "length",   note: { de: "CSM-Länge",           en: "CSM length" } },
  polaris:         { size_m: 8.1,     ref: "length",   note: { de: "Crew-Dragon-Länge",   en: "Crew Dragon length" } },
  artemis2:        { size_m: 8,       ref: "length",   note: { de: "Orion + ESM",         en: "Orion + ESM" } },
  gagarin:         { size_m: 2.3,     ref: "diameter", note: { de: "Vostok-Kapsel ⌀",     en: "Vostok capsule ⌀" } },
  tereshkova:      { size_m: 2.3,     ref: "diameter", note: { de: "Vostok-Kapsel ⌀",     en: "Vostok capsule ⌀" } },
  mir:             { size_m: 19,      ref: "length",   note: { de: "Stations-Hauptachse", en: "station main axis" } },

  /* unbemannt */
  hubble:          { size_m: 13.2,    ref: "length",   note: { de: "Teleskop-Länge",      en: "telescope length" } },
  gps:             { size_m: 5,       ref: "length",   note: { de: "Satellitengröße",     en: "satellite size" } },
  geo:             { size_m: 5,       ref: "length",   note: { de: "Satellitengröße",     en: "satellite size" } },
  jwst:            { size_m: 21,      ref: "length",   note: { de: "Sonnenschild lang",   en: "sunshield length" } },
  curiosity:       { size_m: 3,       ref: "length",   note: { de: "Roverlänge",          en: "rover length" } },
  voyager1:        { size_m: 3.7,     ref: "length",   note: { de: "Sondenkörper inkl. Antenne", en: "spacecraft incl. antenna" } },
  voyager2:        { size_m: 3.7,     ref: "length",   note: { de: "Sondenkörper inkl. Antenne", en: "spacecraft incl. antenna" } },
  changge6:        { size_m: 4,       ref: "length",   note: { de: "Landerhöhe",          en: "lander height" } },
  artemis1:        { size_m: 8,       ref: "length",   note: { de: "Orion-Kapsel + ESM",  en: "Orion + ESM" } },
  parker:          { size_m: 3,       ref: "length",   note: { de: "Sondenlänge",         en: "probe length" } },
  newhorizons:     { size_m: 2.7,     ref: "length",   note: { de: "Sondenlänge",         en: "probe length" } },
  sputnik1:        { size_m: 0.58,    ref: "diameter", note: { de: "Kugel-Durchmesser",   en: "sphere diameter" } },
  laika:           { size_m: 4,       ref: "length",   note: { de: "Sputnik-2-Höhe",      en: "Sputnik 2 height" } },
  belka_strelka:   { size_m: 4,       ref: "length",   note: { de: "Kapselgröße",         en: "capsule size" } },
  luna2:           { size_m: 0.9,     ref: "diameter", note: { de: "Sondenkugel ⌀",       en: "probe sphere ⌀" } },
  venera7:         { size_m: 1.0,     ref: "length",   note: { de: "Landersonde",         en: "lander probe" } },
  pioneer10:       { size_m: 2.9,     ref: "length",   note: { de: "Sondenkörper",        en: "probe body" } },

  /* ===== SONNENSYSTEM ===== */

  /* Mond */
  mond:            { size_m: 3.4748e6, ref: "diameter", note: { de: "Durchmesser",        en: "diameter" } },

  /* Planeten */
  merkur:          { size_m: 4.879e6, ref: "diameter", note: { de: "Durchmesser",         en: "diameter" } },
  venus:           { size_m: 1.2104e7, ref: "diameter", note: { de: "Durchmesser",        en: "diameter" } },
  mars:            { size_m: 6.779e6, ref: "diameter", note: { de: "Durchmesser",         en: "diameter" } },
  jupiter:         { size_m: 1.3982e8, ref: "diameter", note: { de: "Durchmesser",        en: "diameter" } },
  saturn:          { size_m: 1.1646e8, ref: "diameter", note: { de: "Durchmesser (ohne Ringe)", en: "diameter (no rings)" } },
  uranus:          { size_m: 5.0724e7, ref: "diameter", note: { de: "Durchmesser",        en: "diameter" } },
  neptun:          { size_m: 4.9244e7, ref: "diameter", note: { de: "Durchmesser",        en: "diameter" } },
  pluto:           { size_m: 2.3760e6, ref: "diameter", note: { de: "Durchmesser",        en: "diameter" } },
  ceres:           { size_m: 9.39e5,   ref: "diameter", note: { de: "Durchmesser",        en: "diameter" } },
  eris:            { size_m: 2.326e6,  ref: "diameter", note: { de: "Durchmesser",        en: "diameter" } },
  sedna:           { size_m: 1.0e6,    ref: "diameter", note: { de: "Durchmesser (Schätzung)", en: "diameter (estimate)" } },

  /* Sonne */
  sonne:           { size_m: 1.3914e9, ref: "diameter", note: { de: "Durchmesser",        en: "diameter" } },

  /* Reference (Asteroiden, Kometen, interstellare Objekte, äußere Strukturen) */
  asteroidbelt:    { size_m: 4.5e11,  ref: "extent",   note: { de: "Breite (~3 AU)",      en: "width (~3 AU)" } },
  psyche:          { size_m: 2.22e5,  ref: "diameter", note: { de: "Durchmesser",         en: "diameter" } },
  comet67p:        { size_m: 4.0e3,   ref: "length",   note: { de: "Längste Achse",       en: "long axis" } },
  halley:          { size_m: 1.1e4,   ref: "length",   note: { de: "Längste Achse",       en: "long axis" } },
  arrokoth:        { size_m: 3.6e4,   ref: "length",   note: { de: "Längste Achse",       en: "long axis" } },
  oumuamua:        { size_m: 800,     ref: "length",   note: { de: "Längste Achse",       en: "long axis" } },
  heliopause:      { size_m: 1.8e13,  ref: "extent",   note: { de: "Ausdehnung (~120 AU)", en: "extent (~120 AU)" } },
  oortcloud:       { size_m: 1.5e16,  ref: "extent",   note: { de: "Ausdehnung (~100.000 AU)", en: "extent (~100,000 AU)" } },

  /* ===== STERNE ===== */
  proxima:         { size_m: 2.0e8,   ref: "diameter", note: { de: "Durchmesser (0,14 Sonnenradien)", en: "diameter (0.14 solar radii)" } },
  alphacentauri:   { size_m: 1.7e9,   ref: "diameter", note: { de: "Durchmesser (1,22 Sonnenradien)", en: "diameter (1.22 solar radii)" } },
  barnard:         { size_m: 2.8e8,   ref: "diameter", note: { de: "Durchmesser (0,2 Sonnenradien)", en: "diameter (0.2 solar radii)" } },
  luhman16:        { size_m: 2.0e8,   ref: "diameter", note: { de: "Durchmesser (~Jupiter)", en: "diameter (~Jupiter)" } },
  sirius:          { size_m: 2.38e9,  ref: "diameter", note: { de: "Durchmesser (1,71 Sonnenradien)", en: "diameter (1.71 solar radii)" } },
  epsiloneridani:  { size_m: 9.9e8,   ref: "diameter", note: { de: "Durchmesser (0,71 Sonnenradien)", en: "diameter (0.71 solar radii)" } },
  tauceti:         { size_m: 1.1e9,   ref: "diameter", note: { de: "Durchmesser (0,79 Sonnenradien)", en: "diameter (0.79 solar radii)" } },
  vega:            { size_m: 3.28e9,  ref: "diameter", note: { de: "Durchmesser (2,36 Sonnenradien)", en: "diameter (2.36 solar radii)" } },
  bpm37093:        { size_m: 7.0e6,   ref: "diameter", note: { de: "Durchmesser (~Erde — Weißer Zwerg)", en: "diameter (~Earth — white dwarf)" } },
  antares:         { size_m: 1.0e12,  ref: "diameter", note: { de: "Durchmesser (~700 Sonnenradien)", en: "diameter (~700 solar radii)" } },
  betelgeuse:      { size_m: 1.2e12,  ref: "diameter", note: { de: "Durchmesser (~870 Sonnenradien)", en: "diameter (~870 solar radii)" } },
  rigel:           { size_m: 1.0e11,  ref: "diameter", note: { de: "Durchmesser (~78 Sonnenradien)", en: "diameter (~78 solar radii)" } },
  firstpulsar:     { size_m: 2.4e4,   ref: "diameter", note: { de: "Durchmesser (~24 km — Neutronenstern)", en: "diameter (~24 km — neutron star)" } },
  uyscuti:         { size_m: 2.4e12,  ref: "diameter", note: { de: "Durchmesser (~1.700 Sonnenradien)", en: "diameter (~1,700 solar radii)" } },
  mucephei:        { size_m: 1.75e12, ref: "diameter", note: { de: "Durchmesser (~1.260 Sonnenradien)", en: "diameter (~1,260 solar radii)" } },
  etacarinae:      { size_m: 3.0e11,  ref: "diameter", note: { de: "Durchmesser (~240 Sonnenradien)", en: "diameter (~240 solar radii)" } },
  fastestpulsar:   { size_m: 2.4e4,   ref: "diameter", note: { de: "Durchmesser (~24 km — Neutronenstern)", en: "diameter (~24 km — neutron star)" } },
  stephenson218:   { size_m: 3.0e12,  ref: "diameter", note: { de: "Durchmesser (~2.150 Sonnenradien)", en: "diameter (~2,150 solar radii)" } },
  us708:           { size_m: 4.0e8,   ref: "diameter", note: { de: "Durchmesser (~0,3 Sonnenradien)", en: "diameter (~0.3 solar radii)" } },
  magnetar:        { size_m: 2.4e4,   ref: "diameter", note: { de: "Durchmesser (~24 km — Neutronenstern)", en: "diameter (~24 km — neutron star)" } },
  earendel:        { size_m: 7.0e9,   ref: "diameter", note: { de: "Durchmesser (~50 Sonnenradien, geschätzt)", en: "diameter (~50 solar radii, est.)" } },

  /* ===== EXOPLANETEN ===== */
  proximab:        { size_m: 1.43e7,  ref: "diameter", note: { de: "Durchmesser (1,12 Erden)", en: "diameter (1.12 Earths)" } },
  trappist1:       { size_m: 1.16e7,  ref: "diameter", note: { de: "Durchmesser (~0,92 Erden)", en: "diameter (~0.92 Earths)" } },
  cancri55e:       { size_m: 2.5e7,   ref: "diameter", note: { de: "Durchmesser (~2 Erden)", en: "diameter (~2 Earths)" } },
  fiftyonepeg:     { size_m: 1.9e8,   ref: "diameter", note: { de: "Durchmesser (~1,4 Jupiter)", en: "diameter (~1.4 Jupiter)" } },
  rogueplanet:     { size_m: 1.4e8,   ref: "diameter", note: { de: "Durchmesser (~Jupiter)", en: "diameter (~Jupiter)" } },
  kepler16b:       { size_m: 1.6e8,   ref: "diameter", note: { de: "Durchmesser (~Saturn)", en: "diameter (~Saturn)" } },
  hd189733b:       { size_m: 1.6e8,   ref: "diameter", note: { de: "Durchmesser (~1,13 Jupiter)", en: "diameter (~1.13 Jupiter)" } },
  kelt9b:          { size_m: 2.5e8,   ref: "diameter", note: { de: "Durchmesser (~1,84 Jupiter)", en: "diameter (~1.84 Jupiter)" } },
  tres2b:          { size_m: 1.9e8,   ref: "diameter", note: { de: "Durchmesser (~1,27 Jupiter)", en: "diameter (~1.27 Jupiter)" } },
  pulsarplanets:   { size_m: 1.0e7,   ref: "diameter", note: { de: "Durchmesser (~Mond/Erde)", en: "diameter (~Moon/Earth)" } },

  /* ===== SCHWARZE LÖCHER (Ereignishorizont) ===== */
  gaiabh1:         { size_m: 6.0e4,   ref: "horizon",  note: { de: "Ereignishorizont (~10 Sonnenmassen)", en: "event horizon (~10 solar masses)" } },
  cygnusx1:        { size_m: 1.24e5,  ref: "horizon",  note: { de: "Ereignishorizont (~21 Sonnenmassen)", en: "event horizon (~21 solar masses)" } },
  sgrA:            { size_m: 2.54e10, ref: "horizon",  note: { de: "Ereignishorizont (~4,3 Mio Sonnenmassen)", en: "event horizon (~4.3M solar masses)" } },
  m87:             { size_m: 3.8e13,  ref: "horizon",  note: { de: "Ereignishorizont (~6,5 Mrd Sonnenmassen)", en: "event horizon (~6.5B solar masses)" } },
  holm15a:         { size_m: 2.4e14,  ref: "horizon",  note: { de: "Ereignishorizont (~40 Mrd Sonnenmassen)", en: "event horizon (~40B solar masses)" } },
  ton618:          { size_m: 3.90e14, ref: "horizon",  note: { de: "Ereignishorizont (~66 Mrd Sonnenmassen)", en: "event horizon (~66B solar masses)" } },

  /* ===== NEBEL ===== */
  helixnebula:     { size_m: 5.7e16,  ref: "extent",   note: { de: "Ausdehnung (~6 Lj)", en: "extent (~6 ly)" } },
  vela:            { size_m: 1.1e17,  ref: "extent",   note: { de: "Ausdehnung (~12 Lj)", en: "extent (~12 ly)" } },
  orionnebula:     { size_m: 2.3e17,  ref: "extent",   note: { de: "Ausdehnung (~24 Lj)", en: "extent (~24 ly)" } },
  ringnebula:      { size_m: 1.0e16,  ref: "extent",   note: { de: "Ausdehnung (~1 Lj)", en: "extent (~1 ly)" } },
  lagoonnebula:    { size_m: 1.0e18,  ref: "extent",   note: { de: "Ausdehnung (~110 Lj)", en: "extent (~110 ly)" } },
  crabnebula:      { size_m: 1.0e17,  ref: "extent",   note: { de: "Ausdehnung (~11 Lj)", en: "extent (~11 ly)" } },
  eaglenebula:     { size_m: 7.0e17,  ref: "extent",   note: { de: "Ausdehnung (~70 Lj)", en: "extent (~70 ly)" } },
  carinanebula:    { size_m: 2.8e18,  ref: "extent",   note: { de: "Ausdehnung (~300 Lj)", en: "extent (~300 ly)" } },
  tarantula:       { size_m: 9.0e18,  ref: "extent",   note: { de: "Ausdehnung (~1.000 Lj)", en: "extent (~1,000 ly)" } },

  /* ===== STERNHAUFEN ===== */
  hyades:          { size_m: 1.7e17,  ref: "extent",   note: { de: "Kerndurchmesser (~18 Lj)", en: "core diameter (~18 ly)" } },
  pleiades:        { size_m: 1.6e17,  ref: "extent",   note: { de: "Kerndurchmesser (~17 Lj)", en: "core diameter (~17 ly)" } },
  omegacentauri:   { size_m: 1.6e18,  ref: "extent",   note: { de: "Durchmesser (~170 Lj)", en: "diameter (~170 ly)" } },

  /* ===== GALAXIEN ===== */
  milkyway:        { size_m: 9.46e20, ref: "diameter", note: { de: "Scheibendurchmesser (~100.000 Lj)", en: "disk diameter (~100,000 ly)" } },
  lmc:             { size_m: 1.32e20, ref: "diameter", note: { de: "Durchmesser (~14.000 Lj)", en: "diameter (~14,000 ly)" } },
  smc:             { size_m: 6.6e19,  ref: "diameter", note: { de: "Durchmesser (~7.000 Lj)", en: "diameter (~7,000 ly)" } },
  triangulum:      { size_m: 5.7e20,  ref: "diameter", note: { de: "Durchmesser (~60.000 Lj)", en: "diameter (~60,000 ly)" } },
  centaurusa:      { size_m: 9.0e20,  ref: "diameter", note: { de: "Durchmesser (~95.000 Lj)", en: "diameter (~95,000 ly)" } },
  cigargalaxy:     { size_m: 3.3e20,  ref: "diameter", note: { de: "Durchmesser (~35.000 Lj)", en: "diameter (~35,000 ly)" } },
  whirlpool:       { size_m: 7.6e20,  ref: "diameter", note: { de: "Durchmesser (~80.000 Lj)", en: "diameter (~80,000 ly)" } },
  sombrero:        { size_m: 4.7e20,  ref: "diameter", note: { de: "Durchmesser (~50.000 Lj)", en: "diameter (~50,000 ly)" } },
  jadesz14:        { size_m: 7.6e19,  ref: "diameter", note: { de: "Durchmesser (~8.000 Lj — frühe Galaxie)", en: "diameter (~8,000 ly — early galaxy)" } },

  /* ===== KOSMISCHE GROSSSTRUKTUREN ===== */
  galaxis:         { size_m: 9.46e20, ref: "diameter", note: { de: "Scheibendurchmesser (~100.000 Lj)", en: "disk diameter (~100,000 ly)" } },
  andromeda:       { size_m: 2.08e21, ref: "diameter", note: { de: "Durchmesser (~220.000 Lj)", en: "diameter (~220,000 ly)" } },
  fermibubbles:    { size_m: 4.7e20,  ref: "extent",   note: { de: "Ausdehnung (~50.000 Lj)", en: "extent (~50,000 ly)" } },
  virgocluster:    { size_m: 1.04e23, ref: "extent",   note: { de: "Ausdehnung (~110 Mio Lj)", en: "extent (~110M ly)" } },
  gw170817:        { size_m: 3.0e4,   ref: "diameter", note: { de: "Endprodukt-Durchmesser (~30 km)", en: "merger remnant (~30 km)" } },
  greatattractor:  { size_m: 1.4e23,  ref: "extent",   note: { de: "Ausdehnung (~150 Mio Lj)", en: "extent (~150M ly)" } },
  laniakea:        { size_m: 4.7e23,  ref: "extent",   note: { de: "Ausdehnung (~500 Mio Lj)", en: "extent (~500M ly)" } },
  comacluster:     { size_m: 1.8e23,  ref: "extent",   note: { de: "Ausdehnung (~20 Mio Lj)", en: "extent (~20M ly)" } },
  bootesvoid:      { size_m: 2.2e24,  ref: "extent",   note: { de: "Durchmesser (~250 Mio Lj)", en: "diameter (~250M ly)" } },
  sloanwall:       { size_m: 1.2e25,  ref: "extent",   note: { de: "Länge (~1,4 Mrd Lj)", en: "length (~1.4B ly)" } },
  gw150914:        { size_m: 4.4e5,   ref: "horizon",  note: { de: "Endprodukt-Ereignishorizont (~440 km)", en: "merger event horizon (~440 km)" } },
  quasar3c273:     { size_m: 2.4e13,  ref: "horizon",  note: { de: "Ereignishorizont (~860 Mio Sonnenmassen)", en: "event horizon (~860M solar masses)" } },
  frb:             { size_m: 2.4e4,   ref: "diameter", note: { de: "Vermutete Quelle (Magnetar, ~24 km)", en: "likely source (magnetar, ~24 km)" } },
  herculescorona:  { size_m: 9.5e25,  ref: "extent",   note: { de: "Länge (~10 Mrd Lj)", en: "length (~10B ly)" } },
  cmb:             { size_m: 8.8e26,  ref: "extent",   note: { de: "Beobachtbares Universum (~93 Mrd Lj)", en: "observable universe (~93B ly)" } },
  universum:       { size_m: 8.8e26,  ref: "extent",   note: { de: "Beobachtbares Universum (~93 Mrd Lj)", en: "observable universe (~93B ly)" } },
};

/* Referenz-Erddurchmesser (für die Murmel-Skala). */
const EARTH_DIAMETER_M = 1.2742e7;
