/* dd_stellar.js — Detail-Infos: Sterne & Exoplaneten. Object.assign in SKY_DETAILS. */
Object.assign(SKY_DETAILS, {

  /* ===================== STERNE ===================== */

  sonne: {
    desc: {
      de: [
        "Die Sonne ist ein ganz gewöhnlicher Stern – ein gelber Zwerg vom Spektraltyp G2V – und doch der Mittelpunkt von allem, was wir Heimat nennen. In ihrem Kern verschmelzen jede Sekunde rund 600 Millionen Tonnen Wasserstoff zu Helium, und genau aus diesem leisen Dauer-Inferno stammt das Licht, das die Erde wärmt.",
        "Mit 149,6 Millionen Kilometern Abstand definiert sie eine ganze Maßeinheit: die Astronomische Einheit (1 AE). Ihr Licht ist trotzdem nicht „live“ – es braucht 8 Minuten und 20 Sekunden bis zu uns. Was am Morgen aufgeht, hat die Sonne also längst hinter sich.",
        "Sie macht 99,86 Prozent der gesamten Masse des Sonnensystems aus. Alle Planeten, Monde, Asteroiden und Kometen zusammen sind nur der winzige Rest, der beim Bauen übrig blieb.",
      ],
      en: [
        "The Sun is a thoroughly ordinary star – a yellow dwarf of spectral type G2V – and yet the centre of everything we call home. In its core, some 600 million tonnes of hydrogen fuse into helium every second, and it is this quiet, endless inferno that produces the light warming the Earth.",
        "At 149.6 million kilometres it defines a unit of measurement all by itself: the Astronomical Unit (1 AU). Even so, its light is not „live“ – it takes 8 minutes and 20 seconds to reach us. What rises in the morning, the Sun has long since left behind.",
        "It holds 99.86 percent of the entire mass of the Solar System. Every planet, moon, asteroid and comet combined is merely the tiny remainder left over from its making.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",        en: "Type" },        value: { de: "Gelber Zwerg (G2V)", en: "Yellow dwarf (G2V)" } },
        { label: { de: "Entfernung", en: "Distance" },    value: { de: "149,6 Mio. km (1 AE)", en: "149.6 million km (1 AU)" } },
        { label: { de: "Radius",     en: "Radius" },       value: { de: "696.000 km (109 Erdradien)", en: "696,000 km (109 Earth radii)" } },
        { label: { de: "Masse",      en: "Mass" },         value: { de: "1 Sonnenmasse (333.000 Erden)", en: "1 solar mass (333,000 Earths)" } },
        { label: { de: "Oberfläche", en: "Surface temp." },value: { de: "≈ 5.500 °C", en: "≈ 5,500 °C" } },
        { label: { de: "Alter",      en: "Age" },          value: { de: "≈ 4,6 Mrd. Jahre", en: "≈ 4.6 billion years" } },
      ]},
      { title: { de: "Lichtlaufzeit", en: "Light travel time" }, rows: [
        { label: { de: "Bis zur Erde", en: "To Earth" }, value: { de: "8 min 20 s", en: "8 min 20 s" } },
      ]},
    ],
  },

  proxima: {
    desc: {
      de: [
        "Proxima Centauri ist der Sonne am nächsten gelegene Stern – ein winziger Roter Zwerg vom Spektraltyp M5,5V, gerade einmal ein Achtel der Sonnenmasse. Mit bloßem Auge ist er trotz seiner Nähe unsichtbar, denn er strahlt rund 600-mal schwächer als unsere Sonne.",
        "„Nah“ ist hier relativ: 4,24 Lichtjahre entsprechen rund 40 Billionen Kilometern. Selbst die schnellste je gebaute Raumsonde, Voyager 1, bräuchte für diese Strecke über 70.000 Jahre.",
        "Proxima gehört locker zum Dreifachsystem Alpha Centauri und ist berüchtigt für seine heftigen Strahlungsausbrüche – ein Roter Zwerg, der trotz seiner Winzigkeit gewaltige Flares schleudern kann.",
      ],
      en: [
        "Proxima Centauri is the closest star to the Sun – a tiny red dwarf of spectral type M5.5V, just one eighth of a solar mass. Despite its proximity it is invisible to the naked eye, shining roughly 600 times more faintly than our Sun.",
        "„Close“ is relative here: 4.24 light-years amount to about 40 trillion kilometres. Even the fastest spacecraft ever built, Voyager 1, would need over 70,000 years to cross that gap.",
        "Proxima is loosely bound to the triple system Alpha Centauri and is notorious for its violent flares – a red dwarf that, despite its tiny size, can hurl out enormous bursts of radiation.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",        en: "Type" },          value: { de: "Roter Zwerg (M5,5V)", en: "Red dwarf (M5.5V)" } },
        { label: { de: "Entfernung", en: "Distance" },      value: { de: "4,24 Lichtjahre", en: "4.24 light-years" } },
        { label: { de: "Sternbild",  en: "Constellation" }, value: { de: "Zentaur (Centaurus)", en: "Centaurus" } },
        { label: { de: "Masse",      en: "Mass" },           value: { de: "≈ 0,12 Sonnenmassen", en: "≈ 0.12 solar masses" } },
        { label: { de: "Radius",     en: "Radius" },         value: { de: "≈ 0,15 Sonnenradien", en: "≈ 0.15 solar radii" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "≈ 4,24 Jahre", en: "≈ 4.24 years" } },
      ]},
    ],
  },

  alphacentauri: {
    desc: {
      de: [
        "Alpha Centauri ist das uns nächste Sternsystem – kein einzelner Stern, sondern gleich drei: die sonnenähnlichen Alpha Centauri A (G2V) und B (K1V), die einander eng umkreisen, plus den weit entfernten Roten Zwerg Proxima Centauri.",
        "Mit 4,37 Lichtjahren ist es so etwas wie die kosmische Vorgartengrenze der Menschheit. Genau deshalb ist es das bevorzugte Ziel von Projekten wie „Breakthrough Starshot“, das winzige Sonden mit Lichtsegeln dorthin schicken will.",
        "A und B sind unserer Sonne erstaunlich ähnlich – stünden wir auf einem Planeten dort, sähe der Himmel fast vertraut aus, nur mit zwei Sonnen statt einer.",
      ],
      en: [
        "Alpha Centauri is the nearest star system to us – not a single star but three: the Sun-like Alpha Centauri A (G2V) and B (K1V), orbiting each other closely, plus the distant red dwarf Proxima Centauri.",
        "At 4.37 light-years it is something like humanity's cosmic garden fence. That is exactly why it is the favoured target of projects such as „Breakthrough Starshot“, which aims to send tiny light-sail probes there.",
        "A and B are remarkably similar to our Sun – were we to stand on a planet there, the sky would look almost familiar, only with two suns instead of one.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",        en: "Type" },          value: { de: "Dreifachsystem (A: G2V, B: K1V, Proxima: M5,5V)", en: "Triple system (A: G2V, B: K1V, Proxima: M5.5V)" } },
        { label: { de: "Entfernung", en: "Distance" },      value: { de: "4,37 Lichtjahre", en: "4.37 light-years" } },
        { label: { de: "Sternbild",  en: "Constellation" }, value: { de: "Zentaur (Centaurus)", en: "Centaurus" } },
        { label: { de: "Masse A",    en: "Mass (A)" },       value: { de: "≈ 1,1 Sonnenmassen", en: "≈ 1.1 solar masses" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "≈ 4,37 Jahre", en: "≈ 4.37 years" } },
      ]},
    ],
  },

  barnard: {
    desc: {
      de: [
        "Barnards Stern ist ein roter Zwerg vom Spektraltyp M4V und nach dem Alpha-Centauri-System der nächste Einzelstern – nur knapp 6 Lichtjahre entfernt. Mit bloßem Auge ist er dennoch unsichtbar; er gehört zu den lichtschwächsten Sternen, die wir überhaupt gut kennen.",
        "Sein Markenzeichen ist die schnellste bekannte Eigenbewegung am gesamten Himmel: In rund 180 Jahren wandert er scheinbar die Breite des Vollmonds über das Firmament. Astronomen nennen ihn deshalb auch den „Pfeilstern“.",
        "2024 wurde nach jahrzehntelanger Suche ein Planet bestätigt, der ihn umkreist – ein altes, ruhiges Sternsystem in unserer unmittelbaren Nachbarschaft.",
      ],
      en: [
        "Barnard's Star is a red dwarf of spectral type M4V and, after the Alpha Centauri system, the nearest single star – just under 6 light-years away. Even so it is invisible to the naked eye; it is among the faintest stars we know well at all.",
        "Its signature is the fastest known proper motion in the entire sky: in about 180 years it appears to travel the width of the full Moon across the heavens. Astronomers therefore call it the „runaway star“.",
        "In 2024, after decades of searching, a planet orbiting it was confirmed – an old, quiet stellar system right on our cosmic doorstep.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",        en: "Type" },          value: { de: "Roter Zwerg (M4V)", en: "Red dwarf (M4V)" } },
        { label: { de: "Entfernung", en: "Distance" },      value: { de: "≈ 5,96 Lichtjahre", en: "≈ 5.96 light-years" } },
        { label: { de: "Sternbild",  en: "Constellation" }, value: { de: "Schlangenträger (Ophiuchus)", en: "Ophiuchus" } },
        { label: { de: "Masse",      en: "Mass" },           value: { de: "≈ 0,16 Sonnenmassen", en: "≈ 0.16 solar masses" } },
      ]},
      { title: { de: "Besonderheit", en: "Notable" }, rows: [
        { label: { de: "Eigenbewegung", en: "Proper motion" }, value: { de: "10,3″ pro Jahr (schnellste am Himmel)", en: "10.3″ per year (fastest in the sky)" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "≈ 6 Jahre", en: "≈ 6 years" } },
      ]},
    ],
  },

  luhman16: {
    desc: {
      de: [
        "Luhman 16 ist das uns nächste Paar Brauner Zwerge – „gescheiterte Sterne“, die zu massereich für Planeten, aber zu leicht sind, um in ihrem Kern dauerhaft Wasserstoff zu zünden. Erst 2013 entdeckt, liegt das Doppelobjekt nur 6,5 Lichtjahre entfernt und ist damit das drittnächste bekannte System überhaupt.",
        "Die beiden Komponenten gehören zu den seltenen L/T-Übergangstypen. Auf ihren lauwarmen „Oberflächen“ ziehen Wolkenbänder aus Eisentröpfchen und heißen Mineralien – ein Wetter, das eher an Jupiter als an einen Stern erinnert.",
        "Astronomen konnten sogar eine grobe „Wetterkarte“ erstellen: helle und dunkle Wolkenfelder, die mit der Rotation auftauchen und verschwinden. Sterne, die fast Planeten sind – und Planeten, die fast Sterne sind, treffen sich hier in der Mitte.",
      ],
      en: [
        "Luhman 16 is the nearest pair of brown dwarfs to us – „failed stars“ too massive to be planets yet too light to sustain hydrogen fusion in their cores. Discovered only in 2013, this binary lies just 6.5 light-years away, making it the third-closest known system of any kind.",
        "Both components belong to the rare L/T transition types. Across their lukewarm „surfaces“ drift cloud bands of iron droplets and hot minerals – weather more reminiscent of Jupiter than of a star.",
        "Astronomers have even produced a rough „weather map“: bright and dark cloud patches that appear and vanish with rotation. Stars that are almost planets – and planets that are almost stars – meet here in the middle.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",        en: "Type" },          value: { de: "Paar Brauner Zwerge (L7,5 + T0,5)", en: "Brown-dwarf pair (L7.5 + T0.5)" } },
        { label: { de: "Entfernung", en: "Distance" },      value: { de: "≈ 6,5 Lichtjahre", en: "≈ 6.5 light-years" } },
        { label: { de: "Sternbild",  en: "Constellation" }, value: { de: "Segel des Schiffs (Vela)", en: "Vela" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr", en: "Year" }, value: { de: "2013 (Kevin Luhman, WISE)", en: "2013 (Kevin Luhman, WISE)" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "≈ 6,5 Jahre", en: "≈ 6.5 years" } },
      ]},
    ],
  },

  sirius: {
    desc: {
      de: [
        "Sirius ist der hellste Stern am gesamten Nachthimmel – ein bläulich-weiß strahlender Hauptreihenstern vom Typ A1V, gut doppelt so massereich wie die Sonne und 25-mal leuchtkräftiger. Schon den alten Ägyptern galt sein Aufgang als Vorbote der Nilflut.",
        "Doch Sirius hat einen winzigen Begleiter: Sirius B, einen Weißen Zwerg von fast einer ganzen Sonnenmasse, zusammengepresst auf etwa Erdgröße. Ein Teelöffel seiner Materie wöge auf der Erde mehrere Tonnen.",
        "Mit nur 8,6 Lichtjahren ist Sirius einer unserer nächsten Nachbarn – das Licht, das heute Abend von ihm zu uns kommt, ist erst rund achteinhalb Jahre alt.",
      ],
      en: [
        "Sirius is the brightest star in the entire night sky – a brilliant blue-white main-sequence star of type A1V, a little over twice the Sun's mass and 25 times as luminous. To the ancient Egyptians its rising heralded the flooding of the Nile.",
        "Yet Sirius has a tiny companion: Sirius B, a white dwarf of nearly a full solar mass squeezed down to roughly Earth's size. A teaspoon of its material would weigh several tonnes on Earth.",
        "At just 8.6 light-years Sirius is one of our nearest neighbours – the light reaching us tonight is only about eight and a half years old.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",        en: "Type" },          value: { de: "Weißer Hauptreihenstern (A1V) + Weißer Zwerg", en: "White main-sequence star (A1V) + white dwarf" } },
        { label: { de: "Entfernung", en: "Distance" },      value: { de: "8,6 Lichtjahre", en: "8.6 light-years" } },
        { label: { de: "Sternbild",  en: "Constellation" }, value: { de: "Großer Hund (Canis Major)", en: "Canis Major" } },
        { label: { de: "Masse (A)",  en: "Mass (A)" },       value: { de: "≈ 2,06 Sonnenmassen", en: "≈ 2.06 solar masses" } },
        { label: { de: "Begleiter",  en: "Companion" },      value: { de: "Sirius B: ≈ 1 Sonnenmasse, erdgroß", en: "Sirius B: ≈ 1 solar mass, Earth-sized" } },
      ]},
      { title: { de: "Entdeckung (Sirius B)", en: "Discovery (Sirius B)" }, rows: [
        { label: { de: "Jahr", en: "Year" }, value: { de: "1862 (Alvan G. Clark)", en: "1862 (Alvan G. Clark)" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "≈ 8,6 Jahre", en: "≈ 8.6 years" } },
      ]},
    ],
  },

  epsiloneridani: {
    desc: {
      de: [
        "Epsilon Eridani ist ein junger, sonnenähnlicher Stern vom Typ K2V – orangefarben, etwas kühler und kleiner als unsere Sonne und mit nur wenigen hundert Millionen Jahren erstaunlich jung. In nur 10,5 Lichtjahren Entfernung ist er einer der nächsten Einzelsterne, die der Sonne ähneln.",
        "Um ihn herum liegt eine Trümmerscheibe aus Staub und mindestens ein Asteroidengürtel – wie ein Sonnensystem mitten im Bau, in dem die Planetenbildung noch nachhallt. Mindestens ein großer Planet umkreist den Stern.",
        "Wegen seiner Nähe und Ähnlichkeit war Epsilon Eridani schon 1960 eines der allerersten Ziele der Suche nach außerirdischen Funksignalen (Projekt Ozma) – und taucht bis heute regelmäßig in Science-Fiction auf.",
      ],
      en: [
        "Epsilon Eridani is a young, Sun-like star of type K2V – orange, slightly cooler and smaller than our Sun, and at only a few hundred million years remarkably young. At just 10.5 light-years it is one of the nearest single stars resembling the Sun.",
        "Around it lies a debris disk of dust and at least one asteroid belt – like a solar system mid-construction, where planet formation still echoes. At least one large planet orbits the star.",
        "Because of its proximity and similarity, Epsilon Eridani was, back in 1960, one of the very first targets in the search for alien radio signals (Project Ozma) – and it still appears regularly in science fiction today.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",        en: "Type" },          value: { de: "Orangefarbener Zwerg (K2V)", en: "Orange dwarf (K2V)" } },
        { label: { de: "Entfernung", en: "Distance" },      value: { de: "≈ 10,5 Lichtjahre", en: "≈ 10.5 light-years" } },
        { label: { de: "Sternbild",  en: "Constellation" }, value: { de: "Eridanus (Fluss)", en: "Eridanus" } },
        { label: { de: "Masse",      en: "Mass" },           value: { de: "≈ 0,82 Sonnenmassen", en: "≈ 0.82 solar masses" } },
        { label: { de: "Alter",      en: "Age" },            value: { de: "≈ 200–800 Mio. Jahre", en: "≈ 200–800 million years" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "≈ 10,5 Jahre", en: "≈ 10.5 years" } },
      ]},
    ],
  },

  tauceti: {
    desc: {
      de: [
        "Tau Ceti ist der nächste einzelne Stern, der unserer Sonne wirklich ähnelt – ein gelb-oranger Zwerg vom Typ G8V, ein wenig kühler und massearmer als die Sonne. Mit bloßem Auge ist er gut sichtbar und nur 11,9 Lichtjahre entfernt.",
        "Weil er stabil, sonnenähnlich und nah ist, gehört Tau Ceti seit den Anfängen der SETI-Forschung zu den klassischen Zielen der Suche nach außerirdischem Leben. Er besitzt eine ausgedehnte Trümmerscheibe und mehrere Planetenkandidaten.",
        "Der Stern ist deutlich älter als die Sonne und arm an schweren Elementen – ein ruhiger, langlebiger Veteran der Milchstraße, der schon leuchtete, als unser Sonnensystem noch jung war.",
      ],
      en: [
        "Tau Ceti is the nearest single star that genuinely resembles our Sun – a yellow-orange dwarf of type G8V, a little cooler and less massive than the Sun. It is easily visible to the naked eye and only 11.9 light-years away.",
        "Because it is stable, Sun-like and close, Tau Ceti has been a classic target in the search for extraterrestrial life since the dawn of SETI. It hosts an extended debris disk and several candidate planets.",
        "The star is considerably older than the Sun and poor in heavy elements – a calm, long-lived veteran of the Milky Way that was already shining when our Solar System was still young.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",        en: "Type" },          value: { de: "Gelb-oranger Zwerg (G8V)", en: "Yellow-orange dwarf (G8V)" } },
        { label: { de: "Entfernung", en: "Distance" },      value: { de: "≈ 11,9 Lichtjahre", en: "≈ 11.9 light-years" } },
        { label: { de: "Sternbild",  en: "Constellation" }, value: { de: "Walfisch (Cetus)", en: "Cetus" } },
        { label: { de: "Masse",      en: "Mass" },           value: { de: "≈ 0,78 Sonnenmassen", en: "≈ 0.78 solar masses" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "≈ 11,9 Jahre", en: "≈ 11.9 years" } },
      ]},
    ],
  },

  vega: {
    desc: {
      de: [
        "Wega ist einer der hellsten Sterne am Nordhimmel und der Hauptstern im Sternbild Leier – ein bläulich-weißer Hauptreihenstern vom Typ A0V, gut doppelt so massereich und 40-mal leuchtkräftiger als die Sonne. Lange diente er als Nullpunkt der Helligkeitsskala der Astronomen.",
        "Wega rotiert so rasend schnell – mit einem Tag von nur rund 16 Stunden –, dass sie an den Polen messbar abgeplattet ist und am Äquator kühler leuchtet als an den Polen. Wir blicken obendrein fast genau auf einen ihrer Pole.",
        "Um den Stern liegt eine Staubscheibe – ein mögliches Planetensystem im Frühstadium. In rund 12.000 Jahren wird Wega übrigens unser neuer Polarstern sein, weil die Erdachse langsam um den Himmel kreist.",
      ],
      en: [
        "Vega is one of the brightest stars in the northern sky and the lead star of the constellation Lyra – a blue-white main-sequence star of type A0V, a little over twice the Sun's mass and 40 times as luminous. For a long time it served as the zero point of astronomers' brightness scale.",
        "Vega spins so furiously fast – a day of only about 16 hours – that it is measurably flattened at the poles and shines cooler at the equator than at the poles. We also happen to look almost straight down onto one of its poles.",
        "A dust disk surrounds the star – a possible planetary system in its infancy. Incidentally, in about 12,000 years Vega will become our new pole star, as Earth's axis slowly circles the sky.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",        en: "Type" },          value: { de: "Weißer Hauptreihenstern (A0V)", en: "White main-sequence star (A0V)" } },
        { label: { de: "Entfernung", en: "Distance" },      value: { de: "≈ 25 Lichtjahre", en: "≈ 25 light-years" } },
        { label: { de: "Sternbild",  en: "Constellation" }, value: { de: "Leier (Lyra)", en: "Lyra" } },
        { label: { de: "Masse",      en: "Mass" },           value: { de: "≈ 2,1 Sonnenmassen", en: "≈ 2.1 solar masses" } },
        { label: { de: "Radius",     en: "Radius" },         value: { de: "≈ 2,4–2,8 Sonnenradien", en: "≈ 2.4–2.8 solar radii" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "≈ 25 Jahre", en: "≈ 25 years" } },
      ]},
    ],
  },

  bpm37093: {
    desc: {
      de: [
        "BPM 37093 – liebevoll „Lucy“ getauft nach dem Beatles-Song „Lucy in the Sky with Diamonds“ – ist ein Weißer Zwerg, der Überrest eines ausgebrannten sonnenähnlichen Sterns. Sein heißer Kohlenstoff-Sauerstoff-Kern ist im Lauf der Abkühlung teilweise kristallisiert.",
        "Kristallisierter Kohlenstoff ist nichts anderes als Diamant. „Lucy“ ist damit, salopp gesagt, ein erdgroßer Diamant von rund einer Sonnenmasse – der größte „Edelstein“, von dem wir wissen.",
        "Mit etwa 53 Lichtjahren liegt er in kosmischer Nachbarschaft. Astronomen lasen seine innere Struktur an winzigen Pulsationen ab – ein Stern, der leise „klingt“ wie eine Glocke und so seinen kristallinen Kern verrät.",
      ],
      en: [
        "BPM 37093 – affectionately nicknamed „Lucy“ after the Beatles song „Lucy in the Sky with Diamonds“ – is a white dwarf, the remnant of a burnt-out Sun-like star. As it cooled, its hot carbon-oxygen core partly crystallised.",
        "Crystallised carbon is nothing other than diamond. „Lucy“ is therefore, loosely speaking, an Earth-sized diamond of about one solar mass – the largest „gemstone“ we know of.",
        "At roughly 53 light-years it lies in cosmic neighbourhood. Astronomers read its internal structure from tiny pulsations – a star that quietly „rings“ like a bell, betraying its crystalline core.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",        en: "Type" },          value: { de: "Weißer Zwerg (pulsierend, DAV)", en: "White dwarf (pulsating, DAV)" } },
        { label: { de: "Entfernung", en: "Distance" },      value: { de: "≈ 53 Lichtjahre", en: "≈ 53 light-years" } },
        { label: { de: "Sternbild",  en: "Constellation" }, value: { de: "Zentaur (Centaurus)", en: "Centaurus" } },
        { label: { de: "Masse",      en: "Mass" },           value: { de: "≈ 1,1 Sonnenmassen", en: "≈ 1.1 solar masses" } },
        { label: { de: "Besonderheit", en: "Notable" },     value: { de: "kristallisierter Kohlenstoffkern (Diamant)", en: "crystallised carbon core (diamond)" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "≈ 53 Jahre", en: "≈ 53 years" } },
      ]},
    ],
  },

  antares: {
    desc: {
      de: [
        "Antares ist der Hauptstern im Skorpion und ein roter Überriese vom Typ M1,5 – mit rund 700 Sonnenradien so groß, dass er an die Stelle der Sonne gesetzt fast bis zur Marsbahn reichen würde. Sein tiefes Rot ist schon mit bloßem Auge unverkennbar.",
        "Sein Name bedeutet „Gegen-Ares“ oder „Rival des Mars“: Wegen seiner rötlichen Farbe wurde er in der Antike immer wieder mit dem Planeten Mars verwechselt – beide funkeln rot, wenn sie sich am Himmel begegnen.",
        "Mit rund 550 Lichtjahren Entfernung blicken wir tief in die Vergangenheit: Das Licht, das uns heute erreicht, brach zur Zeit des späten Mittelalters auf. Antares steht am Ende seines Lebens und wird eines Tages als Supernova explodieren.",
      ],
      en: [
        "Antares is the lead star of Scorpius and a red supergiant of type M1.5 – at about 700 solar radii so large that, placed where the Sun is, it would reach almost to the orbit of Mars. Its deep red is unmistakable even to the naked eye.",
        "Its name means „rival of Ares“ or „rival of Mars“: because of its reddish colour it was repeatedly mistaken for the planet Mars in antiquity – both glow red when they meet in the sky.",
        "At about 550 light-years we are looking deep into the past: the light reaching us today set out around the late Middle Ages. Antares is nearing the end of its life and will one day explode as a supernova.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",        en: "Type" },          value: { de: "Roter Überriese (M1,5Iab)", en: "Red supergiant (M1.5Iab)" } },
        { label: { de: "Entfernung", en: "Distance" },      value: { de: "≈ 550 Lichtjahre", en: "≈ 550 light-years" } },
        { label: { de: "Sternbild",  en: "Constellation" }, value: { de: "Skorpion (Scorpius)", en: "Scorpius" } },
        { label: { de: "Radius",     en: "Radius" },         value: { de: "≈ 700 Sonnenradien", en: "≈ 700 solar radii" } },
        { label: { de: "Masse",      en: "Mass" },           value: { de: "≈ 12 Sonnenmassen", en: "≈ 12 solar masses" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "≈ 550 Jahre", en: "≈ 550 years" } },
      ]},
    ],
  },

  betelgeuse: {
    desc: {
      de: [
        "Beteigeuze markiert die linke Schulter des Orion und ist ein roter Überriese vom Typ M1–2 – einer der größten und hellsten Sterne, die wir mit bloßem Auge sehen. An die Stelle der Sonne gesetzt, würde er bis über die Marsbahn hinausreichen und Erde und Mars verschlingen.",
        "Trotz „nur“ rund 15 Sonnenmassen ist er gewaltig aufgebläht – ein Stern am Ende seines Lebens. Seine Helligkeit schwankt sichtbar; 2019/2020 verdunkelte er sich so dramatisch („Great Dimming“), dass viele eine bevorstehende Supernova vermuteten.",
        "Beteigeuze wird eines Tages als Supernova explodieren – astronomisch gesehen „bald“, also irgendwann in den nächsten 100.000 Jahren. Bei rund 640 Lichtjahren Entfernung sehen wir ihn so, wie er zur Zeit des Spätmittelalters aussah; falls er bereits explodiert ist, wüssten wir es noch nicht.",
      ],
      en: [
        "Betelgeuse marks the left shoulder of Orion and is a red supergiant of type M1–2 – one of the largest and brightest stars we can see with the naked eye. Placed where the Sun is, it would reach beyond the orbit of Mars and swallow both Earth and Mars.",
        "Despite „only“ about 15 solar masses, it is hugely bloated – a star at the end of its life. Its brightness varies visibly; in 2019/2020 it dimmed so dramatically (the „Great Dimming“) that many suspected an imminent supernova.",
        "Betelgeuse will one day explode as a supernova – „soon“ in astronomical terms, meaning sometime within the next 100,000 years. At about 640 light-years we see it as it looked in the late Middle Ages; if it has already exploded, we would not yet know.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",        en: "Type" },          value: { de: "Roter Überriese (M1–2 Ia–ab)", en: "Red supergiant (M1–2 Ia–ab)" } },
        { label: { de: "Entfernung", en: "Distance" },      value: { de: "≈ 640 Lichtjahre", en: "≈ 640 light-years" } },
        { label: { de: "Sternbild",  en: "Constellation" }, value: { de: "Orion", en: "Orion" } },
        { label: { de: "Radius",     en: "Radius" },         value: { de: "≈ 640–760 Sonnenradien", en: "≈ 640–760 solar radii" } },
        { label: { de: "Masse",      en: "Mass" },           value: { de: "≈ 14–19 Sonnenmassen", en: "≈ 14–19 solar masses" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "≈ 640 Jahre", en: "≈ 640 years" } },
      ]},
    ],
  },

  rigel: {
    desc: {
      de: [
        "Rigel ist der hellste Stern im Orion und einer der leuchtkräftigsten Sterne unserer galaktischen Umgebung – ein blau-weißer Überriese vom Typ B8, der mit rund 120.000 Sonnenleuchtkräften strahlt. Er markiert den linken Fuß des Himmelsjägers.",
        "Während sein Nachbar Beteigeuze als alter, roter Überriese glüht, ist Rigel ein heißer, junger Riese: hohe Oberflächentemperatur, blau-weißes Licht und ein Energieumsatz, der ihn in wenigen Jahrmillionen verbrennen wird. Auch er wird als Supernova enden.",
        "Bei rund 860 Lichtjahren Entfernung blicken wir weit zurück: Das Licht, das heute Abend von Rigel zu uns kommt, brach im Hochmittelalter auf, lange vor der Erfindung des Buchdrucks.",
      ],
      en: [
        "Rigel is the brightest star in Orion and one of the most luminous stars in our galactic neighbourhood – a blue-white supergiant of type B8 shining with roughly 120,000 solar luminosities. It marks the left foot of the celestial hunter.",
        "While its neighbour Betelgeuse glows as an old red supergiant, Rigel is a hot, young giant: high surface temperature, blue-white light and an energy output that will burn it up within a few million years. It too will end as a supernova.",
        "At about 860 light-years we are looking far back: the light reaching us tonight from Rigel set out in the High Middle Ages, long before the invention of the printing press.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",        en: "Type" },          value: { de: "Blau-weißer Überriese (B8Ia)", en: "Blue-white supergiant (B8Ia)" } },
        { label: { de: "Entfernung", en: "Distance" },      value: { de: "≈ 860 Lichtjahre", en: "≈ 860 light-years" } },
        { label: { de: "Sternbild",  en: "Constellation" }, value: { de: "Orion", en: "Orion" } },
        { label: { de: "Leuchtkraft", en: "Luminosity" },   value: { de: "≈ 120.000 Sonnenleuchtkräfte", en: "≈ 120,000 solar luminosities" } },
        { label: { de: "Masse",      en: "Mass" },           value: { de: "≈ 21 Sonnenmassen", en: "≈ 21 solar masses" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "≈ 860 Jahre", en: "≈ 860 years" } },
      ]},
    ],
  },

  firstpulsar: {
    desc: {
      de: [
        "PSR B1919+21 war der erste je entdeckte Pulsar – ein rasch rotierender Neutronenstern, der wie ein kosmischer Leuchtturm in regelmäßigen Abständen Radiostrahlung über uns hinwegstreichen lässt. Jocelyn Bell Burnell stieß 1967 als Doktorandin auf das Signal.",
        "Die Pulse waren so unheimlich präzise – alle 1,337 Sekunden ein „Tick“ –, dass das Team sie kurz halb im Scherz „LGM-1“ taufte: „Little Green Men“, kleine grüne Männchen. Für einen Moment schien es, als hätte jemand ein Signal von Außerirdischen empfangen.",
        "Bald war klar: kein Sender einer fremden Zivilisation, sondern ein neuer Sterntyp. Pulsare sind Sternleichen – die hochverdichteten Kerne explodierter Sterne, kaum größer als eine Großstadt, aber schwerer als die Sonne.",
      ],
      en: [
        "PSR B1919+21 was the first pulsar ever discovered – a rapidly rotating neutron star that, like a cosmic lighthouse, sweeps a beam of radio waves over us at regular intervals. Jocelyn Bell Burnell stumbled upon the signal in 1967 as a doctoral student.",
        "The pulses were so eerily precise – a „tick“ every 1.337 seconds – that the team half-jokingly dubbed them „LGM-1“: „Little Green Men“. For a moment it seemed someone had picked up a signal from aliens.",
        "It soon became clear: not a transmitter of an alien civilisation but a new kind of star. Pulsars are stellar corpses – the hyper-dense cores of exploded stars, barely larger than a major city yet heavier than the Sun.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",        en: "Type" },          value: { de: "Pulsar (Neutronenstern)", en: "Pulsar (neutron star)" } },
        { label: { de: "Entfernung", en: "Distance" },      value: { de: "≈ 1.000 Lichtjahre", en: "≈ 1,000 light-years" } },
        { label: { de: "Sternbild",  en: "Constellation" }, value: { de: "Füchschen (Vulpecula)", en: "Vulpecula" } },
        { label: { de: "Pulsperiode", en: "Pulse period" }, value: { de: "1,337 Sekunden", en: "1.337 seconds" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr", en: "Year" }, value: { de: "1967 (Jocelyn Bell Burnell)", en: "1967 (Jocelyn Bell Burnell)" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "≈ 1.000 Jahre", en: "≈ 1,000 years" } },
      ]},
    ],
  },

  uyscuti: {
    desc: {
      de: [
        "UY Scuti gilt seit Jahren als einer der größten bekannten Sterne überhaupt – ein roter Überriese (oder Hyperriese) mit einem Radius von rund 1.700 Sonnenradien. An die Stelle der Sonne gesetzt, würde seine Oberfläche fast bis zur Jupiterbahn reichen und Merkur, Venus, Erde und Mars mühelos verschlucken.",
        "Diese Größe ist jedoch unsicher: Solche Sterne haben keine scharfe Kante, sondern eine diffuse, von Pulsationen aufgewühlte äußere Hülle, und schon die Entfernung ist schwer zu messen. Neuere Schätzungen rücken ihn teils näher und kleiner.",
        "Bei rund 5.900 Lichtjahren liegt UY Scuti tief in der Milchstraße, im Sternbild Schild. Trotz seiner gewaltigen Ausdehnung ist seine Masse nur etwa zehnmal so groß wie die der Sonne – ein aufgeblähter Riese, dünn wie ein kosmischer Nebel.",
      ],
      en: [
        "UY Scuti has for years been counted among the largest known stars of all – a red supergiant (or hypergiant) with a radius of about 1,700 solar radii. Placed where the Sun is, its surface would reach almost to the orbit of Jupiter, easily swallowing Mercury, Venus, Earth and Mars.",
        "That size is uncertain, however: such stars have no sharp edge but a diffuse outer envelope churned by pulsations, and even the distance is hard to measure. Newer estimates place it somewhat closer and smaller.",
        "At about 5,900 light-years UY Scuti lies deep in the Milky Way, in the constellation Scutum. Despite its enormous extent, its mass is only about ten times the Sun's – a bloated giant, thin as a cosmic mist.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",        en: "Type" },          value: { de: "Roter Überriese/Hyperriese", en: "Red supergiant/hypergiant" } },
        { label: { de: "Entfernung", en: "Distance" },      value: { de: "≈ 5.900 Lichtjahre (unsicher)", en: "≈ 5,900 light-years (uncertain)" } },
        { label: { de: "Sternbild",  en: "Constellation" }, value: { de: "Schild (Scutum)", en: "Scutum" } },
        { label: { de: "Radius",     en: "Radius" },         value: { de: "≈ 1.700 Sonnenradien (Schätzung)", en: "≈ 1,700 solar radii (estimate)" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "≈ 5.900 Jahre", en: "≈ 5,900 years" } },
      ]},
    ],
  },

  mucephei: {
    desc: {
      de: [
        "Mu Cephei ist ein roter Hyperriese im Sternbild Kepheus und einer der größten und leuchtkräftigsten Sterne der Milchstraße – rund 100.000-mal so leuchtkräftig wie die Sonne und mit einem Radius von über 1.000 Sonnenradien.",
        "Wilhelm Herschel war von seiner intensiven roten Farbe so beeindruckt, dass er ihn den „Granatstern“ taufte – ein Funke wie ein glühender Edelstein, der selbst im Fernglas auffällt.",
        "Bei rund 6.000 Lichtjahren Entfernung steht Mu Cephei am Rand seines Lebens. Sein Licht ist mehrere Jahrtausende alt; was wir heute sehen, brach lange vor den ersten Hochkulturen auf. Auch dieser Riese wird als Supernova enden.",
      ],
      en: [
        "Mu Cephei is a red hypergiant in the constellation Cepheus and one of the largest and most luminous stars in the Milky Way – about 100,000 times as luminous as the Sun, with a radius of over 1,000 solar radii.",
        "William Herschel was so struck by its intense red colour that he named it the „Garnet Star“ – a spark like a glowing gemstone, conspicuous even through binoculars.",
        "At about 6,000 light-years Mu Cephei stands at the edge of its life. Its light is several millennia old; what we see today set out long before the first great civilisations. This giant, too, will end as a supernova.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",        en: "Type" },          value: { de: "Roter Hyperriese (M2Ia)", en: "Red hypergiant (M2Ia)" } },
        { label: { de: "Entfernung", en: "Distance" },      value: { de: "≈ 6.000 Lichtjahre (unsicher)", en: "≈ 6,000 light-years (uncertain)" } },
        { label: { de: "Sternbild",  en: "Constellation" }, value: { de: "Kepheus (Cepheus)", en: "Cepheus" } },
        { label: { de: "Leuchtkraft", en: "Luminosity" },   value: { de: "≈ 100.000 Sonnenleuchtkräfte", en: "≈ 100,000 solar luminosities" } },
        { label: { de: "Radius",     en: "Radius" },         value: { de: "≈ 1.000+ Sonnenradien", en: "≈ 1,000+ solar radii" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "≈ 6.000 Jahre", en: "≈ 6,000 years" } },
      ]},
    ],
  },

  etacarinae: {
    desc: {
      de: [
        "Eta Carinae ist eines der instabilsten und energiereichsten Sternsysteme der Milchstraße – ein Doppelstern, dessen Hauptkomponente zu den massereichsten bekannten Sternen zählt (rund 100 Sonnenmassen) und millionenfach heller leuchtet als die Sonne.",
        "1843 erlebte das System seinen „Großen Ausbruch“: Eta Carinae wurde kurzzeitig zum zweithellsten Stern am ganzen Himmel und schleuderte dabei Materie von mehreren Sonnenmassen hinaus. Diese Trümmer bilden heute den leuchtenden „Homunkulus-Nebel“ aus zwei riesigen Staubkeulen.",
        "Bei rund 7.500 Lichtjahren ist Eta Carinae ein heißer Supernova- bzw. Hypernova-Kandidat. Es könnte längst explodiert sein, ohne dass uns die Nachricht bereits erreicht hätte – ihr Licht ist über sieben Jahrtausende unterwegs.",
      ],
      en: [
        "Eta Carinae is one of the most unstable and energetic star systems in the Milky Way – a binary whose primary component ranks among the most massive known stars (about 100 solar masses) and shines millions of times brighter than the Sun.",
        "In 1843 the system suffered its „Great Eruption“: Eta Carinae briefly became the second-brightest star in the entire sky, hurling out several solar masses of material. This debris now forms the glowing „Homunculus Nebula“ of two giant dust lobes.",
        "At about 7,500 light-years Eta Carinae is a prime supernova – or hypernova – candidate. It may already have exploded without the news reaching us yet, since its light has been travelling for over seven millennia.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",        en: "Type" },          value: { de: "Leuchtkräftiger Blauer Veränderlicher (Doppelstern)", en: "Luminous blue variable (binary)" } },
        { label: { de: "Entfernung", en: "Distance" },      value: { de: "≈ 7.500 Lichtjahre", en: "≈ 7,500 light-years" } },
        { label: { de: "Sternbild",  en: "Constellation" }, value: { de: "Kiel des Schiffs (Carina)", en: "Carina" } },
        { label: { de: "Masse",      en: "Mass" },           value: { de: "≈ 100 Sonnenmassen (Hauptstern)", en: "≈ 100 solar masses (primary)" } },
      ]},
      { title: { de: "Extremereignis", en: "Extreme event" }, rows: [
        { label: { de: "Großer Ausbruch", en: "Great Eruption" }, value: { de: "1843", en: "1843" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "≈ 7.500 Jahre", en: "≈ 7,500 years" } },
      ]},
    ],
  },

  fastestpulsar: {
    desc: {
      de: [
        "PSR J1748-2446ad ist der schnellste bekannte Pulsar – ein Neutronenstern, der sich unfassbare 716-mal pro Sekunde um seine Achse dreht. Sein „Tag“ dauert weniger als anderthalb Tausendstelsekunden.",
        "Bei diesem Wahnsinnstempo rast sein Äquator mit fast einem Viertel der Lichtgeschwindigkeit dahin – nahe an der Grenze, ab der ein solcher Stern unter der Fliehkraft schlicht zerrissen würde. Er liegt im Kugelsternhaufen Terzan 5 im Sternbild Schütze.",
        "Mit rund 18.000 Lichtjahren Entfernung blicken wir auf ein Objekt tief in der Milchstraße. Solche „Millisekundenpulsare“ wurden durch Materie von einem Begleitstern auf ihr extremes Tempo aufgedreht – kosmische Kreisel, gespeist von ihrem Nachbarn.",
      ],
      en: [
        "PSR J1748-2446ad is the fastest known pulsar – a neutron star spinning an incredible 716 times per second about its axis. Its „day“ lasts less than one and a half thousandths of a second.",
        "At that insane pace its equator races at nearly a quarter of the speed of light – close to the limit beyond which such a star would simply be torn apart by centrifugal force. It lies in the globular cluster Terzan 5 in the constellation Sagittarius.",
        "At about 18,000 light-years we are looking at an object deep within the Milky Way. Such „millisecond pulsars“ were spun up to their extreme speed by matter from a companion star – cosmic tops fed by their neighbour.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",        en: "Type" },          value: { de: "Millisekundenpulsar (Neutronenstern)", en: "Millisecond pulsar (neutron star)" } },
        { label: { de: "Entfernung", en: "Distance" },      value: { de: "≈ 18.000 Lichtjahre", en: "≈ 18,000 light-years" } },
        { label: { de: "Sternbild",  en: "Constellation" }, value: { de: "Schütze (Sagittarius)", en: "Sagittarius" } },
        { label: { de: "Rotation",   en: "Spin rate" },     value: { de: "716 Umdrehungen pro Sekunde", en: "716 rotations per second" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr", en: "Year" }, value: { de: "2004 (Hessels et al.)", en: "2004 (Hessels et al.)" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "≈ 18.000 Jahre", en: "≈ 18,000 years" } },
      ]},
    ],
  },

  stephenson218: {
    desc: {
      de: [
        "Stephenson 2-18 ist ein heißer Kandidat für den allergrößten bekannten Stern – ein roter Überriese oder Hyperriese mit einem geschätzten Radius von rund 2.150 Sonnenradien. An die Stelle der Sonne gesetzt, würde seine Oberfläche bis über die Saturnbahn hinausreichen.",
        "Würde man ihn mit Lichtgeschwindigkeit umrunden, wäre man Stunden unterwegs – ein Stern, der jede menschliche Vorstellung von Größe sprengt. Er liegt nahe dem Sternhaufen Stephenson 2 im Sternbild Schild.",
        "Bei rund 19.000 Lichtjahren ist sowohl seine Entfernung als auch seine Größe unsicher: Bei so weit entfernten, aufgeblähten Riesen sind die Messungen schwierig. Sicher ist nur – wenn die Schätzung stimmt, ist kaum ein Stern größer.",
      ],
      en: [
        "Stephenson 2-18 is a strong candidate for the very largest known star – a red supergiant or hypergiant with an estimated radius of about 2,150 solar radii. Placed where the Sun is, its surface would extend beyond the orbit of Saturn.",
        "Circling it at the speed of light would take hours – a star that shatters every human notion of scale. It lies near the star cluster Stephenson 2 in the constellation Scutum.",
        "At about 19,000 light-years both its distance and its size are uncertain: for such remote, bloated giants the measurements are difficult. Only one thing is sure – if the estimate holds, hardly any star is larger.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",        en: "Type" },          value: { de: "Roter Überriese/Hyperriese", en: "Red supergiant/hypergiant" } },
        { label: { de: "Entfernung", en: "Distance" },      value: { de: "≈ 19.000 Lichtjahre (unsicher)", en: "≈ 19,000 light-years (uncertain)" } },
        { label: { de: "Sternbild",  en: "Constellation" }, value: { de: "Schild (Scutum)", en: "Scutum" } },
        { label: { de: "Radius",     en: "Radius" },         value: { de: "≈ 2.150 Sonnenradien (Schätzung)", en: "≈ 2,150 solar radii (estimate)" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "≈ 19.000 Jahre", en: "≈ 19,000 years" } },
      ]},
    ],
  },

  us708: {
    desc: {
      de: [
        "US 708 ist einer der schnellsten bekannten Sterne der Milchstraße – ein heißer, kompakter Heliumstern, der mit rund 1.200 km/s durch den Raum rast. Das ist so schnell, dass ihn die Schwerkraft der Galaxie nicht mehr halten kann: Er verlässt die Milchstraße für immer.",
        "Sein Schicksal ist eine kosmische Schleuder: US 708 war einst Teil eines engen Doppelsternsystems. Als sein Begleiter als Supernova explodierte, wurde er wie ein Stein aus einer Steinschleuder fortgeschleudert.",
        "Bei rund 25.000 Lichtjahren liegt US 708 weit draußen im galaktischen Halo. Solche „Hypergeschwindigkeitssterne“ sind seltene Boten gewaltiger Explosionen – einsame Ausreißer auf dem Weg in die intergalaktische Leere.",
      ],
      en: [
        "US 708 is one of the fastest known stars in the Milky Way – a hot, compact helium star tearing through space at about 1,200 km/s. That is so fast that the galaxy's gravity can no longer hold it: it is leaving the Milky Way forever.",
        "Its fate is a cosmic slingshot: US 708 was once part of a close binary system. When its companion exploded as a supernova, it was flung away like a stone from a sling.",
        "At about 25,000 light-years US 708 lies far out in the galactic halo. Such „hypervelocity stars“ are rare messengers of violent explosions – lonely runaways bound for the intergalactic void.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",        en: "Type" },          value: { de: "Hypergeschwindigkeitsstern (heißer Heliumstern)", en: "Hypervelocity star (hot helium star)" } },
        { label: { de: "Entfernung", en: "Distance" },      value: { de: "≈ 25.000 Lichtjahre", en: "≈ 25,000 light-years" } },
        { label: { de: "Geschwindigkeit", en: "Velocity" }, value: { de: "≈ 1.200 km/s", en: "≈ 1,200 km/s" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr", en: "Year" }, value: { de: "2005 (Hirsch et al., SDSS)", en: "2005 (Hirsch et al., SDSS)" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "≈ 25.000 Jahre", en: "≈ 25,000 years" } },
      ]},
    ],
  },

  magnetar: {
    desc: {
      de: [
        "SGR 1806-20 ist ein Magnetar – ein Neutronenstern mit dem stärksten Magnetfeld, das wir im Universum kennen. Es ist rund eine Billiarde Mal stärker als das Erdmagnetfeld; käme man ihm auch nur in die Nähe, würde es die Atome im menschlichen Körper auseinanderreißen.",
        "Am 27. Dezember 2004 erschütterte ein „Sternbeben“ seine Kruste und löste einen gigantischen Gammastrahlenblitz aus: In nur 0,2 Sekunden setzte er mehr Energie frei als die Sonne in 250.000 Jahren. Selbst aus rund 50.000 Lichtjahren Entfernung störte der Blitz die Erdatmosphäre messbar.",
        "Das Licht und die Strahlung dieses Bebens waren rund 50.000 Jahre zu uns unterwegs – das Ereignis selbst fand statt, als auf der Erde noch Neandertaler lebten. Magnetare gehören zu den extremsten Objekten, die das Universum hervorbringt.",
      ],
      en: [
        "SGR 1806-20 is a magnetar – a neutron star with the strongest magnetic field we know of in the universe. It is roughly a quadrillion times stronger than Earth's; getting anywhere near it would tear apart the very atoms in a human body.",
        "On 27 December 2004 a „starquake“ shook its crust and triggered a gigantic burst of gamma rays: in just 0.2 seconds it released more energy than the Sun does in 250,000 years. Even from about 50,000 light-years away the flash measurably disturbed Earth's atmosphere.",
        "The light and radiation from that quake had been travelling toward us for about 50,000 years – the event itself happened when Neanderthals still walked the Earth. Magnetars are among the most extreme objects the universe produces.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",        en: "Type" },          value: { de: "Magnetar (Neutronenstern)", en: "Magnetar (neutron star)" } },
        { label: { de: "Entfernung", en: "Distance" },      value: { de: "≈ 50.000 Lichtjahre", en: "≈ 50,000 light-years" } },
        { label: { de: "Sternbild",  en: "Constellation" }, value: { de: "Schütze (Sagittarius)", en: "Sagittarius" } },
        { label: { de: "Besonderheit", en: "Notable" },     value: { de: "stärkstes bekanntes Magnetfeld", en: "strongest known magnetic field" } },
      ]},
      { title: { de: "Extremereignis", en: "Extreme event" }, rows: [
        { label: { de: "Riesenflare", en: "Giant flare" }, value: { de: "27.12.2004", en: "27 Dec 2004" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "≈ 50.000 Jahre", en: "≈ 50,000 years" } },
      ]},
    ],
  },

  earendel: {
    desc: {
      de: [
        "Earendel ist der fernste je beobachtete einzelne Stern (oder ein sehr kleines Sternsystem) – ein massereicher, heißer Stern, dessen Licht aus einer Zeit stammt, als das Universum erst rund 900 Millionen Jahre alt war. Sein Name geht auf ein altenglisches Wort für „Morgenstern“ zurück.",
        "Sichtbar wurde er nur durch einen kosmischen Glücksfall: Ein gewaltiger Galaxienhaufen liegt genau zwischen uns und ihm und wirkt als Gravitationslinse, die das Sternenlicht tausend- bis zehntausendfach verstärkt. 2022 entdeckte ihn das Hubble-Teleskop in einem fadenförmigen „Sonnenaufgangsbogen“, das James-Webb-Teleskop bestätigte ihn.",
        "Sein Licht war fast 13 Milliarden Jahre zu uns unterwegs – wir sehen Earendel so, wie er im jungen Universum aussah, lange bevor Sonne, Erde oder gar unsere Galaxie in ihrer heutigen Form existierten. Der Stern selbst ist längst vergangen.",
      ],
      en: [
        "Earendel is the most distant single star (or very small stellar system) ever observed – a massive, hot star whose light dates from a time when the universe was only about 900 million years old. Its name comes from an Old English word for „morning star“.",
        "It became visible only through a cosmic stroke of luck: a massive galaxy cluster lies precisely between us and it, acting as a gravitational lens that magnifies the starlight a thousand- to ten-thousand-fold. In 2022 the Hubble Telescope spotted it within a thread-like „Sunrise Arc“, and the James Webb Telescope confirmed it.",
        "Its light had been travelling toward us for almost 13 billion years – we see Earendel as it looked in the young universe, long before the Sun, Earth, or even our galaxy in its present form existed. The star itself is long gone.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",          en: "Type" },        value: { de: "Massereicher Stern (B-Typ), gravitationsgelinst", en: "Massive star (B-type), gravitationally lensed" } },
        { label: { de: "Rotverschiebung", en: "Redshift" }, value: { de: "z ≈ 6,2", en: "z ≈ 6.2" } },
        { label: { de: "Sternbild",    en: "Constellation" }, value: { de: "Walfisch (Cetus)", en: "Cetus" } },
        { label: { de: "Verstärkung",  en: "Magnification" }, value: { de: "≈ 1.000–40.000-fach (Gravitationslinse)", en: "≈ 1,000–40,000× (gravitational lens)" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr", en: "Year" }, value: { de: "2022 (Hubble; JWST-Bestätigung 2023)", en: "2022 (Hubble; JWST confirmation 2023)" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "≈ 12,9 Mrd. Jahre", en: "≈ 12.9 billion years" } },
      ]},
    ],
  },

  /* ===================== EXOPLANETEN ===================== */

  proximab: {
    desc: {
      de: [
        "Proxima Centauri b ist der erdnächste Exoplanet überhaupt – eine Welt von etwa Erdmasse, die den nächsten Stern der Sonne, den Roten Zwerg Proxima Centauri, in nur 11,2 Tagen umrundet. Trotz dieser engen Bahn liegt sie in der habitablen Zone, weil ihr Stern so kühl ist.",
        "In der habitablen Zone könnte flüssiges Wasser auf der Oberfläche bestehen – die Grundvoraussetzung für Leben, wie wir es kennen. Ob der Planet aber tatsächlich lebensfreundlich ist, hängt davon ab, ob er die heftigen Strahlungsausbrüche seines Sterns übersteht.",
        "Mit nur 4,24 Lichtjahren ist Proxima b der naheliegendste Kandidat für eine künftige interstellare Erkundung. Entdeckt wurde er 2016 mit der Radialgeschwindigkeitsmethode – über das winzige „Wackeln“, das seine Schwerkraft beim Stern erzeugt.",
      ],
      en: [
        "Proxima Centauri b is the closest exoplanet to Earth of all – a world of roughly Earth mass orbiting the Sun's nearest star, the red dwarf Proxima Centauri, in just 11.2 days. Despite this tight orbit it lies in the habitable zone, because its star is so cool.",
        "In the habitable zone, liquid water could persist on the surface – the basic prerequisite for life as we know it. Whether the planet is actually hospitable, however, depends on whether it survives the violent flares of its star.",
        "At just 4.24 light-years, Proxima b is the most obvious candidate for future interstellar exploration. It was discovered in 2016 by the radial velocity method – through the tiny „wobble“ its gravity induces in the star.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",        en: "Type" },          value: { de: "Gesteinsplanet (≈ Erdmasse)", en: "Rocky planet (≈ Earth mass)" } },
        { label: { de: "Entfernung", en: "Distance" },      value: { de: "4,24 Lichtjahre", en: "4.24 light-years" } },
        { label: { de: "Stern",      en: "Host star" },      value: { de: "Proxima Centauri (Roter Zwerg)", en: "Proxima Centauri (red dwarf)" } },
        { label: { de: "Masse",      en: "Mass" },           value: { de: "≥ 1,07 Erdmassen", en: "≥ 1.07 Earth masses" } },
        { label: { de: "Umlaufzeit", en: "Orbital period" }, value: { de: "11,2 Tage", en: "11.2 days" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr",     en: "Year" },   value: { de: "2016 (HARPS/ESO)", en: "2016 (HARPS/ESO)" } },
        { label: { de: "Methode",  en: "Method" }, value: { de: "Radialgeschwindigkeit", en: "Radial velocity" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "≈ 4,24 Jahre", en: "≈ 4.24 years" } },
      ]},
    ],
  },

  trappist1: {
    desc: {
      de: [
        "TRAPPIST-1 ist ein winziger, kühler Roter Zwerg vom Typ M8V – kaum größer als Jupiter und nur ein Zehntel der Sonnenmasse. Berühmt wurde er aber nicht für seine Größe, sondern für seine Familie: gleich sieben erdgroße Gesteinsplaneten umkreisen ihn in dichten, eng gepackten Bahnen.",
        "Drei dieser sieben Welten liegen in der habitablen Zone, in der flüssiges Wasser möglich wäre. Damit ist TRAPPIST-1 das beste bekannte Mehrplanetensystem und eines der wichtigsten Ziele bei der Suche nach Leben außerhalb der Erde – das James-Webb-Teleskop untersucht seine Planeten heute Stück für Stück.",
        "Mit rund 41 Lichtjahren ist das System fern, aber erreichbar für unsere Teleskope. Stünde man auf einem der Planeten, fänden sich die Nachbarwelten als große Scheiben am Himmel – ein gedrängtes Miniatur-Sonnensystem.",
      ],
      en: [
        "TRAPPIST-1 is a tiny, cool red dwarf of type M8V – barely larger than Jupiter and just one tenth of the Sun's mass. Yet it became famous not for its size but for its family: seven Earth-sized rocky planets orbit it in tight, closely packed orbits.",
        "Three of these seven worlds lie in the habitable zone, where liquid water would be possible. This makes TRAPPIST-1 the best known multi-planet system and one of the prime targets in the search for life beyond Earth – the James Webb Telescope is now studying its planets one by one.",
        "At about 41 light-years the system is distant but within reach of our telescopes. Standing on one of the planets, you would see the neighbouring worlds as large disks in the sky – a crowded miniature solar system.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",        en: "Type" },          value: { de: "Ultrakühler Roter Zwerg (M8V) mit 7 Planeten", en: "Ultra-cool red dwarf (M8V) with 7 planets" } },
        { label: { de: "Entfernung", en: "Distance" },      value: { de: "≈ 41 Lichtjahre", en: "≈ 41 light-years" } },
        { label: { de: "Sternbild",  en: "Constellation" }, value: { de: "Wassermann (Aquarius)", en: "Aquarius" } },
        { label: { de: "Sternmasse", en: "Star mass" },     value: { de: "≈ 0,09 Sonnenmassen", en: "≈ 0.09 solar masses" } },
        { label: { de: "Planeten",   en: "Planets" },        value: { de: "7 erdgroß (3 in der habitablen Zone)", en: "7 Earth-sized (3 in the habitable zone)" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr",     en: "Year" },   value: { de: "2016–2017 (TRAPPIST-Teleskop, M. Gillon)", en: "2016–2017 (TRAPPIST telescope, M. Gillon)" } },
        { label: { de: "Methode",  en: "Method" }, value: { de: "Transit", en: "Transit" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "≈ 41 Jahre", en: "≈ 41 years" } },
      ]},
    ],
  },

  cancri55e: {
    desc: {
      de: [
        "55 Cancri e ist eine glühende „Supererde“ – ein Gesteinsplanet, gut doppelt so groß und rund achtmal so massereich wie die Erde, der seinen Stern in nur 18 Stunden umrundet. So nah, dass seine Tagseite ein Ozean aus geschmolzenem Gestein sein dürfte.",
        "Frühe Modelle vermuteten, der Planet könnte besonders kohlenstoffreich sein – woraus die Idee eines „Diamantplaneten“ mit einem Kern aus Diamant entstand. Neuere Messungen sind vorsichtiger, aber die glühende Lavawelt bleibt eine der bizarrsten bekannten.",
        "Bei rund 41 Lichtjahren ist 55 Cancri e nah genug, dass das James-Webb-Teleskop seine Atmosphäre untersuchen kann. Die Hinweise deuten auf eine dünne, möglicherweise vulkanisch erneuerte Gashülle über einem ewig brodelnden Magmaozean.",
      ],
      en: [
        "55 Cancri e is a glowing „super-Earth“ – a rocky planet a little over twice Earth's size and about eight times its mass, orbiting its star in just 18 hours. So close that its dayside is likely an ocean of molten rock.",
        "Early models suggested the planet might be especially carbon-rich – giving rise to the idea of a „diamond planet“ with a diamond core. Newer measurements are more cautious, but the glowing lava world remains one of the most bizarre known.",
        "At about 41 light-years, 55 Cancri e is close enough for the James Webb Telescope to study its atmosphere. The clues point to a thin, possibly volcanically renewed gas envelope over a perpetually seething magma ocean.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",        en: "Type" },          value: { de: "Supererde / Lavawelt", en: "Super-Earth / lava world" } },
        { label: { de: "Entfernung", en: "Distance" },      value: { de: "≈ 41 Lichtjahre", en: "≈ 41 light-years" } },
        { label: { de: "Sternbild",  en: "Constellation" }, value: { de: "Krebs (Cancer)", en: "Cancer" } },
        { label: { de: "Masse",      en: "Mass" },           value: { de: "≈ 8 Erdmassen", en: "≈ 8 Earth masses" } },
        { label: { de: "Umlaufzeit", en: "Orbital period" }, value: { de: "≈ 18 Stunden", en: "≈ 18 hours" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr",     en: "Year" },   value: { de: "2004", en: "2004" } },
        { label: { de: "Methode",  en: "Method" }, value: { de: "Radialgeschwindigkeit (Transit später)", en: "Radial velocity (later transit)" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "≈ 41 Jahre", en: "≈ 41 years" } },
      ]},
    ],
  },

  fiftyonepeg: {
    desc: {
      de: [
        "51 Pegasi b war 1995 der erste Exoplanet, der je um einen sonnenähnlichen Stern entdeckt wurde – ein Moment, der die Astronomie umkrempelte. Plötzlich war klar: Andere Sterne haben Planeten, und die Erde ist nicht allein.",
        "Der Planet ist ein „heißer Jupiter“: ein Gasriese von etwa halber Jupitermasse, der seinen Stern in nur gut vier Tagen umkreist – so nah, dass seine Wolkendecke auf über 1.000 °C glüht. Eine Sorte Welt, die im Sonnensystem schlicht nicht vorkommt und die Theoretiker zunächst für unmöglich hielten.",
        "Für ihre Entdeckung mit der Radialgeschwindigkeitsmethode erhielten Michel Mayor und Didier Queloz 2019 den Physik-Nobelpreis. 51 Pegasi b liegt rund 50 Lichtjahre entfernt im Sternbild Pegasus.",
      ],
      en: [
        "51 Pegasi b was, in 1995, the first exoplanet ever discovered around a Sun-like star – a moment that turned astronomy on its head. Suddenly it was clear: other stars have planets, and Earth is not alone.",
        "The planet is a „hot Jupiter“: a gas giant of about half Jupiter's mass orbiting its star in just over four days – so close that its cloud deck glows above 1,000 °C. A kind of world that simply does not exist in the Solar System and that theorists at first thought impossible.",
        "For their discovery using the radial velocity method, Michel Mayor and Didier Queloz received the 2019 Nobel Prize in Physics. 51 Pegasi b lies about 50 light-years away in the constellation Pegasus.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",        en: "Type" },          value: { de: "Heißer Jupiter (Gasriese)", en: "Hot Jupiter (gas giant)" } },
        { label: { de: "Entfernung", en: "Distance" },      value: { de: "≈ 50 Lichtjahre", en: "≈ 50 light-years" } },
        { label: { de: "Sternbild",  en: "Constellation" }, value: { de: "Pegasus", en: "Pegasus" } },
        { label: { de: "Masse",      en: "Mass" },           value: { de: "≈ 0,5 Jupitermassen", en: "≈ 0.5 Jupiter masses" } },
        { label: { de: "Umlaufzeit", en: "Orbital period" }, value: { de: "≈ 4,2 Tage", en: "≈ 4.2 days" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr",     en: "Year" },   value: { de: "1995 (Mayor & Queloz)", en: "1995 (Mayor & Queloz)" } },
        { label: { de: "Methode",  en: "Method" }, value: { de: "Radialgeschwindigkeit", en: "Radial velocity" } },
        { label: { de: "Auszeichnung", en: "Honour" }, value: { de: "Physik-Nobelpreis 2019", en: "2019 Nobel Prize in Physics" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "≈ 50 Jahre", en: "≈ 50 years" } },
      ]},
    ],
  },

  rogueplanet: {
    desc: {
      de: [
        "Heimatlose Planeten – auch „Vagabunden“ oder „rogue planets“ genannt – sind Welten ohne Stern. Sie treiben allein durch die Dunkelheit zwischen den Sternen, ohne eine Sonne, die sie wärmt oder an die sie gebunden wären.",
        "Manche wurden aus jungen Planetensystemen herausgeschleudert, andere entstanden womöglich gleich frei schwebend wie winzige, gescheiterte Sterne. An ihrer Oberfläche herrscht ewige Nacht und beißende Kälte – doch unter einer Eiskruste könnte innere Wärme theoretisch flüssiges Wasser ermöglichen.",
        "Schätzungen zufolge gibt es in der Milchstraße womöglich mehr solcher heimatloser Planeten als Sterne. Sie sind extrem schwer zu finden, weil sie kein eigenes Licht aussenden – meist verraten sie sich nur, wenn sie als Gravitationslinse kurz das Licht eines dahinterliegenden Sterns verstärken.",
      ],
      en: [
        "Rogue planets – also called „free-floating“ or „vagabond“ planets – are worlds without a star. They drift alone through the darkness between the stars, with no sun to warm them or to which they are bound.",
        "Some were flung out of young planetary systems, others may have formed free-floating from the start, like tiny failed stars. On their surfaces reign eternal night and biting cold – yet beneath an icy crust, internal heat could in theory allow liquid water.",
        "By some estimates the Milky Way may hold more such rogue planets than stars. They are extremely hard to find because they emit no light of their own – usually they betray themselves only when they act as a gravitational lens, briefly brightening the light of a star behind them.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",        en: "Type" },          value: { de: "Sternloser Planet (frei schwebend)", en: "Starless planet (free-floating)" } },
        { label: { de: "Stern",      en: "Host star" },      value: { de: "keiner", en: "none" } },
        { label: { de: "Häufigkeit", en: "Abundance" },     value: { de: "evtl. häufiger als Sterne in der Galaxie", en: "possibly more common than stars in the galaxy" } },
      ]},
      { title: { de: "Nachweis", en: "Detection" }, rows: [
        { label: { de: "Methode", en: "Method" }, value: { de: "Gravitations-Mikrolinsen, Infrarot", en: "Gravitational microlensing, infrared" } },
      ]},
    ],
  },

  kepler16b: {
    desc: {
      de: [
        "Kepler-16b ist ein Planet mit zwei Sonnen am Himmel – die reale Entsprechung von Luke Skywalkers Heimatwelt Tatooine aus „Star Wars“. Er umkreist nicht einen, sondern zwei einander umkreisende Sterne (ein „zirkumbinärer“ Planet).",
        "Auf seiner Oberfläche würde man bei Sonnenuntergang zwei Sonnen am Horizont versinken sehen, jede mit ihrem eigenen Schatten. Lange galt so etwas als reine Science-Fiction; Kepler-16b war 2011 der erste eindeutige Beweis, dass solche Doppelsonnen-Welten wirklich existieren.",
        "Der Planet selbst ist ein kühler Gasriese von etwa Saturngröße – wahrscheinlich kein gemütlicher Wüstenplanet wie sein Filmvorbild. Er liegt rund 245 Lichtjahre entfernt im Sternbild Schwan und wurde vom Kepler-Weltraumteleskop per Transitmethode entdeckt.",
      ],
      en: [
        "Kepler-16b is a planet with two suns in its sky – the real-world counterpart of Luke Skywalker's home world Tatooine from „Star Wars“. It orbits not one but two stars circling each other (a „circumbinary“ planet).",
        "On its surface, at sunset you would see two suns sinking toward the horizon, each casting its own shadow. Such a thing was long considered pure science fiction; in 2011 Kepler-16b was the first clear proof that such double-sun worlds really exist.",
        "The planet itself is a cool gas giant about the size of Saturn – probably not a cosy desert world like its movie inspiration. It lies about 245 light-years away in the constellation Cygnus and was discovered by the Kepler Space Telescope via the transit method.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",        en: "Type" },          value: { de: "Zirkumbinärer Gasriese (~ Saturngröße)", en: "Circumbinary gas giant (~ Saturn-sized)" } },
        { label: { de: "Entfernung", en: "Distance" },      value: { de: "≈ 245 Lichtjahre", en: "≈ 245 light-years" } },
        { label: { de: "Sternbild",  en: "Constellation" }, value: { de: "Schwan (Cygnus)", en: "Cygnus" } },
        { label: { de: "Sterne",     en: "Host stars" },     value: { de: "2 (umkreisen einander)", en: "2 (orbiting each other)" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr",     en: "Year" },   value: { de: "2011 (Kepler-Weltraumteleskop)", en: "2011 (Kepler Space Telescope)" } },
        { label: { de: "Methode",  en: "Method" }, value: { de: "Transit", en: "Transit" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "≈ 245 Jahre", en: "≈ 245 years" } },
      ]},
    ],
  },

  hd189733b: {
    desc: {
      de: [
        "HD 189733 b ist einer der am besten untersuchten Exoplaneten – ein „heißer Jupiter“, der seinem Stern so nah ist, dass eine Seite ewig glüht. Aus der Ferne erscheint er in einem tiefen, kobaltblauen Ton.",
        "Doch das Blau ist eine Falle: Es entsteht nicht durch Wasser wie auf der Erde, sondern durch Silikatpartikel in der Atmosphäre – winzige Glaspartikel. Bei Temperaturen um 1.000 °C und Stürmen von rund 7.000 km/h regnet es dort vermutlich geschmolzenes Glas, und zwar seitwärts.",
        "Mit rund 64 Lichtjahren liegt HD 189733 b nah genug, dass Teleskope sein Licht und sogar Spuren seiner Atmosphäre direkt analysieren konnten – einer der ersten Exoplaneten, dessen „Wetter“ und Farbe man bestimmen konnte.",
      ],
      en: [
        "HD 189733 b is one of the best-studied exoplanets – a „hot Jupiter“ so close to its star that one side glows perpetually. From afar it appears in a deep, cobalt-blue hue.",
        "But the blue is a trap: it arises not from water as on Earth, but from silicate particles in the atmosphere – tiny grains of glass. At temperatures around 1,000 °C and winds of about 7,000 km/h, it probably rains molten glass there, blown sideways.",
        "At about 64 light-years HD 189733 b is close enough for telescopes to analyse its light and even traces of its atmosphere directly – one of the first exoplanets whose „weather“ and colour could be determined.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",        en: "Type" },          value: { de: "Heißer Jupiter (Gasriese)", en: "Hot Jupiter (gas giant)" } },
        { label: { de: "Entfernung", en: "Distance" },      value: { de: "≈ 64 Lichtjahre", en: "≈ 64 light-years" } },
        { label: { de: "Sternbild",  en: "Constellation" }, value: { de: "Füchschen (Vulpecula)", en: "Vulpecula" } },
        { label: { de: "Masse",      en: "Mass" },           value: { de: "≈ 1,1 Jupitermassen", en: "≈ 1.1 Jupiter masses" } },
        { label: { de: "Besonderheit", en: "Notable" },     value: { de: "tiefblau, „Glasregen“ bei 7.000 km/h", en: "deep blue, „glass rain“ at 7,000 km/h" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr",     en: "Year" },   value: { de: "2005", en: "2005" } },
        { label: { de: "Methode",  en: "Method" }, value: { de: "Transit", en: "Transit" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "≈ 64 Jahre", en: "≈ 64 years" } },
      ]},
    ],
  },

  kelt9b: {
    desc: {
      de: [
        "KELT-9b ist der heißeste bekannte Planet überhaupt – ein extremer „Ultra-heißer Jupiter“, dessen Tagseite auf rund 4.300 °C glüht. Das ist heißer als die Oberfläche vieler echter Sterne; in puncto Temperatur ist dieser Planet sternähnlicher als planetenähnlich.",
        "Bei solcher Hitze kann die Atmosphäre keine Moleküle mehr zusammenhalten: Eisen und Titan verdampfen und ziehen als glühender Metalldampf um den Planeten. Sein Stern ist ein heißer, blauer Riese, der ihn mit einer Strahlung sondergleichen grillt.",
        "KELT-9b umrundet diesen Stern in nur anderthalb Tagen und wird dabei langsam verdampft – ein Planet, der buchstäblich verbrennt. Er liegt rund 670 Lichtjahre entfernt im Sternbild Schwan.",
      ],
      en: [
        "KELT-9b is the hottest known planet of all – an extreme „ultra-hot Jupiter“ whose dayside glows at about 4,300 °C. That is hotter than the surface of many real stars; in terms of temperature this planet is more star-like than planet-like.",
        "At such heat the atmosphere can no longer hold molecules together: iron and titanium vaporise and stream around the planet as glowing metal vapour. Its star is a hot, blue giant that grills it with radiation like no other.",
        "KELT-9b circles this star in just a day and a half and is slowly being vaporised in the process – a planet literally burning away. It lies about 670 light-years away in the constellation Cygnus.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",        en: "Type" },          value: { de: "Ultra-heißer Jupiter (Gasriese)", en: "Ultra-hot Jupiter (gas giant)" } },
        { label: { de: "Entfernung", en: "Distance" },      value: { de: "≈ 670 Lichtjahre", en: "≈ 670 light-years" } },
        { label: { de: "Sternbild",  en: "Constellation" }, value: { de: "Schwan (Cygnus)", en: "Cygnus" } },
        { label: { de: "Tagseite",   en: "Dayside temp." },  value: { de: "≈ 4.300 °C", en: "≈ 4,300 °C" } },
        { label: { de: "Masse",      en: "Mass" },           value: { de: "≈ 2,9 Jupitermassen", en: "≈ 2.9 Jupiter masses" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr",     en: "Year" },   value: { de: "2016 (KELT-Survey)", en: "2016 (KELT survey)" } },
        { label: { de: "Methode",  en: "Method" }, value: { de: "Transit", en: "Transit" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "≈ 670 Jahre", en: "≈ 670 years" } },
      ]},
    ],
  },

  tres2b: {
    desc: {
      de: [
        "TrES-2b ist der dunkelste bekannte Planet – ein Gasriese, der über 99 Prozent des Lichts schluckt, das auf ihn fällt. Er ist schwärzer als Kohle oder schwarze Acrylfarbe; im Grunde eine Welt, die fast vollständig im Dunkeln verschwindet.",
        "Warum er so finster ist, ist nicht restlos geklärt. Vermutlich enthält seine extrem heiße Atmosphäre lichtschluckende Substanzen wie verdampftes Natrium, Kalium oder Titanoxid, die das Sternenlicht absorbieren, statt es zu reflektieren.",
        "Ganz schwarz ist er dennoch nicht: Bei seiner enormen Hitze glüht der Planet matt rötlich, wie ein gerade erkaltendes Stück Metall. TrES-2b liegt rund 750 Lichtjahre entfernt im Sternbild Drache und wurde per Transitmethode entdeckt.",
      ],
      en: [
        "TrES-2b is the darkest known planet – a gas giant that swallows over 99 percent of the light falling on it. It is blacker than coal or black acrylic paint; essentially a world that almost completely vanishes into the dark.",
        "Why it is so dark is not fully understood. Its extremely hot atmosphere probably contains light-absorbing substances such as vaporised sodium, potassium or titanium oxide, which absorb starlight rather than reflecting it.",
        "It is not entirely black, however: at its enormous heat the planet glows a dim reddish hue, like a piece of metal just beginning to cool. TrES-2b lies about 750 light-years away in the constellation Draco and was discovered by the transit method.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",        en: "Type" },          value: { de: "Heißer Jupiter (Gasriese), extrem dunkel", en: "Hot Jupiter (gas giant), extremely dark" } },
        { label: { de: "Entfernung", en: "Distance" },      value: { de: "≈ 750 Lichtjahre", en: "≈ 750 light-years" } },
        { label: { de: "Sternbild",  en: "Constellation" }, value: { de: "Drache (Draco)", en: "Draco" } },
        { label: { de: "Albedo",     en: "Albedo" },         value: { de: "< 1 % (reflektiert kaum Licht)", en: "< 1 % (reflects almost no light)" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr",     en: "Year" },   value: { de: "2006 (TrES-Survey)", en: "2006 (TrES survey)" } },
        { label: { de: "Methode",  en: "Method" }, value: { de: "Transit", en: "Transit" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "≈ 750 Jahre", en: "≈ 750 years" } },
      ]},
    ],
  },

  pulsarplanets: {
    desc: {
      de: [
        "Die Planeten um den Pulsar PSR B1257+12 waren 1992 die allerersten Exoplaneten, die je entdeckt wurden – drei Jahre vor 51 Pegasi b. Sie umkreisen jedoch keine Sonne, sondern einen toten, rasend rotierenden Neutronenstern: den ausgebrannten Kern eines explodierten Sterns.",
        "Aleksander Wolszczan und Dale Frail fanden sie über winzige Schwankungen im ultrapräzisen „Ticken“ des Pulsars – ein Nachweis von erstaunlicher Genauigkeit. Es war der Beweis, dass Planeten auch an den unwirtlichsten Orten des Universums existieren können.",
        "Diese Welten sind Friedhofsplaneten: Sie kreisen um eine Sternleiche, gebadet in tödlicher Strahlung. Womöglich entstanden sie sogar erst nach der Supernova, aus deren Trümmern – Planeten, geboren aus dem Tod ihres Sterns. Das System liegt rund 2.300 Lichtjahre entfernt im Sternbild Jungfrau.",
      ],
      en: [
        "The planets around the pulsar PSR B1257+12 were, in 1992, the very first exoplanets ever discovered – three years before 51 Pegasi b. They orbit not a sun, however, but a dead, furiously spinning neutron star: the burnt-out core of an exploded star.",
        "Aleksander Wolszczan and Dale Frail found them through tiny variations in the pulsar's ultra-precise „ticking“ – a detection of astonishing accuracy. It was proof that planets can exist even in the most hostile places in the universe.",
        "These are graveyard worlds: they circle a stellar corpse, bathed in lethal radiation. They may even have formed after the supernova, from its debris – planets born of their star's death. The system lies about 2,300 light-years away in the constellation Virgo.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",        en: "Type" },          value: { de: "Pulsar-Planeten (um Neutronenstern)", en: "Pulsar planets (around a neutron star)" } },
        { label: { de: "Entfernung", en: "Distance" },      value: { de: "≈ 2.300 Lichtjahre", en: "≈ 2,300 light-years" } },
        { label: { de: "Sternbild",  en: "Constellation" }, value: { de: "Jungfrau (Virgo)", en: "Virgo" } },
        { label: { de: "Planeten",   en: "Planets" },        value: { de: "mind. 3 (um PSR B1257+12)", en: "at least 3 (around PSR B1257+12)" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr",     en: "Year" },   value: { de: "1992 (Wolszczan & Frail)", en: "1992 (Wolszczan & Frail)" } },
        { label: { de: "Methode",  en: "Method" }, value: { de: "Pulsar-Timing", en: "Pulsar timing" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "≈ 2.300 Jahre", en: "≈ 2,300 years" } },
      ]},
    ],
  },

});
