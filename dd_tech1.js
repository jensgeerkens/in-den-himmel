/* dd_tech1.js — Detail-Infos: Bezugspunkte (Berge/Bauwerke) + Luftfahrt. Object.assign in SKY_DETAILS. */
Object.assign(SKY_DETAILS, {

  /* ============================ REFERENCE ============================ */

  burj: {
    desc: {
      de: [
        "Der Burj Khalifa in Dubai ist mit 828 m das höchste Bauwerk der Welt – höher als drei Eiffeltürme übereinander.",
        "Selbst seine Antennenspitze bleibt in der Welt der niedrig fliegenden Vögel: Sie überragt zwar jeden Berg der Umgebung, doch ein Mauersegler oder eine Taube zieht mühelos darüber hinweg.",
        "An manchen Tagen können Bewohner der obersten Etagen den Sonnenuntergang ein zweites Mal erleben, wenn sie schnell genug nach oben fahren – so groß ist der Höhenunterschied innerhalb des Turms.",
      ],
      en: [
        "Standing 828 m tall in Dubai, the Burj Khalifa is the tallest structure in the world – higher than three Eiffel Towers stacked on top of one another.",
        "Even its antenna tip stays within the realm of low-flying birds: it dwarfs every nearby hill, yet a swift or a pigeon glides over it with ease.",
        "On some days, residents of the top floors can watch the sunset a second time by racing upward fast enough – such is the difference in altitude within the tower itself.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Höhe",       en: "Height" },        value: { de: "828 m", en: "828 m" } },
        { label: { de: "Lage",       en: "Location" },       value: { de: "Dubai, Vereinigte Arabische Emirate", en: "Dubai, United Arab Emirates" } },
        { label: { de: "Eröffnung",  en: "Opened" },         value: { de: "2010", en: "2010" } },
        { label: { de: "Architekt",  en: "Architect" },      value: { de: "Adrian Smith (SOM)", en: "Adrian Smith (SOM)" } },
      ]},
      { title: { de: "Rekorde", en: "Records" }, rows: [
        { label: { de: "Etagen",     en: "Floors" },         value: { de: "163 nutzbare Stockwerke", en: "163 usable storeys" } },
        { label: { de: "Status",     en: "Status" },         value: { de: "höchstes Bauwerk der Erde", en: "tallest structure on Earth" } },
      ]},
    ],
  },

  montblanc: {
    desc: {
      de: [
        "Der Mont Blanc ist mit 4.808 m der höchste Gipfel der Alpen und thront an der Grenze zwischen Frankreich und Italien.",
        "Auf dieser Höhe ist die Luft schon merklich dünn, doch genau hier ziehen Steinadler und Bartgeier ihre Kreise – Vögel, die das Hochgebirge zu ihrem Jagdrevier gemacht haben.",
        "Sein Gipfel trägt eine Eishaube, deren Höhe von Jahr zu Jahr um Meter schwankt: Was wir als „höchsten Punkt der Alpen“ messen, ist eigentlich ein vom Wind geformter Schneehügel.",
      ],
      en: [
        "At 4,808 m, Mont Blanc is the highest summit in the Alps, presiding over the border between France and Italy.",
        "At this altitude the air is already noticeably thin, yet this is exactly where golden eagles and bearded vultures circle – birds that have made the high mountains their hunting ground.",
        "Its summit wears a dome of ice whose height shifts by metres from year to year: what we measure as the “highest point of the Alps” is really a wind-sculpted hill of snow.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Höhe",          en: "Height" },        value: { de: "4.808 m", en: "4,808 m" } },
        { label: { de: "Lage",          en: "Location" },       value: { de: "Grenze Frankreich / Italien (Alpen)", en: "France / Italy border (Alps)" } },
        { label: { de: "Erstbesteigung", en: "First ascent" },  value: { de: "1786 (Paccard & Balmat)", en: "1786 (Paccard & Balmat)" } },
      ]},
      { title: { de: "Lebensraum", en: "Habitat" }, rows: [
        { label: { de: "Tierwelt", en: "Wildlife" }, value: { de: "Steinadler, Bartgeier, Gämse", en: "golden eagles, bearded vultures, chamois" } },
        { label: { de: "Status",   en: "Status" },   value: { de: "höchster Gipfel der Alpen", en: "highest summit of the Alps" } },
      ]},
    ],
  },

  everest: {
    desc: {
      de: [
        "Der Mount Everest ist mit 8.849 m der höchste Berg der Erde, gelegen im Himalaya an der Grenze zwischen Nepal und Tibet.",
        "Sein Gipfel ragt in die sogenannte „Todeszone“ hinauf, wo der Luftdruck nur noch ein Drittel des Werts auf Meereshöhe beträgt – zu wenig zum Atmen für die meisten Lebewesen.",
        "Und doch wurden hier Streifengänse beobachtet, die den Everest auf ihrem Zug überfliegen: Sie gehören zu den höchstfliegenden Vögeln überhaupt und meistern eine Höhe, die Menschen nur mit Sauerstoffflaschen erreichen.",
      ],
      en: [
        "At 8,849 m, Mount Everest is the highest mountain on Earth, set in the Himalaya on the border between Nepal and Tibet.",
        "Its summit rises into the so-called “death zone”, where air pressure is only a third of that at sea level – too little to breathe for most living things.",
        "And yet bar-headed geese have been recorded flying over Everest on migration: they rank among the highest-flying birds of all, mastering an altitude that humans reach only with oxygen tanks.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Höhe",          en: "Height" },        value: { de: "8.849 m", en: "8,849 m" } },
        { label: { de: "Lage",          en: "Location" },       value: { de: "Himalaya, Grenze Nepal / Tibet", en: "Himalaya, Nepal / Tibet border" } },
        { label: { de: "Erstbesteigung", en: "First ascent" },  value: { de: "1953 (Hillary & Tenzing)", en: "1953 (Hillary & Tenzing)" } },
      ]},
      { title: { de: "Extreme", en: "Extremes" }, rows: [
        { label: { de: "Luftdruck am Gipfel", en: "Summit air pressure" }, value: { de: "~ ein Drittel von Meereshöhe", en: "~one third of sea level" } },
        { label: { de: "Status",              en: "Status" },              value: { de: "höchster Berg der Erde", en: "highest mountain on Earth" } },
      ]},
    ],
  },

  karman: {
    desc: {
      de: [
        "Die Kármán-Linie in 100 km Höhe gilt als die offizielle Grenze zwischen Erdatmosphäre und Weltraum.",
        "Sie ist nach dem Physiker Theodore von Kármán benannt, der berechnete, dass oberhalb dieser Höhe die Luft so dünn ist, dass Tragflächen keinen Auftrieb mehr erzeugen – ein Fahrzeug müsste schneller als die Bahngeschwindigkeit fliegen, um oben zu bleiben.",
        "Darüber gibt es keinen „Flug“ im klassischen Sinn mehr: Wer dort bleiben will, muss um die Erde fallen, also in eine Umlaufbahn eintreten.",
      ],
      en: [
        "The Kármán Line at 100 km altitude is regarded as the official boundary between Earth's atmosphere and outer space.",
        "It is named after the physicist Theodore von Kármán, who calculated that above this height the air is so thin that wings can no longer generate lift – a vehicle would have to fly faster than orbital speed to stay aloft.",
        "Above it there is no “flying” in the classic sense: to remain there you must fall around the Earth, that is, enter orbit.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Höhe",     en: "Altitude" },  value: { de: "100 km", en: "100 km" } },
        { label: { de: "Benannt nach", en: "Named after" }, value: { de: "Theodore von Kármán", en: "Theodore von Kármán" } },
        { label: { de: "Definition", en: "Defined by" }, value: { de: "FAI (Luftfahrt-Weltverband)", en: "FAI (world air sports federation)" } },
      ]},
      { title: { de: "Bedeutung", en: "Significance" }, rows: [
        { label: { de: "Grenze",   en: "Boundary" },  value: { de: "Atmosphäre ↔ Weltraum", en: "atmosphere ↔ space" } },
        { label: { de: "Darüber",  en: "Above" },      value: { de: "kein aerodynamischer Flug mehr", en: "no aerodynamic flight possible" } },
      ]},
    ],
  },

  asteroidbelt: {
    desc: {
      de: [
        "Zwischen den Bahnen von Mars und Jupiter kreisen Millionen von Felsbrocken – der Asteroidengürtel, Trümmer aus der Frühzeit des Sonnensystems.",
        "Anders als in Science-Fiction-Filmen ist er fast leer: Die einzelnen Brocken sind im Schnitt Hunderttausende Kilometer voneinander entfernt, eine Raumsonde durchquert ihn gefahrlos.",
        "Aus diesem Material wäre einst beinahe ein weiterer Planet entstanden, doch Jupiters gewaltige Schwerkraft verhinderte, dass sich die Bruchstücke zusammenballten.",
      ],
      en: [
        "Between the orbits of Mars and Jupiter circle millions of rocks – the asteroid belt, debris from the early days of the Solar System.",
        "Unlike in science-fiction films, it is nearly empty: individual rocks are on average hundreds of thousands of kilometres apart, and a spacecraft crosses it without danger.",
        "This material once almost formed another planet, but Jupiter's immense gravity prevented the fragments from clumping together.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Lage",        en: "Location" },   value: { de: "zwischen Mars und Jupiter", en: "between Mars and Jupiter" } },
        { label: { de: "Entfernung",  en: "Distance" },   value: { de: "~2,2–3,2 AE von der Sonne", en: "~2.2–3.2 AU from the Sun" } },
        { label: { de: "Größtes Objekt", en: "Largest object" }, value: { de: "Zwergplanet Ceres (~940 km)", en: "dwarf planet Ceres (~940 km)" } },
      ]},
      { title: { de: "Herkunft", en: "Origin" }, rows: [
        { label: { de: "Natur",   en: "Nature" }, value: { de: "Reste der Planetenbildung", en: "leftovers of planet formation" } },
        { label: { de: "Grund",   en: "Reason" }, value: { de: "Jupiters Schwerkraft verhinderte einen Planeten", en: "Jupiter's gravity prevented a planet" } },
      ]},
    ],
  },

  psyche: {
    desc: {
      de: [
        "Psyche ist ein ungewöhnlicher Asteroid im äußeren Hauptgürtel: Er besteht zu großen Teilen aus Metall statt aus Gestein.",
        "Forscher vermuten, dass es sich um den freigelegten Eisen-Nickel-Kern eines Protoplaneten handeln könnte, dessen Gesteinsmantel bei einer urzeitlichen Kollision abgesprengt wurde.",
        "Eine gleichnamige NASA-Sonde ist seit 2023 unterwegs und soll Psyche ab 2029 erkunden – ein Blick auf das, was tief im Inneren der Erde verborgen liegt.",
      ],
      en: [
        "Psyche is an unusual asteroid in the outer main belt: it is composed largely of metal rather than rock.",
        "Researchers suspect it may be the exposed iron-nickel core of a protoplanet whose rocky mantle was blasted away in a primordial collision.",
        "A NASA probe of the same name has been on its way since 2023 and is set to explore Psyche from 2029 – a glimpse of what lies hidden deep inside the Earth.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",        en: "Type" },       value: { de: "metallreicher Asteroid", en: "metal-rich asteroid" } },
        { label: { de: "Lage",       en: "Location" },   value: { de: "äußerer Asteroidengürtel", en: "outer asteroid belt" } },
        { label: { de: "Durchmesser", en: "Diameter" },  value: { de: "~220 km", en: "~220 km" } },
      ]},
      { title: { de: "Erforschung", en: "Exploration" }, rows: [
        { label: { de: "Mission",   en: "Mission" }, value: { de: "NASA Psyche (Start 2023)", en: "NASA Psyche (launched 2023)" } },
        { label: { de: "Ankunft",   en: "Arrival" }, value: { de: "~2029", en: "~2029" } },
      ]},
    ],
  },

  comet67p: {
    desc: {
      de: [
        "Der Komet 67P/Tschurjumow-Gerassimenko trägt wegen seiner zweiteiligen Form den Spitznamen „Gummiente“.",
        "2014 gelang hier ein historischer Moment: Die ESA-Sonde Rosetta begleitete den Kometen über zwei Jahre, und ihr Lander Philae setzte als erstes von Menschen gebautes Gerät überhaupt auf einem Kometenkern auf.",
        "Während 67P sich der Sonne näherte, beobachtete Rosetta aus nächster Nähe, wie Eis verdampfte und der Komet seinen leuchtenden Schweif ausbildete.",
      ],
      en: [
        "Comet 67P/Churyumov-Gerasimenko earned the nickname “rubber duck” because of its two-lobed shape.",
        "In 2014 a historic moment unfolded here: ESA's Rosetta spacecraft accompanied the comet for over two years, and its Philae lander became the first human-made device ever to touch down on a comet's nucleus.",
        "As 67P approached the Sun, Rosetta watched from close up as ice vaporised and the comet grew its glowing tail.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",      en: "Type" },     value: { de: "Komet (Jupiter-Familie)", en: "comet (Jupiter family)" } },
        { label: { de: "Form",     en: "Shape" },    value: { de: "zweiteilig („Gummiente“)", en: "two-lobed (“rubber duck”)" } },
        { label: { de: "Umlaufzeit", en: "Orbit period" }, value: { de: "~6,4 Jahre", en: "~6.4 years" } },
      ]},
      { title: { de: "Mission", en: "Mission" }, rows: [
        { label: { de: "Sonde",   en: "Probe" },     value: { de: "ESA Rosetta / Lander Philae", en: "ESA Rosetta / Philae lander" } },
        { label: { de: "Landung", en: "Landing" },   value: { de: "12. November 2014", en: "12 November 2014" } },
      ]},
    ],
  },

  halley: {
    desc: {
      de: [
        "Der Halleysche Komet ist der berühmteste Komet überhaupt – seit 240 v. Chr. wird seine Wiederkehr von Menschen dokumentiert.",
        "Edmond Halley erkannte 1705, dass es sich bei mehreren historischen Erscheinungen um ein und dasselbe Objekt handelt, und sagte seine Rückkehr richtig voraus.",
        "Alle rund 76 Jahre zieht er für wenige Wochen am Himmel vorbei; sein letzter Besuch war 1986, und erst 2061 wird er wieder mit bloßem Auge zu sehen sein.",
      ],
      en: [
        "Halley's Comet is the most famous comet of all – its returns have been recorded by humans since 240 BC.",
        "In 1705 Edmond Halley realised that several historical apparitions were one and the same object, and correctly predicted its return.",
        "Roughly every 76 years it sweeps past in the sky for a few weeks; its last visit was in 1986, and not until 2061 will it again be visible to the naked eye.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",        en: "Type" },         value: { de: "kurzperiodischer Komet", en: "short-period comet" } },
        { label: { de: "Umlaufzeit", en: "Orbit period" }, value: { de: "~76 Jahre", en: "~76 years" } },
        { label: { de: "Erste Aufzeichnung", en: "First record" }, value: { de: "240 v. Chr.", en: "240 BC" } },
      ]},
      { title: { de: "Erscheinungen", en: "Apparitions" }, rows: [
        { label: { de: "Letzter Besuch", en: "Last visit" }, value: { de: "1986", en: "1986" } },
        { label: { de: "Nächster Besuch", en: "Next visit" }, value: { de: "2061", en: "2061" } },
      ]},
    ],
  },

  arrokoth: {
    desc: {
      de: [
        "Arrokoth ist ein eisiger Brocken im Kuipergürtel, weit jenseits von Pluto – ein Überbleibsel aus der Geburtsstunde des Sonnensystems vor rund 4,5 Milliarden Jahren.",
        "Am Neujahrstag 2019 raste die NASA-Sonde New Horizons daran vorbei und machte Arrokoth zum fernsten Objekt, das je von einer Raumsonde besucht wurde.",
        "Seine „Schneemann“-Gestalt aus zwei sanft verschmolzenen Hälften zeigt, wie sich in der Frühzeit größere Körper aus kleineren Brocken zusammenfügten – fast unverändert eingefroren über Jahrmilliarden.",
      ],
      en: [
        "Arrokoth is an icy lump in the Kuiper Belt, far beyond Pluto – a leftover from the birth of the Solar System some 4.5 billion years ago.",
        "On New Year's Day 2019 NASA's New Horizons probe swept past it, making Arrokoth the most distant object ever visited by a spacecraft.",
        "Its “snowman” shape of two gently merged halves shows how larger bodies assembled from smaller pieces in the early days – frozen almost unchanged for billions of years.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",       en: "Type" },     value: { de: "Kuipergürtel-Objekt", en: "Kuiper Belt object" } },
        { label: { de: "Form",      en: "Shape" },    value: { de: "zweiteiliger „Schneemann“", en: "two-lobed “snowman”" } },
        { label: { de: "Länge",     en: "Length" },   value: { de: "~36 km", en: "~36 km" } },
      ]},
      { title: { de: "Mission", en: "Mission" }, rows: [
        { label: { de: "Sonde",     en: "Probe" },    value: { de: "NASA New Horizons", en: "NASA New Horizons" } },
        { label: { de: "Vorbeiflug", en: "Flyby" },   value: { de: "1. Januar 2019", en: "1 January 2019" } },
      ]},
    ],
  },

  oumuamua: {
    desc: {
      de: [
        "ʻOumuamua war 2017 der erste je bestätigte interstellare Besucher – ein Objekt, das nicht aus unserem Sonnensystem stammt, sondern aus den Weiten zwischen den Sternen kam.",
        "Sein hawaiianischer Name bedeutet sinngemäß „Bote aus der Ferne“. Auf seiner extrem langgestreckten, fast zigarrenförmigen Bahn raste es nur kurz an der Sonne vorbei und verschwand wieder.",
        "Bis heute rätseln Forscher über seine ungewöhnliche Beschleunigung beim Hinausflug – ein flüchtiger Gast, der schon wieder auf dem Weg zurück in die interstellare Dunkelheit ist.",
      ],
      en: [
        "In 2017 ʻOumuamua became the first confirmed interstellar visitor – an object that did not originate in our Solar System but came from the vastness between the stars.",
        "Its Hawaiian name means roughly “messenger from afar”. On its extremely elongated, almost cigar-shaped path it swept briefly past the Sun and vanished again.",
        "To this day researchers puzzle over its unusual acceleration on the way out – a fleeting guest already heading back into interstellar darkness.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",      en: "Type" },     value: { de: "interstellares Objekt", en: "interstellar object" } },
        { label: { de: "Form",     en: "Shape" },    value: { de: "stark langgestreckt", en: "highly elongated" } },
        { label: { de: "Entdeckt", en: "Discovered" }, value: { de: "19. Oktober 2017", en: "19 October 2017" } },
      ]},
      { title: { de: "Bedeutung", en: "Significance" }, rows: [
        { label: { de: "Herkunft", en: "Origin" },   value: { de: "anderes Sternsystem", en: "another star system" } },
        { label: { de: "Status",   en: "Status" },   value: { de: "erster bestätigter interstellarer Besucher", en: "first confirmed interstellar visitor" } },
      ]},
    ],
  },

  heliopause: {
    desc: {
      de: [
        "Die Heliopause ist die wahre Grenze des Sonnensystems: Hier verliert der Sonnenwind seinen Schub und stößt auf das dünne Gas zwischen den Sternen.",
        "Innerhalb dieser Blase – der Heliosphäre – herrscht die Sonne; jenseits davon beginnt der interstellare Raum.",
        "2012 durchquerte die NASA-Sonde Voyager 1 als erstes von Menschen gebautes Objekt diese Grenze und sendet seither Messdaten aus dem Raum zwischen den Sternen zur Erde.",
      ],
      en: [
        "The heliopause is the true edge of the Solar System: here the solar wind loses its push and meets the thin gas between the stars.",
        "Inside this bubble – the heliosphere – the Sun rules; beyond it interstellar space begins.",
        "In 2012 NASA's Voyager 1 became the first human-made object to cross this boundary, and it has been sending back measurements from the space between the stars ever since.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Was",        en: "What" },       value: { de: "Außengrenze der Heliosphäre", en: "outer edge of the heliosphere" } },
        { label: { de: "Entfernung", en: "Distance" },   value: { de: "~120 AE von der Sonne", en: "~120 AU from the Sun" } },
        { label: { de: "Grenze",     en: "Boundary" },   value: { de: "Sonnenwind ↔ interstellares Gas", en: "solar wind ↔ interstellar gas" } },
      ]},
      { title: { de: "Erforschung", en: "Exploration" }, rows: [
        { label: { de: "Durchflug",  en: "Crossed by" }, value: { de: "Voyager 1 (2012)", en: "Voyager 1 (2012)" } },
        { label: { de: "Status",     en: "Status" },     value: { de: "Tor zum interstellaren Raum", en: "gateway to interstellar space" } },
      ]},
    ],
  },

  oortcloud: {
    desc: {
      de: [
        "Die Oortsche Wolke ist eine riesige, kugelförmige Hülle aus Milliarden eisiger Kometen, die das gesamte Sonnensystem umgibt.",
        "Sie ist so weit entfernt, dass die Sonne von dort nur als heller Stern erscheint; ihr äußerer Rand reicht fast bis zum nächsten Sternsystem.",
        "Bislang ist sie nur theoretisch erschlossen – noch hat keine Sonde sie erreicht, und selbst Voyager 1 würde tausende Jahre brauchen, um auch nur ihren inneren Rand zu erreichen.",
      ],
      en: [
        "The Oort Cloud is a vast, spherical shell of billions of icy comets that surrounds the entire Solar System.",
        "It lies so far away that from there the Sun appears merely as a bright star; its outer edge reaches almost to the nearest star system.",
        "So far it is known only in theory – no probe has reached it, and even Voyager 1 would take thousands of years just to reach its inner edge.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Form",       en: "Shape" },      value: { de: "kugelförmige Hülle", en: "spherical shell" } },
        { label: { de: "Entfernung", en: "Distance" },   value: { de: "~2.000 bis 100.000+ AE", en: "~2,000 to 100,000+ AU" } },
        { label: { de: "Inhalt",     en: "Contents" },   value: { de: "Milliarden eisiger Kometen", en: "billions of icy comets" } },
      ]},
      { title: { de: "Bedeutung", en: "Significance" }, rows: [
        { label: { de: "Status",     en: "Status" },     value: { de: "noch nie direkt beobachtet", en: "never observed directly" } },
        { label: { de: "Rolle",      en: "Role" },       value: { de: "Quelle langperiodischer Kometen", en: "source of long-period comets" } },
      ]},
    ],
  },

  /* ============================ AIRCRAFT ============================ */

  drohne: {
    desc: {
      de: [
        "Consumer-Drohnen sind die Einstiegsklasse der Luftfahrt – kleine, ferngesteuerte Multikopter für Fotos, Videos und Hobbyflüge.",
        "In der EU dürfen sie im Normalbetrieb meist nur bis 120 m über Grund steigen, also knapp über die höchsten Baumwipfel.",
        "Diese Grenze ist kein technisches Limit, sondern eine Sicherheitsregel: Darüber beginnt der Luftraum, in dem bemannte Flugzeuge und Hubschrauber unterwegs sind.",
      ],
      en: [
        "Consumer drones are aviation's entry class – small, remote-controlled multicopters for photos, videos and hobby flights.",
        "In the EU they may usually climb only up to 120 m above ground in normal operation, just above the tallest treetops.",
        "This limit is not a technical one but a safety rule: above it begins the airspace where crewed aircraft and helicopters travel.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",       en: "Type" },          value: { de: "ferngesteuerter Multikopter", en: "remote-controlled multicopter" } },
        { label: { de: "Antrieb",   en: "Propulsion" },     value: { de: "Elektromotoren, Akku", en: "electric motors, battery" } },
        { label: { de: "Status",    en: "Status" },         value: { de: "ziviler Hobby- und Fotoeinsatz", en: "civilian hobby and photo use" } },
      ]},
      { title: { de: "Höhe & Grenze", en: "Altitude & limit" }, rows: [
        { label: { de: "EU-Höhenlimit", en: "EU altitude limit" }, value: { de: "meist 120 m über Grund", en: "usually 120 m above ground" } },
        { label: { de: "Grund",     en: "Reason" },         value: { de: "Sicherheitsabstand zum bemannten Verkehr", en: "safety separation from crewed traffic" } },
      ]},
    ],
  },

  jet: {
    desc: {
      de: [
        "Verkehrsflugzeuge sind die Arbeitspferde der modernen Luftfahrt und befördern täglich Millionen Passagiere über Kontinente hinweg.",
        "Ihre typische Reiseflughöhe liegt zwischen 10 und 12 km – hoch über Wetter und Turbulenzen, wo die dünne Luft den Treibstoffverbrauch senkt.",
        "Genau in diesen Höhen ereignete sich 1973 die höchste je dokumentierte Vogelkollision: Ein Sperbergeier geriet über Westafrika auf rund 11 km Höhe in ein Triebwerk.",
      ],
      en: [
        "Airliners are the workhorses of modern aviation, carrying millions of passengers across continents every day.",
        "Their typical cruising altitude lies between 10 and 12 km – high above weather and turbulence, where the thin air lowers fuel consumption.",
        "It was at exactly these heights that the highest bird strike ever recorded happened in 1973: a Rüppell's vulture hit an engine over West Africa at around 11 km.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",       en: "Type" },         value: { de: "ziviles Strahlverkehrsflugzeug", en: "civil jet airliner" } },
        { label: { de: "Antrieb",   en: "Propulsion" },    value: { de: "Mantelstrom-Triebwerke", en: "turbofan engines" } },
        { label: { de: "Status",    en: "Status" },        value: { de: "weltweit im Linieneinsatz", en: "in scheduled service worldwide" } },
      ]},
      { title: { de: "Höhe & Leistung", en: "Altitude & performance" }, rows: [
        { label: { de: "Reiseflughöhe", en: "Cruise altitude" }, value: { de: "~10–12 km", en: "~10–12 km" } },
        { label: { de: "Geschwindigkeit", en: "Speed" },         value: { de: "~850–900 km/h", en: "~850–900 km/h" } },
      ]},
    ],
  },

  helikopter: {
    desc: {
      de: [
        "Hubschrauber erzeugen ihren Auftrieb mit rotierenden Tragflächen – und gerade das macht große Höhen so schwierig.",
        "Je dünner die Luft, desto weniger „greifen“ die Rotorblätter. Trotzdem trieb der Pilot Fred North 2002 einen Eurocopter auf 12.954 m hinauf und stellte damit einen Höhenrekord auf.",
        "In dieser Höhe finden die Rotoren kaum noch Halt; der Flug wird zu einem feinen Balanceakt am Rand des physikalisch Möglichen.",
      ],
      en: [
        "Helicopters generate lift with rotating wings – and that is exactly what makes great heights so difficult.",
        "The thinner the air, the less the rotor blades can “grip”. Even so, pilot Fred North pushed a Eurocopter to 12,954 m in 2002, setting an altitude record.",
        "At this height the rotors barely find any grip; the flight becomes a delicate balancing act at the edge of what is physically possible.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",      en: "Type" },        value: { de: "Hubschrauber (Drehflügler)", en: "helicopter (rotorcraft)" } },
        { label: { de: "Rekordpilot", en: "Record pilot" }, value: { de: "Fred North", en: "Fred North" } },
        { label: { de: "Jahr",     en: "Year" },         value: { de: "2002", en: "2002" } },
      ]},
      { title: { de: "Höhe & Leistung", en: "Altitude & performance" }, rows: [
        { label: { de: "Rekordhöhe", en: "Record altitude" }, value: { de: "12.954 m", en: "12,954 m" } },
        { label: { de: "Herausforderung", en: "Challenge" },  value: { de: "Rotoren verlieren in dünner Luft Auftrieb", en: "rotors lose lift in thin air" } },
      ]},
    ],
  },

  concorde: {
    desc: {
      de: [
        "Die Concorde war das einzige Überschall-Verkehrsflugzeug, das je im Linienbetrieb flog – ein britisch-französisches Gemeinschaftswerk aus den 1960er-Jahren.",
        "Sie reiste mit gut der doppelten Schallgeschwindigkeit und stieg auf bis zu 18 km Höhe – so hoch, dass Passagiere am Horizont die Krümmung der Erde erkennen konnten.",
        "In knapp drei Stunden überquerte sie den Atlantik; ein Tempo, das seit ihrer Ausmusterung 2003 von keinem Passagierflugzeug mehr erreicht wird.",
      ],
      en: [
        "Concorde was the only supersonic airliner ever to fly in scheduled service – a British-French joint venture from the 1960s.",
        "It travelled at well over twice the speed of sound and climbed to as much as 18 km – high enough for passengers to make out the curvature of the Earth on the horizon.",
        "It crossed the Atlantic in just under three hours; a pace no passenger aircraft has matched since its retirement in 2003.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",       en: "Type" },        value: { de: "Überschall-Verkehrsflugzeug", en: "supersonic airliner" } },
        { label: { de: "Erstflug",  en: "First flight" }, value: { de: "1969", en: "1969" } },
        { label: { de: "Hersteller", en: "Manufacturer" }, value: { de: "Aérospatiale / BAC", en: "Aérospatiale / BAC" } },
        { label: { de: "Status",    en: "Status" },       value: { de: "außer Dienst seit 2003", en: "retired since 2003" } },
      ]},
      { title: { de: "Höhe & Leistung", en: "Altitude & performance" }, rows: [
        { label: { de: "Dienstgipfelhöhe", en: "Service ceiling" }, value: { de: "~18 km", en: "~18 km" } },
        { label: { de: "Geschwindigkeit",  en: "Speed" },           value: { de: "Mach 2,04 (~2.180 km/h)", en: "Mach 2.04 (~2,180 km/h)" } },
        { label: { de: "Spannweite",       en: "Wingspan" },        value: { de: "~25,6 m", en: "~25.6 m" } },
      ]},
    ],
  },

  u2: {
    desc: {
      de: [
        "Die Lockheed U-2 „Dragon Lady“ ist ein Aufklärungsflugzeug aus den Anfängen des Kalten Krieges – im Grunde ein Düsen-Segelflugzeug mit riesigen Tragflächen.",
        "Sie operiert auf über 21 km Höhe, am sogenannten „Rand des Weltraums“. Hier ist die Luft so dünn, dass die Piloten Druckanzüge tragen müssen wie Astronauten.",
        "Obwohl sie seit 1955 fliegt, ist die U-2 bis heute im Einsatz – ein bemerkenswert langlebiges Werkzeug der Höhenaufklärung.",
      ],
      en: [
        "The Lockheed U-2 “Dragon Lady” is a reconnaissance aircraft from the early Cold War – essentially a jet-powered glider with enormous wings.",
        "It operates above 21 km altitude, at the so-called “edge of space”. Here the air is so thin that the pilots must wear pressure suits like astronauts.",
        "Although it first flew in 1955, the U-2 is still in service today – a remarkably long-lived tool of high-altitude reconnaissance.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",       en: "Type" },         value: { de: "Höhenaufklärer", en: "high-altitude reconnaissance aircraft" } },
        { label: { de: "Erstflug",  en: "First flight" },  value: { de: "1955", en: "1955" } },
        { label: { de: "Hersteller", en: "Manufacturer" }, value: { de: "Lockheed", en: "Lockheed" } },
        { label: { de: "Status",    en: "Status" },        value: { de: "noch im Dienst", en: "still in service" } },
      ]},
      { title: { de: "Höhe & Leistung", en: "Altitude & performance" }, rows: [
        { label: { de: "Dienstgipfelhöhe", en: "Service ceiling" }, value: { de: "über 21 km", en: "over 21 km" } },
        { label: { de: "Spannweite",       en: "Wingspan" },        value: { de: "~31 m", en: "~31 m" } },
        { label: { de: "Besonderheit",     en: "Notable" },         value: { de: "Pilot trägt Druckanzug", en: "pilot wears a pressure suit" } },
      ]},
    ],
  },

  ballon: {
    desc: {
      de: [
        "Heißluftballons gehören zur ältesten Form der bemannten Luftfahrt – und können erstaunlich hoch steigen, wenn man sie nur groß genug baut.",
        "2005 stieg der indische Unternehmer Vijaypat Singhania mit einem speziell konstruierten Heißluftballon auf 21.290 m und stellte damit einen bis heute bestehenden Weltrekord auf.",
        "In dieser Höhe ist die Luft so dünn, dass die Ballonhülle sich enorm aufbläht und der Pilot in einer geschlossenen, druckgeschützten Gondel sitzen muss.",
      ],
      en: [
        "Hot-air balloons are among the oldest forms of crewed flight – and can climb astonishingly high if built large enough.",
        "In 2005 the Indian businessman Vijaypat Singhania rose to 21,290 m in a specially built hot-air balloon, setting a world record that still stands today.",
        "At this altitude the air is so thin that the balloon envelope swells enormously and the pilot must sit in a sealed, pressure-protected gondola.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",       en: "Type" },        value: { de: "Heißluftballon", en: "hot-air balloon" } },
        { label: { de: "Rekordpilot", en: "Record pilot" }, value: { de: "Vijaypat Singhania", en: "Vijaypat Singhania" } },
        { label: { de: "Jahr",      en: "Year" },         value: { de: "2005", en: "2005" } },
      ]},
      { title: { de: "Höhe & Leistung", en: "Altitude & performance" }, rows: [
        { label: { de: "Rekordhöhe", en: "Record altitude" }, value: { de: "21.290 m", en: "21,290 m" } },
        { label: { de: "Status",     en: "Status" },          value: { de: "Höhenweltrekord für Heißluftballons", en: "world altitude record for hot-air balloons" } },
      ]},
    ],
  },

  sr71: {
    desc: {
      de: [
        "Die Lockheed SR-71 „Blackbird“ war das schnellste je gebaute Strahlflugzeug – ein Aufklärer, der seinen Verfolgern davonflog, statt sich zu verstecken.",
        "Sie operierte auf rund 25,9 km Höhe und mit über dreifacher Schallgeschwindigkeit; bei diesem Tempo erhitzte sich die Außenhaut so stark, dass die Maschine im Flug um Zentimeter wuchs.",
        "Wenn eine Rakete auf sie abgefeuert wurde, lautete die Standardanweisung schlicht: schneller fliegen und steigen – die Blackbird ließ alles hinter sich.",
      ],
      en: [
        "The Lockheed SR-71 “Blackbird” was the fastest jet aircraft ever built – a reconnaissance plane that outran its pursuers rather than hiding from them.",
        "It operated at around 25.9 km altitude and over three times the speed of sound; at that pace its skin heated so much that the aircraft grew by centimetres in flight.",
        "When a missile was fired at it, the standard instruction was simply to fly faster and climb – the Blackbird left everything behind.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",       en: "Type" },         value: { de: "strategischer Aufklärer", en: "strategic reconnaissance aircraft" } },
        { label: { de: "Erstflug",  en: "First flight" },  value: { de: "1964", en: "1964" } },
        { label: { de: "Hersteller", en: "Manufacturer" }, value: { de: "Lockheed", en: "Lockheed" } },
        { label: { de: "Status",    en: "Status" },        value: { de: "außer Dienst seit 1998", en: "retired since 1998" } },
      ]},
      { title: { de: "Höhe & Leistung", en: "Altitude & performance" }, rows: [
        { label: { de: "Dienstgipfelhöhe", en: "Service ceiling" }, value: { de: "~25,9 km", en: "~25.9 km" } },
        { label: { de: "Geschwindigkeit",  en: "Speed" },           value: { de: "über Mach 3 (~3.500 km/h)", en: "over Mach 3 (~3,500 km/h)" } },
        { label: { de: "Spannweite",       en: "Wingspan" },        value: { de: "~16,9 m", en: "~16.9 m" } },
      ]},
    ],
  },

  wetterballon: {
    desc: {
      de: [
        "Wetterballons sind die unscheinbaren Arbeitspferde der Meteorologie: Latex-Ballons, die täglich rund um die Welt aufsteigen und Messinstrumente in die Höhe tragen.",
        "Sie steigen bis auf etwa 35 km – tief in die Stratosphäre, weit über den höchsten Linienflugzeugen.",
        "Dort dehnt sich das Latex im fast luftleeren Raum auf Hausgröße aus, bis der Ballon platzt; die kleine Messsonde sinkt dann am Fallschirm zurück zur Erde.",
      ],
      en: [
        "Weather balloons are the unassuming workhorses of meteorology: latex balloons that rise around the world every day, carrying measuring instruments aloft.",
        "They climb to about 35 km – deep into the stratosphere, far above the highest airliners.",
        "There the latex expands in the near-vacuum to the size of a house until the balloon bursts; the small sonde then parachutes back to Earth.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",      en: "Type" },        value: { de: "meteorologischer Latexballon", en: "meteorological latex balloon" } },
        { label: { de: "Nutzlast", en: "Payload" },     value: { de: "Radiosonde (Mess-Sonde)", en: "radiosonde (measuring probe)" } },
        { label: { de: "Status",   en: "Status" },      value: { de: "weltweit täglich im Einsatz", en: "launched daily worldwide" } },
      ]},
      { title: { de: "Höhe & Verlauf", en: "Altitude & sequence" }, rows: [
        { label: { de: "Maximalhöhe", en: "Maximum altitude" }, value: { de: "~35 km", en: "~35 km" } },
        { label: { de: "Ende",        en: "End" },              value: { de: "Ballon platzt, Sonde fällt am Fallschirm", en: "balloon bursts, sonde parachutes down" } },
      ]},
    ],
  },

  mig25: {
    desc: {
      de: [
        "Die MiG-25 war ein sowjetischer Abfangjäger, gebaut für extreme Geschwindigkeit und Höhe – ein Koloss aus Stahl mit gewaltigen Triebwerken.",
        "1977 trieb der Testpilot Alexander Fedotow eine MiG-25 im Steigflug auf 37.650 m hinauf; dieser Wert gilt bis heute als Höhenrekord für ein Strahljäger-Flugzeug.",
        "In dieser Höhe ist die Atmosphäre fast nicht mehr vorhanden – der Jet schoss im Bogen hinauf wie ein Geschoss und fiel danach kraftlos zurück in dichtere Luft.",
      ],
      en: [
        "The MiG-25 was a Soviet interceptor built for extreme speed and altitude – a steel colossus with enormous engines.",
        "In 1977 test pilot Alexander Fedotov pushed a MiG-25 in a zoom climb to 37,650 m; that figure still stands today as the altitude record for a jet aircraft.",
        "At this height the atmosphere is almost gone – the jet arced upward like a projectile and then fell back, powerless, into denser air.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",      en: "Type" },         value: { de: "Abfangjäger / Aufklärer", en: "interceptor / reconnaissance jet" } },
        { label: { de: "Rekordpilot", en: "Record pilot" }, value: { de: "Alexander Fedotow", en: "Alexander Fedotov" } },
        { label: { de: "Jahr",     en: "Year" },          value: { de: "1977", en: "1977" } },
      ]},
      { title: { de: "Höhe & Leistung", en: "Altitude & performance" }, rows: [
        { label: { de: "Rekordhöhe", en: "Record altitude" }, value: { de: "37.650 m", en: "37,650 m" } },
        { label: { de: "Status",     en: "Status" },          value: { de: "Höhenrekord für Strahljäger", en: "altitude record for jet aircraft" } },
      ]},
    ],
  },

  stratos: {
    desc: {
      de: [
        "Beim Projekt Red Bull Stratos stieg Felix Baumgartner 2012 mit einem Heliumballon und einer Druckkapsel auf 39.044 m hinauf – an den Rand des Weltraums.",
        "Von dort sprang er ab und durchbrach im freien Fall als erster Mensch ohne Fahrzeug die Schallmauer.",
        "Aus dieser Höhe sieht die Erde bereits gekrümmt und der Himmel darüber schwarz aus; der Sprung wurde zu einem der meistbeachteten Live-Ereignisse seiner Zeit.",
      ],
      en: [
        "For the Red Bull Stratos project, Felix Baumgartner ascended to 39,044 m in 2012 using a helium balloon and a pressurised capsule – to the edge of space.",
        "From there he jumped and, in free fall, became the first human to break the sound barrier without a vehicle.",
        "From this altitude the Earth already looks curved and the sky above it black; the jump became one of the most-watched live events of its time.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",      en: "Type" },        value: { de: "Stratosphären-Fallschirmsprung", en: "stratospheric parachute jump" } },
        { label: { de: "Springer", en: "Jumper" },      value: { de: "Felix Baumgartner", en: "Felix Baumgartner" } },
        { label: { de: "Jahr",     en: "Year" },         value: { de: "2012", en: "2012" } },
      ]},
      { title: { de: "Höhe & Leistung", en: "Altitude & performance" }, rows: [
        { label: { de: "Absprunghöhe", en: "Jump altitude" }, value: { de: "39.044 m", en: "39,044 m" } },
        { label: { de: "Besonderheit", en: "Notable" },       value: { de: "Schallmauer im freien Fall durchbrochen", en: "broke the sound barrier in free fall" } },
      ]},
    ],
  },

  eustace: {
    desc: {
      de: [
        "2014 übertraf der Google-Manager Alan Eustace den Sprung von Felix Baumgartner – mit deutlich weniger Aufsehen, aber noch größerer Höhe.",
        "Statt einer Kapsel nutzte er einen einfachen Anzug, der direkt unter einen Heliumballon gehängt wurde, und stieg so auf 41.419 m.",
        "Sein Absprung aus dieser Höhe ist bis heute der höchste Fallschirmsprung der Geschichte – ein stiller Rekord, fast ohne Publikum.",
      ],
      en: [
        "In 2014 the Google executive Alan Eustace surpassed Felix Baumgartner's jump – with far less fanfare but at an even greater height.",
        "Instead of a capsule he used a simple suit hung directly beneath a helium balloon, rising to 41,419 m.",
        "His leap from this altitude remains the highest parachute jump in history to this day – a quiet record, almost without an audience.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",      en: "Type" },        value: { de: "Stratosphären-Fallschirmsprung", en: "stratospheric parachute jump" } },
        { label: { de: "Springer", en: "Jumper" },      value: { de: "Alan Eustace", en: "Alan Eustace" } },
        { label: { de: "Jahr",     en: "Year" },         value: { de: "2014", en: "2014" } },
      ]},
      { title: { de: "Höhe & Leistung", en: "Altitude & performance" }, rows: [
        { label: { de: "Absprunghöhe", en: "Jump altitude" }, value: { de: "41.419 m", en: "41,419 m" } },
        { label: { de: "Status",       en: "Status" },        value: { de: "höchster Fallschirmsprung der Geschichte", en: "highest parachute jump in history" } },
      ]},
    ],
  },

});
