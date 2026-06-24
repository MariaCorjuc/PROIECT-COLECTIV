// @ts-ignore
import React from 'react';

// @ts-ignore
export default function ExpectimaxVisualizer({ pasCurent }) {
  const pas = Number(pasCurent);

  const latime = 1050;
  const inaltime = 460;

  
  const radacina = { id: 'root', x: 525, y: 50, tip: 'MAX', pas: 13, val: '13' };

  const noduriChance = [
    { id: 'c1', x: 200, y: 150, tip: 'CHANCE', pas: 4, val: '10.67' },
    { id: 'c2', x: 525, y: 150, tip: 'CHANCE', pas: 8, val: '13' },
    { id: 'c3', x: 850, y: 150, tip: 'CHANCE', pas: 12, val: '6.33' }
  ];

  const noduriMax = [
    { id: 'm1', parinte: 'c1', x: 90,  y: 260, tip: 'MAX', pas: 1, val: '12', frunze: [3, 12, 8] },
    { id: 'm2', parinte: 'c1', x: 200, y: 260, tip: 'MAX', pas: 2, val: '6',  frunze: [2, 4, 6] },
    { id: 'm3', parinte: 'c1', x: 310, y: 260, tip: 'MAX', pas: 3, val: '14', frunze: [14, 5, 2] },

    { id: 'm4', parinte: 'c2', x: 415, y: 260, tip: 'MAX', pas: 5, val: '21', frunze: [4, 21, 1] },
    { id: 'm5', parinte: 'c2', x: 525, y: 260, tip: 'MAX', pas: 6, val: '12', frunze: [3, 12, 5] },
    { id: 'm6', parinte: 'c2', x: 635, y: 260, tip: 'MAX', pas: 7, val: '6',  frunze: [6, 1, 1] },

    { id: 'm7', parinte: 'c3', x: 740, y: 260, tip: 'MAX', pas: 9, val: '5',  frunze: [2, 3, 5] },
    { id: 'm8', parinte: 'c3', x: 850, y: 260, tip: 'MAX', pas: 10, val: '9',  frunze: [5, 6, 9] },
    { id: 'm9', parinte: 'c3', x: 960, y: 260, tip: 'MAX', pas: 11, val: '5', frunze: [1, 4, 5] }
  ];

  // Mesaje text dinamice ce rulează sincronizat cu pașii din simulare
  let textExplicativ = "Porniți simularea sau apăsați pe 'Pasul următor' pentru a începe parcurgerea.";
  if (pas >= 1 && pas <= 3) {
    const nodCurent = noduriMax[pas - 1];
    textExplicativ = `[Pasul ${pas}] Analizăm grupul de frunze pentru nodul MAX ${pas}: Se selectează valoarea maximă dintre (${nodCurent.frunze.join(', ')}) -> adică ${nodCurent.val}.`;
  } else if (pas === 4) {
    textExplicativ = `[Pasul 4] Calculăm nodul CHANCE 1: Facem media valorilor nodurilor MAX determinate anterior: (12 + 6 + 14) / 3 = 10.67`;
  } else if (pas >= 5 && pas <= 7) {
    const nodCurent = noduriMax[pas - 1];
    textExplicativ = `[Pasul ${pas}] Determinăm valoarea maximă pentru nodul intermediar MAX ${pas}: Maximul dintre (${nodCurent.frunze.join(', ')}) este ${nodCurent.val}.`;
  } else if (pas === 8) {
    textExplicativ = `[Pasul 8] Calculăm nodul CHANCE 2: Facem media nodurilor MAX din mijloc: (21 + 12 + 6) / 3 = 13`;
  } else if (pas >= 9 && pas <= 11) {
    const nodCurent = noduriMax[pas - 1];
    textExplicativ = `[Pasul ${pas}] Analizăm grupul din dreapta pentru nodul MAX ${pas}: Valoarea maximă extrasă este ${nodCurent.val}.`;
  } else if (pas === 12) {
    textExplicativ = `[Pasul 12] Calculăm nodul CHANCE 3: Facem media valorilor din ultimul subarbore: (5 + 9 + 5) / 3 = 6.33`;
  } else if (pas === 13) {
    textExplicativ = `[Pasul 13] Calculăm Rădăcina MAX: Alegem valoarea maximă absolută dintre cele 3 noduri șansă calculate (10.67, 13, 6.33) -> Răspuns final: 13.`;
  }

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* Caseta de text explicativă */}
      <div style={{
        width: '95%',
        background: '#f8fafc',
        border: '1px solid #cbd5e1',
        padding: '14px 18px',
        borderRadius: '8px',
        marginBottom: '20px',
        fontSize: '14.5px',
        color: '#1e293b',
        fontFamily: 'sans-serif',
        boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)'
      }}>
        <strong>{textExplicativ}</strong>
      </div>

      <div style={{ width: '100%', overflowX: 'auto', display: 'flex', justifyContent: 'center' }}>
        <svg width={latime} height={inaltime} style={{ fontFamily: 'sans-serif' }}>
          <defs>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="rgba(0,0,0,0.12)" />
            </filter>
            <filter id="glowRosu" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#ef4444" />
            </filter>
          </defs>

          {/* MUCHII: CHANCE -> MAX INTERMEDIAR */}
          {noduriMax.map(m => {
            const tata = noduriChance.find(c => c.id === m.parinte);
            const esteMuchieActiva = pas === m.pas || (tata && pas === tata.pas);
            const aFostParcursa = pas > m.pas;

            return (
              <line
                // @ts-ignore
                key={`line-${tata.id}-${m.id}`}
                // @ts-ignore
                x1={tata.x} y1={tata.y}
                x2={m.x} y2={m.y}
                stroke={esteMuchieActiva ? '#ef4444' : (aFostParcursa ? '#334155' : '#94a3b8')}
                strokeWidth={esteMuchieActiva ? '4px' : '1.5px'}
              />
            );
          })}

          {/* MUCHII: RĂDĂCINĂ MAX -> CHANCE */}
          {noduriChance.map(c => {
            const esteMuchieActiva = pas === c.pas || pas === 13;
            const aFostParcursa = pas > c.pas;

            return (
              <line
                key={`line-root-${c.id}`}
                x1={radacina.x} y1={radacina.y}
                x2={c.x} y2={c.y}
                stroke={esteMuchieActiva ? '#ef4444' : (aFostParcursa ? '#334155' : '#94a3b8')}
                strokeWidth={esteMuchieActiva ? '4.5px' : '1.8px'}
              />
            );
          })}

          {/* MUCHII: MAX INTERMEDIAR -> FRUNZE */}
          {noduriMax.map(m => 
            m.frunze.map((_, idx) => {
              const xFrunza = m.x + (idx - 1) * 32;
              const esteMuchieActiva = pas === m.pas;
              const aFostParcursa = pas > m.pas;

              return (
                <line
                  key={`line-${m.id}-f-${idx}`}
                  x1={m.x} y1={m.y}
                  x2={xFrunza} y2={400}
                  stroke={esteMuchieActiva ? '#ef4444' : (aFostParcursa ? '#475569' : '#cbd5e1')}
                  strokeWidth={esteMuchieActiva ? '2.5px' : '1px'}
                />
              );
            })
          )}

          {/* FRUNZE VERZI TERMINALE */}
          {noduriMax.map(m => 
            m.frunze.map((val, idx) => {
              const xFrunza = m.x + (idx - 1) * 32;
              const esteFrunzaActiva = pas === m.pas;

              return (
                <g key={`frunza-${m.id}-${idx}`}>
                  <rect
                    x={xFrunza - 13} y={390}
                    width={26} height={22}
                    rx={5}
                    fill={esteFrunzaActiva ? '#ef4444' : '#10b981'}
                    filter="url(#shadow)"
                  />
                  <text x={xFrunza} y={405} fill="#ffffff" fontSize="11px" fontWeight="bold" textAnchor="middle">
                    {val}
                  </text>
                </g>
              );
            })
          )}

          {/* NODURI INTERMEDIARE MAX */}
          {noduriMax.map(m => {
            const esteFocusat = pas === m.pas;
            const aFostCalculat = pas >= m.pas;

            return (
              <g key={m.id} filter={esteFocusat ? 'url(#glowRosu)' : 'url(#shadow)'}>
                <rect
                  x={m.x - 30} y={m.y - 22}
                  width={60} height={44}
                  rx={8}
                  fill="#38bdf8"
                  stroke={esteFocusat ? '#ef4444' : '#0284c7'}
                  strokeWidth={esteFocusat ? '3px' : '1px'}
                />
                <text x={m.x} y={m.y - 6} fill="rgba(255,255,255,0.9)" fontSize="9px" fontWeight="bold" textAnchor="middle">
                  MAX
                </text>
                <text x={m.x} y={m.y + 13} fill="#ffffff" fontSize="14px" fontWeight="800" textAnchor="middle">
                  {aFostCalculat ? m.val : '?'}
                </text>
              </g>
            );
          })}

          {/* NODURI ALBI/PORTOCALII CHANCE */}
          {noduriChance.map(c => {
            const esteFocusat = pas === c.pas;
            const aFostCalculat = pas >= c.pas;

            return (
              <g key={c.id} filter={esteFocusat ? 'url(#glowRosu)' : 'url(#shadow)'}>
                <circle
                  cx={c.x} cy={c.y}
                  r={26}
                  fill="#f59e0b"
                  stroke={esteFocusat ? '#ef4444' : '#d97706'}
                  strokeWidth={esteFocusat ? '3px' : '1px'}
                />
                <text x={c.x} y={c.y - 5} fill="rgba(255,255,255,0.95)" fontSize="8px" fontWeight="900" textAnchor="middle">
                  CHANCE
                </text>
                <text x={c.x} y={c.y + 11} fill="#ffffff" fontSize="12px" fontWeight="800" textAnchor="middle">
                  {aFostCalculat ? c.val : '?'}
                </text>
              </g>
            );
          })}

          {/* RĂDĂCINĂ MAX */}
          {(() => {
            const esteFocusat = pas === radacina.pas;
            const aFostCalculat = pas >= radacina.pas;

            return (
              <g filter={esteFocusat ? 'url(#glowRosu)' : 'url(#shadow)'}>
                <rect
                  x={radacina.x - 45} y={radacina.y - 25}
                  width={90} height={50}
                  rx={10}
                  fill="#0A7E8C"
                  stroke={esteFocusat ? '#ef4444' : '#044e57'}
                  strokeWidth={esteFocusat ? '3px' : '1px'}
                />
                <text x={radacina.x} y={radacina.y - 8} fill="rgba(255,255,255,0.85)" fontSize="9px" fontWeight="bold" textAnchor="middle">
                  MAX (Rădăcină)
                </text>
                <text x={radacina.x} y={radacina.y + 15} fill="#ffffff" fontSize="15px" fontWeight="800" textAnchor="middle">
                  {aFostCalculat ? radacina.val : '?'}
                </text>
              </g>
            );
          })()}
        </svg>
      </div>
    </div>
  );
}