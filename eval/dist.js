/* Entfernungs-Konsistenz: vergleiche altitude_m mit im Detail/fact genannten Lj/AE/km */
const fs = require('fs');
const {data, details} = JSON.parse(fs.readFileSync('C:/Users/geeje/in-den-himmel/eval/merged.json','utf8'));
const LY = 9.4607e15, AU = 1.496e11, KM = 1000, PC = 3.0857e16;

const byId = {}; data.forEach(o=>byId[o.id]=o);

// Sammle allen Text eines Objekts (fact + desc + group values/labels)
function allText(id){
  const o = byId[id], d = details[id];
  let t = [];
  if(o.fact){ t.push(o.fact.de||''); t.push(o.fact.en||''); }
  if(o.note) t.push(o.note);
  if(d){
    if(d.desc){ (d.desc.de||[]).forEach(p=>t.push(p)); (d.desc.en||[]).forEach(p=>t.push(p)); }
    (d.groups||[]).forEach(g=>{
      (g.rows||[]).forEach(r=>{
        if(r.value){ t.push(r.value.de||''); t.push(r.value.en||''); }
        if(r.label){ t.push((r.label.de||'')+''); }
      });
    });
  }
  return t.join(' || ');
}

// parse Zahl mit DE/EN Format + Multiplikator-Wort
function num(s){
  s = s.replace(/\s/g,'').replace(/[’']/g,'');
  // DE: 1.234,5 ; EN: 1,234.5
  if(/,\d{1,3}$|,\d+$/.test(s) && /\./.test(s) && s.indexOf('.')<s.indexOf(',')){
    s = s.replace(/\./g,'').replace(',','.'); // DE
  } else if(/,/.test(s) && /\./.test(s)){
    s = s.replace(/,/g,''); // EN thousand
  } else if(/,/.test(s)){
    // entweder DE-Dezimal oder EN-Tausender
    if(/,\d{3}$/.test(s) && !/,\d{1,2}$/.test(s)) s=s.replace(/,/g,'');
    else s = s.replace(',','.');
  }
  return parseFloat(s);
}

const MULT = {
  'tausend':1e3,'thousand':1e3,
  'million':1e6,'millionen':1e6,'mio':1e6,'mio.':1e6,'mill':1e6,'million.':1e6,
  'milliarde':1e9,'milliarden':1e9,'mrd':1e9,'mrd.':1e9,'billion':1e9, // EN billion = 1e9
  'billionen':1e12,'billion.':1e12,'trillion':1e12,'bn':1e9
};

// Regex: Zahl + optional Mult-Wort + Einheit (Lj/Lichtjahr/light-year/AE/AU/km/pc/Parsec)
const re = /([\d.,]+)\s*(milliarden|milliarde|millionen|million|mrd\.?|mio\.?|billionen|billion|trillion|tausend|thousand|bn)?\s*(lichtjahre?|lj|light-?years?|ly|astronomische einheiten|ae|au|parsec|pc|kilometer|km)\b/gi;

function toMeters(valNum, multWord, unit){
  let m = valNum;
  if(multWord){ const mm = MULT[multWord.toLowerCase().replace(/\./,'')] || MULT[multWord.toLowerCase()]; if(mm) m*=mm; }
  unit = unit.toLowerCase();
  if(/lichtjahr|lj|light|ly/.test(unit)) return m*LY;
  if(/ae|au|astronom/.test(unit)) return m*AU;
  if(/parsec|pc/.test(unit)) return m*PC;
  if(/km|kilom/.test(unit)) return m*KM;
  return null;
}

console.log('id | altitude_m | gefundene Distanzen (Text->Meter) | Abweichung');
const flags = [];
for(const o of data){
  if(o.altitude_m < 1e9) continue; // nur kosmische (>~6 AU) interessant fuer Lj/AU-Check
  const txt = allText(o.id);
  let m, found=[];
  re.lastIndex=0;
  while((m=re.exec(txt))){
    const v = num(m[1]);
    if(isNaN(v)) continue;
    const meters = toMeters(v, m[2], m[3]);
    if(meters==null) continue;
    found.push({raw:m[0].trim(), meters, unit:m[3]});
  }
  if(!found.length) continue;
  // bester Match: der naechste zu altitude_m
  const alt = o.altitude_m;
  let best = found.reduce((a,b)=> Math.abs(Math.log10(b.meters/alt)) < Math.abs(Math.log10(a.meters/alt)) ? b : a);
  const ratio = best.meters/alt;
  if(ratio > 1.5 || ratio < 0.66){
    flags.push({id:o.id, alt, altLy:(alt/LY).toPrecision(4), best:best.raw, bestM:best.meters, ratio:ratio.toPrecision(3),
      all:found.map(f=>f.raw)});
  }
}
console.log('\n=== AUFFÄLLIGE ABWEICHUNGEN (Faktor >1.5 oder <0.66) ===');
flags.sort((a,b)=>Math.abs(Math.log10(b.ratio))-Math.abs(Math.log10(a.ratio)));
flags.forEach(f=>{
  console.log(`\n${f.id}: alt=${f.alt} m (=${f.altLy} Lj) | bester Text="${f.best}" -> ${f.bestM.toExponential(3)} m | ratio=${f.ratio}`);
  console.log(`   alle: ${f.all.join(' ; ')}`);
});
console.log('\nTotal Flags:', flags.length);
