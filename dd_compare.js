/* ============================================================================
   dd_compare.js — Größen-Treppen für ausgewählte Mega-Objekte.
   Jede Treppe ist eine Kette aus 3-5 Stufen vom Vertrauten zum Unfassbaren.
   Pro Stufenpaar wird im Modal ein kleines SVG mit zwei Kreisen + Ratio-Caption
   gerendert. Letzte Stufe (highlight:true) wird farblich hervorgehoben.
   ========================================================================== */
const SKY_COMPARE = {

  /* === Schwarze Löcher === */

  sgrA: {
    steps: [
      { label: { de: "Erde",                    en: "Earth"               }, size_m: 1.2742e7 },
      { label: { de: "Sonne",                   en: "Sun"                 }, size_m: 1.3914e9 },
      { label: { de: "Merkur-Bahn",             en: "Mercury orbit"       }, size_m: 1.16e11  },
      { label: { de: "Sgr A* Ereignishorizont", en: "Sgr A* event horizon"}, size_m: 2.54e10, highlight: true }
    ]
  },

  m87: {
    steps: [
      { label: { de: "Erde",                  en: "Earth"               }, size_m: 1.2742e7 },
      { label: { de: "Sonne",                 en: "Sun"                 }, size_m: 1.3914e9 },
      { label: { de: "Sonnensystem (Pluto)",  en: "Solar system (Pluto)" }, size_m: 1.18e13 },
      { label: { de: "M87* Ereignishorizont", en: "M87* event horizon"  }, size_m: 3.8e13, highlight: true }
    ]
  },

  holm15a: {
    steps: [
      { label: { de: "Erde",                       en: "Earth"                  }, size_m: 1.2742e7 },
      { label: { de: "Sonne",                      en: "Sun"                    }, size_m: 1.3914e9 },
      { label: { de: "Sonnensystem (Pluto)",       en: "Solar system (Pluto)"   }, size_m: 1.18e13 },
      { label: { de: "Holm 15A Ereignishorizont",  en: "Holm 15A event horizon" }, size_m: 2.4e14, highlight: true }
    ]
  },

  ton618: {
    steps: [
      { label: { de: "Erde",                     en: "Earth"                }, size_m: 1.2742e7 },
      { label: { de: "Sonne",                    en: "Sun"                  }, size_m: 1.3914e9 },
      { label: { de: "Sonnensystem (Pluto)",     en: "Solar system (Pluto)" }, size_m: 1.18e13 },
      { label: { de: "TON 618 Ereignishorizont", en: "TON 618 event horizon"}, size_m: 3.90e14, highlight: true }
    ]
  },

  /* === Riesen-Sterne === */

  uyscuti: {
    steps: [
      { label: { de: "Erde",       en: "Earth"   }, size_m: 1.2742e7 },
      { label: { de: "Sonne",      en: "Sun"     }, size_m: 1.3914e9 },
      { label: { de: "UY Scuti",   en: "UY Scuti"}, size_m: 2.4e12, highlight: true }
    ]
  },

  stephenson218: {
    steps: [
      { label: { de: "Erde",             en: "Earth"           }, size_m: 1.2742e7 },
      { label: { de: "Sonne",            en: "Sun"             }, size_m: 1.3914e9 },
      { label: { de: "Saturn-Bahn",      en: "Saturn orbit"    }, size_m: 2.86e12 },
      { label: { de: "Stephenson 2-18",  en: "Stephenson 2-18" }, size_m: 3.0e12, highlight: true }
    ]
  },

  /* === Galaxien & größer === */

  milkyway: {
    steps: [
      { label: { de: "Erde",                en: "Earth"            }, size_m: 1.2742e7 },
      { label: { de: "Sonnensystem (Pluto)",en: "Solar system"     }, size_m: 1.18e13  },
      { label: { de: "Nächster Stern (4 Lj)", en: "Nearest star (4 ly)" }, size_m: 4.0e16 },
      { label: { de: "Milchstraße",         en: "Milky Way"        }, size_m: 9.46e20, highlight: true }
    ]
  },

  andromeda: {
    steps: [
      { label: { de: "Milchstraße",       en: "Milky Way"     }, size_m: 9.46e20 },
      { label: { de: "Andromeda-Galaxie", en: "Andromeda"     }, size_m: 2.08e21, highlight: true }
    ]
  },

  laniakea: {
    steps: [
      { label: { de: "Milchstraße",          en: "Milky Way"          }, size_m: 9.46e20 },
      { label: { de: "Lokale Gruppe (~10 Mio Lj)", en: "Local Group (~10M ly)" }, size_m: 9.5e22 },
      { label: { de: "Virgo-Cluster",        en: "Virgo Cluster"      }, size_m: 1.04e23 },
      { label: { de: "Laniakea-Supercluster", en: "Laniakea Supercluster" }, size_m: 4.7e23, highlight: true }
    ]
  },

  universum: {
    steps: [
      { label: { de: "Milchstraße",            en: "Milky Way"            }, size_m: 9.46e20 },
      { label: { de: "Laniakea-Supercluster",  en: "Laniakea Supercluster"}, size_m: 4.7e23  },
      { label: { de: "Sloan Great Wall",       en: "Sloan Great Wall"     }, size_m: 1.2e25  },
      { label: { de: "Beobachtbares Universum",en: "Observable universe"  }, size_m: 8.8e26, highlight: true }
    ]
  },

};
