// @ts-ignore
import React, { useState, useEffect } from 'react';

// @ts-ignore
export default function ExpectimaxTester({ idProblema }) {
 
  const configProblema1 = {
    titlu: "Problema 1: Evaluarea unui Arbore Expectimax Clasic",
    cerinta: "Nivelul 0 (Rădăcină) alege valoarea MAXIMĂ. Nivelul 1 (CHANCE) calculează media aritmetică a celor 3 fii direct conectați. Nivelul 2 (MAX) selectează maximul dintre cele 3 frunze de dedesubt. Introduceți valorile calculate cu maxim o cifră după virgulă.",
    inputsInitial: { root: '', c1: '', c2: '', m1: '', m2: '', m3: '', m4: '', m5: '', m6: '' },
    correctAnswers: {
      root: "12.6",
      c1: "10", c2: "12.6",
      m1: "7", m2: "12", m3: "11", m4: "14", m5: "15", m6: "9"
    }
  };

  
  const configProblema2 = {
    titlu: "Problema 2: Arbore Macro-Expectimax Extins pe 4 Niveluri",
    cerinta: "Calculați valorile nodurilor de jos în sus: Nivelul 3 (CHANCE) face media celor 2 frunze verzi. Nivelul 2 (MAX) selectează maximul dintre fiii săi CHANCE. Nivelul 1 (CHANCE) face media celor doi fii MAX ai săi. Rădăcina (MAX) extrage maximul final.",
    inputsInitial: {
      root: '',
      c1: '', c2: '', c3: '',
      m1: '', m2: '', m3: '', m4: '', m5: '', m6: '',
      ch1: '', ch2: '', ch3: '', ch4: '', ch5: '', ch6: '', ch7: '', ch8: '', ch9: '', ch10: '', ch11: '', ch12: ''
    },
    correctAnswers: {
      root: "13.5",
      c1: "12.5", c2: "13.5", c3: "11.5",
      m1: "9", m2: "16", m3: "15", m4: "12", m5: "10", m6: "13",
      ch1: "9", ch2: "6", ch3: "16", ch4: "7", ch5: "7", ch6: "15", ch7: "12", ch8: "10", ch9: "10", ch10: "6", ch11: "13", ch12: "10"
    },
    leafValues: [6, 12, 8, 4, 14, 18, 5, 9, 11, 3, 20, 10, 16, 8, 7, 13, 15, 5, 2, 10, 12, 14, 9, 11]
  };

  const dateCurente = idProblema === 2 ? configProblema2 : configProblema1;
  const [inputs, setInputs] = useState(dateCurente.inputsInitial);
  const [status, setStatus] = useState({ checked: false, success: false, message: '' });

  useEffect(() => {
    setInputs(dateCurente.inputsInitial);
    setStatus({ checked: false, success: false, message: '' });
  }, [idProblema]);

  // @ts-ignore
  const handleInputChange = (field, val) => {
    setInputs(prev => ({ ...prev, [field]: val }));
  };

  const verifyAnswers = () => {
    let isCorrect = true;
    Object.keys(dateCurente.correctAnswers).forEach(key => {
      // @ts-ignore
      if (!inputs[key] || inputs[key].trim() !== dateCurente.correctAnswers[key]) {
        isCorrect = false;
      }
    });

    if (isCorrect) {
      setStatus({ checked: true, success: true, message: `Felicitări! Toate calculele pentru structura Problemei ${idProblema} sunt complet corecte.` });
    } else {
      setStatus({ checked: true, success: false, message: 'Răspuns greșit în una sau mai multe casete. Verifică cu atenție mediile zecimale ale nodurilor CHANCE!' });
    }
  };

  //aliniere
  const latimeGraf1 = 1000;
  const latimeGraf2 = 1400; 
  return (
    <div style={{ backgroundColor: '#ffffff', padding: '25px', borderRadius: '16px', fontFamily: 'system-ui, -apple-system, sans-serif', boxShadow: '0 10px 25px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0' }}>
      
      {/* Header Info */}
      <div style={{ marginBottom: '25px', paddingBottom: '15px', borderBottom: '1px solid #f1f5f9' }}>
        <h2 style={{ color: '#0A7E8C', margin: '0 0 8px 0', fontSize: '22px', fontWeight: '700' }}>{dateCurente.titlu}</h2>
        <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{dateCurente.cerinta}</p>
      </div>

     
      <div style={{ width: '100%', overflowX: 'auto', paddingBottom: '15px', borderRadius: '8px', backgroundColor: '#fafafa', border: '1px solid #f1f5f9' }}>
        
        {idProblema === 1 ? (
          /*arbore probl 1*/
          <div style={{ width: `${latimeGraf1}px`, height: '420px', position: 'relative', margin: '0 auto' }}>
            <svg style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, pointerEvents: 'none' }}>
              {/* Linii Rădăcină -> 2 CHANCE */}
              <line x1={500} y1={40} x2={250} y2={135} stroke="#0A7E8C" strokeWidth="2.5" strokeDasharray="1 0" opacity="0.6"/>
              <line x1={500} y1={40} x2={750} y2={135} stroke="#0A7E8C" strokeWidth="2.5" opacity="0.6"/>
              
              
              {[100, 250, 400].map(x => <line key={x} x1={250} y1={135} x2={x} y2={245} stroke="#cbd5e1" strokeWidth="2" />)}
              {[600, 750, 900].map(x => <line key={x} x1={750} y1={135} x2={x} y2={245} stroke="#cbd5e1" strokeWidth="2" />)}

             
              {[
                { parent: 100, children: [35, 100, 165] },
                { parent: 250, children: [200, 250, 300] },
                { parent: 400, children: [345, 400, 455] },
                { parent: 600, children: [545, 600, 655] },
                { parent: 750, children: [700, 750, 800] },
                { parent: 900, children: [835, 900, 965] }
              ].map(group => group.children.map((cx, i) => (
                <line key={i} x1={group.parent} y1={245} x2={cx} y2={355} stroke="#e2e8f0" strokeWidth="1.5" />
              )))}
            </svg>

            
            {/* Nivel 0: Rădăcină */}
            <div style={{ position: 'absolute', top: '15px', left: '500px', transform: 'translateX(-50%)', zIndex: 10 }}>
              <div style={{ backgroundColor: '#0A7E8C', color: 'white', padding: '6px 14px', borderRadius: '8px', textAlign: 'center', width: '80px', boxShadow: '0 4px 10px rgba(10,126,140,0.25)' }}>
                <span style={{ fontSize: '10px', fontWeight: '800', display: 'block', marginBottom: '2px' }}>MAX</span>
                <input type="text" value={inputs.root || ''} onChange={(e) => handleInputChange('root', e.target.value)} style={{ width: '50px', textAlign: 'center', border: 'none', borderRadius: '4px', fontWeight: 'bold', outline: 'none' }} placeholder="?" />
              </div>
            </div>

            {/* Nivel 1: 2 Noduri CHANCE */}
            {[{ x: 250, id: 'c1' }, { x: 750, id: 'c2' }].map(node => (
              <div key={node.id} style={{ position: 'absolute', top: '105px', left: `${node.x}px`, transform: 'translateX(-50%)', zIndex: 10 }}>
                <div style={{ backgroundColor: '#f59e0b', color: 'white', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 10px rgba(245,158,11,0.25)' }}>
                  <span style={{ fontSize: '9px', fontWeight: '800' }}>CHANCE</span>
                  <input type="text" value={
// @ts-ignore
                  inputs[node.id] || ''} onChange={(e) => handleInputChange(node.id, e.target.value)} style={{ width: '36px', textAlign: 'center', border: 'none', borderRadius: '4px', fontSize: '12px', marginTop: '2px', fontWeight: 'bold' }} placeholder="?" />
                </div>
              </div>
            ))}

            {/* Nivel 2: 6 Noduri MAX */}
            {[100, 250, 400, 600, 750, 900].map((x, idx) => {
              const id = `m${idx + 1}`;
              return (
                <div key={id} style={{ position: 'absolute', top: '220px', left: `${x}px`, transform: 'translateX(-50%)', zIndex: 10 }}>
                  <div style={{ backgroundColor: '#0ea5e9', color: 'white', padding: '5px 10px', borderRadius: '6px', textAlign: 'center', width: '60px', boxShadow: '0 3px 8px rgba(14,165,233,0.2)' }}>
                    <span style={{ fontSize: '9px', fontWeight: '800', display: 'block' }}>MAX</span>
                    <input type="text" value={
// @ts-ignore
                    inputs[id] || ''} onChange={(e) => handleInputChange(id, e.target.value)} style={{ width: '40px', textAlign: 'center', border: 'none', borderRadius: '3px', fontSize: '11px', marginTop: '2px' }} placeholder="?" />
                  </div>
                </div>
              );
            })}

            {/* Nivel 3: Frunze Terminale */}
            <div style={{ position: 'absolute', top: '350px', width: '100%', left: 0, pointerEvents: 'none' }}>
              {[7, 3, 5, 12, 8, 10, 4, 9, 11, 6, 14, 2, 1, 15, 5, 8, 3, 9].map((val, idx) => {
                const listX = [35, 100, 165, 200, 250, 300, 345, 400, 455, 545, 600, 655, 700, 750, 800, 835, 900, 965];
                return (
                  <div key={idx} style={{ position: 'absolute', left: `${listX[idx]}px`, transform: 'translateX(-50%)', backgroundColor: '#10b981', color: 'white', minWidth: '32px', height: '24px', lineHeight: '24px', textAlign: 'center', borderRadius: '5px', fontWeight: '700', fontSize: '12px', boxShadow: '0 2px 5px rgba(16,185,129,0.25)' }}>
                    {val}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /*arbore problema 2 */
          <div style={{ width: `${latimeGraf2}px`, height: '530px', position: 'relative', margin: '0 auto' }}>
            <svg style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, pointerEvents: 'none' }}>
              {/* Nivel 0 -> Nivel 1 (1 linie spre cele 3 CHANCE mari) */}
              {[230, 700, 1170].map(x => <line key={x} x1={700} y1={35} x2={x} y2={110} stroke="#0A7E8C" strokeWidth="2.5" opacity="0.7"/>)}

              {/* Nivel 1 -> Nivel 2 (Fiecare din cele 3 dă naștere la câte 2 noduri MAX) */}
              <line x1={230} y1={110} x2={115} y2={200} stroke="#cbd5e1" strokeWidth="2" />
              <line x1={230} y1={110} x2={345} y2={200} stroke="#cbd5e1" strokeWidth="2" />
              <line x1={700} y1={110} x2={585} y2={200} stroke="#cbd5e1" strokeWidth="2" />
              <line x1={700} y1={110} x2={815} y2={200} stroke="#cbd5e1" strokeWidth="2" />
              <line x1={1170} y1={110} x2={1055} y2={200} stroke="#cbd5e1" strokeWidth="2" />
              <line x1={1170} y1={110} x2={1285} y2={200} stroke="#cbd5e1" strokeWidth="2" />

              {/* Nivel 2 -> Nivel 3 (Fiecare MAX se ramifică spre câte 2 CHANCE mici) */}
              {[
                { p: 115, c: [60, 170] }, { p: 345, c: [290, 400] },
                { p: 585, c: [530, 640] }, { p: 815, c: [760, 870] },
                { p: 1055, c: [1000, 1110] }, { p: 1285, c: [1230, 1340] }
              ].map(grp => grp.c.map(cx => <line key={cx} x1={grp.p} y1={200} x2={cx} y2={305} stroke="#94a3b8" strokeWidth="1.5" />))}

              {/* Nivel 3 -> Nivel 4 (Fiecare CHANCE are 2 frunze verzi) */}
              {[60, 170, 290, 400, 530, 640, 760, 870, 1000, 1110, 1230, 1340].map((chX, i) => (
                <g key={i}>
                  <line x1={chX} y1={305} x2={chX - 22} y2={440} stroke="#e2e8f0" strokeWidth="1.2" />
                  <line x1={chX} y1={305} x2={chX + 22} y2={440} stroke="#e2e8f0" strokeWidth="1.2" />
                </g>
              ))}
            </svg>

            {/* Randare Noduri Fizice */}
            {/* Nivel 0 - Rădăcină */}
            <div style={{ position: 'absolute', top: '15px', left: '700px', transform: 'translateX(-50%)', zIndex: 20 }}>
              <div style={{ backgroundColor: '#0A7E8C', color: 'white', padding: '6px 14px', borderRadius: '8px', textAlign: 'center', width: '85px', boxShadow: '0 4px 12px rgba(10,126,140,0.3)' }}>
                <span style={{ fontSize: '10px', fontWeight: '800', display: 'block' }}>MAX (Rădăcină)</span>
                <input type="text" value={inputs.root || ''} onChange={(e) => handleInputChange('root', e.target.value)} style={{ width: '50px', textAlign: 'center', border: 'none', borderRadius: '4px', fontWeight: '700', marginTop: '3px' }} placeholder="?" />
              </div>
            </div>

            {/* Nivel 1 - Cele 3 CHANCE mari */}
            {[230, 700, 1170].map((x, idx) => {
              const id = `c${idx + 1}`;
              return (
                <div key={id} style={{ position: 'absolute', top: '80px', left: `${x}px`, transform: 'translateX(-50%)', zIndex: 20 }}>
                  <div style={{ backgroundColor: '#f59e0b', color: 'white', width: '56px', height: '56px', borderRadius: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 10px rgba(245,158,11,0.25)' }}>
                    <span style={{ fontSize: '8px', fontWeight: '900' }}>CHANCE</span>
                    <input type="text" value={
// @ts-ignore
                    inputs[id] || ''} onChange={(e) => handleInputChange(id, e.target.value)} style={{ width: '34px', textAlign: 'center', border: 'none', borderRadius: '3px', fontSize: '11px', marginTop: '1px', fontWeight: 'bold' }} placeholder="?" />
                  </div>
                </div>
              );
            })}

            {/* Nivel 2 - Cele 6 Noduri MAX Intermediare */}
            {[115, 345, 585, 815, 1055, 1285].map((x, idx) => {
              const id = `m${idx + 1}`;
              return (
                <div key={id} style={{ position: 'absolute', top: '175px', left: `${x}px`, transform: 'translateX(-50%)', zIndex: 20 }}>
                  <div style={{ backgroundColor: '#0ea5e9', color: 'white', padding: '5px 8px', borderRadius: '6px', textAlign: 'center', width: '50px', boxShadow: '0 3px 8px rgba(14,165,233,0.2)' }}>
                    <span style={{ fontSize: '9px', fontWeight: '800', display: 'block' }}>MAX</span>
                    <input type="text" value={
// @ts-ignore
                    inputs[id] || ''} onChange={(e) => handleInputChange(id, e.target.value)} style={{ width: '36px', textAlign: 'center', border: 'none', borderRadius: '3px', fontSize: '11px', marginTop: '1px' }} placeholder="?" />
                  </div>
                </div>
              );
            })}

            {/* Nivel 3 - Cele 12 Noduri CHANCE inferioare */}
            {[60, 170, 290, 400, 530, 640, 760, 870, 1000, 1110, 1230, 1340].map((x, idx) => {
              const id = `ch${idx + 1}`;
              return (
                <div key={id} style={{ position: 'absolute', top: '280px', left: `${x}px`, transform: 'translateX(-50%)', zIndex: 20 }}>
                  <div style={{ backgroundColor: '#eab308', color: 'white', width: '46px', height: '46px', borderRadius: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', boxShadow: '0 2px 6px rgba(234,179,8,0.2)' }}>
                    <span style={{ fontSize: '8px', fontWeight: '700' }}>CHANCE</span>
                    <input type="text" value={
// @ts-ignore
                    inputs[id] || ''} onChange={(e) => handleInputChange(id, e.target.value)} style={{ width: '30px', textAlign: 'center', border: 'none', borderRadius: '3px', fontSize: '10px', marginTop: '1px' }} placeholder="?" />
                  </div>
                </div>
              );
            })}

            {/* Nivel 4 - Cele 24 Frunze Terminale Verzi */}
            <div style={{ position: 'absolute', top: '440px', width: '100%', left: 0 }}>
              {configProblema2.leafValues.map((val, idx) => {
                // Generare automată coordonată x exact sub linii
                const parentIdx = Math.floor(idx / 2);
                const parentX = [60, 170, 290, 400, 530, 640, 760, 870, 1000, 1110, 1230, 1340][parentIdx];
                const finalX = idx % 2 === 0 ? parentX - 22 : parentX + 22;

                return (
                  <div key={idx} style={{ position: 'absolute', left: `${finalX}px`, transform: 'translateX(-50%)', backgroundColor: '#10b981', color: 'white', width: '28px', height: '24px', lineHeight: '24px', textAlign: 'center', borderRadius: '4px', fontWeight: 'bold', fontSize: '11px', boxShadow: '0 2px 4px rgba(16,185,129,0.15)' }}>
                    {val}
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>

      {/* Control Bar */}
      <div style={{ borderTop: '1px solid #f1f5f9', marginTop: '20px', paddingTop: '20px', display: 'flex', gap: '12px', alignItems: 'center' }}>
        <button onClick={verifyAnswers} style={{ backgroundColor: '#0A7E8C', color: 'white', fontWeight: '700', border: 'none', padding: '11px 24px', borderRadius: '8px', cursor: 'pointer', fontSize: '14px', transition: 'background 0.2s' }} onMouseEnter={(e) => e.target.
// @ts-ignore
        style.backgroundColor = '#086672'} onMouseLeave={(e) => e.target.style.backgroundColor = '#0A7E8C'}>
          Verifică Rezultat
        </button>
        <button onClick={() => setInputs(dateCurente.inputsInitial)} style={{ backgroundColor: '#f1f5f9', color: '#64748b', fontWeight: '600', border: '1px solid #cbd5e1', padding: '11px 18px', borderRadius: '8px', cursor: 'pointer', fontSize: '14px' }}>
          Resetează Graf
        </button>

        {status.checked && (
          <div style={{ padding: '10px 18px', borderRadius: '8px', backgroundColor: status.success ? '#f0fdf4' : '#fef2f2', color: status.success ? '#15803d' : '#b91c1c', fontWeight: '600', fontSize: '13px', border: `1px solid ${status.success ? '#bbf7d0' : '#fecaca'}`, marginLeft: 'auto' }}>
            {status.message}
          </div>
        )}
      </div>

    </div>
  );
}