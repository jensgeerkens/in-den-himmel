/* ============================================================================
   data_details.js — Ausführliche, kategorisierte Detail-Infos pro Objekt.
   Ergänzt data.js (lädt NACH data.js, VOR script.js). Reine Daten, global,
   läuft unter file://.

   Struktur:  SKY_DETAILS[id] = {
     desc:   { de:["Absatz", …], en:["Para", …] }   // erzählerisch, Ton wie `fact`
     groups: [ { title:{de,en}, rows:[ {label:{de,en}, value:{de,en}} … ] } … ]
   }
   Alles OPTIONAL: fehlt ein Eintrag, rendert das Modal nur den bisherigen
   Umfang (fact + Meta). `value` ist vorformatiert (DE-Komma / EN-Punkt).
   Konstanten LY/AU aus data.js sind hier nutzbar (data.js lädt zuerst).
   ========================================================================== */

const SKY_DETAILS = {

  /* ---------- TIERE (Beispiel) ---------- */
  spatz: {
    desc: {
      de: [
        "Der Haussperling ist einer der erfolgreichsten Vögel der Welt und folgt dem Menschen seit Jahrtausenden in Städte und Dörfer.",
        "Sein Flug ist kurz und niedrig: Er pendelt zwischen Hecke, Dachrinne und Futterstelle, selten höher als ein paar Dutzend Meter über dem Boden.",
      ],
      en: [
        "The house sparrow is one of the most successful birds in the world, following humans into towns and villages for millennia.",
        "Its flight is short and low: it shuttles between hedge, gutter and feeder, rarely higher than a few dozen metres above the ground.",
      ],
    },
    groups: [
      { title: { de: "Steckbrief", en: "At a glance" }, rows: [
        { label: { de: "Größe",       en: "Length" },   value: { de: "14–18 cm", en: "14–18 cm" } },
        { label: { de: "Spannweite",  en: "Wingspan" }, value: { de: "21–25 cm", en: "21–25 cm" } },
        { label: { de: "Gewicht",     en: "Weight" },   value: { de: "24–40 g",  en: "24–40 g" } },
        { label: { de: "Verbreitung", en: "Range" },    value: { de: "weltweit (außer Polargebiete)", en: "worldwide (except polar regions)" } },
      ]},
      { title: { de: "Warum so niedrig?", en: "Why so low?" }, rows: [
        { label: { de: "Lebensraum", en: "Habitat" },     value: { de: "Siedlungsnähe, Hecken, Gebäude", en: "near settlements, hedges, buildings" } },
        { label: { de: "Flugstil",   en: "Flight style" }, value: { de: "kurze, flatternde Strecken", en: "short, fluttering hops" } },
      ]},
    ],
  },

  /* ---------- KOSMOS (Beispiel) ---------- */
  quasar3c273: {
    desc: {
      de: [
        "3C 273 war 1963 das erste Objekt, das als Quasar erkannt wurde – eine Entdeckung, die unser Bild vom Universum erschütterte.",
        "Sein Licht stammt nicht von Sternen, sondern von Materie, die spiralförmig in ein supermassereiches Schwarzes Loch stürzt und sich dabei auf Millionen Grad aufheizt.",
        "Wir sehen es so, wie es vor rund 2,4 Milliarden Jahren aussah – als auf der Erde gerade die ersten vielzelligen Lebensformen entstanden.",
      ],
      en: [
        "In 1963, 3C 273 became the first object ever recognised as a quasar – a discovery that shook our picture of the universe.",
        "Its light comes not from stars but from matter spiralling into a supermassive black hole, heated to millions of degrees on the way down.",
        "We see it as it looked about 2.4 billion years ago – when the first multicellular life was just appearing on Earth.",
      ],
    },
    groups: [
      { title: { de: "Eckdaten", en: "At a glance" }, rows: [
        { label: { de: "Typ",         en: "Type" },       value: { de: "Quasar (aktiver Galaxienkern)", en: "Quasar (active galactic nucleus)" } },
        { label: { de: "Entfernung",  en: "Distance" },   value: { de: "≈ 2,4 Mrd. Lichtjahre", en: "≈ 2.4 billion light-years" } },
        { label: { de: "Leuchtkraft", en: "Luminosity" }, value: { de: "~4 Billionen Sonnenleuchtkräfte", en: "~4 trillion solar luminosities" } },
        { label: { de: "Schwarzes Loch", en: "Black hole" }, value: { de: "~886 Mio. Sonnenmassen", en: "~886 million solar masses" } },
      ]},
      { title: { de: "Entdeckung", en: "Discovery" }, rows: [
        { label: { de: "Jahr",      en: "Year" },          value: { de: "1963 (Maarten Schmidt)", en: "1963 (Maarten Schmidt)" } },
        { label: { de: "Sternbild", en: "Constellation" }, value: { de: "Jungfrau (Virgo)", en: "Virgo" } },
      ]},
      { title: { de: "Blick in die Vergangenheit", en: "Looking back in time" }, rows: [
        { label: { de: "Lichtlaufzeit", en: "Light travel time" }, value: { de: "~2,4 Mrd. Jahre", en: "~2.4 billion years" } },
      ]},
    ],
  },

};
