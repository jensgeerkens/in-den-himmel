/* dd_life.js — Detail-Infos: Vögel, Insekten, Fledermaus, Spinne. Object.assign in SKY_DETAILS (data_details.js). */
Object.assign(SKY_DETAILS, {

  /* ---------- VÖGEL ---------- */
  schwalbe: {
    desc: {
      de: [
        "Die Rauchschwalbe ist die Schwalbe der Bauernhöfe und offenen Landschaften. Sie jagt Mücken, Fliegen und kleine Käfer im rasanten, wendigen Flug dicht über Wiesen, Wegen und Wasserflächen.",
        "Ihre Flughöhe richtet sich nach der Beute: An schwülen, warmen Tagen steigen die Insekten mit der aufsteigenden Luft höher – und die Schwalben folgen ihnen bis in mehrere Hundert Meter. Genau dieses Verhalten steckt hinter der alten Wetterregel „Fliegen die Schwalben tief, gibt es Regen“.",
        "Auf dem Zug überquert sie ganz Europa und die Sahara bis ins südliche Afrika – Zehntausende Kilometer im Lauf eines Schwalbenlebens.",
      ],
      en: [
        "The barn swallow is the swallow of farmyards and open country. It hunts midges, flies and small beetles in a fast, agile flight just above meadows, tracks and water.",
        "Its flying height follows its prey: on warm, humid days the insects rise with the lifting air – and the swallows follow them up to several hundred metres. This is the basis of the old weather lore, 'swallows flying low mean rain on the way.'",
        "On migration it crosses all of Europe and the Sahara to reach southern Africa – tens of thousands of kilometres over a swallow's lifetime.",
      ],
    },
    groups: [
      { title: { de: "Steckbrief", en: "At a glance" }, rows: [
        { label: { de: "Größe",       en: "Length" },   value: { de: "17–19 cm (mit Schwanzspießen)", en: "17–19 cm (incl. tail streamers)" } },
        { label: { de: "Spannweite",  en: "Wingspan" }, value: { de: "32–35 cm", en: "32–35 cm" } },
        { label: { de: "Gewicht",     en: "Weight" },   value: { de: "16–22 g",  en: "16–22 g" } },
        { label: { de: "Verbreitung", en: "Range" },    value: { de: "Brutgebiet ganze Nordhalbkugel; Zug bis Südafrika/Südamerika", en: "breeds across the Northern Hemisphere; winters in S Africa/S America" } },
      ]},
      { title: { de: "Warum so hoch?", en: "Why this high?" }, rows: [
        { label: { de: "Antrieb",   en: "Driver" },       value: { de: "folgt aufsteigenden Insekten", en: "follows rising insects" } },
        { label: { de: "Flugstil",  en: "Flight style" }, value: { de: "schnell, wendig, kurvenreich", en: "fast, agile, twisting" } },
        { label: { de: "Typische Höhe", en: "Typical height" }, value: { de: "wenige Meter bis ~200 m", en: "a few metres to ~200 m" } },
      ]},
    ],
  },

  mauersegler: {
    desc: {
      de: [
        "Der Mauersegler verbringt fast sein ganzes Leben in der Luft. Er frisst, trinkt, paart sich und schläft im Flug – nur zum Brüten landet er, in Mauerspalten und unter Dächern. Ein Jungvogel kann nach dem Ausfliegen Jahre am Stück fliegen, bevor er zum ersten Mal wieder festen Halt sucht.",
        "Abends steigen Mauersegler in der Dämmerung steil auf. Radarmessungen zeigen, dass sie sich dann oft bis in rund 3 km Höhe begeben und die Nacht segelnd und gleitend in der ruhigeren Luft über dem Wetter verbringen. Vermutlich schalten sie dabei jeweils eine Gehirnhälfte in den Schlaf.",
        "Mit langen, sichelförmigen Flügeln und einem zigarrenförmigen Körper ist er für Dauerflug gebaut – seine Beine sind so kurz, dass er vom Boden kaum starten kann.",
      ],
      en: [
        "The common swift spends almost its entire life airborne. It feeds, drinks, mates and sleeps on the wing – landing only to breed, in wall crevices and under roofs. A fledgling can fly for years without stopping before it first lands again.",
        "At dusk swifts climb steeply into the sky. Radar shows they often ascend to around 3 km and pass the night soaring and gliding in the calmer air above the weather, probably letting one half of the brain sleep at a time.",
        "With long, scythe-shaped wings and a cigar-shaped body it is built for endless flight – its legs are so short it can barely take off from the ground.",
      ],
    },
    groups: [
      { title: { de: "Steckbrief", en: "At a glance" }, rows: [
        { label: { de: "Größe",       en: "Length" },   value: { de: "16–17 cm", en: "16–17 cm" } },
        { label: { de: "Spannweite",  en: "Wingspan" }, value: { de: "38–40 cm", en: "38–40 cm" } },
        { label: { de: "Gewicht",     en: "Weight" },   value: { de: "36–50 g",  en: "36–50 g" } },
        { label: { de: "Verbreitung", en: "Range" },    value: { de: "Europa, Asien; überwintert in Afrika", en: "Europe, Asia; winters in Africa" } },
      ]},
      { title: { de: "Warum so hoch?", en: "Why this high?" }, rows: [
        { label: { de: "Antrieb",   en: "Driver" },       value: { de: "nächtlicher Aufstieg zum Schlafflug", en: "nightly ascent to sleep on the wing" } },
        { label: { de: "Flugstil",  en: "Flight style" }, value: { de: "Dauer-Gleitflug, kaum Schlagen", en: "sustained gliding, little flapping" } },
      ]},
      { title: { de: "Rekord & Messung", en: "Record & measurement" }, rows: [
        { label: { de: "Schlafhöhe", en: "Sleep altitude" }, value: { de: "~3.000 m", en: "~3,000 m" } },
        { label: { de: "Methode",    en: "Method" },         value: { de: "Radarverfolgung in der Dämmerung", en: "radar tracking at dusk" } },
      ]},
    ],
  },

  steinadler: {
    desc: {
      de: [
        "Der Steinadler ist Europas mächtigster Greifvogel der Gebirge. Er jagt Murmeltiere, Hasen und junge Gämsen und beansprucht Reviere von vielen Dutzend Quadratkilometern in Hochgebirge, Wäldern und offenen Steppen der gesamten Nordhalbkugel.",
        "Statt mit Kraft zu schlagen, lässt er sich tragen: Über sonnenbeschienenen Hängen bilden sich Thermikschläuche aus aufsteigender Warmluft, und am Berggrat erzeugt Wind Hangaufwinde. In diesen Aufwinden kreist der Adler ohne Flügelschlag spiralförmig empor – regelmäßig bis etwa 4.500 m, manchmal höher.",
        "Diese Höhen wurden mit GPS-Sendern an wildlebenden Adlern dokumentiert, die Position und Steighöhe über Tage hinweg aufzeichnen.",
      ],
      en: [
        "The golden eagle is Europe's mightiest mountain raptor. It hunts marmots, hares and young chamois and holds territories of many dozen square kilometres across the mountains, forests and open steppes of the Northern Hemisphere.",
        "Rather than powering up by flapping, it lets the air carry it: over sun-warmed slopes, columns of rising warm air (thermals) form, and along ridges the wind creates updrafts. In these the eagle spirals upward without a wingbeat – regularly to around 4,500 m, sometimes higher.",
        "These altitudes were documented with GPS tags on wild eagles that record position and climb height over many days.",
      ],
    },
    groups: [
      { title: { de: "Steckbrief", en: "At a glance" }, rows: [
        { label: { de: "Größe",       en: "Length" },   value: { de: "66–102 cm", en: "66–102 cm" } },
        { label: { de: "Spannweite",  en: "Wingspan" }, value: { de: "1,8–2,3 m", en: "1.8–2.3 m" } },
        { label: { de: "Gewicht",     en: "Weight" },   value: { de: "3–6,5 kg",  en: "3–6.5 kg" } },
        { label: { de: "Verbreitung", en: "Range" },    value: { de: "Gebirge der gesamten Nordhalbkugel", en: "mountains across the Northern Hemisphere" } },
      ]},
      { title: { de: "Warum so hoch?", en: "Why this high?" }, rows: [
        { label: { de: "Antrieb",   en: "Driver" },       value: { de: "Thermik & Hangaufwinde", en: "thermals & ridge lift" } },
        { label: { de: "Flugstil",  en: "Flight style" }, value: { de: "kreisendes Segeln", en: "circling soaring" } },
        { label: { de: "Typische Höhe", en: "Typical height" }, value: { de: "regelmäßig bis ~4.500 m", en: "regularly up to ~4,500 m" } },
      ]},
    ],
  },

  bartgeier: {
    desc: {
      de: [
        "Der Bartgeier ist mit fast drei Metern Spannweite einer der größten Flugvögel Europas. In den Alpen war er ausgerottet und wurde ab den 1980er-Jahren wieder angesiedelt; im Himalaya, in Zentralasien und Afrika lebt er noch in alter Stärke.",
        "Er ernährt sich fast ausschließlich von Knochen. Große Knochen, die er nicht verschlucken kann, trägt er in die Höhe und lässt sie gezielt auf flache Felsplatten fallen, bis sie zersplittern – dann frisst er das nährstoffreiche Mark. Solche „Knochenschmieden“ nutzt er über Generationen.",
        "Im Himalaya gleitet er an den steilen Gebirgshängen in Aufwinden regelmäßig über 7 km Höhe, um seine riesigen Reviere abzusuchen – beobachtet und per Höhenmessung an Bergsteigerrouten belegt.",
      ],
      en: [
        "With a wingspan of almost three metres, the bearded vulture is one of Europe's largest flying birds. It was wiped out in the Alps and reintroduced from the 1980s; in the Himalayas, Central Asia and Africa it still survives in good numbers.",
        "It feeds almost entirely on bone. Large bones it cannot swallow it carries aloft and drops onto flat rock slabs until they shatter – then it eats the nutritious marrow. Such 'bone-smashing sites' are used over generations.",
        "In the Himalayas it glides on updrafts along the steep slopes, regularly soaring above 7 km to scan its vast range – observed and confirmed by altitude readings along climbing routes.",
      ],
    },
    groups: [
      { title: { de: "Steckbrief", en: "At a glance" }, rows: [
        { label: { de: "Größe",       en: "Length" },   value: { de: "94–125 cm", en: "94–125 cm" } },
        { label: { de: "Spannweite",  en: "Wingspan" }, value: { de: "2,3–2,8 m", en: "2.3–2.8 m" } },
        { label: { de: "Gewicht",     en: "Weight" },   value: { de: "4,5–7 kg",  en: "4.5–7 kg" } },
        { label: { de: "Verbreitung", en: "Range" },    value: { de: "Alpen, Pyrenäen, Himalaya, Hochland Afrikas", en: "Alps, Pyrenees, Himalayas, African highlands" } },
      ]},
      { title: { de: "Warum so hoch?", en: "Why this high?" }, rows: [
        { label: { de: "Antrieb",   en: "Driver" },       value: { de: "Hangaufwinde im Hochgebirge", en: "ridge updrafts in high mountains" } },
        { label: { de: "Flugstil",  en: "Flight style" }, value: { de: "ausdauerndes Gleiten", en: "sustained gliding" } },
        { label: { de: "Höhe",      en: "Altitude" },     value: { de: "im Himalaya regelmäßig über 7.000 m", en: "regularly above 7,000 m in the Himalayas" } },
      ]},
    ],
  },

  streifengans: {
    desc: {
      de: [
        "Die Streifengans brütet in den Hochlandseen Zentralasiens und überwintert in den Tiefebenen Indiens. Zweimal im Jahr liegt zwischen beiden Welten das höchste Gebirge der Erde – der Himalaya.",
        "Statt langer Umwege fliegt sie über die Pässe. GPS-Sender zeigten, dass eine Gans dabei bis 7.290 m erreichte. Doch das ist der Ausnahmewert: 95 % aller Messpunkte lagen unter 5.500 m. Die Gänse nutzen geschickt nächtliche Kälte und Aufwinde an den Hängen, statt stur über die Gipfel zu steigen.",
        "Ihr Körper ist ein Hochleistungs-System für dünne Luft: besonders effizientes Hämoglobin, dichtere Blutkapillaren in der Flugmuskulatur und eine vertiefte Atmung lassen sie Sauerstoff aufnehmen, wo Menschen längst bewusstlos wären.",
      ],
      en: [
        "The bar-headed goose breeds on the high-altitude lakes of Central Asia and winters in the lowlands of India. Twice a year the planet's highest mountains – the Himalayas – lie between those two worlds.",
        "Rather than long detours, it flies over the passes. GPS tags recorded one goose reaching 7,290 m. But that is the exception: 95% of all fixes were below 5,500 m. The geese cleverly exploit the cold of night and updrafts along the slopes instead of stubbornly climbing over the summits.",
        "Their bodies are a high-performance system for thin air: unusually efficient haemoglobin, denser blood capillaries in the flight muscles and deeper breathing let them take up oxygen where humans would long since black out.",
      ],
    },
    groups: [
      { title: { de: "Steckbrief", en: "At a glance" }, rows: [
        { label: { de: "Größe",       en: "Length" },   value: { de: "71–76 cm", en: "71–76 cm" } },
        { label: { de: "Spannweite",  en: "Wingspan" }, value: { de: "1,4–1,6 m", en: "1.4–1.6 m" } },
        { label: { de: "Gewicht",     en: "Weight" },   value: { de: "2–3 kg",   en: "2–3 kg" } },
        { label: { de: "Verbreitung", en: "Range" },    value: { de: "Zentralasien (Brut), Indien (Winter)", en: "Central Asia (breeding), India (winter)" } },
      ]},
      { title: { de: "Warum so hoch?", en: "Why this high?" }, rows: [
        { label: { de: "Antrieb",     en: "Driver" },      value: { de: "Himalaya-Überquerung auf dem Zug", en: "crossing the Himalayas on migration" } },
        { label: { de: "Anpassung",   en: "Adaptation" },  value: { de: "effizientes Hämoglobin, vertiefte Atmung", en: "efficient haemoglobin, deeper breathing" } },
      ]},
      { title: { de: "Rekord & Messung", en: "Record & measurement" }, rows: [
        { label: { de: "Max. Höhe",   en: "Max. altitude" }, value: { de: "7.290 m (ein Tier)", en: "7,290 m (one bird)" } },
        { label: { de: "95 % der Daten", en: "95% of fixes" }, value: { de: "unter 5.500 m", en: "below 5,500 m" } },
        { label: { de: "Methode",     en: "Method" },        value: { de: "GPS-Telemetrie (PNAS 2011)", en: "GPS telemetry (PNAS 2011)" } },
      ]},
    ],
  },

  singschwan: {
    desc: {
      de: [
        "Der Singschwan ist ein großer, ganz weißer Schwan mit gelb-schwarzem Schnabel, der in Skandinavien, Island und Nordasien brütet und in milderen Regionen überwintert. Mit bis zu 14 kg gehört er zu den schwersten flugfähigen Vögeln überhaupt.",
        "Gerade weil er so schwer ist, gilt seine gemessene Flughöhe als bemerkenswert: Über den Britischen Inseln erfassten ein Verkehrspilot per Sichtkontakt und gleichzeitig das Wetterradar einen Trupp Singschwäne in über 8 km Höhe – eine außergewöhnliche Leistung für einen Vogel dieser Masse.",
        "Solche Höhen erreichen ziehende Schwäne wohl nur, wenn günstige Höhenwinde sie tragen und sie Rückenwind und ruhige Luftschichten nutzen, um Energie zu sparen.",
      ],
      en: [
        "The whooper swan is a large, all-white swan with a yellow-and-black bill that breeds in Scandinavia, Iceland and northern Asia and winters in milder regions. At up to 14 kg it is among the heaviest flying birds of all.",
        "Precisely because it is so heavy, its recorded flight altitude is remarkable: over the British Isles an airline pilot saw, and weather radar simultaneously tracked, a flock of whooper swans above 8 km – an extraordinary feat for a bird of this mass.",
        "Migrating swans probably reach such heights only when favourable high-altitude winds carry them, using tailwinds and calm air layers to save energy.",
      ],
    },
    groups: [
      { title: { de: "Steckbrief", en: "At a glance" }, rows: [
        { label: { de: "Größe",       en: "Length" },   value: { de: "140–165 cm", en: "140–165 cm" } },
        { label: { de: "Spannweite",  en: "Wingspan" }, value: { de: "2,05–2,75 m", en: "2.05–2.75 m" } },
        { label: { de: "Gewicht",     en: "Weight" },   value: { de: "7,5–14 kg",  en: "7.5–14 kg" } },
        { label: { de: "Verbreitung", en: "Range" },    value: { de: "Nordeuropa & Nordasien, Island", en: "northern Europe & Asia, Iceland" } },
      ]},
      { title: { de: "Warum so hoch?", en: "Why this high?" }, rows: [
        { label: { de: "Antrieb",   en: "Driver" },     value: { de: "Zugflug mit günstigen Höhenwinden", en: "migration aided by favourable high-altitude winds" } },
        { label: { de: "Besonderheit", en: "Notable" }, value: { de: "extrem schwerer Vogel in großer Höhe", en: "an extremely heavy bird at great height" } },
      ]},
      { title: { de: "Rekord & Messung", en: "Record & measurement" }, rows: [
        { label: { de: "Höhe",    en: "Altitude" }, value: { de: "über 8.000 m", en: "above 8,000 m" } },
        { label: { de: "Methode", en: "Method" },   value: { de: "Pilotensicht + Wetterradar", en: "pilot sighting + weather radar" } },
      ]},
    ],
  },

  alpendohle: {
    desc: {
      de: [
        "Die Alpendohle ist ein geselliger schwarzer Rabenvogel mit gelbem Schnabel und roten Beinen, der in lärmenden Schwärmen über den Felswänden der Hochgebirge segelt – von den Alpen bis zum Himalaya.",
        "Sie ist eine Meisterin der Aufwinde und folgt Menschen bis in extreme Höhen: Am Mount Everest begleitete sie Bergsteiger nachweislich bis 8.200 m und stahl dort Essensreste. Auch ihre Nester baut sie höher als jeder andere Vogel – bis etwa 6.500 m in Felsspalten.",
        "Ihr breiter, gefingerter Flügel ist ideal zum spielerischen Gleiten an steilen Hängen, wo der Wind ständig neue Aufwinde erzeugt – sie scheint die turbulente Bergluft geradezu zu genießen.",
      ],
      en: [
        "The alpine chough is a sociable black crow with a yellow bill and red legs, soaring in noisy flocks over the cliffs of the high mountains – from the Alps to the Himalayas.",
        "It is a master of updrafts and follows humans to extreme heights: on Mount Everest it has accompanied climbers up to 8,200 m, scavenging their food scraps. It also nests higher than any other bird – up to around 6,500 m in rock crevices.",
        "Its broad, finger-tipped wing is ideal for playful gliding along steep slopes, where the wind constantly throws up fresh lift – it seems positively to relish the turbulent mountain air.",
      ],
    },
    groups: [
      { title: { de: "Steckbrief", en: "At a glance" }, rows: [
        { label: { de: "Größe",       en: "Length" },   value: { de: "37–39 cm", en: "37–39 cm" } },
        { label: { de: "Spannweite",  en: "Wingspan" }, value: { de: "75–85 cm", en: "75–85 cm" } },
        { label: { de: "Gewicht",     en: "Weight" },   value: { de: "188–252 g", en: "188–252 g" } },
        { label: { de: "Verbreitung", en: "Range" },    value: { de: "Hochgebirge von Spanien bis China", en: "high mountains from Spain to China" } },
      ]},
      { title: { de: "Warum so hoch?", en: "Why this high?" }, rows: [
        { label: { de: "Antrieb",   en: "Driver" },       value: { de: "Hangaufwinde, Nahrung an Bergstationen", en: "ridge lift, food at mountain camps" } },
        { label: { de: "Flugstil",  en: "Flight style" }, value: { de: "wendiges, spielerisches Gleiten", en: "agile, playful gliding" } },
      ]},
      { title: { de: "Rekord & Messung", en: "Record & measurement" }, rows: [
        { label: { de: "Beobachtet bis", en: "Observed up to" }, value: { de: "8.200 m (Mount Everest)", en: "8,200 m (Mount Everest)" } },
        { label: { de: "Höchste Nester", en: "Highest nests" },  value: { de: "bis ~6.500 m", en: "up to ~6,500 m" } },
      ]},
    ],
  },

  doppelschnepfe: {
    desc: {
      de: [
        "Die Doppelschnepfe ist ein unscheinbarer, tarnfarbener Watvogel der feuchten Wiesen und Sümpfe Nord- und Osteuropas. Bekannt ist sie vor allem für ihre Balzplätze, an denen die Männchen nachts trommelnd und schwirrend balzen.",
        "Auf dem Zug nach Afrika vollbringt sie Erstaunliches: Sie fliegt nonstop Tausende Kilometer und steigt dabei tagsüber überraschend hoch. Ein mit Sender ausgestattetes Tier wurde in 8.700 m Höhe gemessen – möglicherweise der höchste je per Sender belegte Zugvogelflug.",
        "Warum sie tagsüber so hoch steigt, ist nicht ganz geklärt. Vermutet wird, dass die kalte, dichte Höhenluft die Körperüberhitzung im Dauerflug bremst und das Tier sich an Landmarken oder Sternen besser orientieren kann.",
      ],
      en: [
        "The great snipe is an inconspicuous, cryptically coloured wader of the wet meadows and marshes of northern and eastern Europe. It is best known for its leks, where males display at night with drumming and whirring sounds.",
        "On migration to Africa it achieves something astonishing: it flies thousands of kilometres non-stop and, by day, climbs surprisingly high. One tagged bird was recorded at 8,700 m – possibly the highest migratory flight ever logged by a tag.",
        "Why it climbs so high during the day is not fully understood. The leading idea is that the cold, dense high-altitude air curbs overheating during sustained flight, and that the bird may navigate better by landmarks or stars.",
      ],
    },
    groups: [
      { title: { de: "Steckbrief", en: "At a glance" }, rows: [
        { label: { de: "Größe",       en: "Length" },   value: { de: "27–29 cm", en: "27–29 cm" } },
        { label: { de: "Spannweite",  en: "Wingspan" }, value: { de: "42–48 cm", en: "42–48 cm" } },
        { label: { de: "Gewicht",     en: "Weight" },   value: { de: "140–260 g", en: "140–260 g" } },
        { label: { de: "Verbreitung", en: "Range" },    value: { de: "Nord-/Osteuropa, Sibirien; Winter Afrika", en: "N/E Europe, Siberia; winters in Africa" } },
      ]},
      { title: { de: "Warum so hoch?", en: "Why this high?" }, rows: [
        { label: { de: "Antrieb",   en: "Driver" },     value: { de: "Nonstop-Langstreckenzug", en: "non-stop long-distance migration" } },
        { label: { de: "Hypothese", en: "Hypothesis" }, value: { de: "kühle Höhenluft gegen Überhitzung", en: "cool high air to avoid overheating" } },
      ]},
      { title: { de: "Rekord & Messung", en: "Record & measurement" }, rows: [
        { label: { de: "Max. Höhe", en: "Max. altitude" }, value: { de: "8.700 m", en: "8,700 m" } },
        { label: { de: "Methode",   en: "Method" },        value: { de: "Sender-Telemetrie (Studie 2021)", en: "tag telemetry (2021 study)" } },
      ]},
    ],
  },

  kranich: {
    desc: {
      de: [
        "Der Kranich ist ein hochbeiniger Zugvogel mit weit hörbaren, trompetenden Rufen. In großen V-Formationen zieht er zwischen den Brutgebieten Nord- und Osteuropas und den Winterquartieren in Spanien und Nordafrika – ein Schauspiel, das jedes Frühjahr und jeden Herbst Tausende Menschen an den Himmel blicken lässt.",
        "Normalerweise fliegt er nur einige Hundert bis wenige Tausend Meter hoch. Über hohen Gebirgen wie dem Himalaya jedoch kann er bis etwa 10.000 m steigen – damit gilt er nach dem Sperbergeier als zweithöchster Vogel der Welt.",
        "Auf dem Zug nutzt er Thermik zum Höhengewinnen und gleitet dann energiesparend weiter; bei langen Etappen wechseln sich die Tiere an der Spitze des Keils ab, um den anstrengenden Frontplatz zu teilen.",
      ],
      en: [
        "The common crane is a long-legged migratory bird with far-carrying, trumpeting calls. It travels in great V-formations between its breeding grounds in northern and eastern Europe and its wintering areas in Spain and North Africa – a spectacle that draws thousands of people to look skyward each spring and autumn.",
        "Normally it flies only a few hundred to a few thousand metres up. Over high mountains such as the Himalayas, however, it can climb to about 10,000 m – making it, after Rüppell's vulture, the second-highest bird in the world.",
        "On migration it uses thermals to gain height and then glides on to save energy; on long stages the birds take turns at the tip of the wedge to share the strenuous lead position.",
      ],
    },
    groups: [
      { title: { de: "Steckbrief", en: "At a glance" }, rows: [
        { label: { de: "Größe",       en: "Length" },   value: { de: "100–130 cm", en: "100–130 cm" } },
        { label: { de: "Spannweite",  en: "Wingspan" }, value: { de: "1,8–2,4 m", en: "1.8–2.4 m" } },
        { label: { de: "Gewicht",     en: "Weight" },   value: { de: "3–6,1 kg",  en: "3–6.1 kg" } },
        { label: { de: "Verbreitung", en: "Range" },    value: { de: "Nord-/Osteuropa, Asien; Winter Spanien/Afrika", en: "N/E Europe, Asia; winters Spain/Africa" } },
      ]},
      { title: { de: "Warum so hoch?", en: "Why this high?" }, rows: [
        { label: { de: "Antrieb",   en: "Driver" },     value: { de: "Gebirgsüberquerung auf dem Zug", en: "crossing mountains on migration" } },
        { label: { de: "Flugstil",  en: "Flight style" }, value: { de: "Thermikkreisen + Formationsgleiten", en: "thermal soaring + formation gliding" } },
      ]},
      { title: { de: "Rekord & Messung", en: "Record & measurement" }, rows: [
        { label: { de: "Max. Höhe", en: "Max. altitude" }, value: { de: "~10.000 m (über Hochgebirge)", en: "~10,000 m (over high mountains)" } },
        { label: { de: "Rang",      en: "Rank" },           value: { de: "zweithöchster Vogel der Welt", en: "second-highest bird in the world" } },
      ]},
    ],
  },

  sperbergeier: {
    desc: {
      de: [
        "Der Sperbergeier ist ein großer Altweltgeier der afrikanischen Savannen südlich der Sahara. In Kolonien an Felswänden brütend, sucht er weiträumig nach Kadavern und ist mit seinem kräftigen Schnabel auf zähe Haut und Sehnen spezialisiert.",
        "Er hält den absoluten Höhenrekord aller Vögel: 11.300 m. Belegt ist dieser nicht durch eine Beobachtung, sondern auf tragische Weise – 1973 kollidierte ein Sperbergeier über Westafrika mit einem Verkehrsflugzeug; aus den Federresten im Triebwerk und der Flughöhe der Maschine ließ sich die Höhe rekonstruieren.",
        "Sein Blut enthält eine spezielle Hämoglobin-Variante, die selbst in dieser fast luftleeren Höhe noch genug Sauerstoff binden kann – eine Anpassung, die solche Extremflüge überhaupt erst möglich macht.",
      ],
      en: [
        "Rüppell's vulture is a large Old World vulture of the African savannahs south of the Sahara. Nesting in colonies on cliffs, it ranges widely in search of carcasses and, with its powerful bill, is specialised in tough hide and sinew.",
        "It holds the absolute altitude record for any bird: 11,300 m. This is not proven by an observation but, tragically, otherwise – in 1973 a Rüppell's vulture collided with an airliner over West Africa; from the feather remains in the engine and the aircraft's altitude the height could be reconstructed.",
        "Its blood carries a special haemoglobin variant that can still bind enough oxygen even at this near-airless height – an adaptation that makes such extreme flights possible in the first place.",
      ],
    },
    groups: [
      { title: { de: "Steckbrief", en: "At a glance" }, rows: [
        { label: { de: "Größe",       en: "Length" },   value: { de: "85–103 cm", en: "85–103 cm" } },
        { label: { de: "Spannweite",  en: "Wingspan" }, value: { de: "2,26–2,6 m", en: "2.26–2.6 m" } },
        { label: { de: "Gewicht",     en: "Weight" },   value: { de: "6,4–9 kg",  en: "6.4–9 kg" } },
        { label: { de: "Verbreitung", en: "Range" },    value: { de: "Sahelzone & Ostafrika", en: "Sahel & East Africa" } },
      ]},
      { title: { de: "Warum so hoch?", en: "Why this high?" }, rows: [
        { label: { de: "Antrieb",   en: "Driver" },      value: { de: "ausgedehntes Segeln auf Nahrungssuche", en: "extensive soaring while foraging" } },
        { label: { de: "Anpassung", en: "Adaptation" },  value: { de: "spezielles Hämoglobin für extreme Höhe", en: "special haemoglobin for extreme altitude" } },
      ]},
      { title: { de: "Rekord & Messung", en: "Record & measurement" }, rows: [
        { label: { de: "Max. Höhe", en: "Max. altitude" }, value: { de: "11.300 m (Vogel-Weltrekord)", en: "11,300 m (bird world record)" } },
        { label: { de: "Beleg",     en: "Evidence" },      value: { de: "Flugzeug-Kollision, 1973", en: "aircraft collision, 1973" } },
      ]},
    ],
  },

  /* ---------- INSEKTEN ---------- */
  marienkaefer: {
    desc: {
      de: [
        "Der Marienkäfer ist ein vertrauter Gartenbewohner und ein gefräßiger Blattlausjäger. Was kaum jemand weiß: Er ist auch ein Teil des „Luftplanktons“ – des unsichtbaren Stroms aus Insekten und Spinnentieren, der ständig hoch über uns durch die Luft treibt.",
        "Radarstudien über England zeigten Marienkäfer in Höhen bis zu 1.100 m. Die meisten bleiben jedoch deutlich tiefer, typischerweise zwischen 150 und 500 m, wo wärmere Luftschichten und Winde sie tragen.",
        "Sie nutzen die Höhe als Reisemittel: Vom Boden aus starten sie aktiv, lassen sich dann vom Wind über weite Strecken zu neuen Beutegründen tragen und sinken wieder ab, wenn es kühler oder windstiller wird.",
      ],
      en: [
        "The ladybird is a familiar garden resident and a voracious aphid hunter. What few people know is that it is also part of the 'aerial plankton' – the invisible stream of insects and arachnids that drifts continuously through the air high above us.",
        "Radar studies over England detected ladybirds at heights of up to 1,100 m. Most, however, stay much lower, typically between 150 and 500 m, where warmer air layers and winds carry them.",
        "They use height as a means of travel: launching actively from the ground, they let the wind carry them long distances to new hunting grounds, then descend again when it turns cooler or calmer.",
      ],
    },
    groups: [
      { title: { de: "Steckbrief", en: "At a glance" }, rows: [
        { label: { de: "Größe",       en: "Length" },   value: { de: "1–10 mm (je nach Art)", en: "1–10 mm (depending on species)" } },
        { label: { de: "Gewicht",     en: "Weight" },   value: { de: "wenige Milligramm", en: "a few milligrams" } },
        { label: { de: "Familie",     en: "Family" },   value: { de: "Coccinellidae (~6.000 Arten)", en: "Coccinellidae (~6,000 species)" } },
        { label: { de: "Verbreitung", en: "Range" },    value: { de: "weltweit", en: "worldwide" } },
      ]},
      { title: { de: "Warum so hoch?", en: "Why this high?" }, rows: [
        { label: { de: "Antrieb",   en: "Driver" },       value: { de: "Wind­verdriftung (Ausbreitung)", en: "wind drift (dispersal)" } },
        { label: { de: "Typische Höhe", en: "Typical height" }, value: { de: "150–500 m", en: "150–500 m" } },
      ]},
      { title: { de: "Rekord & Messung", en: "Record & measurement" }, rows: [
        { label: { de: "Max. Höhe", en: "Max. altitude" }, value: { de: "1.100 m", en: "1,100 m" } },
        { label: { de: "Methode",   en: "Method" },        value: { de: "Insektenradar (PLOS ONE)", en: "insect radar (PLOS ONE)" } },
      ]},
    ],
  },

  distelfalter: {
    desc: {
      de: [
        "Der Distelfalter ist ein Wanderschmetterling der Superlative. Er kommt auf fast allen Kontinenten vor und legt im Lauf mehrerer Generationen Strecken von Afrika bis nach Skandinavien zurück – einer der weitesten Wanderwege aller Insekten.",
        "Anders als die niedrig flatternden Gartenfalter steigt er auf dem Zug in Höhen von 1.000 bis 3.000 m. Dort erfasst ihn der Höhenwind und trägt ihn mit hoher Geschwindigkeit über Wüsten und Meere – Radarmessungen zeigten, dass er gezielt mitziehende Winde nutzt statt blind gegen sie anzukämpfen.",
        "Eine einzelne Hin- und Rückwanderung umfasst rund 15.000 km und sechs bis zehn Generationen – kein einzelner Falter erlebt die ganze Reise.",
      ],
      en: [
        "The painted lady is a migratory butterfly of superlatives. Found on almost every continent, over several generations it covers distances from Africa to Scandinavia – one of the longest migration routes of any insect.",
        "Unlike the low-fluttering garden butterflies, on migration it climbs to altitudes of 1,000 to 3,000 m. There the high-altitude wind catches it and carries it at speed over deserts and seas – radar showed it deliberately rides supporting winds rather than fighting them blindly.",
        "A single round-trip migration spans about 15,000 km and six to ten generations – no individual butterfly experiences the whole journey.",
      ],
    },
    groups: [
      { title: { de: "Steckbrief", en: "At a glance" }, rows: [
        { label: { de: "Spannweite",  en: "Wingspan" }, value: { de: "5–9 cm", en: "5–9 cm" } },
        { label: { de: "Gewicht",     en: "Weight" },   value: { de: "unter 1 g", en: "under 1 g" } },
        { label: { de: "Verbreitung", en: "Range" },    value: { de: "nahezu weltweit", en: "almost worldwide" } },
        { label: { de: "Zugweite",    en: "Migration" }, value: { de: "bis ~15.000 km (mehrere Generationen)", en: "up to ~15,000 km (several generations)" } },
      ]},
      { title: { de: "Warum so hoch?", en: "Why this high?" }, rows: [
        { label: { de: "Antrieb",   en: "Driver" },       value: { de: "Höhenwinde nutzen für Langstreckenzug", en: "riding high-altitude winds on migration" } },
        { label: { de: "Zughöhe",   en: "Migration height" }, value: { de: "1.000–3.000 m", en: "1,000–3,000 m" } },
      ]},
    ],
  },

  monarch: {
    desc: {
      de: [
        "Der Monarchfalter ist berühmt für seine Massenwanderung: Jeden Herbst ziehen Millionen Tiere aus Nordamerika nach Mexiko, wo sie sich in den Oyamel-Tannenwäldern zu riesigen, hängenden Trauben zusammenfinden und in dichten Kolonien überwintern.",
        "Diese Überwinterungswälder liegen auf 2.400 bis 3.600 m Höhe. Wichtig: Das ist die Höhe des Standorts über dem Meer – nicht die Höhe, in der die Falter fliegen. Die kühle, feuchte Bergluft hält ihren Stoffwechsel niedrig und lässt sie den Winter über Energie sparen.",
        "Auf dem Zug selbst fliegt der Monarch viel tiefer, nutzt aber wie der Distelfalter Aufwinde und Rückenwinde, um die enorme Strecke von bis zu 4.000 km zu bewältigen.",
      ],
      en: [
        "The monarch butterfly is famous for its mass migration: every autumn millions travel from North America to Mexico, where they gather into vast hanging clusters in the oyamel fir forests and overwinter in dense colonies.",
        "These overwintering forests sit at 2,400 to 3,600 m elevation. Importantly, that is the height of the site above sea level – not the height at which the butterflies fly. The cool, moist mountain air keeps their metabolism low and lets them conserve energy through the winter.",
        "On migration itself the monarch flies far lower, but like the painted lady it uses updrafts and tailwinds to cover the enormous distance of up to 4,000 km.",
      ],
    },
    groups: [
      { title: { de: "Steckbrief", en: "At a glance" }, rows: [
        { label: { de: "Spannweite",  en: "Wingspan" }, value: { de: "8,9–10,2 cm", en: "8.9–10.2 cm" } },
        { label: { de: "Gewicht",     en: "Weight" },   value: { de: "~0,5 g", en: "~0.5 g" } },
        { label: { de: "Verbreitung", en: "Range" },    value: { de: "Nord- & Mittelamerika", en: "North & Central America" } },
        { label: { de: "Zugweite",    en: "Migration" }, value: { de: "bis ~4.000 km", en: "up to ~4,000 km" } },
      ]},
      { title: { de: "Höhe = Standort, nicht Flug", en: "Height = site, not flight" }, rows: [
        { label: { de: "Winterquartier", en: "Wintering site" }, value: { de: "Oyamel-Wälder, 2.400–3.600 m", en: "oyamel forests, 2,400–3,600 m" } },
        { label: { de: "Bedeutung",      en: "Meaning" },        value: { de: "Geländehöhe über dem Meer", en: "ground elevation above sea level" } },
        { label: { de: "Nutzen",         en: "Benefit" },        value: { de: "kühle Luft spart Winterenergie", en: "cool air conserves winter energy" } },
      ]},
    ],
  },

  hummel: {
    desc: {
      de: [
        "Hummeln gelten als Inbegriff des unwahrscheinlichen Fliegers: pelzig, rundlich und scheinbar zu schwer für ihre kleinen Flügel. Tatsächlich sind sie zähe, kälteresistente Bestäuber, die auch bei niedrigen Temperaturen aktiv sind, indem sie ihre Flugmuskulatur durch Zittern aufheizen.",
        "Wie hoch eine Hummel steigen kann, prüften Forscher 2014 nicht im freien Himmel, sondern im Labor: In einer Unterdruckkammer senkten sie schrittweise den Luftdruck, bis er dem in über 9.000 m Höhe entsprach – höher als der Gipfel des Mount Everest. Alpenhummeln hielten dort noch Schwebflug.",
        "Statt schneller zu schlagen, vergrößern sie in dünner Luft den Ausschlag ihrer Flügel und schöpfen so genug Auftrieb. Das erklärt, warum Hummeln auch in den Hochlagen des Himalaya Blüten bestäuben.",
      ],
      en: [
        "Bumblebees are the very emblem of the unlikely flier: furry, rounded and seemingly too heavy for their small wings. In fact they are tough, cold-resistant pollinators, active even at low temperatures by warming their flight muscles through shivering.",
        "How high a bumblebee can climb was tested by researchers in 2014 not in the open sky but in the lab: in a low-pressure chamber they gradually lowered the air pressure to match conditions above 9,000 m – higher than the summit of Mount Everest. Alpine bumblebees still managed to hover there.",
        "Rather than beating faster, in thin air they widen the sweep of their wings and so generate enough lift. This explains why bumblebees pollinate flowers even in the high reaches of the Himalayas.",
      ],
    },
    groups: [
      { title: { de: "Steckbrief", en: "At a glance" }, rows: [
        { label: { de: "Größe",       en: "Length" },   value: { de: "Königin bis ~2,5 cm", en: "queen up to ~2.5 cm" } },
        { label: { de: "Gewicht",     en: "Weight" },   value: { de: "~0,1–0,9 g", en: "~0.1–0.9 g" } },
        { label: { de: "Gattung",     en: "Genus" },    value: { de: "Bombus (~250 Arten)", en: "Bombus (~250 species)" } },
        { label: { de: "Verbreitung", en: "Range" },    value: { de: "weltweit, v. a. gemäßigte & kühle Zonen", en: "worldwide, esp. temperate & cool zones" } },
      ]},
      { title: { de: "Warum so hoch?", en: "Why this high?" }, rows: [
        { label: { de: "Anpassung", en: "Adaptation" }, value: { de: "größerer Flügelausschlag in dünner Luft", en: "wider wing stroke in thin air" } },
        { label: { de: "Kontext",   en: "Context" },    value: { de: "Laborwert, kein echter Flug in der Höhe", en: "lab value, not real flight at altitude" } },
      ]},
      { title: { de: "Rekord & Messung", en: "Record & measurement" }, rows: [
        { label: { de: "Simulierte Höhe", en: "Simulated altitude" }, value: { de: "über 9.000 m", en: "over 9,000 m" } },
        { label: { de: "Methode",         en: "Method" },             value: { de: "Unterdruckkammer (2014)", en: "low-pressure chamber (2014)" } },
      ]},
    ],
  },

  /* ---------- FLEDERMAUS ---------- */
  fledermaus: {
    desc: {
      de: [
        "Die Mexikanische Bulldoggfledermaus lebt in den größten Säugetierkolonien der Welt: In manchen Höhlen Nordamerikas drängen sich Millionen Tiere zusammen, und ihr abendlicher Ausflug verdunkelt regelrecht den Himmel.",
        "Sie ist die höchstfliegende Fledermaus überhaupt. Mit Radar wurde sie nachts bis in etwa 3.300 m Höhe verfolgt, wo sie ziehende Nachtfalter und andere Insekten aus dem Luftplankton jagt. Schmale, lange Flügel machen sie zu einer der schnellsten Fledermäuse – im Sturzflug erreicht sie bemerkenswerte Geschwindigkeiten.",
        "Sie orientiert sich per Echoortung: Sie stößt Ultraschallrufe aus und „hört“ am Echo, wo Beute und Hindernisse sind – auch in völliger Dunkelheit, kilometerhoch über dem Boden.",
      ],
      en: [
        "The Mexican free-tailed bat lives in the largest mammal colonies on Earth: in some North American caves millions crowd together, and their evening emergence can literally darken the sky.",
        "It is the highest-flying bat of all. Radar has tracked it at night up to around 3,300 m, where it hunts migrating moths and other insects from the aerial plankton. Narrow, long wings make it one of the fastest bats – in a dive it reaches remarkable speeds.",
        "It navigates by echolocation: it emits ultrasonic calls and 'hears' from the echoes where prey and obstacles are – even in total darkness, kilometres above the ground.",
      ],
    },
    groups: [
      { title: { de: "Steckbrief", en: "At a glance" }, rows: [
        { label: { de: "Körperlänge", en: "Body length" }, value: { de: "~9 cm", en: "~9 cm" } },
        { label: { de: "Spannweite",  en: "Wingspan" },   value: { de: "~30 cm", en: "~30 cm" } },
        { label: { de: "Gewicht",     en: "Weight" },     value: { de: "11–14 g", en: "11–14 g" } },
        { label: { de: "Verbreitung", en: "Range" },      value: { de: "Süd-USA bis Südamerika", en: "southern USA to South America" } },
      ]},
      { title: { de: "Warum so hoch?", en: "Why this high?" }, rows: [
        { label: { de: "Antrieb",  en: "Driver" },       value: { de: "Jagd auf ziehende Nachtfalter", en: "hunting migrating moths" } },
        { label: { de: "Flugstil", en: "Flight style" }, value: { de: "schnell, schmale lange Flügel", en: "fast, narrow long wings" } },
        { label: { de: "Sinn",     en: "Sense" },        value: { de: "Echoortung per Ultraschall", en: "echolocation by ultrasound" } },
      ]},
      { title: { de: "Rekord & Messung", en: "Record & measurement" }, rows: [
        { label: { de: "Max. Höhe", en: "Max. altitude" }, value: { de: "~3.300 m", en: "~3,300 m" } },
        { label: { de: "Methode",   en: "Method" },        value: { de: "nächtliche Radarverfolgung", en: "nocturnal radar tracking" } },
      ]},
    ],
  },

  /* ---------- SPINNE ---------- */
  spinne: {
    desc: {
      de: [
        "„Ballooning“ nennt man die erstaunliche Reisetechnik vieler kleiner Spinnen: Sie klettern auf eine erhöhte Stelle, recken den Hinterleib in die Höhe und geben feine Seidenfäden ab. Sobald Wind oder elektrische Felder der Atmosphäre genug Zug erzeugen, heben sie ab und segeln davon.",
        "So überwinden vor allem Jungspinnen große Entfernungen und besiedeln neue Lebensräume. In Luftproben aus großer Höhe wurden ballooning-Spinnen bis etwa 4.500 m gefunden – als Teil des „Aeroplanktons“, das ständig über uns durch die Atmosphäre treibt.",
        "Lange galt nur der Wind als Antrieb. Neuere Forschung zeigt, dass die Spinnen auch das natürliche elektrische Feld der Erde spüren und gezielt nutzen können – ihre Seidenfäden werden elektrostatisch abgestoßen und tragen sie nach oben, sogar bei Windstille.",
      ],
      en: [
        "'Ballooning' is the astonishing travel technique of many small spiders: they climb to a raised spot, lift the abdomen into the air and release fine silk threads. As soon as wind or the atmosphere's electric fields create enough pull, they lift off and sail away.",
        "In this way, young spiders especially cover great distances and colonise new habitats. Air samples taken at altitude have found ballooning spiders up to around 4,500 m – part of the 'aeroplankton' that drifts continuously through the atmosphere above us.",
        "For a long time wind was thought to be the only driver. Newer research shows the spiders can also sense and deliberately use the Earth's natural electric field – their silk threads are repelled electrostatically and carry them upward, even on windless days.",
      ],
    },
    groups: [
      { title: { de: "Steckbrief", en: "At a glance" }, rows: [
        { label: { de: "Wer fliegt?", en: "Who flies?" },  value: { de: "v. a. Jungspinnen vieler Familien", en: "esp. juveniles of many families" } },
        { label: { de: "Größe",       en: "Size" },        value: { de: "meist nur wenige Millimeter", en: "usually just a few millimetres" } },
        { label: { de: "Verbreitung", en: "Range" },       value: { de: "weltweit", en: "worldwide" } },
        { label: { de: "Technik",     en: "Technique" },   value: { de: "Ballooning an Seidenfäden", en: "ballooning on silk threads" } },
      ]},
      { title: { de: "Warum so hoch?", en: "Why this high?" }, rows: [
        { label: { de: "Antrieb",   en: "Driver" },     value: { de: "Wind & atmosphärisches E-Feld", en: "wind & atmospheric electric field" } },
        { label: { de: "Zweck",     en: "Purpose" },    value: { de: "Ausbreitung in neue Lebensräume", en: "dispersal into new habitats" } },
      ]},
      { title: { de: "Rekord & Messung", en: "Record & measurement" }, rows: [
        { label: { de: "Max. Höhe", en: "Max. altitude" }, value: { de: "~4.500 m (Aeroplankton)", en: "~4,500 m (aeroplankton)" } },
        { label: { de: "Methode",   en: "Method" },        value: { de: "Luftproben in großer Höhe", en: "high-altitude air sampling" } },
      ]},
    ],
  },

});
