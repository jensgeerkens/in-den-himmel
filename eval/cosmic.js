const fs = require('fs');
const {data, details} = JSON.parse(fs.readFileSync('C:/Users/geeje/in-den-himmel/eval/merged.json','utf8'));
const LY = 9.4607e15, AU = 1.496e11, PC = 3.0857e16;
const byId={}; data.forEach(o=>byId[o.id]=o);

// Liste aller Objekte mit altitude_m >= 1 AU, zeige alt in Lj und AU + Distanz-Zeilen aus groups
function distRows(id){
  const d = details[id]; if(!d) return [];
  let out=[];
  (d.groups||[]).forEach(g=>{(g.rows||[]).forEach(r=>{
    const lbl=(r.label&&r.label.de||'')+'';
    if(/entfernung|distanz|distance|abstand|durchmesser|diameter|größe|size|reichweite|umfang|länge|breite|ausdehnung|radius/i.test(lbl)){
      out.push(lbl+': '+(r.value&&r.value.de||''));
    }
  })});
  return out;
}
for(const o of data){
  if(o.altitude_m < AU*0.9) continue;
  const ly = o.altitude_m/LY, au=o.altitude_m/AU, pc=o.altitude_m/PC;
  let altStr;
  if(ly>=0.1) altStr = ly.toPrecision(4)+' Lj';
  else if(au>=0.01) altStr = au.toPrecision(4)+' AE';
  else altStr = (o.altitude_m/1e9).toPrecision(4)+' Mio.km';
  console.log(`\n[${o.cat}] ${o.id} | alt=${altStr}`);
  console.log('   fact.de: '+(o.fact&&o.fact.de||'').slice(0,160));
  const dr=distRows(o.id);
  if(dr.length) dr.forEach(x=>console.log('   • '+x));
}
