/* dd_space.js — Detail-Infos: bemannte + unbemannte Raumfahrt. Object.assign in SKY_DETAILS. */
Object.assign(SKY_DETAILS, {

  /* ==================== BEMANNT (manned) ==================== */

  x15: {
    desc: {
      de: [
        "Die North American X-15 war ein raketengetriebenes Experimentalflugzeug, das aus großer Höhe von einem umgebauten B-52-Bomber abgeworfen wurde und dann seinen eigenen Raketenmotor zündete.",
        "Am 22. August 1963 stieg Pilot Joseph Walker mit ihr auf 108 km – über die international anerkannte Weltraumgrenze hinaus. Damit war die X-15 ein Flugzeug, das buchstäblich in den Weltraum flog.",
        "Bis heute hält die X-15 mit Mach 6,7 den Geschwindigkeitsrekord für bemannte, mit Tragflächen ausgestattete Fluggeräte – ein Erbe, das später dem Space Shuttle den Weg ebnete.",
      ],
      en: [
        "The North American X-15 was a rocket-powered experimental aircraft, dropped from high altitude by a modified B-52 bomber before igniting its own rocket engine.",
        "On 22 August 1963 pilot Joseph Walker took it to 108 km – beyond the internationally recognised edge of space. The X-15 was thus an aeroplane that literally flew into space.",
        "To this day the X-15 holds the speed record for a crewed winged aircraft at Mach 6.7 – a legacy that later helped pave the way for the Space Shuttle.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Betreiber",  en: "Operator" },  value: { de: "NASA / US Air Force", en: "NASA / US Air Force" } },
        { label: { de: "Rekordflug", en: "Record flight" }, value: { de: "1963 (Joseph Walker)", en: "1963 (Joseph Walker)" } },
        { label: { de: "Status",     en: "Status" },    value: { de: "Programm beendet 1968", en: "Programme ended 1968" } },
      ]},
      { title: { de: "Mission & Höhe", en: "Mission & altitude" }, rows: [
        { label: { de: "Zweck",      en: "Purpose" },       value: { de: "Hyperschall- und Höhenforschung", en: "Hypersonic and high-altitude research" } },
        { label: { de: "Gipfelhöhe", en: "Peak altitude" }, value: { de: "108 km", en: "108 km" } },
        { label: { de: "Tempo",      en: "Speed" },         value: { de: "bis Mach 6,7 (~7.270 km/h)", en: "up to Mach 6.7 (~7,270 km/h)" } },
      ]},
      { title: { de: "Bedeutung", en: "Significance" }, rows: [
        { label: { de: "Rekord", en: "Record" }, value: { de: "höchster bemannter Flugzeug-Flug", en: "highest crewed aeroplane flight" } },
      ]},
    ],
  },

  iss: {
    desc: {
      de: [
        "Die Internationale Raumstation ist das größte je von Menschen gebaute Objekt im All – ein Verbund aus Modulen, der seit 1998 Stück für Stück im Orbit zusammengesetzt wurde.",
        "Sie umkreist die Erde in rund 408 km Höhe alle 90 Minuten einmal – das sind etwa 16 Sonnenauf- und -untergänge pro Tag für ihre Besatzung.",
        "Seit November 2000 ist sie ununterbrochen bemannt: Seither war kein Moment, in dem nicht mindestens ein Mensch im Weltraum lebte – ein gemeinsames Werk von fünf Raumfahrtagenturen.",
      ],
      en: [
        "The International Space Station is the largest object humans have ever built in space – an assembly of modules pieced together in orbit since 1998.",
        "It circles Earth at about 408 km, completing one lap every 90 minutes – roughly 16 sunrises and sunsets a day for its crew.",
        "It has been continuously crewed since November 2000: ever since, there has not been a single moment without at least one human living in space – a joint work of five space agencies.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Betreiber", en: "Operators" }, value: { de: "NASA, Roskosmos, ESA, JAXA, CSA", en: "NASA, Roscosmos, ESA, JAXA, CSA" } },
        { label: { de: "Erstes Modul", en: "First module" }, value: { de: "1998 (Sarja)", en: "1998 (Zarya)" } },
        { label: { de: "Status",    en: "Status" },     value: { de: "aktiv, dauerhaft bemannt seit 2000", en: "active, crewed since 2000" } },
      ]},
      { title: { de: "Mission & Höhe", en: "Mission & altitude" }, rows: [
        { label: { de: "Bahnhöhe",  en: "Orbital altitude" }, value: { de: "~408 km", en: "~408 km" } },
        { label: { de: "Umlaufzeit", en: "Orbital period" },  value: { de: "~90 Minuten", en: "~90 minutes" } },
        { label: { de: "Tempo",     en: "Speed" },            value: { de: "~28.000 km/h", en: "~28,000 km/h" } },
      ]},
      { title: { de: "Bedeutung", en: "Significance" }, rows: [
        { label: { de: "Rolle", en: "Role" }, value: { de: "größtes Bauwerk im Orbit, Forschungslabor", en: "largest structure in orbit, research lab" } },
      ]},
    ],
  },

  gemini11: {
    desc: {
      de: [
        "Gemini 11 war 1966 eine der entscheidenden Übungsmissionen für die spätere Mondfahrt: Pete Conrad und Richard Gordon trainierten Andockmanöver und Weltraumausstiege.",
        "Mit Hilfe der angekoppelten Agena-Stufe hob die Kapsel ihre Bahn auf einen Scheitelpunkt von 1.373 km – die höchste bemannte Erdumlaufbahn der gesamten Apollo-Vorbereitung.",
        "Aus dieser Höhe sahen die beiden Astronauten die Erde als deutlich gekrümmte Kugel – ein Anblick, der zuvor keinem Menschen vergönnt gewesen war.",
      ],
      en: [
        "Gemini 11 in 1966 was one of the decisive rehearsal missions for the later Moon flights: Pete Conrad and Richard Gordon practised docking and spacewalks.",
        "Using the attached Agena stage, the capsule raised its orbit to an apogee of 1,373 km – the highest crewed Earth orbit of the entire Apollo build-up.",
        "From that altitude the two astronauts saw Earth as a distinctly curved sphere – a sight no human had been granted before.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Betreiber", en: "Operator" }, value: { de: "NASA", en: "NASA" } },
        { label: { de: "Start",     en: "Launch" },   value: { de: "1966", en: "1966" } },
        { label: { de: "Besatzung", en: "Crew" },     value: { de: "Conrad & Gordon", en: "Conrad & Gordon" } },
      ]},
      { title: { de: "Mission & Höhe", en: "Mission & altitude" }, rows: [
        { label: { de: "Zweck",      en: "Purpose" }, value: { de: "Andock- und EVA-Training für Apollo", en: "Docking and EVA training for Apollo" } },
        { label: { de: "Bahnscheitel", en: "Apogee" }, value: { de: "1.373 km", en: "1,373 km" } },
        { label: { de: "Dauer",      en: "Duration" }, value: { de: "~3 Tage", en: "~3 days" } },
      ]},
      { title: { de: "Bedeutung", en: "Significance" }, rows: [
        { label: { de: "Rekord", en: "Record" }, value: { de: "höchste bemannte Erdumlaufbahn vor Apollo", en: "highest crewed Earth orbit before Apollo" } },
      ]},
    ],
  },

  mond: {
    desc: {
      de: [
        "Der Mond ist der einzige fremde Himmelskörper, den Menschen je betreten haben – im Mittel 384.400 km von der Erde entfernt.",
        "Zwischen 1969 und 1972 landeten im Rahmen des Apollo-Programms sechs Missionen, zwölf Astronauten setzten ihren Fuß auf die Mondoberfläche und brachten zusammen 382 kg Gestein zur Erde.",
        "Neil Armstrongs erster Schritt am 20. Juli 1969 bleibt einer der größten Momente der Menschheitsgeschichte – die bislang fernste Reise, die Menschen je angetreten haben.",
      ],
      en: [
        "The Moon is the only foreign world humans have ever set foot on – on average 384,400 km from Earth.",
        "Between 1969 and 1972 the Apollo programme made six landings; twelve astronauts walked on the lunar surface and brought back a combined 382 kg of rock.",
        "Neil Armstrong's first step on 20 July 1969 remains one of the greatest moments in human history – the farthest journey people have ever made.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Programm", en: "Programme" }, value: { de: "Apollo (NASA)", en: "Apollo (NASA)" } },
        { label: { de: "Erste Landung", en: "First landing" }, value: { de: "1969 (Apollo 11)", en: "1969 (Apollo 11)" } },
        { label: { de: "Status",   en: "Status" },    value: { de: "Landungen 1969–1972", en: "Landings 1969–1972" } },
      ]},
      { title: { de: "Mission & Entfernung", en: "Mission & distance" }, rows: [
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "~384.400 km", en: "~384,400 km" } },
        { label: { de: "Menschen darauf", en: "People on it" }, value: { de: "12 (sechs Landungen)", en: "12 (six landings)" } },
        { label: { de: "Gestein zurück", en: "Rock returned" }, value: { de: "382 kg", en: "382 kg" } },
      ]},
      { title: { de: "Bedeutung", en: "Significance" }, rows: [
        { label: { de: "Rekord", en: "Record" }, value: { de: "fernster Ort, den Menschen betraten", en: "farthest place humans have set foot" } },
      ]},
    ],
  },

  apollo13: {
    desc: {
      de: [
        "Apollo 13 sollte 1970 auf dem Mond landen, doch zwei Tage nach dem Start zerriss ein explodierender Sauerstofftank die Mission – „Houston, wir haben ein Problem“.",
        "Statt zu landen, mussten Lovell, Swigert und Haise um den Mond herumschwingen, um zur Erde zurückzukehren. Auf dieser Notfall-Schleife kamen sie 400.171 km von der Erde – der bis heute gültige Rekord für die größte Entfernung von Menschen zur Erde.",
        "Dass die Crew lebend heimkehrte, gilt als eine der größten Improvisationsleistungen der Raumfahrtgeschichte – ein „erfolgreicher Fehlschlag“.",
      ],
      en: [
        "Apollo 13 was meant to land on the Moon in 1970, but two days after launch an exploding oxygen tank tore the mission apart – “Houston, we’ve had a problem.”",
        "Instead of landing, Lovell, Swigert and Haise had to swing around the Moon to get back to Earth. On that emergency loop they reached 400,171 km from Earth – still the record for the greatest distance humans have ever been from the planet.",
        "That the crew returned alive is regarded as one of the greatest feats of improvisation in spaceflight history – a “successful failure.”",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Betreiber", en: "Operator" }, value: { de: "NASA", en: "NASA" } },
        { label: { de: "Start",     en: "Launch" },   value: { de: "1970", en: "1970" } },
        { label: { de: "Besatzung", en: "Crew" },     value: { de: "Lovell, Swigert, Haise", en: "Lovell, Swigert, Haise" } },
      ]},
      { title: { de: "Mission & Entfernung", en: "Mission & distance" }, rows: [
        { label: { de: "Zweck",     en: "Purpose" },      value: { de: "geplante Mondlandung (abgebrochen)", en: "planned Moon landing (aborted)" } },
        { label: { de: "Max. Entfernung", en: "Max distance" }, value: { de: "400.171 km", en: "400,171 km" } },
        { label: { de: "Ausgang",   en: "Outcome" },      value: { de: "Besatzung kehrte sicher zurück", en: "crew returned safely" } },
      ]},
      { title: { de: "Bedeutung", en: "Significance" }, rows: [
        { label: { de: "Rekord", en: "Record" }, value: { de: "größte je erreichte Menschen-Entfernung", en: "record human distance from Earth" } },
      ]},
    ],
  },

  polaris: {
    desc: {
      de: [
        "Polaris Dawn war 2024 eine private bemannte Mission von SpaceX, finanziert und kommandiert vom Unternehmer Jared Isaacman.",
        "Die Crew-Dragon-Kapsel erreichte einen Bahnscheitel von 1.408 km – die höchste bemannte Erdumlaufbahn seit den Apollo-Mondflügen und höher, als je ein Mensch außerhalb einer Mondmission war.",
        "Höhepunkt war der erste rein kommerzielle Weltraumspaziergang: Ohne Luftschleuse öffneten die Astronauten die Kapsel im Vakuum und testeten neue Raumanzüge – ein Meilenstein der privaten Raumfahrt.",
      ],
      en: [
        "Polaris Dawn in 2024 was a private crewed mission by SpaceX, funded and commanded by entrepreneur Jared Isaacman.",
        "The Crew Dragon capsule reached an apogee of 1,408 km – the highest crewed Earth orbit since the Apollo Moon flights and higher than any human had been outside a lunar mission.",
        "Its highlight was the first fully commercial spacewalk: with no airlock, the astronauts opened the capsule to vacuum and tested new spacesuits – a milestone for private spaceflight.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Betreiber", en: "Operator" }, value: { de: "SpaceX (privat)", en: "SpaceX (private)" } },
        { label: { de: "Start",     en: "Launch" },   value: { de: "2024", en: "2024" } },
        { label: { de: "Status",    en: "Status" },   value: { de: "Mission abgeschlossen", en: "mission completed" } },
      ]},
      { title: { de: "Mission & Höhe", en: "Mission & altitude" }, rows: [
        { label: { de: "Zweck",       en: "Purpose" }, value: { de: "Höhenrekord, erster kommerzieller EVA", en: "altitude record, first commercial EVA" } },
        { label: { de: "Bahnscheitel", en: "Apogee" }, value: { de: "1.408 km", en: "1,408 km" } },
        { label: { de: "Dauer",       en: "Duration" }, value: { de: "~5 Tage", en: "~5 days" } },
      ]},
      { title: { de: "Bedeutung", en: "Significance" }, rows: [
        { label: { de: "Rekord", en: "Record" }, value: { de: "höchste bemannte Erdumlaufbahn seit Apollo", en: "highest crewed Earth orbit since Apollo" } },
      ]},
    ],
  },

  artemis2: {
    desc: {
      de: [
        "Artemis II war die erste bemannte Mission des Artemis-Programms, mit dem die NASA Menschen zum Mond zurückbringt.",
        "Im April 2026 umrundeten vier Astronauten in der Orion-Kapsel den Mond – die erste bemannte Mondmission seit Apollo 17 im Jahr 1972, nach mehr als einem halben Jahrhundert Pause.",
        "Die Mission war kein Landeflug, sondern eine Schleife um den Mond, die Mensch und Raumschiff für die geplanten künftigen Landungen erprobte – darunter erstmals wieder Astronauten so weit von der Erde entfernt.",
      ],
      en: [
        "Artemis II was the first crewed mission of the Artemis programme, with which NASA is bringing humans back to the Moon.",
        "In April 2026 four astronauts looped around the Moon in the Orion capsule – the first crewed lunar mission since Apollo 17 in 1972, after a pause of more than half a century.",
        "It was not a landing flight but a free-return loop around the Moon, testing crew and ship for the planned future landings – with astronauts once again venturing this far from Earth.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Betreiber", en: "Operator" }, value: { de: "NASA", en: "NASA" } },
        { label: { de: "Flug",      en: "Flight" },   value: { de: "April 2026", en: "April 2026" } },
        { label: { de: "Besatzung", en: "Crew" },     value: { de: "4 Astronauten", en: "4 astronauts" } },
      ]},
      { title: { de: "Mission & Entfernung", en: "Mission & distance" }, rows: [
        { label: { de: "Zweck",      en: "Purpose" },  value: { de: "bemannte Mond-Umrundung (kein Landen)", en: "crewed lunar flyby (no landing)" } },
        { label: { de: "Reichweite", en: "Reach" },    value: { de: "~390.000 km (Mond-Umgebung)", en: "~390,000 km (lunar vicinity)" } },
        { label: { de: "Raumschiff", en: "Spacecraft" }, value: { de: "Orion / SLS", en: "Orion / SLS" } },
      ]},
      { title: { de: "Bedeutung", en: "Significance" }, rows: [
        { label: { de: "Premiere", en: "First" }, value: { de: "erste bemannte Mondmission seit 1972", en: "first crewed lunar mission since 1972" } },
      ]},
    ],
  },

  gagarin: {
    desc: {
      de: [
        "Am 12. April 1961 wurde Juri Gagarin an Bord von Wostok 1 der erste Mensch im Weltraum – und der erste, der die Erde umrundete.",
        "Sein Flug dauerte nur 108 Minuten und führte ihn auf einem einzigen Orbit um den Planeten, mit einem Bahnscheitel von rund 327 km.",
        "Als er die Erde von oben sah, soll er gesagt haben: „Die Erde ist blau … wie wunderschön.“ Mit diesem Flug eröffnete die Sowjetunion das Zeitalter der bemannten Raumfahrt.",
      ],
      en: [
        "On 12 April 1961 Yuri Gagarin aboard Vostok 1 became the first human in space – and the first to orbit Earth.",
        "His flight lasted just 108 minutes and carried him on a single orbit around the planet, with an apogee of about 327 km.",
        "Seeing Earth from above, he is said to have remarked: “The Earth is blue … how wonderful.” With this flight the Soviet Union opened the age of crewed spaceflight.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Betreiber", en: "Operator" }, value: { de: "UdSSR", en: "USSR" } },
        { label: { de: "Start",     en: "Launch" },   value: { de: "1961", en: "1961" } },
        { label: { de: "Raumschiff", en: "Spacecraft" }, value: { de: "Wostok 1", en: "Vostok 1" } },
      ]},
      { title: { de: "Mission & Höhe", en: "Mission & altitude" }, rows: [
        { label: { de: "Zweck",       en: "Purpose" }, value: { de: "erster bemannter Orbitalflug", en: "first crewed orbital flight" } },
        { label: { de: "Bahnscheitel", en: "Apogee" }, value: { de: "~327 km", en: "~327 km" } },
        { label: { de: "Dauer",       en: "Duration" }, value: { de: "108 Minuten (1 Orbit)", en: "108 minutes (1 orbit)" } },
      ]},
      { title: { de: "Bedeutung", en: "Significance" }, rows: [
        { label: { de: "Premiere", en: "First" }, value: { de: "erster Mensch im Weltraum", en: "first human in space" } },
      ]},
    ],
  },

  tereshkova: {
    desc: {
      de: [
        "Walentina Tereschkowa, von Beruf Textilarbeiterin und Fallschirmspringerin, wurde am 16. Juni 1963 an Bord von Wostok 6 die erste Frau im Weltraum.",
        "Allein an Bord umrundete sie die Erde 48-mal und blieb fast drei Tage im Orbit – länger als alle US-Astronauten dieser Zeit zusammengenommen.",
        "Ihr Funkname war „Tschaika“ (Möwe). Erst 19 Jahre später flog mit Swetlana Sawizkaja die nächste Frau ins All – Tereschkowa blieb bis heute die einzige Frau, die je allein eine Raummission flog.",
      ],
      en: [
        "Valentina Tereshkova, by trade a textile worker and amateur parachutist, became the first woman in space aboard Vostok 6 on 16 June 1963.",
        "Alone aboard, she orbited Earth 48 times and stayed in orbit for almost three days – longer than all the US astronauts of that era combined.",
        "Her call sign was “Chaika” (seagull). Only 19 years later did the next woman, Svetlana Savitskaya, fly to space – Tereshkova remains the only woman ever to fly a solo space mission.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Betreiber", en: "Operator" }, value: { de: "UdSSR", en: "USSR" } },
        { label: { de: "Start",     en: "Launch" },   value: { de: "1963", en: "1963" } },
        { label: { de: "Raumschiff", en: "Spacecraft" }, value: { de: "Wostok 6", en: "Vostok 6" } },
      ]},
      { title: { de: "Mission & Höhe", en: "Mission & altitude" }, rows: [
        { label: { de: "Zweck",       en: "Purpose" }, value: { de: "erste Frau im Weltraum", en: "first woman in space" } },
        { label: { de: "Bahnhöhe",    en: "Altitude" }, value: { de: "~231 km", en: "~231 km" } },
        { label: { de: "Dauer",       en: "Duration" }, value: { de: "fast 3 Tage (48 Orbits)", en: "almost 3 days (48 orbits)" } },
      ]},
      { title: { de: "Bedeutung", en: "Significance" }, rows: [
        { label: { de: "Premiere", en: "First" }, value: { de: "erste Frau im Weltraum", en: "first woman in space" } },
      ]},
    ],
  },

  mir: {
    desc: {
      de: [
        "Die sowjetische und später russische Raumstation Mir war von 1986 bis 2001 in Betrieb und galt als die erste modular zusammengesetzte, dauerhaft bewohnte Station im Orbit.",
        "Sie umkreiste die Erde in rund 350 km Höhe und war über 15 Jahre nahezu durchgehend bemannt – ein Ort, an dem Kosmonauten Langzeitrekorde von über einem Jahr im All aufstellten.",
        "Mir wurde zur Schule der internationalen Zusammenarbeit: Auch US-Astronauten lebten an Bord. 2001 ließ man sie kontrolliert über dem Pazifik verglühen – als Wegbereiterin der ISS.",
      ],
      en: [
        "The Soviet and later Russian space station Mir operated from 1986 to 2001 and was the first modular, permanently inhabited station in orbit.",
        "It circled Earth at about 350 km and was crewed almost continuously for more than 15 years – a place where cosmonauts set endurance records of over a year in space.",
        "Mir became a school of international cooperation: US astronauts lived aboard too. In 2001 it was deorbited in a controlled burn-up over the Pacific – the forerunner of the ISS.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Betreiber", en: "Operator" }, value: { de: "UdSSR / Russland", en: "USSR / Russia" } },
        { label: { de: "Erstes Modul", en: "First module" }, value: { de: "1986", en: "1986" } },
        { label: { de: "Status",    en: "Status" },    value: { de: "2001 kontrolliert zum Absturz gebracht", en: "deorbited in 2001" } },
      ]},
      { title: { de: "Mission & Höhe", en: "Mission & altitude" }, rows: [
        { label: { de: "Bahnhöhe", en: "Altitude" }, value: { de: "~350 km", en: "~350 km" } },
        { label: { de: "Betriebszeit", en: "Service life" }, value: { de: "15 Jahre bemannt", en: "15 years crewed" } },
        { label: { de: "Zweck",    en: "Purpose" },  value: { de: "Langzeit-Forschungsstation", en: "long-duration research station" } },
      ]},
      { title: { de: "Bedeutung", en: "Significance" }, rows: [
        { label: { de: "Rolle", en: "Role" }, value: { de: "Vorläufer der ISS", en: "forerunner of the ISS" } },
      ]},
    ],
  },

  /* ==================== UNBEMANNT (unmanned) ==================== */

  hubble: {
    desc: {
      de: [
        "Das Hubble-Weltraumteleskop, 1990 gestartet, revolutionierte die Astronomie: Über der trübenden Atmosphäre liefert es seit Jahrzehnten gestochen scharfe Bilder des Universums.",
        "Es umkreist die Erde in rund 540 km Höhe. Astronauten besuchten es in fünf Wartungsmissionen mit dem Space Shuttle – das letzte Teleskop, das je von Menschenhand im All repariert wurde.",
        "Hubble half, das Alter des Universums zu bestimmen und seine beschleunigte Ausdehnung zu entdecken – seine Aufnahmen prägen unser Bild vom Kosmos bis heute.",
      ],
      en: [
        "The Hubble Space Telescope, launched in 1990, revolutionised astronomy: above the blurring atmosphere it has delivered razor-sharp images of the universe for decades.",
        "It orbits Earth at about 540 km. Astronauts visited it on five servicing missions with the Space Shuttle – the last telescope ever repaired by human hands in space.",
        "Hubble helped pin down the age of the universe and discover its accelerating expansion – its images shape our picture of the cosmos to this day.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Betreiber", en: "Operator" }, value: { de: "NASA / ESA", en: "NASA / ESA" } },
        { label: { de: "Start",     en: "Launch" },   value: { de: "1990", en: "1990" } },
        { label: { de: "Status",    en: "Status" },   value: { de: "aktiv", en: "active" } },
      ]},
      { title: { de: "Mission & Höhe", en: "Mission & altitude" }, rows: [
        { label: { de: "Zweck",    en: "Purpose" },  value: { de: "optisches Weltraumteleskop", en: "optical space telescope" } },
        { label: { de: "Bahnhöhe", en: "Altitude" }, value: { de: "~540 km", en: "~540 km" } },
        { label: { de: "Wartungen", en: "Servicing" }, value: { de: "5 Shuttle-Missionen", en: "5 Shuttle missions" } },
      ]},
      { title: { de: "Bedeutung", en: "Significance" }, rows: [
        { label: { de: "Rolle", en: "Role" }, value: { de: "letztes von Menschen gewartetes Teleskop", en: "last telescope serviced by humans" } },
      ]},
    ],
  },

  gps: {
    desc: {
      de: [
        "Die GPS-Satelliten bilden zusammen das Navigationssystem, das Smartphones, Autos und Flugzeuge weltweit ortet.",
        "Jeder Satellit kreist in etwa 20.200 km Höhe – im sogenannten mittleren Erdorbit – und sendet ständig die hochpräzise Zeit seiner Atomuhr aus.",
        "Diese Uhren ticken so genau, dass selbst Einsteins Relativitätstheorie einberechnet werden muss: In der Höhe und Geschwindigkeit der Satelliten vergeht die Zeit messbar anders als am Boden.",
      ],
      en: [
        "The GPS satellites together form the navigation system that locates smartphones, cars and aircraft worldwide.",
        "Each satellite orbits at about 20,200 km – in what is called medium Earth orbit – constantly broadcasting the ultra-precise time of its atomic clock.",
        "Those clocks tick so accurately that even Einstein’s theory of relativity must be factored in: at the satellites’ altitude and speed, time passes measurably differently than on the ground.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Betreiber", en: "Operator" }, value: { de: "US Space Force", en: "US Space Force" } },
        { label: { de: "Erster Start", en: "First launch" }, value: { de: "1978", en: "1978" } },
        { label: { de: "Status",    en: "Status" },    value: { de: "aktiv (Satellitenkonstellation)", en: "active (satellite constellation)" } },
      ]},
      { title: { de: "Mission & Höhe", en: "Mission & altitude" }, rows: [
        { label: { de: "Zweck",    en: "Purpose" },  value: { de: "weltweite Navigation und Zeitmessung", en: "global navigation and timing" } },
        { label: { de: "Bahnhöhe", en: "Altitude" }, value: { de: "~20.200 km", en: "~20,200 km" } },
        { label: { de: "Umlaufzeit", en: "Orbital period" }, value: { de: "~12 Stunden", en: "~12 hours" } },
      ]},
      { title: { de: "Bedeutung", en: "Significance" }, rows: [
        { label: { de: "Besonderheit", en: "Notable" }, value: { de: "Relativität messbar im Alltag", en: "relativity measurable in daily life" } },
      ]},
    ],
  },

  geo: {
    desc: {
      de: [
        "Ein geostationärer Satellit umkreist die Erde in genau 35.786 km Höhe – einer ganz besonderen Bahn.",
        "Dort braucht er für eine Umrundung exakt einen Tag, genauso lange, wie sich die Erde einmal dreht. Vom Boden aus scheint er deshalb regungslos am selben Punkt des Himmels zu stehen.",
        "Diese Eigenschaft macht solche Bahnen unverzichtbar für Fernseh-, Wetter- und Kommunikationssatelliten – die Idee dazu stammt schon aus den 1940er-Jahren von Arthur C. Clarke.",
      ],
      en: [
        "A geostationary satellite orbits Earth at exactly 35,786 km – a very special orbit.",
        "There it takes precisely one day to complete a lap, the same time Earth takes to rotate once. From the ground it therefore appears to hang motionless at the same point in the sky.",
        "This property makes such orbits indispensable for television, weather and communications satellites – the idea goes back to Arthur C. Clarke in the 1940s.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Erster GEO-Satellit", en: "First GEO satellite" }, value: { de: "1964 (Syncom 3)", en: "1964 (Syncom 3)" } },
        { label: { de: "Status", en: "Status" }, value: { de: "aktiv (gängige Bahnklasse)", en: "active (common orbit class)" } },
      ]},
      { title: { de: "Mission & Höhe", en: "Mission & altitude" }, rows: [
        { label: { de: "Zweck",     en: "Purpose" }, value: { de: "Kommunikation, Wetter, Fernsehen", en: "communications, weather, TV" } },
        { label: { de: "Bahnhöhe",  en: "Altitude" }, value: { de: "35.786 km", en: "35,786 km" } },
        { label: { de: "Umlaufzeit", en: "Orbital period" }, value: { de: "1 Tag (24 h)", en: "1 day (24 h)" } },
      ]},
      { title: { de: "Bedeutung", en: "Significance" }, rows: [
        { label: { de: "Besonderheit", en: "Notable" }, value: { de: "scheint am Himmel stillzustehen", en: "appears motionless in the sky" } },
      ]},
    ],
  },

  jwst: {
    desc: {
      de: [
        "Das James-Webb-Weltraumteleskop, 2021 gestartet, ist der größte und leistungsstärkste Weltraumspiegel, den die Menschheit je gebaut hat.",
        "Es kreist nicht um die Erde, sondern steht 1,5 Mio. km von ihr entfernt am Lagrange-Punkt L2 – einem stabilen Ruhepunkt im Schatten der Erde, wo es sein Hitzeschild kühl hält.",
        "Im Infrarot blickt es so tief in die Vergangenheit, dass es das Licht der allerersten Galaxien einfängt, die nur wenige hundert Millionen Jahre nach dem Urknall entstanden.",
      ],
      en: [
        "The James Webb Space Telescope, launched in 2021, is the largest and most powerful space mirror humanity has ever built.",
        "It does not orbit Earth but sits 1.5 million km away at Lagrange point L2 – a stable resting point in Earth’s shadow, where its sunshield stays cool.",
        "In the infrared it looks so far back in time that it captures the light of the very first galaxies, formed just a few hundred million years after the Big Bang.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Betreiber", en: "Operator" }, value: { de: "NASA / ESA / CSA", en: "NASA / ESA / CSA" } },
        { label: { de: "Start",     en: "Launch" },   value: { de: "2021", en: "2021" } },
        { label: { de: "Status",    en: "Status" },   value: { de: "aktiv", en: "active" } },
      ]},
      { title: { de: "Mission & Entfernung", en: "Mission & distance" }, rows: [
        { label: { de: "Zweck",      en: "Purpose" }, value: { de: "Infrarot-Weltraumteleskop", en: "infrared space telescope" } },
        { label: { de: "Standort",   en: "Location" }, value: { de: "Lagrange-Punkt L2", en: "Lagrange point L2" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "~1,5 Mio. km", en: "~1.5 million km" } },
      ]},
      { title: { de: "Bedeutung", en: "Significance" }, rows: [
        { label: { de: "Rekord", en: "Record" }, value: { de: "blickt bis zu den ersten Galaxien", en: "sees back to the first galaxies" } },
      ]},
    ],
  },

  curiosity: {
    desc: {
      de: [
        "Der Mars-Rover Curiosity, so groß wie ein Kleinwagen, landete 2012 nach einer waghalsigen „Sieben Minuten des Schreckens“-Landung im Gale-Krater des Mars.",
        "Seither rollt er über die rote Wüste – im Mittel rund 225 Mio. km von der Erde entfernt. Ein Funksignal braucht je nach Bahnstellung bis zu 22 Minuten zu ihm.",
        "Mit seinem Bordlabor wies er nach, dass der Mars einst Seen und Flüsse besaß und lebensfreundliche Bedingungen geboten haben könnte – ein Wendepunkt der Marsforschung.",
      ],
      en: [
        "The Mars rover Curiosity, the size of a small car, landed in 2012 in Gale Crater after a daring “seven minutes of terror” descent.",
        "Since then it has been roving the red desert – on average about 225 million km from Earth. A radio signal takes up to 22 minutes to reach it, depending on the planets’ positions.",
        "With its onboard laboratory it proved that Mars once held lakes and rivers and may have offered habitable conditions – a turning point in Mars research.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Betreiber", en: "Operator" }, value: { de: "NASA / JPL", en: "NASA / JPL" } },
        { label: { de: "Start / Landung", en: "Launch / landing" }, value: { de: "2011 / 2012", en: "2011 / 2012" } },
        { label: { de: "Status",    en: "Status" },   value: { de: "aktiv auf dem Mars", en: "active on Mars" } },
      ]},
      { title: { de: "Mission & Entfernung", en: "Mission & distance" }, rows: [
        { label: { de: "Zweck",      en: "Purpose" }, value: { de: "Suche nach lebensfreundlichen Bedingungen", en: "search for habitable conditions" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "~225 Mio. km (Mittel)", en: "~225 million km (average)" } },
        { label: { de: "Signallaufzeit", en: "Signal delay" }, value: { de: "bis zu 22 Minuten", en: "up to 22 minutes" } },
      ]},
      { title: { de: "Bedeutung", en: "Significance" }, rows: [
        { label: { de: "Entdeckung", en: "Discovery" }, value: { de: "Mars war einst feucht und lebensfreundlich", en: "Mars was once wet and habitable" } },
      ]},
    ],
  },

  voyager2: {
    desc: {
      de: [
        "Voyager 2, gestartet 1977, ist die einzige Sonde, die alle vier Gasriesen besucht hat: Jupiter, Saturn, Uranus und Neptun – eine „Grand Tour“, die nur einmal in 175 Jahren möglich war.",
        "2018 verließ sie die Heliosphäre und trat in den interstellaren Raum ein. Stand 2026 ist sie rund 21,4 Mrd. km (143 AE) entfernt – und sendet noch immer schwache Daten zur Erde.",
        "An Bord trägt sie wie ihre Schwester eine vergoldete Schallplatte mit Klängen und Bildern der Erde – eine Flaschenpost an mögliche außerirdische Finder.",
      ],
      en: [
        "Voyager 2, launched in 1977, is the only probe to have visited all four gas giants: Jupiter, Saturn, Uranus and Neptune – a “Grand Tour” possible only once in 175 years.",
        "In 2018 it left the heliosphere and entered interstellar space. As of 2026 it is about 21.4 billion km (143 AU) away – and still sending faint data back to Earth.",
        "Like its sister, it carries a gold-plated record with sounds and images of Earth – a message in a bottle to any extraterrestrial finder.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Betreiber", en: "Operator" }, value: { de: "NASA / JPL", en: "NASA / JPL" } },
        { label: { de: "Start",     en: "Launch" },   value: { de: "1977", en: "1977" } },
        { label: { de: "Status",    en: "Status" },   value: { de: "im interstellaren Raum, aktiv", en: "in interstellar space, active" } },
      ]},
      { title: { de: "Mission & Entfernung", en: "Mission & distance" }, rows: [
        { label: { de: "Zweck",      en: "Purpose" }, value: { de: "Erkundung der äußeren Planeten", en: "exploring the outer planets" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "~21,4 Mrd. km (143 AE)", en: "~21.4 billion km (143 AU)" } },
        { label: { de: "Grenzübertritt", en: "Boundary crossing" }, value: { de: "interstellarer Raum seit 2018", en: "interstellar space since 2018" } },
      ]},
      { title: { de: "Bedeutung", en: "Significance" }, rows: [
        { label: { de: "Einzigartig", en: "Unique" }, value: { de: "einzige Sonde an allen vier Gasriesen", en: "only probe to all four gas giants" } },
      ]},
    ],
  },

  voyager1: {
    desc: {
      de: [
        "Voyager 1 ist das am weitesten entfernte von Menschen gebaute Objekt im Universum – gestartet 1977, besuchte sie Jupiter und Saturn und flog dann hinaus ins Dunkel.",
        "2012 überquerte sie als erstes Raumfahrzeug die Grenze zum interstellaren Raum. Stand 2026 ist sie rund 25,8 Mrd. km (173 AE) entfernt; ihr Funksignal braucht knapp einen ganzen Tag zu uns.",
        "1990 drehte sie sich noch einmal um und fotografierte die Erde aus 6 Mrd. km Entfernung – als „Pale Blue Dot“, ein einsamer blasser Lichtpunkt im All.",
      ],
      en: [
        "Voyager 1 is the most distant human-made object in the universe – launched in 1977, it visited Jupiter and Saturn and then flew out into the dark.",
        "In 2012 it became the first spacecraft to cross into interstellar space. As of 2026 it is about 25.8 billion km (173 AU) away; its radio signal takes almost a full day to reach us.",
        "In 1990 it turned around once more and photographed Earth from 6 billion km away – the “Pale Blue Dot,” a lonely faint point of light in space.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Betreiber", en: "Operator" }, value: { de: "NASA / JPL", en: "NASA / JPL" } },
        { label: { de: "Start",     en: "Launch" },   value: { de: "1977", en: "1977" } },
        { label: { de: "Status",    en: "Status" },   value: { de: "im interstellaren Raum, aktiv", en: "in interstellar space, active" } },
      ]},
      { title: { de: "Mission & Entfernung", en: "Mission & distance" }, rows: [
        { label: { de: "Zweck",      en: "Purpose" }, value: { de: "Erkundung von Jupiter und Saturn", en: "exploring Jupiter and Saturn" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "~25,8 Mrd. km (173 AE)", en: "~25.8 billion km (173 AU)" } },
        { label: { de: "Signallaufzeit", en: "Signal delay" }, value: { de: "fast 1 Tag", en: "almost 1 day" } },
      ]},
      { title: { de: "Bedeutung", en: "Significance" }, rows: [
        { label: { de: "Rekord", en: "Record" }, value: { de: "entferntestes von Menschen gebautes Objekt", en: "most distant human-made object" } },
      ]},
    ],
  },

  changge6: {
    desc: {
      de: [
        "Chang’e 6 war 2024 eine chinesische Mondmission, die ein technisches Kunststück vollbrachte: die erste Probenrückführung von der erdabgewandten Rückseite des Mondes.",
        "Da die Rückseite nie zur Erde zeigt, brauchte die Mission einen eigenen Relais-Satelliten, um überhaupt mit der Erde zu funken. Sie brachte fast 2 kg Mondgestein zurück.",
        "Diese Proben stammen aus einem der ältesten und tiefsten Krater des Sonnensystems und könnten verraten, warum die beiden Mondseiten so verschieden aussehen.",
      ],
      en: [
        "Chang’e 6 in 2024 was a Chinese lunar mission that achieved a technical feat: the first sample return from the Moon’s far side, the hemisphere that never faces Earth.",
        "Because the far side never points toward Earth, the mission needed its own relay satellite just to communicate home. It brought back nearly 2 kg of lunar rock.",
        "These samples come from one of the oldest and deepest craters in the Solar System and may reveal why the two sides of the Moon look so different.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Betreiber", en: "Operator" }, value: { de: "CNSA (China)", en: "CNSA (China)" } },
        { label: { de: "Start",     en: "Launch" },   value: { de: "2024", en: "2024" } },
        { label: { de: "Status",    en: "Status" },   value: { de: "Mission abgeschlossen", en: "mission completed" } },
      ]},
      { title: { de: "Mission & Entfernung", en: "Mission & distance" }, rows: [
        { label: { de: "Zweck",      en: "Purpose" }, value: { de: "Probenrückführung von der Mondrückseite", en: "sample return from the lunar far side" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "~384.400 km (Mond)", en: "~384,400 km (Moon)" } },
        { label: { de: "Proben",     en: "Samples" }, value: { de: "~2 kg Gestein", en: "~2 kg of rock" } },
      ]},
      { title: { de: "Bedeutung", en: "Significance" }, rows: [
        { label: { de: "Premiere", en: "First" }, value: { de: "erste Proben von der Mondrückseite", en: "first samples from the Moon’s far side" } },
      ]},
    ],
  },

  artemis1: {
    desc: {
      de: [
        "Artemis I war 2022 der unbemannte Jungfernflug der NASA-Mondrakete SLS mit der Orion-Kapsel – der Testlauf für die Rückkehr von Menschen zum Mond.",
        "Die leere Orion-Kapsel flog bis 432.194 km von der Erde – weiter, als je ein für Menschen gebautes Raumschiff zuvor gekommen war, und schlug damit sogar den Apollo-Rekord.",
        "An Bord saßen statt Astronauten Messpuppen, die die Strahlenbelastung erfassten. Nach 25 Tagen kehrte Orion mit fast 40.000 km/h wohlbehalten zur Erde zurück.",
      ],
      en: [
        "Artemis I in 2022 was the uncrewed maiden flight of NASA’s SLS Moon rocket with the Orion capsule – the dress rehearsal for returning humans to the Moon.",
        "The empty Orion capsule flew to 432,194 km from Earth – farther than any spacecraft built for humans had ever gone, beating even the Apollo record.",
        "Instead of astronauts it carried instrumented manikins to measure radiation. After 25 days Orion returned safely to Earth at nearly 40,000 km/h.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Betreiber", en: "Operator" }, value: { de: "NASA", en: "NASA" } },
        { label: { de: "Start",     en: "Launch" },   value: { de: "2022", en: "2022" } },
        { label: { de: "Status",    en: "Status" },   value: { de: "Mission abgeschlossen", en: "mission completed" } },
      ]},
      { title: { de: "Mission & Entfernung", en: "Mission & distance" }, rows: [
        { label: { de: "Zweck",      en: "Purpose" }, value: { de: "unbemannter Test von SLS und Orion", en: "uncrewed test of SLS and Orion" } },
        { label: { de: "Max. Entfernung", en: "Max distance" }, value: { de: "432.194 km", en: "432,194 km" } },
        { label: { de: "Dauer",      en: "Duration" }, value: { de: "~25 Tage", en: "~25 days" } },
      ]},
      { title: { de: "Bedeutung", en: "Significance" }, rows: [
        { label: { de: "Rekord", en: "Record" }, value: { de: "weiteste Reise eines Menschen-Raumschiffs", en: "farthest journey of a crew-rated spacecraft" } },
      ]},
    ],
  },

  parker: {
    desc: {
      de: [
        "Die Parker Solar Probe der NASA fliegt näher an die Sonne heran als jedes andere Raumfahrzeug zuvor – sie soll das große Rätsel lösen, warum die Sonnenkorona heißer ist als die Sonnenoberfläche.",
        "Im Dezember 2024 tauchte sie bis auf 6,1 Mio. km an die Sonnenoberfläche heran, geschützt von einem Hitzeschild, das über 1.000 Grad aushält.",
        "Bei diesem Sturzflug erreichte sie etwa 690.000 km/h – das macht sie zum schnellsten von Menschen gebauten Objekt der Geschichte.",
      ],
      en: [
        "NASA’s Parker Solar Probe flies closer to the Sun than any spacecraft before it – its goal is to solve the great riddle of why the Sun’s corona is hotter than its surface.",
        "In December 2024 it dived to within 6.1 million km of the Sun’s surface, shielded by a heat shield that withstands more than 1,000 degrees.",
        "During that plunge it reached about 690,000 km/h – making it the fastest human-made object in history.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Betreiber", en: "Operator" }, value: { de: "NASA / JHUAPL", en: "NASA / JHUAPL" } },
        { label: { de: "Start",     en: "Launch" },   value: { de: "2018", en: "2018" } },
        { label: { de: "Status",    en: "Status" },   value: { de: "aktiv", en: "active" } },
      ]},
      { title: { de: "Mission & Entfernung", en: "Mission & distance" }, rows: [
        { label: { de: "Zweck",       en: "Purpose" }, value: { de: "Erforschung der Sonnenkorona", en: "studying the Sun’s corona" } },
        { label: { de: "Sonnennähe",  en: "Closest approach" }, value: { de: "6,1 Mio. km zur Oberfläche (2024)", en: "6.1 million km to the surface (2024)" } },
        { label: { de: "Tempo",       en: "Speed" }, value: { de: "~690.000 km/h", en: "~690,000 km/h" } },
      ]},
      { title: { de: "Bedeutung", en: "Significance" }, rows: [
        { label: { de: "Rekord", en: "Record" }, value: { de: "schnellstes je gebautes Objekt", en: "fastest object ever built" } },
      ]},
    ],
  },

  newhorizons: {
    desc: {
      de: [
        "New Horizons, gestartet 2006, lieferte 2015 die ersten Nahaufnahmen von Pluto – und enthüllte einen überraschend lebendigen Welt mit Eisbergen und einem herzförmigen Gletscher.",
        "Nach Pluto flog sie weiter und besuchte 2019 mit Arrokoth das fernste je aus der Nähe untersuchte Objekt des Sonnensystems.",
        "Heute ist sie rund 9,6 Mrd. km entfernt und reist durch den Kuipergürtel zum äußeren Rand des Sonnensystems – auf dem Weg, eines Tages ebenfalls den interstellaren Raum zu erreichen.",
      ],
      en: [
        "New Horizons, launched in 2006, delivered the first close-up images of Pluto in 2015 – revealing a surprisingly lively world with icy mountains and a heart-shaped glacier.",
        "After Pluto it flew on and in 2019 visited Arrokoth, the most distant object in the Solar System ever studied up close.",
        "Today it is about 9.6 billion km away, travelling through the Kuiper Belt toward the outer edge of the Solar System – on track one day to reach interstellar space as well.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Betreiber", en: "Operator" }, value: { de: "NASA / JHUAPL", en: "NASA / JHUAPL" } },
        { label: { de: "Start",     en: "Launch" },   value: { de: "2006", en: "2006" } },
        { label: { de: "Status",    en: "Status" },   value: { de: "aktiv, im Kuipergürtel", en: "active, in the Kuiper Belt" } },
      ]},
      { title: { de: "Mission & Entfernung", en: "Mission & distance" }, rows: [
        { label: { de: "Zweck",      en: "Purpose" }, value: { de: "Erkundung von Pluto und Kuipergürtel", en: "exploring Pluto and the Kuiper Belt" } },
        { label: { de: "Pluto-Vorbeiflug", en: "Pluto flyby" }, value: { de: "2015", en: "2015" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "~9,6 Mrd. km", en: "~9.6 billion km" } },
      ]},
      { title: { de: "Bedeutung", en: "Significance" }, rows: [
        { label: { de: "Premiere", en: "First" }, value: { de: "erste Nahaufnahmen von Pluto", en: "first close-ups of Pluto" } },
      ]},
    ],
  },

  sputnik1: {
    desc: {
      de: [
        "Sputnik 1 war 1957 der erste künstliche Satellit der Geschichte – eine glänzende Metallkugel von nur 58 cm Durchmesser, gestartet von der Sowjetunion.",
        "Er umkreiste die Erde auf einer Bahn mit einem Scheitelpunkt von rund 940 km und sendete ein einfaches, regelmäßiges Piepsen, das Funkamateure rund um den Globus empfangen konnten.",
        "Dieses Piepsen läutete das Weltraumzeitalter ein und löste im Westen einen Schock aus – den „Sputnik-Schock“, der den Wettlauf ins All entfachte.",
      ],
      en: [
        "Sputnik 1 in 1957 was the first artificial satellite in history – a shiny metal sphere just 58 cm across, launched by the Soviet Union.",
        "It circled Earth on an orbit with an apogee of about 940 km and broadcast a simple, regular beeping that radio amateurs around the globe could pick up.",
        "That beeping opened the Space Age and triggered a shock in the West – the “Sputnik crisis” that ignited the space race.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Betreiber", en: "Operator" }, value: { de: "UdSSR", en: "USSR" } },
        { label: { de: "Start",     en: "Launch" },   value: { de: "1957", en: "1957" } },
        { label: { de: "Status",    en: "Status" },   value: { de: "1958 verglüht", en: "burned up in 1958" } },
      ]},
      { title: { de: "Mission & Höhe", en: "Mission & altitude" }, rows: [
        { label: { de: "Zweck",       en: "Purpose" }, value: { de: "erster künstlicher Satellit", en: "first artificial satellite" } },
        { label: { de: "Bahnscheitel", en: "Apogee" }, value: { de: "~940 km", en: "~940 km" } },
        { label: { de: "Durchmesser", en: "Diameter" }, value: { de: "58 cm", en: "58 cm" } },
      ]},
      { title: { de: "Bedeutung", en: "Significance" }, rows: [
        { label: { de: "Premiere", en: "First" }, value: { de: "Beginn des Weltraumzeitalters", en: "start of the Space Age" } },
      ]},
    ],
  },

  laika: {
    desc: {
      de: [
        "Laika, eine Straßenhündin aus Moskau, wurde 1957 an Bord von Sputnik 2 das erste Lebewesen in einer Erdumlaufbahn – das erste Tier, das wirklich die Erde umrundete.",
        "Ihr Flug erreichte einen Bahnscheitel von rund 1.660 km. Eine Rückkehr war technisch noch nicht vorgesehen, und Laika überlebte den Flug nicht – eine Tatsache, die bis heute berührt.",
        "Ihr Opfer bewies, dass ein Lebewesen Start und Schwerelosigkeit überstehen kann – und ebnete den Weg für die ersten Menschen im All. In Moskau erinnert heute ein Denkmal an sie.",
      ],
      en: [
        "Laika, a stray dog from the streets of Moscow, became the first living being in Earth orbit aboard Sputnik 2 in 1957 – the first animal truly to circle the planet.",
        "Her flight reached an apogee of about 1,660 km. A return was not yet technically possible, and Laika did not survive the flight – a fact that still moves people today.",
        "Her sacrifice proved that a living creature could survive launch and weightlessness – paving the way for the first humans in space. A monument in Moscow honours her today.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Betreiber", en: "Operator" }, value: { de: "UdSSR (Sputnik 2)", en: "USSR (Sputnik 2)" } },
        { label: { de: "Start",     en: "Launch" },   value: { de: "1957", en: "1957" } },
        { label: { de: "Art",       en: "Species" },  value: { de: "Hund (Canis familiaris)", en: "Dog (Canis familiaris)" } },
      ]},
      { title: { de: "Mission & Höhe", en: "Mission & altitude" }, rows: [
        { label: { de: "Zweck",       en: "Purpose" }, value: { de: "erstes Lebewesen im Orbit", en: "first living being in orbit" } },
        { label: { de: "Bahnscheitel", en: "Apogee" }, value: { de: "~1.660 km", en: "~1,660 km" } },
        { label: { de: "Rückkehr",    en: "Return" }, value: { de: "keine (überlebte nicht)", en: "none (did not survive)" } },
      ]},
      { title: { de: "Bedeutung", en: "Significance" }, rows: [
        { label: { de: "Premiere", en: "First" }, value: { de: "erstes Tier in einer Erdumlaufbahn", en: "first animal in Earth orbit" } },
      ]},
    ],
  },

  belka_strelka: {
    desc: {
      de: [
        "Belka und Strelka waren zwei sowjetische Hündinnen, die 1960 an Bord von Sputnik 5 (Korabl-Sputnik 2) ins All flogen – zusammen mit Mäusen, Ratten und Pflanzen.",
        "Anders als Laika kehrten sie nach einem Tag und 17 Erdumrundungen wohlbehalten zur Erde zurück – die ersten Tiere, die lebend aus einer Erdumlaufbahn heimkamen.",
        "Ihr erfolgreicher Flug bewies, dass auch Menschen einen Orbitalflug überleben können – nur ein Jahr später flog Gagarin. Strelka bekam später Welpen, von denen einer der Familie Kennedy geschenkt wurde.",
      ],
      en: [
        "Belka and Strelka were two Soviet dogs that flew to space in 1960 aboard Sputnik 5 (Korabl-Sputnik 2) – together with mice, rats and plants.",
        "Unlike Laika, they returned safely to Earth after a day and 17 orbits – the first animals to come home alive from Earth orbit.",
        "Their successful flight proved that humans could survive an orbital flight too – just a year later Gagarin flew. Strelka later had puppies, one of which was given to the Kennedy family.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Betreiber", en: "Operator" }, value: { de: "UdSSR (Sputnik 5)", en: "USSR (Sputnik 5)" } },
        { label: { de: "Start",     en: "Launch" },   value: { de: "1960", en: "1960" } },
        { label: { de: "Art",       en: "Species" },  value: { de: "Hunde (Canis familiaris)", en: "Dogs (Canis familiaris)" } },
      ]},
      { title: { de: "Mission & Höhe", en: "Mission & altitude" }, rows: [
        { label: { de: "Zweck",    en: "Purpose" },  value: { de: "Test der Überlebensfähigkeit im Orbit", en: "testing survival in orbit" } },
        { label: { de: "Bahnhöhe", en: "Altitude" }, value: { de: "~700 km", en: "~700 km" } },
        { label: { de: "Rückkehr", en: "Return" },   value: { de: "lebend, nach 17 Orbits", en: "alive, after 17 orbits" } },
      ]},
      { title: { de: "Bedeutung", en: "Significance" }, rows: [
        { label: { de: "Premiere", en: "First" }, value: { de: "erste Tiere, die lebend aus dem Orbit kamen", en: "first animals to return alive from orbit" } },
      ]},
    ],
  },

  luna2: {
    desc: {
      de: [
        "Luna 2 war 1959 die sowjetische Sonde, die als erstes von Menschen gebautes Objekt einen anderen Himmelskörper erreichte – sie schlug planmäßig auf dem Mond ein.",
        "Nach rund 384.400 km Reiseweg traf sie östlich des Mare Imbrium auf die Mondoberfläche – das erste Mal überhaupt, dass die Menschheit eine andere Welt berührte.",
        "An Bord trug sie metallene Wimpel mit dem sowjetischen Wappen, die beim Aufschlag verstreut wurden – kosmische Visitenkarten auf dem Mond.",
      ],
      en: [
        "Luna 2 in 1959 was the Soviet probe that became the first human-made object to reach another celestial body – it impacted the Moon as planned.",
        "After a journey of about 384,400 km it struck the lunar surface east of Mare Imbrium – the first time humanity ever touched another world.",
        "It carried metal pennants bearing the Soviet emblem, scattered on impact – cosmic calling cards left on the Moon.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Betreiber", en: "Operator" }, value: { de: "UdSSR", en: "USSR" } },
        { label: { de: "Start",     en: "Launch" },   value: { de: "1959", en: "1959" } },
        { label: { de: "Status",    en: "Status" },   value: { de: "auf dem Mond eingeschlagen", en: "impacted the Moon" } },
      ]},
      { title: { de: "Mission & Entfernung", en: "Mission & distance" }, rows: [
        { label: { de: "Zweck",      en: "Purpose" }, value: { de: "Aufschlag auf dem Mond", en: "impact on the Moon" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "~384.400 km", en: "~384,400 km" } },
        { label: { de: "Ausgang",    en: "Outcome" }, value: { de: "erfolgreich (Hartlandung)", en: "successful (hard landing)" } },
      ]},
      { title: { de: "Bedeutung", en: "Significance" }, rows: [
        { label: { de: "Premiere", en: "First" }, value: { de: "erstes Objekt auf einem anderen Himmelskörper", en: "first object to reach another celestial body" } },
      ]},
    ],
  },

  venera7: {
    desc: {
      de: [
        "Venera 7 war 1970 die sowjetische Sonde, die als erstes Raumfahrzeug überhaupt weich auf einem anderen Planeten landete – auf der Venus.",
        "Die Venus ist ein Höllenplanet: Über 460 Grad heiß, mit einem Atmosphärendruck wie 900 Meter unter dem Meeresspiegel. Venera 7 hielt am Boden noch etwa 23 Minuten durch und funkte Daten zur Erde.",
        "Damit gelang der Menschheit die erste Messung direkt von der Oberfläche eines fremden Planeten – ein Triumph der Ingenieurskunst gegen eine vernichtende Umgebung.",
      ],
      en: [
        "Venera 7 in 1970 was the Soviet probe that became the first spacecraft ever to land softly on another planet – on Venus.",
        "Venus is a hellish world: over 460 degrees hot, with atmospheric pressure like 900 metres below the sea. Venera 7 held out on the surface for about 23 minutes, radioing data back to Earth.",
        "It gave humanity the first measurements taken directly from the surface of another planet – a triumph of engineering against a crushing environment.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Betreiber", en: "Operator" }, value: { de: "UdSSR", en: "USSR" } },
        { label: { de: "Start",     en: "Launch" },   value: { de: "1970", en: "1970" } },
        { label: { de: "Status",    en: "Status" },   value: { de: "auf der Venus gelandet", en: "landed on Venus" } },
      ]},
      { title: { de: "Mission & Entfernung", en: "Mission & distance" }, rows: [
        { label: { de: "Zweck",      en: "Purpose" }, value: { de: "weiche Landung auf der Venus", en: "soft landing on Venus" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "~170 Mio. km (Venus, Mittel)", en: "~170 million km (Venus, average)" } },
        { label: { de: "Funkdauer am Boden", en: "Surface transmission" }, value: { de: "~23 Minuten", en: "~23 minutes" } },
      ]},
      { title: { de: "Bedeutung", en: "Significance" }, rows: [
        { label: { de: "Premiere", en: "First" }, value: { de: "erste weiche Landung auf einem Planeten", en: "first soft landing on another planet" } },
      ]},
    ],
  },

  pioneer10: {
    desc: {
      de: [
        "Pioneer 10, gestartet 1972, war eine der ersten interstellaren Sonden – die erste, die den Asteroidengürtel durchquerte und den Riesenplaneten Jupiter aus der Nähe besuchte.",
        "Sie ebnete den Weg für die späteren Voyager-Missionen. Heute ist sie rund 20,9 Mrd. km entfernt und treibt seit Jahrzehnten antriebslos durchs All; der Kontakt brach 2003 endgültig ab.",
        "An Bord trägt sie eine vergoldete Plakette mit Zeichnungen eines Mannes und einer Frau sowie einer Karte zur Erde – eine Botschaft an mögliche außerirdische Finder in ferner Zukunft.",
      ],
      en: [
        "Pioneer 10, launched in 1972, was one of the first interstellar probes – the first to cross the asteroid belt and visit the giant planet Jupiter up close.",
        "It paved the way for the later Voyager missions. Today it is about 20.9 billion km away, coasting silently through space for decades; contact was finally lost in 2003.",
        "It carries a gold-plated plaque showing drawings of a man and a woman and a map to Earth – a message to any extraterrestrial finder in the distant future.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Betreiber", en: "Operator" }, value: { de: "NASA", en: "NASA" } },
        { label: { de: "Start",     en: "Launch" },   value: { de: "1972", en: "1972" } },
        { label: { de: "Status",    en: "Status" },   value: { de: "Kontakt 2003 verloren, treibt weiter", en: "contact lost 2003, still coasting" } },
      ]},
      { title: { de: "Mission & Entfernung", en: "Mission & distance" }, rows: [
        { label: { de: "Zweck",      en: "Purpose" }, value: { de: "erste Jupiter- und Asteroidengürtel-Sonde", en: "first Jupiter and asteroid-belt probe" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "~20,9 Mrd. km", en: "~20.9 billion km" } },
        { label: { de: "Besonderheit", en: "Notable" }, value: { de: "trägt die Pioneer-Plakette", en: "carries the Pioneer plaque" } },
      ]},
      { title: { de: "Bedeutung", en: "Significance" }, rows: [
        { label: { de: "Premiere", en: "First" }, value: { de: "erste Sonde durch den Asteroidengürtel", en: "first probe through the asteroid belt" } },
      ]},
    ],
  },

});
