const fs = require('fs');
const {data, details} = JSON.parse(fs.readFileSync('C:/Users/geeje/in-den-himmel/eval/merged.json','utf8'));
const byId={}; data.forEach(o=>byId[o.id]=o);

// Extrahiere "Jahreszahlen" (1500-2030) aus fact.de und aus desc.de+groups, vergleiche Mengen.
function years(t){ const m=t.match(/\b(1[5-9]\d\d|20[0-2]\d)\b/g)||[]; return m.map(Number); }
function descText(id){ const d=details[id]; if(!d)return''; let s=[]; if(d.desc&&d.desc.de)s=s.concat(d.desc.de);
  (d.groups||[]).forEach(g=>(g.rows||[]).forEach(r=>{if(r.value&&r.value.de)s.push(r.value.de);})); return s.join(' '); }

console.log('=== Jahres-Diskrepanz: Jahr in fact.de fehlt komplett im Detail (Kandidat fuer Widerspruch) ===');
for(const o of data){
  if(!o.fact||!o.fact.de) continue;
  const fy=[...new Set(years(o.fact.de))];
  if(!fy.length) continue;
  const dt=descText(o.id); if(!dt) continue;
  const dy=new Set(years(dt));
  const missing=fy.filter(y=>!dy.has(y));
  // nur melden wenn Detail ueberhaupt Jahre nennt (sonst evtl. nur kuerzer)
  if(missing.length && dy.size>0){
    console.log(`  ${o.id}: fact-Jahre=${fy.join(',')} | detail-Jahre=${[...dy].join(',')} | nur in fact: ${missing.join(',')}`);
  }
}

// DE vs EN Zahlen-Mismatch in fact: extrahiere alle Ziffernfolgen (ohne Trennzeichen) und vergleiche Multimengen
function digits(t){ // hole numerische Token, normalisiere Trennzeichen weg
  const m=t.match(/\d[\d.,]*/g)||[]; return m.map(x=>x.replace(/[.,]/g,'')).filter(x=>x.length); }
console.log('\n=== fact DE/EN Zahlen-Mismatch ===');
for(const o of data){
  if(!o.fact||!o.fact.de||!o.fact.en) continue;
  const a=digits(o.fact.de).sort(), b=digits(o.fact.en).sort();
  if(JSON.stringify(a)!==JSON.stringify(b)){
    console.log(`  ${o.id}: de=[${a.join(',')}] en=[${b.join(',')}]`);
  }
}
