/* dd_deep.js — Detail-Infos: Nebel, Haufen, Schwarze Löcher, Galaxien, kosmische Strukturen. Object.assign in SKY_DETAILS. */
Object.assign(SKY_DETAILS, {

  /* ===================== COSMIC ===================== */

  galaxis: {
    desc: {
      de: [
        "Rund 26.000 Lichtjahre von uns entfernt, im Sternbild Schütze, liegt das Zentrum unserer eigenen Galaxie – das Herz der Milchstraße.",
        "Dort drängen sich Sterne tausendmal dichter als in unserer kosmischen Nachbarschaft, und im Mittelpunkt sitzt das supermassereiche Schwarze Loch Sagittarius A* mit rund vier Millionen Sonnenmassen. Dichte Staubwolken verbergen diesen Ort vor unseren Augen, doch in Infrarot- und Radiowellen leuchtet er hell auf.",
        "Wir sehen das galaktische Zentrum so, wie es vor etwa 26.000 Jahren aussah – als auf der Erde die Eiszeit ihren Höhepunkt erreichte und die ersten Höhlenmalereien entstanden.",
      ],
      en: [
        "About 26,000 light-years away, in the constellation Sagittarius, lies the centre of our own galaxy – the heart of the Milky Way.",
        "There the stars crowd a thousand times more densely than in our cosmic neighbourhood, and at the very middle sits the supermassive black hole Sagittarius A*, weighing some four million suns. Thick clouds of dust hide this place from our eyes, yet in infrared and radio light it blazes brightly.",
        "We see the galactic centre as it looked about 26,000 years ago – when the last Ice Age was at its peak on Earth and the first cave paintings were being made.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Galaktisches Zentrum (Schütze A*)", en: "Galactic centre (Sagittarius A*)" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "≈ 26.000 Lichtjahre", en: "≈ 26,000 light-years" } },
        { label: { de: "Zentrales Schwarzes Loch", en: "Central black hole" }, value: { de: "~4,3 Mio. Sonnenmassen", en: "~4.3 million solar masses" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Schütze (Sagittarius)", en: "Sagittarius" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~26.000 Jahre", en: "~26,000 years" } },
      ]},
    ],
  },

  andromeda: {
    desc: {
      de: [
        "Die Andromeda-Galaxie (M31) ist die nächste große Spiralgalaxie und das am leichtesten mit bloßem Auge sichtbare ferne Objekt – als schwacher, milchiger Fleck am Herbsthimmel. (Unter perfekt dunklem Himmel reicht der Blick mit bloßem Auge sogar noch etwas weiter, bis zur Dreiecksgalaxie M33.)",
        "Sie ist größer als unsere Milchstraße und enthält rund eine Billion Sterne. Andromeda und die Milchstraße rasen aufeinander zu und werden in etwa 4,5 Milliarden Jahren zu einer einzigen riesigen Galaxie verschmelzen.",
        "Ihr Licht ist rund 2,5 Millionen Jahre zu uns unterwegs – es brach auf, als auf der Erde die ersten Vertreter der Gattung Mensch ihre Werkzeuge schlugen.",
      ],
      en: [
        "The Andromeda Galaxy (M31) is the nearest large spiral galaxy and the most easily naked-eye-visible distant object – a faint, milky smudge in the autumn sky. (Under perfectly dark skies the unaided eye reaches even a little farther, to the Triangulum Galaxy M33.)",
        "It is larger than our own Milky Way and holds about a trillion stars. Andromeda and the Milky Way are racing toward each other and will merge into a single giant galaxy in roughly 4.5 billion years.",
        "Its light has travelled for about 2.5 million years – it set out when the first members of the human genus were chipping their earliest tools on Earth.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Spiralgalaxie (M31)", en: "Spiral galaxy (M31)" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "≈ 2,5 Mio. Lichtjahre", en: "≈ 2.5 million light-years" } },
        { label: { de: "Durchmesser", en: "Diameter" }, value: { de: "~150.000 Lichtjahre", en: "~150,000 light-years" } },
        { label: { de: "Sterne", en: "Stars" }, value: { de: "~1 Billion", en: "~1 trillion" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Bekannt seit", en: "Recorded" }, value: { de: "964 n. Chr. (al-Sufi)", en: "964 AD (al-Sufi)" } },
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Andromeda", en: "Andromeda" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~2,5 Mio. Jahre", en: "~2.5 million years" } },
      ]},
    ],
  },

  universum: {
    desc: {
      de: [
        "Hier endet das Sichtbare. Der Rand des beobachtbaren Universums ist keine Wand, sondern ein Horizont: die größtmögliche Entfernung, aus der uns seit dem Urknall überhaupt Licht erreichen konnte.",
        "Das älteste Licht ist 13,8 Milliarden Jahre alt. Doch weil sich der Raum seither immer weiter ausdehnt, liegt der Ursprung dieses Lichts heute rund 46,5 Milliarden Lichtjahre von uns entfernt. Was dahinter liegt, können wir prinzipiell nicht sehen.",
        "Jeder Beobachter im All hat seinen eigenen kosmischen Horizont – wir blicken stets bis an die Grenze der Zeit selbst, zurück bis kurz nach dem Anfang von allem.",
      ],
      en: [
        "Here the visible ends. The edge of the observable universe is not a wall but a horizon: the greatest distance from which light could have reached us at all since the Big Bang.",
        "The oldest light is 13.8 billion years old. But because space has been expanding ever since, the origin of that light now lies about 46.5 billion light-years away. What lies beyond, we cannot see, even in principle.",
        "Every observer in the cosmos has their own horizon – we are forever looking to the very edge of time itself, back to a moment just after the beginning of everything.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Kosmologischer Horizont", en: "Cosmological horizon" } },
        { label: { de: "Heutige Entfernung", en: "Distance today" }, value: { de: "~46,5 Mrd. Lichtjahre", en: "~46.5 billion light-years" } },
        { label: { de: "Alter des Lichts", en: "Age of the light" }, value: { de: "~13,8 Mrd. Jahre", en: "~13.8 billion years" } },
        { label: { de: "Durchmesser", en: "Diameter" }, value: { de: "~93 Mrd. Lichtjahre", en: "~93 billion light-years" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~13,8 Mrd. Jahre (fast bis zum Urknall)", en: "~13.8 billion years (nearly to the Big Bang)" } },
      ]},
    ],
  },

  fermibubbles: {
    desc: {
      de: [
        "Die Fermi-Blasen sind zwei riesige Strukturen, die wie Sanduhr-Flügel aus dem Zentrum der Milchstraße quellen – nach oben und unten je rund 25.000 Lichtjahre weit.",
        "Sie leuchten in Gammastrahlung und tragen die Energie von etwa 100.000 Sternexplosionen. Vermutlich entstanden sie vor wenigen Millionen Jahren, als das zentrale Schwarze Loch Sagittarius A* einen gewaltigen Ausbruch hatte und Materie auswarf.",
        "Entdeckt wurden sie erst 2010 mit dem Fermi-Gammastrahlen-Weltraumteleskop – unsichtbar für das bloße Auge, obwohl sie ein gewaltiger Teil unserer eigenen Galaxie sind.",
      ],
      en: [
        "The Fermi Bubbles are two enormous structures billowing like an hourglass out of the centre of the Milky Way – reaching some 25,000 light-years above and below the galactic plane.",
        "They glow in gamma rays and carry the energy of about 100,000 star explosions. They likely formed a few million years ago, when the central black hole Sagittarius A* erupted and flung out matter.",
        "They were only discovered in 2010 with the Fermi Gamma-ray Space Telescope – invisible to the naked eye, even though they are a vast part of our own galaxy.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Gammastrahlen-Blasen", en: "Gamma-ray bubbles" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "~25.000 Lichtjahre (Zentrum)", en: "~25,000 light-years (centre)" } },
        { label: { de: "Ausdehnung", en: "Extent" }, value: { de: "~50.000 Lichtjahre (gesamt)", en: "~50,000 light-years (total)" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr", en: "Year" }, value: { de: "2010 (Fermi-Weltraumteleskop)", en: "2010 (Fermi Space Telescope)" } },
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Schütze (Sagittarius)", en: "Sagittarius" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~25.000 Jahre", en: "~25,000 years" } },
      ]},
    ],
  },

  virgocluster: {
    desc: {
      de: [
        "Der Virgo-Galaxienhaufen ist der nächste große Galaxienhaufen – eine Ansammlung von rund 1.300 Galaxien, etwa 54 Millionen Lichtjahre entfernt im Sternbild Jungfrau.",
        "Sein Zentrum wird von der Riesengalaxie M87 mit ihrem supermassereichen Schwarzen Loch beherrscht. Die gewaltige Masse des Haufens zieht selbst unsere eigene Lokale Gruppe an, sodass die Milchstraße langsam auf ihn zudriftet.",
        "Wir sehen den Virgo-Haufen so, wie er vor rund 54 Millionen Jahren aussah – als auf der jungen Erde die ersten Vorfahren der heutigen Pferde und Wale durch eine subtropische Welt streiften.",
      ],
      en: [
        "The Virgo Cluster is the nearest large galaxy cluster – a swarm of about 1,300 galaxies, some 54 million light-years away in the constellation Virgo.",
        "Its centre is dominated by the giant galaxy M87 and its supermassive black hole. The cluster's immense mass tugs even at our own Local Group, so the Milky Way is slowly drifting toward it.",
        "We see the Virgo Cluster as it looked about 54 million years ago – when the first ancestors of today's horses and whales roamed a subtropical world on the young Earth.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Galaxienhaufen", en: "Galaxy cluster" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "≈ 54 Mio. Lichtjahre", en: "≈ 54 million light-years" } },
        { label: { de: "Galaxien", en: "Galaxies" }, value: { de: "~1.300", en: "~1,300" } },
        { label: { de: "Durchmesser", en: "Diameter" }, value: { de: "~15 Mio. Lichtjahre", en: "~15 million light-years" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Jungfrau (Virgo)", en: "Virgo" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~54 Mio. Jahre", en: "~54 million years" } },
      ]},
    ],
  },

  gw170817: {
    desc: {
      de: [
        "Am 17. August 2017 verschmolzen in einer fernen Galaxie zwei Neutronensterne – und zum ersten Mal beobachtete die Menschheit dasselbe kosmische Ereignis gleichzeitig in Gravitationswellen und in Licht.",
        "Diese Verschmelzung, eine sogenannte Kilonova, schleuderte gewaltige Mengen schwerer Elemente ins All und bewies: Hier, im Feuer kollidierender Neutronensterne, entstehen Gold und Platin. Ein großer Teil des Goldes auf der Erde stammt aus solchen Ereignissen.",
        "Das Signal war rund 130 Millionen Jahre zu uns unterwegs – es brach auf, als auf der Erde die Dinosaurier in der Kreidezeit ihre Blütezeit erlebten.",
      ],
      en: [
        "On 17 August 2017, two neutron stars merged in a distant galaxy – and for the first time humanity observed the very same cosmic event simultaneously in gravitational waves and in light.",
        "This merger, a so-called kilonova, hurled vast amounts of heavy elements into space and proved it: here, in the fire of colliding neutron stars, gold and platinum are forged. Much of the gold on Earth comes from such events.",
        "The signal had travelled for about 130 million years – it set out when the dinosaurs were thriving in the Cretaceous period on Earth.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Neutronenstern-Verschmelzung (Kilonova)", en: "Neutron-star merger (kilonova)" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "≈ 130 Mio. Lichtjahre", en: "≈ 130 million light-years" } },
        { label: { de: "Wirtsgalaxie", en: "Host galaxy" }, value: { de: "NGC 4993", en: "NGC 4993" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr", en: "Year" }, value: { de: "2017 (LIGO/Virgo)", en: "2017 (LIGO/Virgo)" } },
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Wasserschlange (Hydra)", en: "Hydra" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~130 Mio. Jahre", en: "~130 million years" } },
      ]},
    ],
  },

  greatattractor: {
    desc: {
      de: [
        "Der Große Attraktor ist eine rätselhafte Massenkonzentration, die unsere gesamte Galaxie und Tausende andere mit hunderten Kilometern pro Sekunde zu sich zieht.",
        "Das Tückische: Er liegt hinter der dichten Sternenscheibe der Milchstraße verborgen, in der sogenannten „Zone der Vermeidung“, die unseren Blick verdeckt. Lange war völlig unklar, was dort die Schwerkraft erzeugt – heute weiß man, dass er Teil des noch größeren Laniakea-Superhaufens ist.",
        "Sein Licht ist rund 200 Millionen Jahre zu uns unterwegs – es brach auf, als auf der Erde die Trias zu Ende ging und die ersten Dinosaurier die Bühne betraten.",
      ],
      en: [
        "The Great Attractor is a mysterious concentration of mass pulling our entire galaxy, and thousands of others, toward it at hundreds of kilometres per second.",
        "The tricky part: it lies hidden behind the dense star-filled disc of the Milky Way, in the so-called 'Zone of Avoidance' that blocks our view. For a long time it was utterly unclear what created the gravity there – today we know it is part of the even larger Laniakea Supercluster.",
        "Its light has travelled for about 200 million years – it set out as the Triassic period ended on Earth and the first dinosaurs were stepping onto the stage.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Gravitationszentrum / Massenkonzentration", en: "Gravitational centre / mass concentration" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "≈ 200 Mio. Lichtjahre", en: "≈ 200 million light-years" } },
        { label: { de: "Lage", en: "Location" }, value: { de: "Zone der Vermeidung (hinter der Milchstraße)", en: "Zone of Avoidance (behind the Milky Way)" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr", en: "Year" }, value: { de: "1980er Jahre", en: "1980s" } },
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Winkelmaß / Zentaur (Norma/Centaurus)", en: "Norma / Centaurus" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~200 Mio. Jahre", en: "~200 million years" } },
      ]},
    ],
  },

  laniakea: {
    desc: {
      de: [
        "Laniakea ist unsere kosmische Heimatadresse: ein gewaltiger Superhaufen aus rund 100.000 großen Galaxien, etwa 500 Millionen Lichtjahre durchmessend. Sein Name bedeutet auf Hawaiianisch „unermesslicher Himmel“.",
        "Erst 2014 definierte ein Team um Brent Tully diesen Superhaufen neu – nicht über bloße Nähe, sondern über die Bewegung der Galaxien: Alles, was zum selben gravitativen Becken hinströmt, gehört dazu. In dessen Tiefe liegt der Große Attraktor, zu dem auch wir gezogen werden.",
        "Laniakea zu durchqueren würde dem Licht rund 500 Millionen Jahre kosten – so weit erstreckt sich die Struktur, der die Milchstraße als ein winziger Tropfen angehört.",
      ],
      en: [
        "Laniakea is our cosmic home address: a colossal supercluster of about 100,000 large galaxies, spanning some 500 million light-years. Its name is Hawaiian for 'immense heaven'.",
        "Only in 2014 did a team led by Brent Tully redefine this supercluster – not by mere proximity, but by the motion of galaxies: everything streaming toward the same gravitational basin belongs to it. Deep within lies the Great Attractor, toward which we too are being drawn.",
        "Crossing Laniakea would cost light about 500 million years – such is the reach of the structure to which the Milky Way belongs as a single tiny droplet.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Galaxien-Superhaufen", en: "Galaxy supercluster" } },
        { label: { de: "Durchmesser", en: "Diameter" }, value: { de: "~500 Mio. Lichtjahre", en: "~500 million light-years" } },
        { label: { de: "Galaxien", en: "Galaxies" }, value: { de: "~100.000", en: "~100,000" } },
        { label: { de: "Masse", en: "Mass" }, value: { de: "~10¹⁷ Sonnenmassen", en: "~10¹⁷ solar masses" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr", en: "Year" }, value: { de: "2014 (R. Brent Tully u. a.)", en: "2014 (R. Brent Tully et al.)" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit (Durchquerung)", en: "Light travel time (to cross)" }, value: { de: "~500 Mio. Jahre", en: "~500 million years" } },
      ]},
    ],
  },

  comacluster: {
    desc: {
      de: [
        "Der Coma-Galaxienhaufen ist ein dicht gepackter Schwarm aus über 1.000 Galaxien, rund 320 Millionen Lichtjahre entfernt im Sternbild Haar der Berenike.",
        "Berühmt wurde er 1933: Der Astronom Fritz Zwicky stellte fest, dass sich die Galaxien viel zu schnell bewegten, um vom sichtbaren Material zusammengehalten zu werden. Er folgerte, dass eine unsichtbare „dunkle Materie“ den Haufen zusammenhalten müsse – die erste Spur überhaupt von diesem bis heute rätselhaften Stoff.",
        "Wir sehen Coma so, wie er vor rund 320 Millionen Jahren aussah – als auf der Erde im Karbon die ersten Wälder und Reptilien entstanden.",
      ],
      en: [
        "The Coma Cluster is a densely packed swarm of over 1,000 galaxies, about 320 million light-years away in the constellation Coma Berenices.",
        "It became famous in 1933: the astronomer Fritz Zwicky found that the galaxies were moving far too fast to be held together by their visible matter. He concluded that an invisible 'dark matter' must bind the cluster – the very first hint of this stuff that remains a mystery to this day.",
        "We see Coma as it looked about 320 million years ago – when the first forests and reptiles were appearing in the Carboniferous period on Earth.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Galaxienhaufen (Abell 1656)", en: "Galaxy cluster (Abell 1656)" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "≈ 320 Mio. Lichtjahre", en: "≈ 320 million light-years" } },
        { label: { de: "Galaxien", en: "Galaxies" }, value: { de: "über 1.000", en: "over 1,000" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Dunkle-Materie-Hinweis", en: "Dark-matter clue" }, value: { de: "1933 (Fritz Zwicky)", en: "1933 (Fritz Zwicky)" } },
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Haar der Berenike (Coma Berenices)", en: "Coma Berenices" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~320 Mio. Jahre", en: "~320 million years" } },
      ]},
    ],
  },

  bootesvoid: {
    desc: {
      de: [
        "Der Boötes-Void ist eine fast vollständig leere Region des Alls – eine Blase von rund 330 Millionen Lichtjahren Durchmesser, in der nur eine Handvoll Galaxien existieren, wo eigentlich Tausende sein sollten.",
        "Diese „große Leere“ wurde 1981 von Robert Kirshner und seinem Team entdeckt. Sie ist so gewaltig, dass eine Zivilisation in ihrem Inneren lange hätte glauben können, allein im Universum zu sein – die nächsten Galaxien wären für sie unsichtbar weit entfernt.",
        "Ihr Rand ist rund 700 Millionen Lichtjahre von uns entfernt; ihr Licht brach auf, als auf der Erde die ersten vielzelligen Tiere im Meer entstanden.",
      ],
      en: [
        "The Boötes Void is an almost entirely empty region of space – a bubble about 330 million light-years across in which only a handful of galaxies exist, where thousands should be.",
        "This 'great nothing' was discovered in 1981 by Robert Kirshner and his team. It is so vast that a civilisation deep inside it might long have believed it was alone in the universe – the nearest galaxies would be invisibly far away.",
        "Its edge lies about 700 million light-years from us; its light set out when the first multicellular animals were appearing in Earth's oceans.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Supervoid (kosmische Leere)", en: "Supervoid (cosmic void)" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "≈ 700 Mio. Lichtjahre", en: "≈ 700 million light-years" } },
        { label: { de: "Durchmesser", en: "Diameter" }, value: { de: "~330 Mio. Lichtjahre", en: "~330 million light-years" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr", en: "Year" }, value: { de: "1981 (Robert Kirshner u. a.)", en: "1981 (Robert Kirshner et al.)" } },
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Bärenhüter (Boötes)", en: "Boötes" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~700 Mio. Jahre", en: "~700 million years" } },
      ]},
    ],
  },

  sloanwall: {
    desc: {
      de: [
        "Die Sloan Great Wall ist eine gigantische Mauer aus Galaxien – eine zusammenhängende Kette von Galaxiengruppen und -haufen, die sich über rund 1,4 Milliarden Lichtjahre erstreckt.",
        "Sie gehört zu den größten bekannten Strukturen des Universums und wurde 2003 in den Daten des Sloan Digital Sky Survey entdeckt, der den Himmel in bislang ungekannter Tiefe kartiert hat. Solche Mauern und Filamente bilden das „kosmische Netz“, an dessen Fäden die Galaxien aufgereiht sind.",
        "Ihr Licht ist rund eine Milliarde Jahre zu uns unterwegs – es brach auf, als das Leben auf der Erde noch ausschließlich aus einzelligen Mikroben bestand.",
      ],
      en: [
        "The Sloan Great Wall is a gigantic wall of galaxies – a connected chain of galaxy groups and clusters stretching across about 1.4 billion light-years.",
        "It ranks among the largest known structures in the universe and was discovered in 2003 in the data of the Sloan Digital Sky Survey, which mapped the sky in unprecedented depth. Such walls and filaments form the 'cosmic web' along whose threads the galaxies are strung.",
        "Its light has travelled for about a billion years – it set out when life on Earth still consisted entirely of single-celled microbes.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Galaxienmauer (Filament)", en: "Galaxy wall (filament)" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "≈ 1 Mrd. Lichtjahre", en: "≈ 1 billion light-years" } },
        { label: { de: "Länge", en: "Length" }, value: { de: "~1,4 Mrd. Lichtjahre", en: "~1.4 billion light-years" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr", en: "Year" }, value: { de: "2003 (J. R. Gott, M. Jurić u. a.)", en: "2003 (J. R. Gott, M. Jurić et al.)" } },
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Jungfrau / Wasserschlange (Virgo/Hydra)", en: "Virgo / Hydra" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~1 Mrd. Jahre", en: "~1 billion years" } },
      ]},
    ],
  },

  gw150914: {
    desc: {
      de: [
        "Am 14. September 2015 zitterte die Raumzeit auf der Erde – zum ersten Mal überhaupt fingen die Detektoren von LIGO eine Gravitationswelle ein. GW150914 wurde 2016 der Welt vorgestellt und bestätigte eine 100 Jahre alte Vorhersage Albert Einsteins.",
        "Die Welle stammte von zwei Schwarzen Löchern mit rund 36 und 29 Sonnenmassen, die zu einem einzigen verschmolzen. In Sekundenbruchteilen wurde dabei die Energie von drei Sonnenmassen rein in Schwingungen des Raums selbst abgestrahlt.",
        "Das Signal war rund 1,3 Milliarden Jahre zu uns unterwegs – es brach auf, als auf der Erde das Leben gerade den großen Sprung zu komplexen, vielzelligen Formen vorbereitete.",
      ],
      en: [
        "On 14 September 2015, spacetime trembled on Earth – for the very first time, the LIGO detectors caught a gravitational wave. GW150914 was unveiled to the world in 2016 and confirmed a 100-year-old prediction by Albert Einstein.",
        "The wave came from two black holes of about 36 and 29 solar masses merging into a single one. In a fraction of a second, the energy of three suns was radiated away purely as ripples in space itself.",
        "The signal had travelled for about 1.3 billion years – it set out when life on Earth was just preparing its great leap toward complex, multicellular forms.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Schwarzloch-Verschmelzung (Gravitationswelle)", en: "Black-hole merger (gravitational wave)" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "≈ 1,3 Mrd. Lichtjahre", en: "≈ 1.3 billion light-years" } },
        { label: { de: "Massen", en: "Masses" }, value: { de: "~36 + 29 Sonnenmassen", en: "~36 + 29 solar masses" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr", en: "Year" }, value: { de: "2015 gemessen, 2016 verkündet (LIGO)", en: "Measured 2015, announced 2016 (LIGO)" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~1,3 Mrd. Jahre", en: "~1.3 billion years" } },
      ]},
    ],
  },

  frb: {
    desc: {
      de: [
        "Schnelle Radioblitze (Fast Radio Bursts, FRBs) sind eines der größten Rätsel der modernen Astronomie: Millisekunden-Blitze aus den Tiefen des Alls, die in einem Augenblick mehr Energie abstrahlen als die Sonne in Tagen.",
        "Der erste wurde 2007 in alten Daten entdeckt; seither hat man Tausende registriert. Die meisten blitzen nur ein einziges Mal auf, manche wiederholen sich. Als Quelle gelten heute vor allem Magnetare – extrem stark magnetisierte Neutronensterne –, doch endgültig geklärt ist der Ursprung nicht.",
        "Ihr Licht legt typischerweise Milliarden von Jahren zurück, ehe es uns erreicht – wir empfangen einen winzigen Knall aus einer Zeit, als das Universum noch jung war.",
      ],
      en: [
        "Fast Radio Bursts (FRBs) are one of the great riddles of modern astronomy: millisecond flashes from the depths of space, each releasing more energy in an instant than the Sun does in days.",
        "The first was found in old data in 2007; thousands have been recorded since. Most flash just once, some repeat. The leading suspects today are magnetars – extremely magnetised neutron stars – but the origin is not fully settled.",
        "Their signals typically cross billions of years before reaching us – we catch a tiny pop from an era when the universe was still young.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Radioblitz (Millisekunden-Ereignis)", en: "Radio burst (millisecond event)" } },
        { label: { de: "Typische Entfernung", en: "Typical distance" }, value: { de: "Hunderte Mio. bis Mrd. Lichtjahre", en: "Hundreds of millions to billions of light-years" } },
        { label: { de: "Vermutete Quelle", en: "Suspected source" }, value: { de: "Magnetare (Neutronensterne)", en: "Magnetars (neutron stars)" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Erster Nachweis", en: "First detection" }, value: { de: "2007 („Lorimer-Burst“)", en: "2007 ('Lorimer Burst')" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "Mio. bis Mrd. Jahre", en: "Millions to billions of years" } },
      ]},
    ],
  },

  darkmatter: {
    desc: {
      de: [
        "Dunkle Materie ist unsichtbar, aber überall: Sie sendet kein Licht aus, schluckt keines und reflektiert keines – und macht doch rund 27 Prozent des gesamten Universums aus, fünfmal mehr als alle Sterne, Planeten und Gaswolken zusammen.",
        "Wir bemerken sie nur an ihrer Schwerkraft. Galaxien rotieren schneller, als ihre sichtbare Masse erlaubt; Galaxienhaufen halten zusammen, obwohl sie auseinanderfliegen müssten. Etwas Unsichtbares hält das kosmische Gerüst zusammen. Was dunkle Materie wirklich ist – ein unbekanntes Elementarteilchen? –, weiß bis heute niemand.",
        "Sie ist kein fernes Objekt, sondern durchdringt auch unsere Milchstraße und sogar den Raum um uns herum – ein stiller, schwerer Schatten, der das ganze Weltall formt.",
      ],
      en: [
        "Dark matter is invisible yet everywhere: it emits no light, absorbs none and reflects none – and still makes up about 27 percent of the entire universe, five times more than all stars, planets and gas clouds combined.",
        "We notice it only through its gravity. Galaxies spin faster than their visible mass allows; clusters hold together when they ought to fly apart. Something unseen binds the cosmic scaffolding. What dark matter truly is – an unknown elementary particle? – nobody yet knows.",
        "It is not a distant object but pervades our own Milky Way and even the space around us – a silent, heavy shadow that shapes the whole universe.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Unsichtbare Materieform", en: "Invisible form of matter" } },
        { label: { de: "Anteil am Universum", en: "Share of the universe" }, value: { de: "~27 %", en: "~27%" } },
        { label: { de: "Nachweis", en: "Detection" }, value: { de: "Nur über Schwerkraft (indirekt)", en: "Only via gravity (indirect)" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Erste Hinweise", en: "First hints" }, value: { de: "1933 (Zwicky), 1970er (Vera Rubin)", en: "1933 (Zwicky), 1970s (Vera Rubin)" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Vorkommen", en: "Where it is" }, value: { de: "Im gesamten Kosmos, auch um uns herum", en: "Throughout the cosmos, even around us" } },
      ]},
    ],
  },

  darkenergy: {
    desc: {
      de: [
        "Dunkle Energie ist die größte Unbekannte der Kosmologie: eine geheimnisvolle Kraft, die rund 68 Prozent des gesamten Universums ausmacht und den Raum selbst auseinandertreibt.",
        "1998 entdeckten Astronomen, dass sich die Ausdehnung des Universums nicht verlangsamt, wie man erwartet hatte, sondern beschleunigt. Etwas wirkt der Schwerkraft entgegen und drückt den Kosmos immer schneller auseinander. Diese Beobachtung wurde 2011 mit dem Nobelpreis ausgezeichnet – doch was dunkle Energie ist, bleibt eines der tiefsten ungelösten Rätsel der Physik.",
        "Sie bestimmt das Schicksal des gesamten Alls: Setzt sich die Beschleunigung fort, werden ferne Galaxien eines Tages für immer hinter unserem Horizont verschwinden.",
      ],
      en: [
        "Dark energy is the greatest unknown in cosmology: a mysterious force that makes up about 68 percent of the entire universe and drives space itself apart.",
        "In 1998, astronomers discovered that the expansion of the universe is not slowing down as expected, but accelerating. Something counteracts gravity and pushes the cosmos apart ever faster. This observation earned the Nobel Prize in 2011 – yet what dark energy is remains one of the deepest unsolved puzzles in physics.",
        "It governs the fate of the whole universe: if the acceleration continues, distant galaxies will one day vanish forever beyond our horizon.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Treibende Kraft der Expansion", en: "Driving force of cosmic expansion" } },
        { label: { de: "Anteil am Universum", en: "Share of the universe" }, value: { de: "~68 %", en: "~68%" } },
        { label: { de: "Wirkung", en: "Effect" }, value: { de: "Beschleunigte Ausdehnung des Alls", en: "Accelerating expansion of the universe" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr", en: "Year" }, value: { de: "1998 (beschleunigte Expansion)", en: "1998 (accelerating expansion)" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Vorkommen", en: "Where it is" }, value: { de: "Im gesamten Raum", en: "Throughout all of space" } },
      ]},
    ],
  },

  herculescorona: {
    desc: {
      de: [
        "Die Hercules–Corona-Borealis-Mauer gilt als eine der größten – wenn auch umstrittenen – bekannten Strukturen des Universums: eine Ansammlung von Galaxien, die sich über rund 10 Milliarden Lichtjahre erstrecken soll, fast ein Zehntel des beobachtbaren Universums.",
        "Sie wurde 2013 aufgespürt, weil sich in einer riesigen Himmelsregion ungewöhnlich viele Gammastrahlenausbrüche – die hellsten Explosionen des Kosmos – auf ähnlicher Entfernung häuften. Ist sie real, sprengt sie die Grenze dessen, was die Theorien zur Strukturbildung eigentlich für möglich halten.",
        "Ihr Licht ist Milliarden Jahre zu uns unterwegs – wir blicken in eine Epoche, als das Universum erst halb so alt war wie heute und die ersten großen Galaxien gerade heranwuchsen.",
      ],
      en: [
        "The Hercules–Corona Borealis Great Wall is considered one of the largest – though disputed – known structures in the universe: a collection of galaxies said to stretch across some 10 billion light-years, almost a tenth of the observable universe.",
        "It was detected in 2013 because an unusually large number of gamma-ray bursts – the brightest explosions in the cosmos – clustered at similar distances in one huge region of the sky. If it is real, it pushes beyond the limit of what structure-formation theories actually deem possible.",
        "Its light has travelled billions of years to reach us – we look into an era when the universe was only half its present age and the first great galaxies were just maturing.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Galaxienmauer (umstrittene Größtstruktur)", en: "Galaxy wall (disputed largest structure)" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "~10 Mrd. Lichtjahre (Lichtlaufzeit)", en: "~10 billion light-years (light travel)" } },
        { label: { de: "Ausdehnung", en: "Extent" }, value: { de: "~10 Mrd. Lichtjahre", en: "~10 billion light-years" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr", en: "Year" }, value: { de: "2013 (Horváth, Hakkila, Bagoly)", en: "2013 (Horváth, Hakkila, Bagoly)" } },
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Herkules / Nördliche Krone (Hercules/Corona Borealis)", en: "Hercules / Corona Borealis" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~10 Mrd. Jahre", en: "~10 billion years" } },
      ]},
    ],
  },

  cmb: {
    desc: {
      de: [
        "Die kosmische Hintergrundstrahlung ist das „Babyfoto“ des Universums – das älteste Licht überhaupt, ausgesandt nur 380.000 Jahre nach dem Urknall, als der Kosmos zum ersten Mal durchsichtig wurde.",
        "Damals kühlte das heiße Ur-Plasma so weit ab, dass sich Atome bildeten und das Licht frei fliegen konnte. Heute, 13,8 Milliarden Jahre später, hat die Ausdehnung des Raums dieses Glühen zu Mikrowellen gedehnt – ein gleichmäßiges Leuchten aus allen Richtungen, mit nur winzigen Temperaturschwankungen, aus denen einst alle Galaxien hervorgingen.",
        "Hinter dieser Strahlung liegt das Unsichtbare: Es ist die früheste Grenze, die wir mit Licht erreichen können. Erstmals gemessen wurde sie 1965 – zunächst gehalten für ein Rauschen, dann erkannt als der Nachhall des Anfangs von allem.",
      ],
      en: [
        "The cosmic microwave background is the 'baby photo' of the universe – the oldest light of all, released just 380,000 years after the Big Bang, when the cosmos first became transparent.",
        "Back then the hot primordial plasma cooled enough for atoms to form and light to fly free. Today, 13.8 billion years later, the expansion of space has stretched that glow into microwaves – an even radiance from every direction, with only tiny temperature ripples from which all galaxies later grew.",
        "Beyond this radiation lies the unseen: it is the earliest boundary we can reach with light. It was first measured in 1965 – at first mistaken for noise, then recognised as the echo of the beginning of everything.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Älteste Strahlung des Universums", en: "Oldest radiation in the universe" } },
        { label: { de: "Alter", en: "Age" }, value: { de: "13,8 Mrd. Jahre (380.000 J. nach dem Urknall)", en: "13.8 billion years (380,000 yr after the Big Bang)" } },
        { label: { de: "Temperatur heute", en: "Temperature today" }, value: { de: "2,725 K (–270,4 °C)", en: "2.725 K (–270.4 °C)" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr", en: "Year" }, value: { de: "1965 (Penzias & Wilson)", en: "1965 (Penzias & Wilson)" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~13,8 Mrd. Jahre", en: "~13.8 billion years" } },
      ]},
    ],
  },

  /* ===================== CLUSTER ===================== */

  hyades: {
    desc: {
      de: [
        "Die Hyaden sind der erdnächste offene Sternhaufen – eine lockere, V-förmige Sternengruppe, die das „Gesicht“ des Stiers im Sternbild Taurus bildet.",
        "Rund 153 Lichtjahre entfernt und etwa 625 Millionen Jahre alt, gehören seine Sterne zu einer gemeinsamen Familie, die zur selben Zeit aus derselben Gaswolke entstand. Der helle orangerote Aldebaran scheint zwar mitten in der V-Form zu funkeln, gehört aber gar nicht dazu – er steht nur zufällig in derselben Blickrichtung, weit näher bei uns.",
        "Ihr Licht ist rund 153 Jahre zu uns unterwegs – es brach in der Mitte des 19. Jahrhunderts auf, als die ersten Fotografien des Sternenhimmels entstanden.",
      ],
      en: [
        "The Hyades are the nearest open star cluster to Earth – a loose, V-shaped group of stars forming the 'face' of Taurus the Bull.",
        "About 153 light-years away and roughly 625 million years old, its stars belong to one common family, born at the same time from the same cloud of gas. The bright orange-red Aldebaran appears to sparkle in the middle of the V, but is not part of the cluster at all – it merely lies along the same line of sight, far closer to us.",
        "Its light has travelled about 153 years – it set out in the mid-19th century, when the first photographs of the night sky were being made.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Offener Sternhaufen", en: "Open star cluster" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "≈ 153 Lichtjahre", en: "≈ 153 light-years" } },
        { label: { de: "Alter", en: "Age" }, value: { de: "~625 Mio. Jahre", en: "~625 million years" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Bekannt seit", en: "Known since" }, value: { de: "der Antike", en: "antiquity" } },
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Stier (Taurus)", en: "Taurus" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~153 Jahre", en: "~153 years" } },
      ]},
    ],
  },

  pleiades: {
    desc: {
      de: [
        "Die Plejaden (das Siebengestirn) sind der wohl berühmteste offene Sternhaufen am Himmel – über 1.000 junge, heißblaue Sterne, dicht beieinander, von denen das bloße Auge sechs bis sieben erkennt.",
        "Mit nur rund 100 Millionen Jahren sind sie kosmisch gesehen Säuglinge. Die Sterne sind in zarte blaue Schleier aus Staub gehüllt, durch den sie gerade hindurchziehen und der ihr Licht reflektiert. Schon in der Antike waren sie als „Sieben Schwestern“ bekannt und finden sich in den Mythen vieler Völker wieder.",
        "Ihr Licht ist rund 444 Jahre zu uns unterwegs – es brach auf zur Zeit von William Shakespeare und der ersten Fernrohre.",
      ],
      en: [
        "The Pleiades (the 'Seven Sisters') are perhaps the most famous open star cluster in the sky – over 1,000 young, hot-blue stars huddled together, of which the naked eye picks out six or seven.",
        "At only about 100 million years old, they are infants on the cosmic scale. The stars are wrapped in delicate blue veils of dust they happen to be drifting through, which reflects their light. Known since antiquity as the 'Seven Sisters', they appear in the myths of many cultures.",
        "Their light has travelled about 444 years – it set out in the age of William Shakespeare and the first telescopes.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Offener Sternhaufen (M45)", en: "Open star cluster (M45)" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "≈ 444 Lichtjahre", en: "≈ 444 light-years" } },
        { label: { de: "Sterne", en: "Stars" }, value: { de: "über 1.000", en: "over 1,000" } },
        { label: { de: "Alter", en: "Age" }, value: { de: "~100 Mio. Jahre", en: "~100 million years" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Bekannt seit", en: "Known since" }, value: { de: "der Antike", en: "antiquity" } },
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Stier (Taurus)", en: "Taurus" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~444 Jahre", en: "~444 years" } },
      ]},
    ],
  },

  omegacentauri: {
    desc: {
      de: [
        "Omega Centauri ist der größte und hellste Kugelsternhaufen der Milchstraße – eine gewaltige Kugel aus rund 10 Millionen Sternen, im Zentrum so dicht gepackt, dass dort kaum eine Nacht völlig dunkel wäre.",
        "Mit rund vier Millionen Sonnenmassen sticht er aus allen anderen Kugelhaufen heraus. Astronomen vermuten heute, dass er gar kein gewöhnlicher Haufen ist, sondern der ausgeweidete Kern einer Zwerggalaxie, die einst von der Milchstraße verschluckt wurde – möglicherweise mit einem mittelschweren Schwarzen Loch im Zentrum.",
        "Sein Licht ist rund 17.000 Jahre zu uns unterwegs – es brach auf, als auf der Erde die Eiszeitmenschen die Höhlen von Lascaux bemalten.",
      ],
      en: [
        "Omega Centauri is the largest and brightest globular cluster of the Milky Way – a colossal sphere of about 10 million stars, packed so densely at its core that there a night would scarcely ever be fully dark.",
        "At roughly four million solar masses, it stands out from every other globular cluster. Astronomers now suspect it is not an ordinary cluster at all, but the gutted core of a dwarf galaxy once swallowed by the Milky Way – possibly with an intermediate-mass black hole at its centre.",
        "Its light has travelled about 17,000 years – it set out when Ice Age humans were painting the caves of Lascaux on Earth.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Kugelsternhaufen (NGC 5139)", en: "Globular cluster (NGC 5139)" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "≈ 17.000 Lichtjahre", en: "≈ 17,000 light-years" } },
        { label: { de: "Sterne", en: "Stars" }, value: { de: "~10 Millionen", en: "~10 million" } },
        { label: { de: "Masse", en: "Mass" }, value: { de: "~4 Mio. Sonnenmassen", en: "~4 million solar masses" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Als Haufen erkannt", en: "Identified as a cluster" }, value: { de: "1677 (Edmond Halley)", en: "1677 (Edmond Halley)" } },
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Zentaur (Centaurus)", en: "Centaurus" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~17.000 Jahre", en: "~17,000 years" } },
      ]},
    ],
  },

  /* ===================== NEBULA ===================== */

  helixnebula: {
    desc: {
      de: [
        "Der Helixnebel, auch „Auge Gottes“ genannt, ist einer der nächsten planetarischen Nebel – die abgeworfene Hülle eines sterbenden Sterns, die sich wie ein gewaltiger Ring aus leuchtendem Gas ins All ausbreitet.",
        "Aus der richtigen Perspektive sieht er aus wie eine riesige Iris, die uns aus dem All anblickt. Im Zentrum glüht der heiße Rest des Sterns, ein Weißer Zwerg, dessen Strahlung das Gas zum Leuchten anregt. So wird auch unsere Sonne in einigen Milliarden Jahren enden.",
        "Sein Licht ist rund 650 Jahre zu uns unterwegs – es brach auf im späten Mittelalter, zur Zeit der ersten Universitäten Europas.",
      ],
      en: [
        "The Helix Nebula, also called the 'Eye of God', is one of the nearest planetary nebulae – the shed shell of a dying star, spreading into space as a vast ring of glowing gas.",
        "From the right angle it looks like a giant iris gazing back at us from space. At its centre glows the hot stellar remnant, a white dwarf whose radiation makes the gas shine. This is how our own Sun will end, a few billion years from now.",
        "Its light has travelled about 650 years – it set out in the late Middle Ages, in the era of Europe's first universities.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Planetarischer Nebel", en: "Planetary nebula" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "≈ 650 Lichtjahre", en: "≈ 650 light-years" } },
        { label: { de: "Durchmesser", en: "Diameter" }, value: { de: "~2,5 Lichtjahre", en: "~2.5 light-years" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr", en: "Year" }, value: { de: "vor 1824 (Karl Ludwig Harding)", en: "before 1824 (Karl Ludwig Harding)" } },
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Wassermann (Aquarius)", en: "Aquarius" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~650 Jahre", en: "~650 years" } },
      ]},
    ],
  },

  vela: {
    desc: {
      de: [
        "Der Vela-Supernova-Überrest sind die Trümmer eines Sterns, der vor rund 11.000 Jahren in einer gewaltigen Explosion zerrissen wurde – feine, leuchtende Gasfäden, die sich über ein riesiges Stück Himmel verteilen.",
        "Im Zentrum des Überrests rotiert der Vela-Pulsar, ein winziger, extrem dichter Neutronenstern, der sich elfmal pro Sekunde um sich selbst dreht und dabei wie ein kosmischer Leuchtturm Strahlung aussendet. Es ist einer der erdnächsten und am besten untersuchten Pulsare.",
        "Sein Licht ist rund 815 Jahre zu uns unterwegs – es brach auf im Hochmittelalter, lange bevor die Astronomen ahnten, dass Sterne so spektakulär sterben können.",
      ],
      en: [
        "The Vela Supernova Remnant is the debris of a star torn apart in a colossal explosion about 11,000 years ago – fine, glowing filaments of gas spread across a huge patch of sky.",
        "At the heart of the remnant spins the Vela Pulsar, a tiny, extremely dense neutron star that rotates eleven times a second, beaming out radiation like a cosmic lighthouse. It is one of the nearest and best-studied pulsars to Earth.",
        "Its light has travelled about 815 years – it set out in the High Middle Ages, long before astronomers suspected that stars could die so spectacularly.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Supernova-Überrest mit Pulsar", en: "Supernova remnant with pulsar" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "≈ 815 Lichtjahre", en: "≈ 815 light-years" } },
        { label: { de: "Alter", en: "Age" }, value: { de: "~11.000 Jahre", en: "~11,000 years" } },
        { label: { de: "Pulsar-Rotation", en: "Pulsar spin" }, value: { de: "~11-mal pro Sekunde", en: "~11 times per second" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Pulsar entdeckt", en: "Pulsar discovered" }, value: { de: "1968", en: "1968" } },
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Segel des Schiffs (Vela)", en: "Vela" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~815 Jahre", en: "~815 years" } },
      ]},
    ],
  },

  orionnebula: {
    desc: {
      de: [
        "Der Orionnebel ist die nächste große Sternenwiege – eine gewaltige leuchtende Gas- und Staubwolke, in der gerade jetzt neue Sonnen geboren werden. Mit bloßem Auge erkennt man ihn als verschwommenen „Stern“ im Schwert des Orion.",
        "In seinem Inneren leuchtet das Trapez, eine Gruppe heißer junger Sterne, deren Strahlung den ganzen Nebel zum Glühen bringt. Rundherum entstehen in dichten Knoten aus Gas und Staub weitere Sterne mit ihren ersten Planetenscheiben – ein Blick auf das, was vor 4,6 Milliarden Jahren auch unsere Sonne geformt hat.",
        "Sein Licht ist rund 1.340 Jahre zu uns unterwegs – es brach auf im frühen Mittelalter, zur Zeit Karls des Großen.",
      ],
      en: [
        "The Orion Nebula is the nearest great stellar nursery – a vast glowing cloud of gas and dust where new suns are being born right now. To the naked eye it appears as a fuzzy 'star' in Orion's sword.",
        "At its heart shines the Trapezium, a cluster of hot young stars whose radiation sets the whole nebula aglow. All around, more stars are forming in dense knots of gas and dust, complete with their first planet-forming discs – a glimpse of what shaped our own Sun 4.6 billion years ago.",
        "Its light has travelled about 1,340 years – it set out in the early Middle Ages, in the time of Charlemagne.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Emissionsnebel / Sternentstehungsgebiet (M42)", en: "Emission nebula / star-forming region (M42)" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "≈ 1.340 Lichtjahre", en: "≈ 1,340 light-years" } },
        { label: { de: "Durchmesser", en: "Diameter" }, value: { de: "~24 Lichtjahre", en: "~24 light-years" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr", en: "Year" }, value: { de: "1610 (Nicolas-Claude Fabri de Peiresc)", en: "1610 (Nicolas-Claude Fabri de Peiresc)" } },
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Orion", en: "Orion" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~1.340 Jahre", en: "~1,340 years" } },
      ]},
    ],
  },

  ringnebula: {
    desc: {
      de: [
        "Der Ringnebel ist ein fast perfekter Ring aus leuchtendem Gas, abgestoßen von einem sterbenden Stern – einer der bekanntesten planetarischen Nebel und ein Lieblingsziel von Hobby-Astronomen.",
        "In seinem Zentrum glüht der heiße Rest des einstigen Sterns, ein Weißer Zwerg mit rund 70.000 Grad Celsius Oberflächentemperatur. Seine Strahlung lässt die abgestoßenen Gasschalen in zarten Farben leuchten. Das James-Webb-Teleskop enthüllte, dass der scheinbar einfache Ring in Wahrheit eine komplexe, schalenförmige Struktur besitzt.",
        "Sein Licht ist rund 2.500 Jahre zu uns unterwegs – es brach auf zur Zeit der antiken griechischen Philosophen und der Geburt der Naturwissenschaft.",
      ],
      en: [
        "The Ring Nebula is an almost perfect ring of glowing gas shed by a dying star – one of the best-known planetary nebulae and a favourite target of amateur astronomers.",
        "At its centre glows the hot remnant of the former star, a white dwarf with a surface temperature of about 70,000 degrees Celsius. Its radiation makes the cast-off gas shells shine in delicate colours. The James Webb telescope revealed that the seemingly simple ring is in fact a complex, shell-like structure.",
        "Its light has travelled about 2,500 years – it set out in the age of the ancient Greek philosophers and the birth of natural science.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Planetarischer Nebel (M57)", en: "Planetary nebula (M57)" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "≈ 2.500 Lichtjahre", en: "≈ 2,500 light-years" } },
        { label: { de: "Durchmesser", en: "Diameter" }, value: { de: "~1 Lichtjahr", en: "~1 light-year" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr", en: "Year" }, value: { de: "1779 (Antoine Darquier)", en: "1779 (Antoine Darquier)" } },
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Leier (Lyra)", en: "Lyra" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~2.500 Jahre", en: "~2,500 years" } },
      ]},
    ],
  },

  lagoonnebula: {
    desc: {
      de: [
        "Der Lagunennebel ist eine riesige leuchtende Wolke aus Gas und Staub, in der ganze Sternhaufen geboren werden – rund 100 Lichtjahre breit und damit eines der größten Sternentstehungsgebiete am Sommerhimmel.",
        "Seinen Namen verdankt er einer dunklen, lagunenförmigen Staubspur, die das helle Gas durchzieht. Im Inneren formen sich aus turbulenten Wirbeln neue Sterne; die heißesten von ihnen bringen den Nebel mit ihrer Strahlung zum Leuchten und blasen riesige Höhlen ins Gas.",
        "Sein Licht ist rund 4.100 Lichtjahre zu uns unterwegs – es brach auf, als auf der Erde die ersten Hochkulturen Mesopotamiens und Ägyptens entstanden.",
      ],
      en: [
        "The Lagoon Nebula is a vast glowing cloud of gas and dust where entire star clusters are born – about 100 light-years across, making it one of the largest star-forming regions in the summer sky.",
        "It owes its name to a dark, lagoon-shaped lane of dust threading through the bright gas. Inside, new stars form from turbulent eddies; the hottest of them set the nebula aglow with their radiation and carve huge caverns into the gas.",
        "Its light has travelled about 4,100 light-years – it set out when the first great civilisations of Mesopotamia and Egypt were arising on Earth.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Emissionsnebel (M8)", en: "Emission nebula (M8)" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "≈ 4.100 Lichtjahre", en: "≈ 4,100 light-years" } },
        { label: { de: "Durchmesser", en: "Diameter" }, value: { de: "~100 Lichtjahre", en: "~100 light-years" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr", en: "Year" }, value: { de: "1654 (Giovanni Battista Hodierna)", en: "1654 (Giovanni Battista Hodierna)" } },
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Schütze (Sagittarius)", en: "Sagittarius" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~4.100 Jahre", en: "~4,100 years" } },
      ]},
    ],
  },

  crabnebula: {
    desc: {
      de: [
        "Der Krebsnebel ist der Überrest einer Supernova, die im Jahr 1054 am Himmel aufflammte – so hell, dass chinesische und arabische Astronomen den „Gaststern“ tagelang sogar am Taghimmel sahen.",
        "Heute breiten sich seine Trümmer als ein Geflecht leuchtender Gasfäden über rund 11 Lichtjahre aus. In seinem Zentrum blinkt der Krebs-Pulsar, ein winziger Neutronenstern, der sich 30-mal pro Sekunde dreht und den ganzen Nebel mit Energie speist. Er war das erste Objekt, dessen Ausdehnung man direkt mit einer historischen Sternexplosion verknüpfen konnte.",
        "Sein Licht ist rund 6.500 Jahre zu uns unterwegs – die Explosion selbst sehen wir, wie sie vor knapp 1.000 Jahren erschien, doch das Sternlicht stammt aus einer noch viel älteren Epoche der Jungsteinzeit.",
      ],
      en: [
        "The Crab Nebula is the remnant of a supernova that blazed up in the sky in the year 1054 – so bright that Chinese and Arab astronomers saw the 'guest star' even in the daytime sky for days.",
        "Today its debris spreads as a web of glowing filaments about 11 light-years across. At its centre flashes the Crab Pulsar, a tiny neutron star spinning 30 times a second and feeding the whole nebula with energy. It was the first object whose expansion could be directly tied to a historical stellar explosion.",
        "Its light has travelled about 6,500 years – we see the supernova as it appeared nearly 1,000 years ago, but the starlight itself comes from a far older Neolithic age.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Supernova-Überrest (M1)", en: "Supernova remnant (M1)" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "≈ 6.500 Lichtjahre", en: "≈ 6,500 light-years" } },
        { label: { de: "Durchmesser", en: "Diameter" }, value: { de: "~11 Lichtjahre", en: "~11 light-years" } },
        { label: { de: "Pulsar-Rotation", en: "Pulsar spin" }, value: { de: "~30-mal pro Sekunde", en: "~30 times per second" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Supernova beobachtet", en: "Supernova observed" }, value: { de: "1054 (chinesische/arabische Astronomen)", en: "1054 (Chinese/Arab astronomers)" } },
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Stier (Taurus)", en: "Taurus" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~6.500 Jahre", en: "~6,500 years" } },
      ]},
    ],
  },

  eaglenebula: {
    desc: {
      de: [
        "Im Adlernebel stehen die „Säulen der Schöpfung“ – Türme aus kaltem Gas und Staub, mehrere Lichtjahre hoch, in deren Inneren neue Sterne entstehen. Das Hubble-Bild von 1995 wurde zu einer der berühmtesten Aufnahmen der Astronomiegeschichte.",
        "Die Säulen sind die letzten dichten Reste einer einst viel größeren Wolke, deren übriges Gas von der harten Strahlung naher junger Sterne weggeblasen wurde. Wie Inseln im Sturm trotzen sie noch – doch auch sie verdampfen langsam und geben dabei die in ihnen geborenen Sterne frei.",
        "Sein Licht ist rund 7.000 Jahre zu uns unterwegs – es brach auf, als auf der Erde die Jungsteinzeit begann und die ersten Menschen sesshaft wurden und Ackerbau betrieben.",
      ],
      en: [
        "In the Eagle Nebula stand the 'Pillars of Creation' – towers of cold gas and dust, several light-years tall, inside which new stars are forming. The 1995 Hubble image became one of the most famous pictures in the history of astronomy.",
        "The pillars are the last dense remnants of a once far larger cloud, the rest of whose gas was blown away by the harsh radiation of nearby young stars. Like islands in a storm they still hold out – yet they too are slowly evaporating, releasing the stars born within them.",
        "Its light has travelled about 7,000 years – it set out when the Neolithic age was beginning on Earth and the first humans were settling down to farm.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Emissionsnebel / Sternentstehungsgebiet (M16)", en: "Emission nebula / star-forming region (M16)" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "≈ 7.000 Lichtjahre", en: "≈ 7,000 light-years" } },
        { label: { de: "Höhe der Säulen", en: "Height of the pillars" }, value: { de: "~4–5 Lichtjahre", en: "~4–5 light-years" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr", en: "Year" }, value: { de: "1745/46 (Jean-Philippe de Chéseaux)", en: "1745/46 (Jean-Philippe de Chéseaux)" } },
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Schlange (Serpens)", en: "Serpens" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~7.000 Jahre", en: "~7,000 years" } },
      ]},
    ],
  },

  carinanebula: {
    desc: {
      de: [
        "Der Carinanebel ist eine der größten und hellsten Sternentstehungsregionen der ganzen Galaxie – ein gewaltiges Gebilde aus Gas und Staub, viele Male größer als der berühmtere Orionnebel.",
        "Hier wohnt auch Eta Carinae, einer der massereichsten und unbeständigsten Sterne überhaupt, der irgendwann als gewaltige Supernova vergehen wird. Das James-Webb-Teleskop enthüllte hier 2022 in atemberaubender Schärfe die „kosmischen Klippen“ – eine Landschaft aus Gasbergen, in denen unzählige neue Sterne entstehen.",
        "Sein Licht ist rund 7.500 Lichtjahre zu uns unterwegs – es brach auf zum Ende der letzten Eiszeit, als die Menschheit langsam vom Jagen zum Ackerbau überging.",
      ],
      en: [
        "The Carina Nebula is one of the largest and brightest star-forming regions in the entire galaxy – a vast structure of gas and dust, many times larger than the more famous Orion Nebula.",
        "It is also home to Eta Carinae, one of the most massive and volatile stars known, which will one day end as a tremendous supernova. In 2022 the James Webb telescope revealed its 'Cosmic Cliffs' in breathtaking detail – a landscape of gaseous mountains in which countless new stars are forming.",
        "Its light has travelled about 7,500 light-years – it set out at the end of the last Ice Age, as humanity was slowly turning from hunting to farming.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Emissionsnebel / Sternentstehungsgebiet", en: "Emission nebula / star-forming region" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "≈ 7.500 Lichtjahre", en: "≈ 7,500 light-years" } },
        { label: { de: "Durchmesser", en: "Diameter" }, value: { de: "~300 Lichtjahre", en: "~300 light-years" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr", en: "Year" }, value: { de: "1752 (Nicolas-Louis de Lacaille)", en: "1752 (Nicolas-Louis de Lacaille)" } },
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Kiel des Schiffs (Carina)", en: "Carina" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~7.500 Jahre", en: "~7,500 years" } },
      ]},
    ],
  },

  tarantula: {
    desc: {
      de: [
        "Der Tarantelnebel ist das größte und aktivste Sternentstehungsgebiet der ganzen kosmischen Nachbarschaft – allerdings liegt er nicht in der Milchstraße selbst, sondern in der Großen Magellanschen Wolke, einer Begleitgalaxie.",
        "Wäre er so nah wie der Orionnebel, würde er einen großen Teil des Himmels überstrahlen und sogar Schatten werfen. In seinem Herzen sitzt der Sternhaufen R136 mit einigen der massereichsten Sterne, die man kennt – wahre Monster mit bis zu 200 Sonnenmassen.",
        "Sein Licht ist rund 160.000 Jahre zu uns unterwegs – es brach auf, als auf der Erde der moderne Mensch gerade erst entstand und seine ersten Wege aus Afrika begann.",
      ],
      en: [
        "The Tarantula Nebula is the largest and most active star-forming region in the entire cosmic neighbourhood – though it lies not in the Milky Way itself, but in the Large Magellanic Cloud, a companion galaxy.",
        "If it were as close as the Orion Nebula, it would outshine a large part of the sky and even cast shadows. At its heart sits the star cluster R136, home to some of the most massive stars known – true monsters of up to 200 solar masses.",
        "Its light has travelled about 160,000 years – it set out when modern humans were only just emerging on Earth and beginning their first journeys out of Africa.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Emissionsnebel (30 Doradus)", en: "Emission nebula (30 Doradus)" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "≈ 160.000 Lichtjahre (Große Magellansche Wolke)", en: "≈ 160,000 light-years (Large Magellanic Cloud)" } },
        { label: { de: "Durchmesser", en: "Diameter" }, value: { de: "~600 Lichtjahre", en: "~600 light-years" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr", en: "Year" }, value: { de: "1751 (Nicolas-Louis de Lacaille)", en: "1751 (Nicolas-Louis de Lacaille)" } },
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Schwertfisch (Dorado)", en: "Dorado" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~160.000 Jahre", en: "~160,000 years" } },
      ]},
    ],
  },

  /* ===================== BLACKHOLE ===================== */

  gaiabh1: {
    desc: {
      de: [
        "Gaia BH1 ist das erdnächste bekannte Schwarze Loch – ein „schlafender“ Riese von rund 10 Sonnenmassen, der gerade nichts verschlingt und deshalb völlig unsichtbar ist.",
        "Man entdeckte es 2022 nicht an seinem eigenen Leuchten, sondern an seinem Begleiter: Ein sonnenähnlicher Stern umkreist eine unsichtbare, schwere Masse. Aus dem winzigen „Wackeln“ dieses Sterns, gemessen vom ESA-Satelliten Gaia, schlossen die Astronomen auf das verborgene Schwarze Loch. Anders als gefräßige Schwarze Löcher saugt es kein Gas an und sendet keine Röntgenstrahlung aus.",
        "Sein Licht – genauer das seines Begleitsterns – ist rund 1.560 Jahre zu uns unterwegs; es brach auf am Ende der römischen Antike, zur Zeit der Völkerwanderung.",
      ],
      en: [
        "Gaia BH1 is the closest known black hole to Earth – a 'sleeping' giant of about 10 solar masses that is currently devouring nothing and is therefore utterly invisible.",
        "It was discovered in 2022 not by its own glow but by its companion: a Sun-like star orbits an unseen, heavy mass. From this star's tiny 'wobble', measured by ESA's Gaia satellite, astronomers inferred the hidden black hole. Unlike voracious black holes, it draws in no gas and emits no X-rays.",
        "Its light – more precisely that of its companion star – has travelled about 1,560 years; it set out at the close of Roman antiquity, in the age of the great migrations.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Stellares Schwarzes Loch (ruhend)", en: "Stellar-mass black hole (dormant)" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "≈ 1.560 Lichtjahre", en: "≈ 1,560 light-years" } },
        { label: { de: "Masse", en: "Mass" }, value: { de: "~10 Sonnenmassen", en: "~10 solar masses" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr", en: "Year" }, value: { de: "2022 (Gaia, Team um Kareem El-Badry)", en: "2022 (Gaia, team led by Kareem El-Badry)" } },
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Schlangenträger (Ophiuchus)", en: "Ophiuchus" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~1.560 Jahre", en: "~1,560 years" } },
      ]},
    ],
  },

  cygnusx1: {
    desc: {
      de: [
        "Cygnus X-1 ist das erste Objekt, das je als Schwarzes Loch nachgewiesen wurde – eine starke Röntgenquelle im Sternbild Schwan, entdeckt 1964 mit Höhenforschungsraketen.",
        "Es bildet ein Paar mit einem riesigen blauen Begleitstern, von dem es unaufhörlich Gas abreißt. Dieses Gas heizt sich beim Sturz in das Schwarze Loch auf Millionen Grad auf und leuchtet hell im Röntgenlicht. Das Schwarze Loch wiegt rund 21 Sonnenmassen und rotiert nahe der Lichtgeschwindigkeit. Um es entzündete sich 1974 sogar eine berühmte Wette von Stephen Hawking.",
        "Sein Licht ist rund 7.200 Jahre zu uns unterwegs – es brach auf in der Jungsteinzeit, lange bevor irgendjemand ahnte, dass es Schwarze Löcher überhaupt geben könnte.",
      ],
      en: [
        "Cygnus X-1 is the first object ever confirmed to be a black hole – a powerful X-ray source in the constellation Cygnus, discovered in 1964 with sounding rockets.",
        "It forms a pair with a huge blue companion star from which it ceaselessly tears away gas. As this gas plunges into the black hole it heats to millions of degrees and shines brightly in X-rays. The black hole weighs about 21 solar masses and spins close to the speed of light. It even sparked a famous wager by Stephen Hawking in 1974.",
        "Its light has travelled about 7,200 years – it set out in the Neolithic age, long before anyone suspected that black holes could exist at all.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Stellares Schwarzes Loch (Röntgendoppelstern)", en: "Stellar-mass black hole (X-ray binary)" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "≈ 7.200 Lichtjahre", en: "≈ 7,200 light-years" } },
        { label: { de: "Masse", en: "Mass" }, value: { de: "~21 Sonnenmassen", en: "~21 solar masses" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr", en: "Year" }, value: { de: "1964 entdeckt, 1971/72 als Schwarzes Loch erkannt", en: "Discovered 1964, identified as a black hole 1971/72" } },
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Schwan (Cygnus)", en: "Cygnus" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~7.200 Jahre", en: "~7,200 years" } },
      ]},
    ],
  },

  sgrA: {
    desc: {
      de: [
        "Sagittarius A* ist das supermassereiche Schwarze Loch im Herzen unserer Milchstraße – ein Gigant von rund 4,3 Millionen Sonnenmassen, um den die innersten Sterne der Galaxie auf engen Bahnen rasen.",
        "Jahrzehntelang konnte man es nur indirekt erschließen, etwa aus den Bahnen dieser Sterne (wofür es 2020 den Physik-Nobelpreis gab). 2022 gelang dem Event Horizon Telescope das erste echte Bild: ein dunkler Schatten, umringt von einem glühenden Ring aus heißem Gas. Damit wurde sichtbar, was im Zentrum unserer eigenen Galaxie wohnt.",
        "Sein Licht ist rund 27.000 Jahre zu uns unterwegs – es brach auf während der letzten Eiszeit, als der moderne Mensch Europa besiedelte.",
      ],
      en: [
        "Sagittarius A* is the supermassive black hole at the heart of our Milky Way – a giant of about 4.3 million solar masses, around which the galaxy's innermost stars race on tight orbits.",
        "For decades it could only be inferred indirectly, for instance from the orbits of these stars (which earned the 2020 Nobel Prize in Physics). In 2022 the Event Horizon Telescope captured the first real image: a dark shadow ringed by a glowing band of hot gas. At last we could see what dwells at the centre of our own galaxy.",
        "Its light has travelled about 27,000 years – it set out during the last Ice Age, when modern humans were settling Europe.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Supermassereiches Schwarzes Loch", en: "Supermassive black hole" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "≈ 27.000 Lichtjahre", en: "≈ 27,000 light-years" } },
        { label: { de: "Masse", en: "Mass" }, value: { de: "~4,3 Mio. Sonnenmassen", en: "~4.3 million solar masses" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Erstes Bild", en: "First image" }, value: { de: "2022 (Event Horizon Telescope)", en: "2022 (Event Horizon Telescope)" } },
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Schütze (Sagittarius)", en: "Sagittarius" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~27.000 Jahre", en: "~27,000 years" } },
      ]},
    ],
  },

  m87: {
    desc: {
      de: [
        "M87* ist das erste Schwarze Loch, das je abgebildet wurde – ein supermassereicher Gigant von rund 6,5 Milliarden Sonnenmassen im Zentrum der Riesengalaxie M87 im Virgo-Haufen.",
        "Am 10. April 2019 präsentierte das Event Horizon Telescope der Welt das berühmte Bild: einen glühenden Ring aus heißem Gas, der die Dunkelheit des Schwarzen Lochs umschließt. Acht über die ganze Erde verteilte Radioteleskope wurden dafür zu einem virtuellen Teleskop von Planetengröße verschaltet. M87* schießt zudem einen Materiestrahl über mehrere tausend Lichtjahre ins All.",
        "Sein Licht ist rund 54 Millionen Jahre zu uns unterwegs – es brach auf, als auf der jungen Erde nach dem Aussterben der Dinosaurier die ersten Vorfahren der heutigen Säugetiere ihre Vielfalt entfalteten.",
      ],
      en: [
        "M87* is the first black hole ever imaged – a supermassive giant of about 6.5 billion solar masses at the centre of the giant galaxy M87 in the Virgo Cluster.",
        "On 10 April 2019 the Event Horizon Telescope presented the world with the famous picture: a glowing ring of hot gas encircling the darkness of the black hole. Eight radio telescopes spread across the entire Earth were linked into a single virtual telescope the size of a planet to achieve it. M87* also fires a jet of matter several thousand light-years into space.",
        "Its light has travelled about 54 million years – it set out when, after the dinosaurs' extinction, the first ancestors of today's mammals were unfolding their diversity on the young Earth.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Supermassereiches Schwarzes Loch", en: "Supermassive black hole" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "≈ 54 Mio. Lichtjahre", en: "≈ 54 million light-years" } },
        { label: { de: "Masse", en: "Mass" }, value: { de: "~6,5 Mrd. Sonnenmassen", en: "~6.5 billion solar masses" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Erstes Bild", en: "First image" }, value: { de: "2019 (Event Horizon Telescope)", en: "2019 (Event Horizon Telescope)" } },
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Jungfrau (Virgo)", en: "Virgo" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~54 Mio. Jahre", en: "~54 million years" } },
      ]},
    ],
  },

  holm15a: {
    desc: {
      de: [
        "Im Zentrum der Riesengalaxie Holm 15A sitzt eines der massereichsten Schwarzen Löcher im näheren Universum – ein Koloss von rund 40 Milliarden Sonnenmassen.",
        "Holm 15A ist die hellste Galaxie des großen Galaxienhaufens Abell 85. Ihr Kern ist auffällig „ausgehöhlt“ und sternarm – ein Hinweis darauf, dass ihr Schwarzes Loch wahrscheinlich aus der Verschmelzung zweier Vorgänger entstand, deren gemeinsame Schwerkraft die zentralen Sterne förmlich aus dem Kern hinauskatapultierte.",
        "Sein Licht ist rund 700 Millionen Jahre zu uns unterwegs – es brach auf, als auf der Erde gerade die ersten vielzelligen Tiere im Urmeer Gestalt annahmen.",
      ],
      en: [
        "At the centre of the giant galaxy Holm 15A sits one of the most massive black holes in the nearby universe – a colossus of about 40 billion solar masses.",
        "Holm 15A is the brightest galaxy of the large galaxy cluster Abell 85. Its core is strikingly 'hollowed out' and star-poor – a sign that its black hole probably formed from the merger of two predecessors, whose combined gravity flung the central stars right out of the core.",
        "Its light has travelled about 700 million years – it set out when the first multicellular animals were just taking shape in Earth's primordial seas.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Supermassereiches Schwarzes Loch", en: "Supermassive black hole" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "≈ 700 Mio. Lichtjahre", en: "≈ 700 million light-years" } },
        { label: { de: "Masse", en: "Mass" }, value: { de: "~40 Mrd. Sonnenmassen", en: "~40 billion solar masses" } },
        { label: { de: "Wirtsgalaxie", en: "Host galaxy" }, value: { de: "Holm 15A (Abell 85)", en: "Holm 15A (Abell 85)" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Massebestimmung", en: "Mass measured" }, value: { de: "2019 (VLT, ESO)", en: "2019 (VLT, ESO)" } },
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Walfisch (Cetus)", en: "Cetus" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~700 Mio. Jahre", en: "~700 million years" } },
      ]},
    ],
  },

  ton618: {
    desc: {
      de: [
        "TON 618 ist ein extrem leuchtkräftiger Quasar und beherbergt eines der größten bekannten Schwarzen Löcher überhaupt – mit rund 66 Milliarden Sonnenmassen. Sein Ereignishorizont wäre größer als unser gesamtes Sonnensystem.",
        "Wir sehen TON 618 nicht als Schwarzes Loch selbst, sondern als das blendende Leuchten der Materie, die spiralförmig hineinstürzt und sich dabei zu unvorstellbarer Helligkeit aufheizt. Trotz seiner gewaltigen Entfernung gehört es zu den hellsten Objekten des fernen Universums.",
        "Sein Licht war rund 10,8 Milliarden Jahre zu uns unterwegs – durch die Ausdehnung des Raums liegt sein heutiger Ort sogar etwa 18 Milliarden Lichtjahre entfernt. Wir sehen es, wie es aussah, als das Universum erst ein Viertel seines heutigen Alters hatte und die ersten Galaxien noch jung waren.",
      ],
      en: [
        "TON 618 is an extremely luminous quasar and hosts one of the largest known black holes of all – at about 66 billion solar masses. Its event horizon would be bigger than our entire Solar System.",
        "We see TON 618 not as the black hole itself but as the blinding glow of matter spiralling inward, heated on the way down to unimaginable brightness. Despite its vast distance, it ranks among the brightest objects in the distant universe.",
        "Its light travelled for about 10.8 billion years to reach us – and because space has expanded, its location today lies some 18 billion light-years away. We see it as it looked when the universe was only a quarter of its present age and the first galaxies were still young.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Quasar (supermassereiches Schwarzes Loch)", en: "Quasar (supermassive black hole)" } },
        { label: { de: "Lichtlaufzeit-Entfernung", en: "Light-travel distance" }, value: { de: "~10,8 Mrd. Lichtjahre", en: "~10.8 billion light-years" } },
        { label: { de: "Heutige Entfernung", en: "Distance today" }, value: { de: "~18 Mrd. Lichtjahre (mitbewegt)", en: "~18 billion light-years (comoving)" } },
        { label: { de: "Masse", en: "Mass" }, value: { de: "~66 Mrd. Sonnenmassen", en: "~66 billion solar masses" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Als Quasar erkannt", en: "Identified as a quasar" }, value: { de: "1970", en: "1970" } },
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Jagdhunde (Canes Venatici)", en: "Canes Venatici" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~10,8 Mrd. Jahre", en: "~10.8 billion years" } },
      ]},
    ],
  },

  /* ===================== GALAXY ===================== */

  milkyway: {
    desc: {
      de: [
        "Die Milchstraße ist unsere Heimatgalaxie – eine gewaltige Balkenspirale aus über 100 Milliarden Sternen, rund 100.000 Lichtjahre im Durchmesser. Unsere Sonne ist nur einer dieser Sterne, weit draußen in einem der Spiralarme.",
        "An dunklen Nächten zieht sich ihr Band als schimmernder Schleier über den Himmel – das gebündelte Licht unzähliger Sterne, in deren Scheibe wir selbst stecken. In ihrem Zentrum sitzt das supermassereiche Schwarze Loch Sagittarius A*, umgeben von dichten Sternenschwärmen und Gaswolken, in denen ständig neue Sonnen geboren werden.",
        "Unsere Sonne braucht rund 230 Millionen Jahre für eine einzige Runde um das galaktische Zentrum – seit ihrer Entstehung hat sie diese Reise erst etwa 20-mal vollendet.",
      ],
      en: [
        "The Milky Way is our home galaxy – an immense barred spiral of over 100 billion stars, about 100,000 light-years across. Our Sun is just one of these stars, far out in one of the spiral arms.",
        "On dark nights its band stretches across the sky as a shimmering veil – the pooled light of countless stars, in whose disc we ourselves are embedded. At its centre sits the supermassive black hole Sagittarius A*, surrounded by dense swarms of stars and clouds of gas in which new suns are constantly born.",
        "Our Sun takes about 230 million years to complete a single lap around the galactic centre – since its birth it has finished this journey only about 20 times.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Balkenspiralgalaxie", en: "Barred spiral galaxy" } },
        { label: { de: "Durchmesser", en: "Diameter" }, value: { de: "~100.000 Lichtjahre", en: "~100,000 light-years" } },
        { label: { de: "Sterne", en: "Stars" }, value: { de: "über 100 Milliarden", en: "over 100 billion" } },
        { label: { de: "Sonnenposition", en: "Sun's position" }, value: { de: "~26.000 Lichtjahre vom Zentrum", en: "~26,000 light-years from the centre" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Als Galaxie verstanden", en: "Understood as a galaxy" }, value: { de: "1920er Jahre", en: "1920s" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Umlaufzeit der Sonne", en: "Sun's orbital period" }, value: { de: "~230 Mio. Jahre", en: "~230 million years" } },
      ]},
    ],
  },

  lmc: {
    desc: {
      de: [
        "Die Große Magellansche Wolke ist eine Begleitgalaxie der Milchstraße – eine kleine, unregelmäßige Galaxie, die vom Südhimmel aus mit bloßem Auge als heller, neblig leuchtender Fleck zu sehen ist.",
        "In ihr liegt unter anderem der gewaltige Tarantelnebel, das aktivste Sternentstehungsgebiet der ganzen Umgebung. 1987 flammte hier außerdem die Supernova SN 1987A auf – die nächste und am besten beobachtete Sternexplosion der Neuzeit, deren Neutrinos sogar auf der Erde gemessen wurden.",
        "Ihr Licht ist rund 160.000 Jahre zu uns unterwegs – es brach auf, als der moderne Mensch gerade erst in Afrika entstand.",
      ],
      en: [
        "The Large Magellanic Cloud is a companion galaxy of the Milky Way – a small, irregular galaxy visible to the naked eye from the southern sky as a bright, hazy glowing patch.",
        "It contains, among other things, the vast Tarantula Nebula, the most active star-forming region in the whole vicinity. In 1987 supernova SN 1987A also blazed up here – the nearest and best-observed stellar explosion of modern times, whose neutrinos were even detected on Earth.",
        "Its light has travelled about 160,000 years – it set out when modern humans were only just emerging in Africa.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Irreguläre Begleitgalaxie", en: "Irregular satellite galaxy" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "≈ 160.000 Lichtjahre", en: "≈ 160,000 light-years" } },
        { label: { de: "Durchmesser", en: "Diameter" }, value: { de: "~14.000 Lichtjahre", en: "~14,000 light-years" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Bekannt seit", en: "Known since" }, value: { de: "der Antike (Namensgeber: Magellan, 1519)", en: "antiquity (named after Magellan, 1519)" } },
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Schwertfisch / Tafelberg (Dorado/Mensa)", en: "Dorado / Mensa" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~160.000 Jahre", en: "~160,000 years" } },
      ]},
    ],
  },

  smc: {
    desc: {
      de: [
        "Die Kleine Magellansche Wolke ist die zweite große Begleitgalaxie der Milchstraße – eine Zwerggalaxie, die vom Südhimmel aus mit bloßem Auge als zarter, nebliger Fleck zu erkennen ist.",
        "Zusammen mit ihrer größeren Schwester umkreist sie die Milchstraße und ist durch eine Brücke aus Gas, den „Magellanschen Strom“, mit ihr verbunden. An ihren veränderlichen Sternen, den Cepheiden, entdeckte Henrietta Leavitt eine Beziehung, die es überhaupt erst möglich machte, kosmische Entfernungen zu messen.",
        "Ihr Licht ist rund 200.000 Jahre zu uns unterwegs – es brach auf in einer Zeit, als der moderne Mensch in Afrika gerade seine ersten Schritte machte.",
      ],
      en: [
        "The Small Magellanic Cloud is the Milky Way's second large companion galaxy – a dwarf galaxy visible to the naked eye from the southern sky as a delicate, misty patch.",
        "Together with its larger sister it orbits the Milky Way and is linked to it by a bridge of gas, the 'Magellanic Stream'. From its variable stars, the Cepheids, Henrietta Leavitt discovered a relationship that first made it possible to measure cosmic distances at all.",
        "Its light has travelled about 200,000 years – it set out at a time when modern humans were just taking their first steps in Africa.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Zwerggalaxie (irregulär)", en: "Dwarf galaxy (irregular)" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "≈ 200.000 Lichtjahre", en: "≈ 200,000 light-years" } },
        { label: { de: "Durchmesser", en: "Diameter" }, value: { de: "~7.000 Lichtjahre", en: "~7,000 light-years" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Bekannt seit", en: "Known since" }, value: { de: "der Antike (Namensgeber: Magellan, 1519)", en: "antiquity (named after Magellan, 1519)" } },
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Tukan (Tucana)", en: "Tucana" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~200.000 Jahre", en: "~200,000 years" } },
      ]},
    ],
  },

  triangulum: {
    desc: {
      de: [
        "Die Dreiecksgalaxie (M33) ist die drittgrößte Galaxie unserer Lokalen Gruppe – nach Andromeda und der Milchstraße. Unter perfekt dunklem Himmel lässt sie sich gerade noch mit bloßem Auge als schwacher Schimmer erahnen und gilt damit als eines der fernsten freisichtigen Objekte überhaupt.",
        "Sie ist eine zierliche Spiralgalaxie, reich an leuchtenden Sternentstehungsgebieten, und vermutlich ein Begleiter der großen Andromeda-Galaxie. Anders als die Milchstraße scheint sie kein massereiches zentrales Schwarzes Loch zu beherbergen.",
        "Ihr Licht ist rund 2,7 Millionen Jahre zu uns unterwegs – es brach auf, als auf der Erde die ersten Vertreter der Gattung Mensch lebten.",
      ],
      en: [
        "The Triangulum Galaxy (M33) is the third-largest galaxy in our Local Group – after Andromeda and the Milky Way. Under perfectly dark skies it can just barely be glimpsed with the naked eye as a faint shimmer, making it one of the most distant objects ever visible without aid.",
        "It is a dainty spiral galaxy, rich in glowing star-forming regions, and probably a companion of the great Andromeda Galaxy. Unlike the Milky Way, it appears to host no massive central black hole.",
        "Its light has travelled about 2.7 million years – it set out when the first members of the human genus walked the Earth.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Spiralgalaxie (M33)", en: "Spiral galaxy (M33)" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "≈ 2,7 Mio. Lichtjahre", en: "≈ 2.7 million light-years" } },
        { label: { de: "Durchmesser", en: "Diameter" }, value: { de: "~60.000 Lichtjahre", en: "~60,000 light-years" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr", en: "Year" }, value: { de: "vor 1654 (Hodierna)", en: "before 1654 (Hodierna)" } },
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Dreieck (Triangulum)", en: "Triangulum" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~2,7 Mio. Jahre", en: "~2.7 million years" } },
      ]},
    ],
  },

  centaurusa: {
    desc: {
      de: [
        "Centaurus A ist die nächste aktive Galaxie – eine eigenartige elliptische Galaxie, die von einem markanten dunklen Staubband durchzogen wird, dem Überbleibsel einer früheren Verschmelzung mit einer Spiralgalaxie.",
        "In ihrem Zentrum sitzt ein supermassereiches Schwarzes Loch, das gewaltige Materiestrahlen über Millionen Lichtjahre ins All schießt. Diese Jets machen Centaurus A zu einer der hellsten Radioquellen am Himmel und zu einem Lieblingsziel der Astronomen.",
        "Ihr Licht ist rund 12 Millionen Jahre zu uns unterwegs – es brach auf in einer Zeit, als auf der Erde die Vorfahren von Menschenaffen und Menschen sich gerade voneinander zu trennen begannen.",
      ],
      en: [
        "Centaurus A is the nearest active galaxy – a peculiar elliptical galaxy crossed by a striking dark band of dust, the leftover of an earlier merger with a spiral galaxy.",
        "At its centre sits a supermassive black hole that fires enormous jets of matter millions of light-years into space. These jets make Centaurus A one of the brightest radio sources in the sky and a favourite target of astronomers.",
        "Its light has travelled about 12 million years – it set out at a time when, on Earth, the ancestors of great apes and humans were just beginning to part ways.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Aktive elliptische Galaxie (NGC 5128)", en: "Active elliptical galaxy (NGC 5128)" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "≈ 12 Mio. Lichtjahre", en: "≈ 12 million light-years" } },
        { label: { de: "Besonderheit", en: "Notable" }, value: { de: "Jets über Mio. Lichtjahre, starke Radioquelle", en: "Jets spanning millions of light-years, strong radio source" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr", en: "Year" }, value: { de: "1826 (James Dunlop)", en: "1826 (James Dunlop)" } },
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Zentaur (Centaurus)", en: "Centaurus" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~12 Mio. Jahre", en: "~12 million years" } },
      ]},
    ],
  },

  cigargalaxy: {
    desc: {
      de: [
        "Die Zigarrengalaxie (M82) ist eine Starburst-Galaxie – sie bildet zehnmal schneller neue Sterne als die Milchstraße. Von der Kante gesehen wirkt sie länglich wie eine Zigarre.",
        "Angefacht wird dieses Sternenfeuerwerk von einer engen Begegnung mit ihrer großen Nachbarin M81: Deren Schwerkraft hat das Gas in M82 zusammengedrückt und unzählige Sternentstehungen ausgelöst. Aus ihrem Zentrum quellen heiße Gasfontänen, die im Infrarot- und Röntgenlicht spektakulär leuchten.",
        "Ihr Licht ist rund 12 Millionen Jahre zu uns unterwegs – es brach auf, als sich auf der Erde gerade die Linien von Menschenaffen und Menschen aufzuteilen begannen.",
      ],
      en: [
        "The Cigar Galaxy (M82) is a starburst galaxy – it forms new stars ten times faster than the Milky Way. Seen edge-on, it appears elongated like a cigar.",
        "This stellar fireworks display is fuelled by a close encounter with its large neighbour M81: that galaxy's gravity has compressed the gas in M82 and triggered countless bursts of star formation. From its centre billow hot fountains of gas, glowing spectacularly in infrared and X-ray light.",
        "Its light has travelled about 12 million years – it set out when, on Earth, the lineages of great apes and humans were just beginning to diverge.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Starburst-Galaxie (M82)", en: "Starburst galaxy (M82)" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "≈ 12 Mio. Lichtjahre", en: "≈ 12 million light-years" } },
        { label: { de: "Durchmesser", en: "Diameter" }, value: { de: "~37.000 Lichtjahre", en: "~37,000 light-years" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr", en: "Year" }, value: { de: "1774 (Johann Elert Bode)", en: "1774 (Johann Elert Bode)" } },
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Großer Bär (Ursa Major)", en: "Ursa Major" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~12 Mio. Jahre", en: "~12 million years" } },
      ]},
    ],
  },

  whirlpool: {
    desc: {
      de: [
        "Die Whirlpool-Galaxie (M51) ist die klassische „Strudel“-Spirale – eine Galaxie mit so vollkommen ausgeprägten Spiralarmen, dass sie wie ein kosmischer Wirbel aussieht. Sie war die erste Galaxie, an der man überhaupt eine Spiralstruktur erkannte.",
        "Ihre prächtigen Arme verdankt sie dem Tanz mit einer kleinen Begleitgalaxie, die an einem ihrer Arme zerrt und so die Sternentstehung anregt. Heute ist sie eines der beliebtesten Fotomotive für Hobby- wie Profiastronomen.",
        "Ihr Licht ist rund 23 Millionen Jahre zu uns unterwegs – es brach auf, als auf der Erde das Zeitalter der Säugetiere in voller Blüte stand, lange vor dem Erscheinen des Menschen.",
      ],
      en: [
        "The Whirlpool Galaxy (M51) is the classic 'whirlpool' spiral – a galaxy with such perfectly developed spiral arms that it looks like a cosmic vortex. It was the first galaxy in which a spiral structure was ever recognised.",
        "It owes its magnificent arms to a dance with a small companion galaxy that tugs at one of them, stirring up star formation. Today it is one of the most beloved photographic targets for amateur and professional astronomers alike.",
        "Its light has travelled about 23 million years – it set out when the Age of Mammals was in full bloom on Earth, long before humans appeared.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Spiralgalaxie (M51)", en: "Spiral galaxy (M51)" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "≈ 23 Mio. Lichtjahre", en: "≈ 23 million light-years" } },
        { label: { de: "Durchmesser", en: "Diameter" }, value: { de: "~60.000 Lichtjahre", en: "~60,000 light-years" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr", en: "Year" }, value: { de: "1773 (Charles Messier)", en: "1773 (Charles Messier)" } },
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Jagdhunde (Canes Venatici)", en: "Canes Venatici" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~23 Mio. Jahre", en: "~23 million years" } },
      ]},
    ],
  },

  sombrero: {
    desc: {
      de: [
        "Die Sombrerogalaxie (M104) verdankt ihren Namen ihrem Aussehen: Von der Kante gesehen wirkt sie mit ihrem hellen, runden Zentrum und dem dunklen Staubband ringsum wie ein breitkrempiger mexikanischer Hut.",
        "Sie besitzt einen außergewöhnlich großen, leuchtenden Kern und beherbergt in ihrem Zentrum ein Schwarzes Loch von rund einer Milliarde Sonnenmassen – eines der massereichsten in unserer kosmischen Umgebung. Umgeben ist sie von ungewöhnlich vielen Kugelsternhaufen.",
        "Ihr Licht ist rund 31 Millionen Jahre zu uns unterwegs – es brach auf, als auf der Erde im frühen Erdzeitalter der Säugetiere die Vorläufer heutiger Tiergruppen heranwuchsen.",
      ],
      en: [
        "The Sombrero Galaxy (M104) owes its name to its appearance: seen edge-on, with its bright, round centre and the dark band of dust around it, it resembles a broad-brimmed Mexican hat.",
        "It has an unusually large, luminous core and harbours at its centre a black hole of about a billion solar masses – one of the most massive in our cosmic vicinity. It is surrounded by an unusually large number of globular clusters.",
        "Its light has travelled about 31 million years – it set out in the early Age of Mammals on Earth, as the forerunners of today's animal groups were taking shape.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Spiralgalaxie (M104)", en: "Spiral galaxy (M104)" } },
        { label: { de: "Entfernung", en: "Distance" }, value: { de: "≈ 31 Mio. Lichtjahre", en: "≈ 31 million light-years" } },
        { label: { de: "Durchmesser", en: "Diameter" }, value: { de: "~50.000 Lichtjahre", en: "~50,000 light-years" } },
        { label: { de: "Zentrales Schwarzes Loch", en: "Central black hole" }, value: { de: "~1 Mrd. Sonnenmassen", en: "~1 billion solar masses" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr", en: "Year" }, value: { de: "1781 (Pierre Méchain)", en: "1781 (Pierre Méchain)" } },
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Jungfrau (Virgo)", en: "Virgo" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~31 Mio. Jahre", en: "~31 million years" } },
      ]},
    ],
  },

  jadesz14: {
    desc: {
      de: [
        "JADES-GS-z14-0 ist die fernste bekannte Galaxie überhaupt – 2024 vom James-Webb-Weltraumteleskop aufgespürt. Ihr Licht zeigt uns das Universum, wie es nur rund 290 Millionen Jahre nach dem Urknall aussah.",
        "Dass eine so frühe Galaxie bereits überraschend hell und groß ist, stellt unsere Vorstellungen davon, wie schnell die ersten Galaxien wachsen konnten, auf die Probe. 2025 fand man in ihr sogar Sauerstoff – ein Zeichen, dass die chemische Entwicklung schon erstaunlich weit fortgeschritten war.",
        "Ihr Licht war rund 13,5 Milliarden Jahre zu uns unterwegs – durch die Ausdehnung des Raums liegt ihr heutiger Ort sogar über 30 Milliarden Lichtjahre entfernt. Wir blicken hier so weit in die Vergangenheit zurück, dass das Universum selbst noch in seiner allerersten Kindheit war.",
      ],
      en: [
        "JADES-GS-z14-0 is the most distant known galaxy of all – discovered in 2024 by the James Webb Space Telescope. Its light shows us the universe as it looked just about 290 million years after the Big Bang.",
        "That such an early galaxy is already surprisingly bright and large puts our ideas of how fast the first galaxies could grow to the test. In 2025 oxygen was even found in it – a sign that its chemical evolution was already astonishingly advanced.",
        "Its light travelled for about 13.5 billion years to reach us – and because space has expanded, its location today lies over 30 billion light-years away. Here we look so far back in time that the universe itself was still in its very earliest infancy.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ", en: "Type" }, value: { de: "Frühe Galaxie (fernste bekannte)", en: "Early galaxy (most distant known)" } },
        { label: { de: "Rotverschiebung", en: "Redshift" }, value: { de: "z ≈ 14,3", en: "z ≈ 14.3" } },
        { label: { de: "Lichtlaufzeit-Entfernung", en: "Light-travel distance" }, value: { de: "~13,5 Mrd. Lichtjahre", en: "~13.5 billion light-years" } },
        { label: { de: "Heutige Entfernung", en: "Distance today" }, value: { de: "~33,6 Mrd. Lichtjahre (mitbewegt)", en: "~33.6 billion light-years (comoving)" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr", en: "Year" }, value: { de: "2024 (James-Webb-Weltraumteleskop)", en: "2024 (James Webb Space Telescope)" } },
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Chemischer Ofen (Fornax)", en: "Fornax" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~13,5 Mrd. Jahre (Universum: ~290 Mio. J. alt)", en: "~13.5 billion years (universe ~290 million yr old)" } },
      ]},
    ],
  },

});
