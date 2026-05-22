const fs = require('fs');
const {data, details} = JSON.parse(fs.readFileSync('C:/Users/geeje/in-den-himmel/eval/merged.json','utf8'));
function digits(t){ const m=(t||'').match(/\d[\d.,]*/g)||[]; return m.map(x=>x.replace(/[.,]/g,'')).filter(x=>x.length); }

console.log('=== group VALUE DE/EN Zahlen-Mismatch ===');
let n=0;
for(const id of Object.keys(details)){
  const d=details[id]; if(!d) continue;
  (d.groups||[]).forEach(g=>{(g.rows||[]).forEach(r=>{
    if(r.value&&r.value.de&&r.value.en){
      const a=digits(r.value.de).sort(), b=digits(r.value.en).sort();
      if(JSON.stringify(a)!==JSON.stringify(b)){
        n++; console.log(`  ${id} [${(r.label&&r.label.de)||'?'}]: de="${r.value.de}" en="${r.value.en}"`);
      }
    }
  })});
}
console.log('  Total:',n);

console.log('\n=== desc DE/EN Zahlen-Mismatch (pro Absatz) ===');
let m2=0;
for(const id of Object.keys(details)){
  const d=details[id]; if(!d||!d.desc) continue;
  const de=d.desc.de||[], en=d.desc.en||[];
  for(let i=0;i<Math.min(de.length,en.length);i++){
    const a=digits(de[i]).sort(), b=digits(en[i]).sort();
    if(JSON.stringify(a)!==JSON.stringify(b)){
      m2++; console.log(`  ${id} #${i}: de=[${a.join(',')}] en=[${b.join(',')}]`);
    }
  }
}
console.log('  Total:',m2);
