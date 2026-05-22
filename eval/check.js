/* Faktencheck-Helper: merge SKY_DATA + alle SKY_DETAILS, prüfe Konsistenz */
const fs = require('fs');
const path = 'C:/Users/geeje/in-den-himmel/';
const LY = 9.4607e15, AU = 1.496e11;

function loadData(){
  let src = fs.readFileSync(path+'data.js','utf8');
  src = src.replace(/const\s+LY\s*=.*?;/, 'var _LY = 9.4607e15;');
  src = src.replace(/const\s+AU\s*=.*?;/, 'var _AU = 1.496e11;');
  src = src.replace(/\bLY\b/g, '_LY').replace(/\bAU\b/g, '_AU');
  const fn = new Function(src + '\n; return SKY_DATA;');
  return fn();
}
function loadDetails(files){
  let merged = {};
  for(const f of files){
    let src = fs.readFileSync(path+f,'utf8');
    src = src.replace(/const\s+SKY_DETAILS\s*=/, 'var SKY_DETAILS =');
    const fn = new Function('LY','AU', 'var SKY_DETAILS=SKY_DETAILS||{};\n'+src+'\n; return SKY_DETAILS;');
    let d;
    try { d = fn(LY,AU); } catch(e){ console.error('FEHLER in '+f+': '+e.message); continue; }
    Object.assign(merged, d);
  }
  return merged;
}

const data = loadData();
const detFiles = ['data_details.js','dd_life.js','dd_tech1.js','dd_space.js','dd_solar.js','dd_stellar.js','dd_deep.js'];
const details = loadDetails(detFiles);

console.log('SKY_DATA Objekte:', data.length);
console.log('SKY_DETAILS Einträge:', Object.keys(details).length);

const dataIds = data.map(o=>o.id);
const noDetail = dataIds.filter(id=>!details[id]);
const orphanDetail = Object.keys(details).filter(id=>!dataIds.includes(id));
console.log('\n--- data.js IDs ohne Detail:', noDetail.length, JSON.stringify(noDetail));
console.log('--- Detail-IDs ohne data.js:', orphanDetail.length, JSON.stringify(orphanDetail));

console.log('\n--- desc DE/EN Paritaet (Absatzzahl) ---');
for(const id of Object.keys(details)){
  const d = details[id].desc; if(!d) continue;
  const de = d.de||[], en = d.en||[];
  if(de.length !== en.length) console.log(`  ${id}: de=${de.length} en=${en.length}`);
}
console.log('\n--- Detail-Eintraege ohne desc ---');
for(const id of Object.keys(details)){ if(!details[id].desc) console.log('  '+id); }

fs.writeFileSync('C:/Users/geeje/in-den-himmel/eval/merged.json', JSON.stringify({data,details},null,1));
console.log('\nmerged.json geschrieben.');
