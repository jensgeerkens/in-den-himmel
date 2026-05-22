const fs = require('fs');
const {data, details} = JSON.parse(fs.readFileSync('C:/Users/geeje/in-den-himmel/eval/merged.json','utf8'));
// German low-9 quote U+201E „ und schließendes U+201C " sind DE-Stil. EN sollte “ ” (U+201C/U+201D) oder ' nutzen.
// Defekt: „ (U+201E) in EN-Text.
const GE_OPEN = '„'; // „
let hits = [];
for(const id of Object.keys(details)){
  const d = details[id]; if(!d) continue;
  const enTexts = [];
  if(d.desc && d.desc.en) d.desc.en.forEach(p=>enTexts.push(p));
  (d.groups||[]).forEach(g=>{ (g.rows||[]).forEach(r=>{ if(r.value&&r.value.en) enTexts.push(r.value.en); if(r.label&&r.label.en) enTexts.push(r.label.en); }); });
  let cnt=0;
  enTexts.forEach(t=>{ if(t.includes(GE_OPEN)) cnt++; });
  if(cnt) hits.push({id, cnt});
}
// auch in data.js fact.en
let factHits=[];
for(const o of data){ if(o.fact&&o.fact.en&&o.fact.en.includes(GE_OPEN)) factHits.push(o.id); }
console.log('EN-Texte mit deutschem Anführungszeichen „ (U+201E):');
console.log('  Detail-Objekte:', hits.length);
hits.forEach(h=>console.log('   '+h.id+' ('+h.cnt+')'));
console.log('  fact.en betroffen:', factHits.length, JSON.stringify(factHits));
