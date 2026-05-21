/* dd_solar.js — Detail-Infos: Planeten & Sonnensystem. Object.assign in SKY_DETAILS. */
Object.assign(SKY_DETAILS, {

  merkur: {
    desc: {
      de: [
        "Merkur ist der innerste und kleinste Planet des Sonnensystems – eine sonnenverbrannte Felskugel, kaum größer als der Erdmond und ohne nennenswerte Atmosphäre.",
        "Weil er keine schützende Lufthülle besitzt, schwankt seine Oberflächentemperatur extrem: Im Sonnenlicht klettert sie auf über 420 °C, während sie in der langen Nacht auf unter −170 °C abstürzt. In dauerhaft beschatteten Polarkratern fand man sogar Wassereis.",
        "Erforscht wurde Merkur bislang nur von zwei Sonden: Mariner 10 flog 1974/75 dreimal vorbei, MESSENGER umkreiste ihn von 2011 bis 2015. Die europäisch-japanische Mission BepiColombo ist seit 2018 unterwegs und soll 2026 in eine Umlaufbahn einschwenken.",
      ],
      en: [
        "Mercury is the innermost and smallest planet of the Solar System – a sun-scorched ball of rock, barely larger than the Moon and with almost no atmosphere.",
        "Lacking a protective blanket of air, its surface temperature swings to extremes: in sunlight it climbs above 420 °C, while in the long night it plunges below −170 °C. In permanently shadowed polar craters, water ice has even been found.",
        "Only two probes have studied Mercury so far: Mariner 10 flew past three times in 1974–75, and MESSENGER orbited it from 2011 to 2015. The European-Japanese BepiColombo mission, en route since 2018, is due to enter orbit in 2026.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",           en: "Type" },           value: { de: "Gesteinsplanet",                 en: "Terrestrial planet" } },
        { label: { de: "Mittl. Entfernung", en: "Mean distance" }, value: { de: "0,39 AE · 57,9 Mio. km",      en: "0.39 AU · 57.9 million km" } },
        { label: { de: "Durchmesser",   en: "Diameter" },       value: { de: "4.879 km (0,38 × Erde)",          en: "4,879 km (0.38 × Earth)" } },
        { label: { de: "Masse",         en: "Mass" },           value: { de: "0,055 Erdmassen",                 en: "0.055 Earth masses" } },
        { label: { de: "Monde",         en: "Moons" },          value: { de: "keine",                           en: "none" } },
      ]},
      { title: { de: "Steckbrief", en: "Profile" }, rows: [
        { label: { de: "Temperatur",  en: "Temperature" },  value: { de: "−170 °C bis +427 °C",        en: "−170 °C to +427 °C" } },
        { label: { de: "Tageslänge",  en: "Day length" },   value: { de: "176 Erdtage (Sonnentag)",    en: "176 Earth days (solar day)" } },
        { label: { de: "Jahr",        en: "Year" },         value: { de: "88 Erdtage",                 en: "88 Earth days" } },
        { label: { de: "Atmosphäre",  en: "Atmosphere" },   value: { de: "praktisch keine (dünne Exosphäre)", en: "virtually none (thin exosphere)" } },
      ]},
      { title: { de: "Erforschung", en: "Exploration" }, rows: [
        { label: { de: "Mariner 10",    en: "Mariner 10" },    value: { de: "Vorbeiflüge 1974–75",   en: "flybys 1974–75" } },
        { label: { de: "MESSENGER",     en: "MESSENGER" },     value: { de: "Orbit 2011–2015",       en: "orbit 2011–2015" } },
        { label: { de: "BepiColombo",   en: "BepiColombo" },   value: { de: "Start 2018, Orbit ab 2026", en: "launch 2018, orbit from 2026" } },
      ]},
      { title: { de: "Lichtlaufzeit von der Sonne", en: "Light travel time from the Sun" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~3,2 Minuten", en: "~3.2 minutes" } },
      ]},
    ],
  },

  venus: {
    desc: {
      de: [
        "Venus ist nach Größe und Masse fast ein Zwilling der Erde – doch ihre Oberfläche ist die feindlichste im inneren Sonnensystem. Eine dichte Hülle aus Kohlendioxid mit Schwefelsäurewolken erzeugt einen außer Kontrolle geratenen Treibhauseffekt.",
        "An der Oberfläche herrschen rund 465 °C – heiß genug, um Blei zu schmelzen – bei einem Druck wie in 900 m Meerestiefe. Die Venus rotiert zudem rückläufig und so langsam, dass ein Venustag länger dauert als ein Venusjahr.",
        "Sowjetische Venera-Sonden landeten in den 1970er- und 80er-Jahren mehrfach und überstanden die Hölle nur Minuten. NASAs Magellan kartierte 1990–94 fast die gesamte Oberfläche per Radar; mehrere neue Missionen (DAVINCI, VERITAS, EnVision) sind für die 2030er geplant.",
      ],
      en: [
        "By size and mass, Venus is almost a twin of Earth – yet its surface is the most hostile in the inner Solar System. A dense shroud of carbon dioxide laced with sulphuric-acid clouds drives a runaway greenhouse effect.",
        "At the surface the temperature reaches about 465 °C – hot enough to melt lead – under a pressure like that 900 m deep in the ocean. Venus also spins backwards and so slowly that a Venusian day is longer than its year.",
        "Soviet Venera landers touched down repeatedly in the 1970s and 80s, surviving the inferno for only minutes. NASA's Magellan mapped nearly the whole surface by radar in 1990–94; several new missions (DAVINCI, VERITAS, EnVision) are planned for the 2030s.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",           en: "Type" },           value: { de: "Gesteinsplanet",                 en: "Terrestrial planet" } },
        { label: { de: "Mittl. Entfernung", en: "Mean distance" }, value: { de: "0,72 AE · 108,2 Mio. km",     en: "0.72 AU · 108.2 million km" } },
        { label: { de: "Durchmesser",   en: "Diameter" },       value: { de: "12.104 km (0,95 × Erde)",         en: "12,104 km (0.95 × Earth)" } },
        { label: { de: "Masse",         en: "Mass" },           value: { de: "0,815 Erdmassen",                 en: "0.815 Earth masses" } },
        { label: { de: "Monde",         en: "Moons" },          value: { de: "keine",                           en: "none" } },
      ]},
      { title: { de: "Steckbrief", en: "Profile" }, rows: [
        { label: { de: "Temperatur",  en: "Temperature" },  value: { de: "~465 °C (Oberfläche)",      en: "~465 °C (surface)" } },
        { label: { de: "Tageslänge",  en: "Day length" },   value: { de: "243 Erdtage (rückläufig)",  en: "243 Earth days (retrograde)" } },
        { label: { de: "Jahr",        en: "Year" },         value: { de: "225 Erdtage",               en: "225 Earth days" } },
        { label: { de: "Atmosphäre",  en: "Atmosphere" },   value: { de: "96,5 % CO₂, dichte Schwefelsäurewolken", en: "96.5 % CO₂, thick sulphuric-acid clouds" } },
      ]},
      { title: { de: "Erforschung", en: "Exploration" }, rows: [
        { label: { de: "Venera 7–14",  en: "Venera 7–14" },  value: { de: "Landungen 1970–1982 (UdSSR)", en: "landings 1970–1982 (USSR)" } },
        { label: { de: "Magellan",     en: "Magellan" },     value: { de: "Radarkartierung 1990–94", en: "radar mapping 1990–94" } },
        { label: { de: "Venus Express",en: "Venus Express" },value: { de: "ESA-Orbit 2006–2014",     en: "ESA orbit 2006–2014" } },
      ]},
      { title: { de: "Lichtlaufzeit von der Sonne", en: "Light travel time from the Sun" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~6,0 Minuten", en: "~6.0 minutes" } },
      ]},
    ],
  },

  mars: {
    desc: {
      de: [
        "Mars, der Rote Planet, verdankt seine Farbe rostigem Eisenoxid im Staub. Er ist nur halb so groß wie die Erde, trägt aber den höchsten Vulkan und das tiefste Schluchtensystem des Sonnensystems: Olympus Mons und die Valles Marineris.",
        "Seine dünne CO₂-Atmosphäre lässt die Temperatur selten über den Gefrierpunkt steigen; an den Polen liegt Wassereis und gefrorenes Kohlendioxid. Globale Staubstürme können wochenlang den ganzen Planeten einhüllen.",
        "Kein anderer Planet wurde so intensiv erkundet: Seit den Viking-Landern 1976 folgten Rover wie Sojourner, die Zwillinge Spirit und Opportunity, Curiosity (seit 2012) und Perseverance (seit 2021), dazu der Mini-Hubschrauber Ingenuity – der erste motorisierte Flug auf einem anderen Planeten.",
      ],
      en: [
        "Mars, the Red Planet, owes its colour to rusty iron oxide in the dust. It is only half the size of Earth, yet hosts the tallest volcano and the deepest canyon system in the Solar System: Olympus Mons and Valles Marineris.",
        "Its thin CO₂ atmosphere rarely lets the temperature rise above freezing; the poles hold water ice and frozen carbon dioxide. Global dust storms can wrap the entire planet for weeks.",
        "No other planet has been explored so intensely: since the Viking landers of 1976 came rovers such as Sojourner, the twins Spirit and Opportunity, Curiosity (since 2012) and Perseverance (since 2021), plus the mini-helicopter Ingenuity – the first powered flight on another world.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",           en: "Type" },           value: { de: "Gesteinsplanet",                 en: "Terrestrial planet" } },
        { label: { de: "Mittl. Entfernung", en: "Mean distance" }, value: { de: "1,52 AE · 227,9 Mio. km",     en: "1.52 AU · 227.9 million km" } },
        { label: { de: "Durchmesser",   en: "Diameter" },       value: { de: "6.779 km (0,53 × Erde)",          en: "6,779 km (0.53 × Earth)" } },
        { label: { de: "Masse",         en: "Mass" },           value: { de: "0,107 Erdmassen",                 en: "0.107 Earth masses" } },
        { label: { de: "Monde",         en: "Moons" },          value: { de: "2 (Phobos, Deimos)",              en: "2 (Phobos, Deimos)" } },
      ]},
      { title: { de: "Steckbrief", en: "Profile" }, rows: [
        { label: { de: "Temperatur",  en: "Temperature" },  value: { de: "−140 °C bis +20 °C",        en: "−140 °C to +20 °C" } },
        { label: { de: "Tageslänge",  en: "Day length" },   value: { de: "24,6 Stunden (1 Sol)",      en: "24.6 hours (1 sol)" } },
        { label: { de: "Jahr",        en: "Year" },         value: { de: "687 Erdtage",               en: "687 Earth days" } },
        { label: { de: "Atmosphäre",  en: "Atmosphere" },   value: { de: "95 % CO₂, sehr dünn",       en: "95 % CO₂, very thin" } },
      ]},
      { title: { de: "Erforschung", en: "Exploration" }, rows: [
        { label: { de: "Viking 1 & 2", en: "Viking 1 & 2" }, value: { de: "Lander 1976",            en: "landers 1976" } },
        { label: { de: "Curiosity",    en: "Curiosity" },    value: { de: "Rover seit 2012",        en: "rover since 2012" } },
        { label: { de: "Perseverance", en: "Perseverance" }, value: { de: "Rover + Ingenuity seit 2021", en: "rover + Ingenuity since 2021" } },
      ]},
      { title: { de: "Lichtlaufzeit von der Sonne", en: "Light travel time from the Sun" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~12,7 Minuten", en: "~12.7 minutes" } },
      ]},
    ],
  },

  jupiter: {
    desc: {
      de: [
        "Jupiter ist der König der Planeten: ein Gasriese, der mehr als doppelt so viel Masse besitzt wie alle anderen Planeten zusammen. In seinem Inneren herrschen Drücke, die Wasserstoff in einen metallischen, elektrisch leitenden Zustand pressen.",
        "Sein bekanntestes Merkmal ist der Große Rote Fleck – ein Wirbelsturm, größer als die Erde, der seit mindestens 350 Jahren tobt. Jupiter besitzt zudem das stärkste Magnetfeld aller Planeten und ein eigenes Mini-System aus über 90 Monden, darunter die vier von Galileo entdeckten Großmonde Io, Europa, Ganymed und Kallisto.",
        "Die Sonden Pioneer und Voyager flogen in den 1970ern vorbei, Galileo umkreiste ihn 1995–2003, und Juno erforscht ihn seit 2016. Der 2024 gestartete Europa Clipper soll 2030 ankommen und den Eismond Europa und seinen verborgenen Ozean untersuchen.",
      ],
      en: [
        "Jupiter is the king of the planets: a gas giant with more than twice the mass of all the other planets combined. Deep inside, pressures squeeze hydrogen into a metallic, electrically conducting state.",
        "Its best-known feature is the Great Red Spot – a storm larger than Earth that has raged for at least 350 years. Jupiter also has the strongest magnetic field of any planet and a mini-system of more than 90 moons, including the four large Galilean moons Io, Europa, Ganymede and Callisto.",
        "The Pioneer and Voyager probes flew past in the 1970s, Galileo orbited it from 1995–2003, and Juno has studied it since 2016. The Europa Clipper, launched in 2024, is due to arrive in 2030 to investigate the icy moon Europa and its hidden ocean.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",           en: "Type" },           value: { de: "Gasriese",                       en: "Gas giant" } },
        { label: { de: "Mittl. Entfernung", en: "Mean distance" }, value: { de: "5,20 AE · 778,5 Mio. km",     en: "5.20 AU · 778.5 million km" } },
        { label: { de: "Durchmesser",   en: "Diameter" },       value: { de: "139.820 km (11 × Erde)",          en: "139,820 km (11 × Earth)" } },
        { label: { de: "Masse",         en: "Mass" },           value: { de: "318 Erdmassen",                  en: "318 Earth masses" } },
        { label: { de: "Monde",         en: "Moons" },          value: { de: "über 90 (4 Galileische)",        en: "over 90 (4 Galilean)" } },
      ]},
      { title: { de: "Steckbrief", en: "Profile" }, rows: [
        { label: { de: "Temperatur",  en: "Temperature" },  value: { de: "~ −145 °C (Wolkenobergrenze)", en: "~ −145 °C (cloud tops)" } },
        { label: { de: "Tageslänge",  en: "Day length" },   value: { de: "9,9 Stunden (schnellste Rotation)", en: "9.9 hours (fastest rotation)" } },
        { label: { de: "Jahr",        en: "Year" },         value: { de: "11,9 Erdjahre",             en: "11.9 Earth years" } },
        { label: { de: "Atmosphäre",  en: "Atmosphere" },   value: { de: "Wasserstoff & Helium",      en: "hydrogen & helium" } },
      ]},
      { title: { de: "Erforschung", en: "Exploration" }, rows: [
        { label: { de: "Voyager 1 & 2", en: "Voyager 1 & 2" }, value: { de: "Vorbeiflüge 1979",      en: "flybys 1979" } },
        { label: { de: "Galileo",       en: "Galileo" },       value: { de: "Orbit 1995–2003",       en: "orbit 1995–2003" } },
        { label: { de: "Juno",          en: "Juno" },          value: { de: "Orbit seit 2016",       en: "orbit since 2016" } },
        { label: { de: "Europa Clipper",en: "Europa Clipper" },value: { de: "Start 2024, Ankunft 2030", en: "launch 2024, arrival 2030" } },
      ]},
      { title: { de: "Lichtlaufzeit von der Sonne", en: "Light travel time from the Sun" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~43 Minuten", en: "~43 minutes" } },
      ]},
    ],
  },

  saturn: {
    desc: {
      de: [
        "Saturn ist der Schmuckstück des Sonnensystems – ein Gasriese, dessen prächtiges Ringsystem aus Milliarden Eis- und Gesteinsbrocken besteht, die meisten nicht größer als ein Haus. Die Ringe spannen sich über mehr als 280.000 km, sind aber oft nur wenige Dutzend Meter dünn.",
        "Mit einer Dichte geringer als Wasser ist Saturn der am wenigsten dichte Planet – er würde in einem riesigen Ozean schwimmen. Sein Mond Titan trägt eine dichte Atmosphäre und Seen aus flüssigem Methan, während aus dem kleinen Mond Enceladus Wasserfontänen ins All schießen.",
        "Pioneer 11 und die beiden Voyager-Sonden flogen vorbei, doch die wichtigste Mission war Cassini-Huygens: Sie umkreiste Saturn von 2004 bis 2017 und setzte 2005 die Huygens-Sonde auf Titan ab – die bislang fernste Landung im Sonnensystem.",
      ],
      en: [
        "Saturn is the jewel of the Solar System – a gas giant whose magnificent ring system is made of billions of chunks of ice and rock, most no bigger than a house. The rings span more than 280,000 km yet are often only a few dozen metres thick.",
        "With a density lower than water, Saturn is the least dense planet – it would float in a giant ocean. Its moon Titan carries a thick atmosphere and lakes of liquid methane, while the small moon Enceladus jets fountains of water into space.",
        "Pioneer 11 and the two Voyager probes flew past, but the landmark mission was Cassini-Huygens: it orbited Saturn from 2004 to 2017 and dropped the Huygens probe onto Titan in 2005 – the most distant landing ever achieved in the Solar System.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",           en: "Type" },           value: { de: "Gasriese",                       en: "Gas giant" } },
        { label: { de: "Mittl. Entfernung", en: "Mean distance" }, value: { de: "9,58 AE · 1,43 Mrd. km",      en: "9.58 AU · 1.43 billion km" } },
        { label: { de: "Durchmesser",   en: "Diameter" },       value: { de: "116.460 km (9,1 × Erde)",         en: "116,460 km (9.1 × Earth)" } },
        { label: { de: "Masse",         en: "Mass" },           value: { de: "95 Erdmassen",                   en: "95 Earth masses" } },
        { label: { de: "Monde",         en: "Moons" },          value: { de: "über 140 (z. B. Titan, Enceladus)", en: "over 140 (e.g. Titan, Enceladus)" } },
      ]},
      { title: { de: "Steckbrief", en: "Profile" }, rows: [
        { label: { de: "Temperatur",  en: "Temperature" },  value: { de: "~ −178 °C (Wolkenobergrenze)", en: "~ −178 °C (cloud tops)" } },
        { label: { de: "Tageslänge",  en: "Day length" },   value: { de: "10,7 Stunden",              en: "10.7 hours" } },
        { label: { de: "Jahr",        en: "Year" },         value: { de: "29,4 Erdjahre",             en: "29.4 Earth years" } },
        { label: { de: "Atmosphäre",  en: "Atmosphere" },   value: { de: "Wasserstoff & Helium",      en: "hydrogen & helium" } },
      ]},
      { title: { de: "Erforschung", en: "Exploration" }, rows: [
        { label: { de: "Pioneer 11",   en: "Pioneer 11" },   value: { de: "Vorbeiflug 1979",       en: "flyby 1979" } },
        { label: { de: "Voyager 1 & 2",en: "Voyager 1 & 2" },value: { de: "Vorbeiflüge 1980–81",   en: "flybys 1980–81" } },
        { label: { de: "Cassini-Huygens", en: "Cassini-Huygens" }, value: { de: "Orbit 2004–2017, Titan-Landung 2005", en: "orbit 2004–2017, Titan landing 2005" } },
      ]},
      { title: { de: "Lichtlaufzeit von der Sonne", en: "Light travel time from the Sun" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~79 Minuten (~1,3 Std.)", en: "~79 minutes (~1.3 h)" } },
      ]},
    ],
  },

  uranus: {
    desc: {
      de: [
        "Uranus ist der erste Planet, der mit einem Teleskop entdeckt wurde – 1781 durch Wilhelm Herschel. Als Eisriese besteht er unter seiner blassblaugrünen Methanatmosphäre vor allem aus Wasser, Methan und Ammoniak in eisigem, zähflüssigem Zustand.",
        "Seine größte Kuriosität: Uranus liegt regelrecht auf der Seite. Seine Rotationsachse ist um 98° gekippt, sodass Pol für Pol jeweils 42 Jahre Dauerlicht und dann 42 Jahre Dunkelheit erlebt. Wahrscheinlich kippte ihn eine gewaltige Kollision in der Frühzeit.",
        "Nur eine einzige Raumsonde hat ihn je besucht: Voyager 2 raste 1986 vorbei und entdeckte dabei zehn neue Monde sowie ein schwaches Ringsystem. Eine eigene Uranus-Mission gilt als hohe wissenschaftliche Priorität, ist aber noch nicht beschlossen.",
      ],
      en: [
        "Uranus was the first planet discovered with a telescope – by William Herschel in 1781. As an ice giant, beneath its pale blue-green methane atmosphere it consists mainly of water, methane and ammonia in an icy, slushy state.",
        "Its greatest oddity: Uranus lies practically on its side. Its rotation axis is tilted by 98°, so each pole spends 42 years in continuous daylight and then 42 years in darkness. A giant collision in its early history probably knocked it over.",
        "Only a single spacecraft has ever visited it: Voyager 2 raced past in 1986, discovering ten new moons and a faint ring system. A dedicated Uranus mission is considered a high scientific priority but has not yet been approved.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",           en: "Type" },           value: { de: "Eisriese",                       en: "Ice giant" } },
        { label: { de: "Mittl. Entfernung", en: "Mean distance" }, value: { de: "19,2 AE · 2,87 Mrd. km",      en: "19.2 AU · 2.87 billion km" } },
        { label: { de: "Durchmesser",   en: "Diameter" },       value: { de: "50.724 km (4,0 × Erde)",          en: "50,724 km (4.0 × Earth)" } },
        { label: { de: "Masse",         en: "Mass" },           value: { de: "14,5 Erdmassen",                 en: "14.5 Earth masses" } },
        { label: { de: "Monde",         en: "Moons" },          value: { de: "28",                             en: "28" } },
      ]},
      { title: { de: "Steckbrief", en: "Profile" }, rows: [
        { label: { de: "Temperatur",  en: "Temperature" },  value: { de: "~ −195 °C (kältester Planet)", en: "~ −195 °C (coldest planet)" } },
        { label: { de: "Tageslänge",  en: "Day length" },   value: { de: "17,2 Stunden (rückläufig)", en: "17.2 hours (retrograde)" } },
        { label: { de: "Jahr",        en: "Year" },         value: { de: "84 Erdjahre",               en: "84 Earth years" } },
        { label: { de: "Atmosphäre",  en: "Atmosphere" },   value: { de: "Wasserstoff, Helium, Methan", en: "hydrogen, helium, methane" } },
      ]},
      { title: { de: "Erforschung", en: "Exploration" }, rows: [
        { label: { de: "Voyager 2",  en: "Voyager 2" },  value: { de: "einziger Vorbeiflug, 1986", en: "only flyby, 1986" } },
        { label: { de: "Entdeckung", en: "Discovery" },  value: { de: "1781 (Wilhelm Herschel)",   en: "1781 (William Herschel)" } },
      ]},
      { title: { de: "Lichtlaufzeit von der Sonne", en: "Light travel time from the Sun" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~2,7 Stunden", en: "~2.7 hours" } },
      ]},
    ],
  },

  neptun: {
    desc: {
      de: [
        "Neptun ist der äußerste Planet des Sonnensystems – ein tiefblauer Eisriese, dessen Existenz zuerst berechnet und dann gefunden wurde: 1846 spürten ihn Astronomen genau dort auf, wo Störungen in der Uranusbahn ihn vermuten ließen.",
        "Trotz der enormen Entfernung zur Sonne tobt auf Neptun das wildeste Wetter des Sonnensystems: Stürme mit bis zu 2.000 km/h fegen über die Wolken. Sein größter Mond Triton umkreist ihn rückläufig und stößt Stickstoffgeysire aus – ein Hinweis, dass er einst eingefangen wurde.",
        "Wie bei Uranus war Voyager 2 die einzige Sonde, die Neptun je besuchte – beim Vorbeiflug 1989. Das Sonnenlicht ist hier rund 900-mal schwächer als auf der Erde; ein Funksignal von der Erde braucht etwa vier Stunden bis zu ihm.",
      ],
      en: [
        "Neptune is the outermost planet of the Solar System – a deep-blue ice giant whose existence was first calculated and then found: in 1846 astronomers spotted it exactly where disturbances in Uranus's orbit had predicted it.",
        "Despite its enormous distance from the Sun, Neptune has the wildest weather in the Solar System: storms with winds up to 2,000 km/h sweep across the clouds. Its largest moon Triton orbits backwards and erupts nitrogen geysers – a sign it was once captured.",
        "As with Uranus, Voyager 2 was the only probe ever to visit Neptune – during its 1989 flyby. Sunlight here is about 900 times weaker than on Earth; a radio signal from Earth takes roughly four hours to reach it.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",           en: "Type" },           value: { de: "Eisriese",                       en: "Ice giant" } },
        { label: { de: "Mittl. Entfernung", en: "Mean distance" }, value: { de: "30,1 AE · 4,50 Mrd. km",      en: "30.1 AU · 4.50 billion km" } },
        { label: { de: "Durchmesser",   en: "Diameter" },       value: { de: "49.244 km (3,9 × Erde)",          en: "49,244 km (3.9 × Earth)" } },
        { label: { de: "Masse",         en: "Mass" },           value: { de: "17,1 Erdmassen",                 en: "17.1 Earth masses" } },
        { label: { de: "Monde",         en: "Moons" },          value: { de: "16 (größter: Triton)",           en: "16 (largest: Triton)" } },
      ]},
      { title: { de: "Steckbrief", en: "Profile" }, rows: [
        { label: { de: "Temperatur",  en: "Temperature" },  value: { de: "~ −201 °C (Wolkenobergrenze)", en: "~ −201 °C (cloud tops)" } },
        { label: { de: "Tageslänge",  en: "Day length" },   value: { de: "16,1 Stunden",              en: "16.1 hours" } },
        { label: { de: "Jahr",        en: "Year" },         value: { de: "165 Erdjahre",              en: "165 Earth years" } },
        { label: { de: "Atmosphäre",  en: "Atmosphere" },   value: { de: "Wasserstoff, Helium, Methan", en: "hydrogen, helium, methane" } },
      ]},
      { title: { de: "Erforschung", en: "Exploration" }, rows: [
        { label: { de: "Voyager 2",  en: "Voyager 2" },  value: { de: "einziger Vorbeiflug, 1989", en: "only flyby, 1989" } },
        { label: { de: "Entdeckung", en: "Discovery" },  value: { de: "1846 (Le Verrier / Galle)", en: "1846 (Le Verrier / Galle)" } },
      ]},
      { title: { de: "Lichtlaufzeit von der Sonne", en: "Light travel time from the Sun" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~4,2 Stunden", en: "~4.2 hours" } },
      ]},
    ],
  },

  pluto: {
    desc: {
      de: [
        "Pluto galt von seiner Entdeckung 1930 an 76 Jahre lang als neunter Planet, bis ihn die Internationale Astronomische Union 2006 zum Zwergplaneten herabstufte. Er ist der bekannteste Bewohner des Kuipergürtels jenseits der Neptunbahn.",
        "Trotz seiner Winzigkeit ist Pluto erstaunlich vielfältig: Eine herzförmige Stickstoff-Eisebene (Tombaugh Regio), Wassereisberge so hoch wie die Alpen und eine dünne, blau schimmernde Dunstatmosphäre. Sein größter Mond Charon ist halb so groß wie Pluto selbst – die beiden umkreisen einen gemeinsamen Schwerpunkt im All.",
        "Bis 2015 war Pluto nur ein verschwommener Lichtpunkt. Dann raste die Sonde New Horizons mit fast 50.000 km/h an ihm vorbei und lieferte erstmals gestochen scharfe Bilder einer überraschend lebendigen, jungen Oberfläche.",
      ],
      en: [
        "From its discovery in 1930, Pluto was considered the ninth planet for 76 years, until the International Astronomical Union reclassified it as a dwarf planet in 2006. It is the best-known resident of the Kuiper Belt beyond Neptune's orbit.",
        "Despite its tiny size, Pluto is astonishingly varied: a heart-shaped plain of nitrogen ice (Tombaugh Regio), mountains of water ice as tall as the Alps, and a thin, bluish haze of atmosphere. Its largest moon Charon is half the size of Pluto itself – the two orbit a shared centre of gravity out in space.",
        "Until 2015 Pluto was just a fuzzy dot of light. Then the New Horizons probe raced past at nearly 50,000 km/h and delivered the first razor-sharp images of a surprisingly lively, young surface.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",           en: "Type" },           value: { de: "Zwergplanet (Kuipergürtel)",     en: "Dwarf planet (Kuiper Belt)" } },
        { label: { de: "Mittl. Entfernung", en: "Mean distance" }, value: { de: "39,5 AE · 5,91 Mrd. km",      en: "39.5 AU · 5.91 billion km" } },
        { label: { de: "Durchmesser",   en: "Diameter" },       value: { de: "2.377 km (0,19 × Erde)",          en: "2,377 km (0.19 × Earth)" } },
        { label: { de: "Masse",         en: "Mass" },           value: { de: "0,0022 Erdmassen",               en: "0.0022 Earth masses" } },
        { label: { de: "Monde",         en: "Moons" },          value: { de: "5 (größter: Charon)",            en: "5 (largest: Charon)" } },
      ]},
      { title: { de: "Steckbrief", en: "Profile" }, rows: [
        { label: { de: "Temperatur",  en: "Temperature" },  value: { de: "~ −229 °C",                 en: "~ −229 °C" } },
        { label: { de: "Tageslänge",  en: "Day length" },   value: { de: "6,4 Erdtage",               en: "6.4 Earth days" } },
        { label: { de: "Jahr",        en: "Year" },         value: { de: "248 Erdjahre",              en: "248 Earth years" } },
        { label: { de: "Atmosphäre",  en: "Atmosphere" },   value: { de: "dünn (Stickstoff, Methan)", en: "thin (nitrogen, methane)" } },
      ]},
      { title: { de: "Erforschung", en: "Exploration" }, rows: [
        { label: { de: "New Horizons", en: "New Horizons" }, value: { de: "erster Vorbeiflug 2015", en: "first flyby 2015" } },
        { label: { de: "Entdeckung",   en: "Discovery" },    value: { de: "1930 (Clyde Tombaugh)",  en: "1930 (Clyde Tombaugh)" } },
      ]},
      { title: { de: "Lichtlaufzeit von der Sonne", en: "Light travel time from the Sun" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~5,5 Stunden", en: "~5.5 hours" } },
      ]},
    ],
  },

  ceres: {
    desc: {
      de: [
        "Ceres ist der größte Körper des Asteroidengürtels zwischen Mars und Jupiter und der einzige Zwergplanet im inneren Sonnensystem. Bei seiner Entdeckung 1801 durch Giuseppe Piazzi hielt man ihn zunächst für einen neuen Planeten.",
        "Etwa ein Viertel von Ceres’ Masse könnte aus Wassereis bestehen, womöglich mehr Süßwasser, als die Erde besitzt. Auffällig sind die hellen Salzflecken im Krater Occator – Ablagerungen aus Sole, die aus dem Inneren an die Oberfläche drang und dort verdampfte.",
        "NASAs Sonde Dawn umkreiste Ceres von 2015 bis 2018 und machte ihn zum ersten Zwergplaneten, der von einem Raumfahrzeug aus der Nähe untersucht wurde. Seit dem Ende der Mission ruht Dawn antriebslos in einer stabilen Umlaufbahn um Ceres.",
      ],
      en: [
        "Ceres is the largest body in the asteroid belt between Mars and Jupiter and the only dwarf planet in the inner Solar System. When Giuseppe Piazzi discovered it in 1801, it was at first taken for a new planet.",
        "About a quarter of Ceres's mass may be water ice – possibly more fresh water than the Earth holds. Striking are the bright salt deposits in Occator crater – residues of brine that welled up from the interior and evaporated at the surface.",
        "NASA's Dawn probe orbited Ceres from 2015 to 2018, making it the first dwarf planet to be studied up close by a spacecraft. Since the mission ended, Dawn rests powerless in a stable orbit around Ceres.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",           en: "Type" },           value: { de: "Zwergplanet (Asteroidengürtel)", en: "Dwarf planet (asteroid belt)" } },
        { label: { de: "Mittl. Entfernung", en: "Mean distance" }, value: { de: "2,77 AE · 414 Mio. km",       en: "2.77 AU · 414 million km" } },
        { label: { de: "Durchmesser",   en: "Diameter" },       value: { de: "939 km (0,07 × Erde)",            en: "939 km (0.07 × Earth)" } },
        { label: { de: "Masse",         en: "Mass" },           value: { de: "~0,00016 Erdmassen",             en: "~0.00016 Earth masses" } },
        { label: { de: "Monde",         en: "Moons" },          value: { de: "keine",                           en: "none" } },
      ]},
      { title: { de: "Steckbrief", en: "Profile" }, rows: [
        { label: { de: "Temperatur",  en: "Temperature" },  value: { de: "~ −105 °C (Mittel)",        en: "~ −105 °C (average)" } },
        { label: { de: "Tageslänge",  en: "Day length" },   value: { de: "9,1 Stunden",               en: "9.1 hours" } },
        { label: { de: "Jahr",        en: "Year" },         value: { de: "4,6 Erdjahre",              en: "4.6 Earth years" } },
        { label: { de: "Atmosphäre",  en: "Atmosphere" },   value: { de: "keine (zeitweise Wasserdampf)", en: "none (occasional water vapour)" } },
      ]},
      { title: { de: "Erforschung", en: "Exploration" }, rows: [
        { label: { de: "Dawn",       en: "Dawn" },       value: { de: "Orbit 2015–2018",       en: "orbit 2015–2018" } },
        { label: { de: "Entdeckung", en: "Discovery" },  value: { de: "1801 (Giuseppe Piazzi)", en: "1801 (Giuseppe Piazzi)" } },
      ]},
      { title: { de: "Lichtlaufzeit von der Sonne", en: "Light travel time from the Sun" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~23 Minuten", en: "~23 minutes" } },
      ]},
    ],
  },

  eris: {
    desc: {
      de: [
        "Eris ist ein Zwergplanet weit draußen im sogenannten Streuscheiben-Gürtel jenseits des Kuipergürtels. Obwohl er einen Tick kleiner ist als Pluto, ist er mit etwa 27 % mehr Masse der schwerste bekannte Zwergplanet.",
        "Genau diese Entdeckung im Jahr 2005 löste die große Planeten-Debatte aus: Wenn Eris massereicher als Pluto ist, müsste auch er ein Planet sein – oder Pluto eben keiner. Die Astronomie entschied sich 2006 für eine neue Klasse, die Zwergplaneten. Eris trägt seinen Namen treffend nach der griechischen Göttin der Zwietracht.",
        "Eris wurde noch nie von einer Sonde besucht; alles, was wir wissen, stammt aus Teleskopbeobachtungen. Er besitzt einen Mond namens Dysnomia, und seine eisige Oberfläche aus gefrorenem Methan gehört zu den kältesten und reflektierendsten im Sonnensystem.",
      ],
      en: [
        "Eris is a dwarf planet far out in the so-called scattered disc beyond the Kuiper Belt. Although it is a touch smaller than Pluto, with about 27 % more mass it is the most massive dwarf planet known.",
        "It was precisely this 2005 discovery that triggered the great planet debate: if Eris is more massive than Pluto, then it too should be a planet – or Pluto should not be one. In 2006 astronomers settled on a new category, the dwarf planets. Eris is fittingly named after the Greek goddess of strife.",
        "Eris has never been visited by a spacecraft; everything we know comes from telescope observations. It has a moon called Dysnomia, and its icy surface of frozen methane is among the coldest and most reflective in the Solar System.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",           en: "Type" },           value: { de: "Zwergplanet (Streuscheibe)",     en: "Dwarf planet (scattered disc)" } },
        { label: { de: "Mittl. Entfernung", en: "Mean distance" }, value: { de: "~68 AE · ~10,1 Mrd. km",      en: "~68 AU · ~10.1 billion km" } },
        { label: { de: "Durchmesser",   en: "Diameter" },       value: { de: "~2.326 km (0,18 × Erde)",         en: "~2,326 km (0.18 × Earth)" } },
        { label: { de: "Masse",         en: "Mass" },           value: { de: "~0,0028 Erdmassen (27 % > Pluto)", en: "~0.0028 Earth masses (27 % > Pluto)" } },
        { label: { de: "Monde",         en: "Moons" },          value: { de: "1 (Dysnomia)",                   en: "1 (Dysnomia)" } },
      ]},
      { title: { de: "Steckbrief", en: "Profile" }, rows: [
        { label: { de: "Temperatur",  en: "Temperature" },  value: { de: "~ −217 °C",                 en: "~ −217 °C" } },
        { label: { de: "Tageslänge",  en: "Day length" },   value: { de: "~25,9 Stunden",             en: "~25.9 hours" } },
        { label: { de: "Jahr",        en: "Year" },         value: { de: "~558 Erdjahre",             en: "~558 Earth years" } },
        { label: { de: "Atmosphäre",  en: "Atmosphere" },   value: { de: "keine (gefrorenes Methan-Eis)", en: "none (frozen methane ice)" } },
      ]},
      { title: { de: "Erforschung", en: "Exploration" }, rows: [
        { label: { de: "Sonden",     en: "Probes" },     value: { de: "noch nie besucht",      en: "never visited" } },
        { label: { de: "Entdeckung", en: "Discovery" },  value: { de: "2005 (Mike Brown u. a.)", en: "2005 (Mike Brown et al.)" } },
      ]},
      { title: { de: "Lichtlaufzeit von der Sonne", en: "Light travel time from the Sun" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~9,4 Stunden", en: "~9.4 hours" } },
      ]},
    ],
  },

  sedna: {
    desc: {
      de: [
        "Sedna ist ein Zwergplanet-Kandidat auf einer der extremsten Bahnen, die man kennt. Selbst in seinem sonnennächsten Punkt bleibt er weit jenseits des Kuipergürtels – er gehört zu einer rätselhaften Klasse abgetrennter Objekte im äußersten Sonnensystem.",
        "Ein einziger Umlauf dauert rund 11.400 Jahre und führt ihn bis etwa 937 AE von der Sonne hinaus – fast das 25-Fache der Plutobahn. Astronomen vermuten, dass ein vorbeiziehender Stern oder ein bislang unentdeckter ferner Planet Sednas Bahn so weit hinausgeschleudert hat.",
        "Benannt nach der Inuit-Göttin des Meeres, wurde Sedna 2003 entdeckt und nähert sich seither langsam seinem sonnennächsten Punkt – ein seltenes Beobachtungsfenster, das erst um 2076 sein Maximum erreicht. Eine Sonde war nie dort.",
      ],
      en: [
        "Sedna is a dwarf-planet candidate on one of the most extreme orbits known. Even at its closest approach to the Sun it stays far beyond the Kuiper Belt – it belongs to a puzzling class of detached objects in the outermost Solar System.",
        "A single orbit takes about 11,400 years and carries it out to roughly 937 AU from the Sun – nearly 25 times Pluto's distance. Astronomers suspect a passing star, or an as-yet-undiscovered distant planet, flung Sedna's orbit out this far.",
        "Named after the Inuit goddess of the sea, Sedna was discovered in 2003 and has been slowly approaching its closest point to the Sun ever since – a rare observing window that peaks only around 2076. No probe has ever been there.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",           en: "Type" },           value: { de: "Zwergplanet-Kandidat (abgetrenntes Objekt)", en: "Dwarf-planet candidate (detached object)" } },
        { label: { de: "Bahn",          en: "Orbit" },          value: { de: "76 AE (Perihel) bis 937 AE (Aphel)", en: "76 AU (perihelion) to 937 AU (aphelion)" } },
        { label: { de: "Durchmesser",   en: "Diameter" },       value: { de: "~1.000 km",                       en: "~1,000 km" } },
        { label: { de: "Masse",         en: "Mass" },           value: { de: "unbekannt (sehr gering)",        en: "unknown (very small)" } },
        { label: { de: "Monde",         en: "Moons" },          value: { de: "keine bekannt",                  en: "none known" } },
      ]},
      { title: { de: "Steckbrief", en: "Profile" }, rows: [
        { label: { de: "Temperatur",  en: "Temperature" },  value: { de: "~ −240 °C",                 en: "~ −240 °C" } },
        { label: { de: "Jahr",        en: "Year" },         value: { de: "~11.400 Erdjahre",          en: "~11,400 Earth years" } },
        { label: { de: "Atmosphäre",  en: "Atmosphere" },   value: { de: "keine",                     en: "none" } },
        { label: { de: "Nächste Sonnennähe", en: "Next perihelion" }, value: { de: "um 2076",          en: "around 2076" } },
      ]},
      { title: { de: "Erforschung", en: "Exploration" }, rows: [
        { label: { de: "Sonden",     en: "Probes" },     value: { de: "noch nie besucht",      en: "never visited" } },
        { label: { de: "Entdeckung", en: "Discovery" },  value: { de: "2003 (Mike Brown u. a.)", en: "2003 (Mike Brown et al.)" } },
      ]},
      { title: { de: "Lichtlaufzeit von der Sonne", en: "Light travel time from the Sun" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~11,5 Stunden (aktuell)", en: "~11.5 hours (currently)" } },
      ]},
    ],
  },

});
