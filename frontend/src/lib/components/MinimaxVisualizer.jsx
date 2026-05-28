import React, { useState, useEffect, useRef } from 'react';
import ReactFlow, {
  Background,
  Controls,
  Handle,
  Position,
  useReactFlow,
  ReactFlowProvider,
} from 'reactflow';

import 'reactflow/dist/style.css';

// =======================================================
// ANIMAȚIE PULSE (STIL MODERN RUSSELL & NORVIG)
// =======================================================
const style = document.createElement('style');
style.innerHTML = `
@keyframes pulseMinimax {
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(10, 126, 140, 0.4); }
  50% { transform: scale(1.06); box-shadow: 0 0 0 10px rgba(10, 126, 140, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(10, 126, 140, 0); }
}
`;
document.head.appendChild(style);

// =======================================================
// DESIGN ȘI STILURI REUTILIZABILE
// =======================================================
/** @type {import('react').CSSProperties} */
const nodeContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: 'sans-serif',
};

/**
 * @param {string} nodeType - 'MAX' | 'MIN' | 'LEAF'
 * @param {boolean} isActive - dacă nodul face parte din drumul calculat la pasul respectiv
 * @param {boolean} isCurrent - dacă nodul este cel evaluat curent
 * @returns {React.CSSProperties}
 */
const nodeShapeStyle = (nodeType, isActive, isCurrent) => {
  const isLeaf = nodeType === 'LEAF';
  
  return {
    padding: isLeaf ? '4px 10px' : '8px 16px',
    borderRadius: isLeaf ? '6px' : (nodeType === 'MAX' ? '4px' : '16px'), // MAX pătrat/triunghiular, MIN rotunjit
    backgroundColor: isActive ? '#0A7E8C' : '#ffffff',
    border: isCurrent ? '2.5px solid #064e57' : (isActive ? '2px solid #0A7E8C' : '1.5px solid #1a2426'),
    color: isActive ? '#ffffff' : '#000000',
    fontWeight: 'bold',
    fontSize: isLeaf ? '11px' : '13px',
    textAlign: 'center',
    minWidth: isLeaf ? '30px' : '75px',
    position: 'relative',
    boxShadow: isActive ? '0 6px 14px rgba(10,126,140,0.3)' : '0 2px 6px rgba(0,0,0,0.08)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: isCurrent ? 'scale(1.08)' : 'scale(1)',
    animation: isCurrent ? 'pulseMinimax 1.6s infinite' : 'none',
  };
};

/** @param {{ data: { label: string; info: string; nodeType: string; isActive: boolean; isCurrent: boolean } }} props */
const MinimaxNode = ({ data }) => (
  <div style={nodeContainerStyle}>
    {data.nodeType !== 'ROOT' && (
      <Handle type="target" position={Position.Top} style={{ background: '#1a2426', width: 5, height: 5 }} />
    )}
    <div style={nodeShapeStyle(data.nodeType, data.isActive, data.isCurrent)}>
      {data.label}
    </div>
    {data.info && (
      <div style={{ fontSize: '10px', marginTop: '3px', fontWeight: '600', color: data.isActive ? '#0A7E8C' : '#666' }}>
        {data.info}
      </div>
    )}
    {data.nodeType !== 'LEAF' && (
      <Handle type="source" position={Position.Bottom} style={{ background: '#1a2426', width: 5, height: 5 }} />
    )}
  </div>
);

const nodeTypes = { minimaxNode: MinimaxNode };

// =======================================================
// GENERARE AUTOMATĂ COORDONATE ȘI STRUCTURĂ ARBORE
// =======================================================
const valoriFrunze = [3, 12, 8, 2, 4, 6, 14, 5, 2, 4, 21, 1, 3, 12, 5, 6, 1, 1, 2, 3, 5, 5, 6, 9, 1, 4, 5];

const genereazăArboreMinimax = (activeNodeIds = [], currentNodeId = "", valoriNoduri = {}) => {
  const nodes = [];
  const edges = [];

  // 1. Rădăcină (Nivel 0 - MAX)
  const valRădăcină = valoriNoduri['R'] !== undefined ? ` [${valoriNoduri['R']}]` : '';
  nodes.push({
    id: 'R',
    type: 'minimaxNode',
    position: { x: 1300, y: 10 },
    data: { label: `R (MAX)${valRădăcină}`, info: 'Rădăcină', nodeType: 'MAX', isActive: activeNodeIds.includes('R'), isCurrent: currentNodeId === 'R' }
  });

  // 2. Nivel 1 (MIN) - 3 noduri
  for (let i = 0; i < 3; i++) {
    const idN1 = `N1_${i}`;
    const etichetăN1 = i === 0 ? 'A' : (i === 1 ? 'B' : 'C');
    const valN1 = valoriNoduri[idN1] !== undefined ? ` [${valoriNoduri[idN1]}]` : '';
    
    nodes.push({
      id: idN1,
      type: 'minimaxNode',
      position: { x: 400 + i * 900, y: 140 },
      data: { label: `${etichetăN1} (MIN)${valN1}`, info: '', nodeType: 'MIN', isActive: activeNodeIds.includes(idN1), isCurrent: currentNodeId === idN1 }
    });

    edges.push({
      id: `e_R_${idN1}`,
      source: 'R',
      target: idN1,
      type: 'smoothstep',
      animated: activeNodeIds.includes(idN1),
      style: { stroke: activeNodeIds.includes(idN1) ? '#0A7E8C' : '#b5b5b5', strokeWidth: activeNodeIds.includes(idN1) ? 3 : 1.5 }
    });

    // 3. Nivel 2 (MAX) - 9 noduri
    for (let j = 0; j < 3; j++) {
      const idN2 = `N2_${i}_${j}`;
      const etichetăN2 = `${etichetăN1}${j + 1}`;
      const valN2 = valoriNoduri[idN2] !== undefined ? ` [${valoriNoduri[idN2]}]` : '';

      nodes.push({
        id: idN2,
        type: 'minimaxNode',
        position: { x: 120 + i * 900 + j * 280, y: 280 },
        data: { label: `${etichetăN2} (MAX)${valN2}`, info: '', nodeType: 'MAX', isActive: activeNodeIds.includes(idN2), isCurrent: currentNodeId === idN2 }
      });

      edges.push({
        id: `e_${idN1}_${idN2}`,
        source: idN1,
        target: idN2,
        type: 'smoothstep',
        animated: activeNodeIds.includes(idN2),
        style: { stroke: activeNodeIds.includes(idN2) ? '#0A7E8C' : '#b5b5b5', strokeWidth: activeNodeIds.includes(idN2) ? 3 : 1.5 }
      });

      // 4. Nivel 3 (Frunze) - 27 noduri
      for (let k = 0; k < 3; k++) {
        const indexFrunză = i * 9 + j * 3 + k;
        const idFrunză = `L_${indexFrunză}`;
        const valFrunză = valoriFrunze[indexFrunză];

        nodes.push({
          id: idFrunză,
          type: 'minimaxNode',
          position: { x: 30 + i * 900 + j * 280 + k * 80, y: 420 },
          data: { label: `${valFrunză}`, info: '', nodeType: 'LEAF', isActive: activeNodeIds.includes(idFrunză), isCurrent: currentNodeId === idFrunză }
        });

        edges.push({
          id: `e_${idN2}_${idFrunză}`,
          source: idN2,
          target: idFrunză,
          type: 'smoothstep',
          animated: activeNodeIds.includes(idFrunză),
          style: { stroke: activeNodeIds.includes(idFrunză) ? '#0A7E8C' : '#b5b5b5', strokeWidth: activeNodeIds.includes(idFrunză) ? 2 : 1.2 }
        });
      }
    }
  }

  return { nodes, edges };
};

// =======================================================
// PAȘII DE SIMULARE AI ALGORITMULUI MINIMAX
// =======================================================
const pașiAlgoritm = [
  {
    titlu: "(a) Starea Inițială: Se generează arborele complet de joc. Algoritmul începe explorarea de la rădăcină în jos.",
    ...genereazăArboreMinimax([], 'R', {})
  },
  {
    titlu: "(b) Evaluare Subarbore A1: MAX alege maximul dintre copiii săi (3, 12, 8) -> Nodul A1 devine 12.",
    ...genereazăArboreMinimax(['N2_0_0', 'L_1'], 'N2_0_0', { 'N2_0_0': 12 })
  },
  {
    titlu: "(c) Evaluare Subarbore A2 și A3: A2 selectează max(2, 4, 6) = 6. A3 selectează max(14, 5, 2) = 14.",
    ...genereazăArboreMinimax(['N2_0_0', 'N2_0_1', 'N2_0_2'], 'N2_0_2', { 'N2_0_0': 12, 'N2_0_1': 6, 'N2_0_2': 14 })
  },
  {
    titlu: "(d) Propagare la Nivelul MIN (Nodul A): MIN alege minimul dintre opțiunile lui MAX: min(12, 6, 14) -> A devine 6.",
    ...genereazăArboreMinimax(['N1_0', 'N2_0_1'], 'N1_0', { 'N2_0_0': 12, 'N2_0_1': 6, 'N2_0_2': 14, 'N1_0': 6 })
  },
  {
    titlu: "(e) Evaluare Subarbore B: Se calculează valorile pentru B1=21, B2=12, B3=2. Nodul B (MIN) alege min(21, 12, 2) -> B devine 2.",
    ...genereazăArboreMinimax(['N1_0', 'N1_1', 'N2_1_2'], 'N1_1', { 
      'N2_0_0': 12, 'N2_0_1': 6, 'N2_0_2': 14, 'N1_0': 6,
      'N2_1_0': 21, 'N2_1_1': 12, 'N2_1_2': 2, 'N1_1': 2 
    })
  },
  {
    titlu: "(f) Evaluare Subarbore C: Se calculează valorile pentru C1=5, C2=9, C3=5. Nodul C (MIN) alege min(5, 9, 5) -> C devine 5.",
    ...genereazăArboreMinimax(['N1_0', 'N1_1', 'N1_2', 'N2_2_0'], 'N1_2', { 
      'N2_0_0': 12, 'N2_0_1': 6, 'N2_0_2': 14, 'N1_0': 6,
      'N2_1_0': 21, 'N2_1_1': 12, 'N2_1_2': 2, 'N1_1': 2,
      'N2_2_0': 5, 'N2_2_1': 9, 'N2_2_2': 5, 'N1_2': 5 
    })
  },
  {
    titlu: "Decizie Finală Rădăcină (MAX): Alege valoarea maximă dintre ramurile MIN: max(A:6, B:2, C:5) -> Rădăcina alege 6. Drumul optim: R -> A -> A2.",
    ...genereazăArboreMinimax(['R', 'N1_0', 'N2_0_1'], 'R', { 
      'N2_0_0': 12, 'N2_0_1': 6, 'N2_0_2': 14, 'N1_0': 6,
      'N2_1_0': 21, 'N2_1_1': 12, 'N2_1_2': 2, 'N1_1': 2,
      'N2_2_0': 5, 'N2_2_1': 9, 'N2_2_2': 5, 'N1_2': 5,
      'R': 6
    })
  }
];

// =======================================================
// COMPONENTA INTERNĂ CU LOGICĂ DE FULLSCREEN
// =======================================================
function MinimaxVisualizerInner() {
  const [pasCurent, setPasCurent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  /** @type {React.RefObject<HTMLDivElement | null>} */
  const containerRef = useRef(null);
  const { fitView } = useReactFlow();

  const stareaCurenta = pașiAlgoritm[pasCurent];

  useEffect(() => {
    const timer = setTimeout(() => {
      fitView({ padding: isFullscreen ? 0.2 : 0.4, duration: 400 });
    }, 100);
    return () => clearTimeout(timer);
  }, [pasCurent, fitView, isFullscreen]);

  useEffect(() => {
    const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    const element = containerRef.current;
    if (!element) return;
    if (!document.fullscreenElement) {
      element.requestFullscreen().catch((err) => {
        console.error(`Eroare Fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: isFullscreen ? '100vh' : '650px',
        background: '#fafafa',
        borderRadius: isFullscreen ? '0' : '18px',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: isFullscreen ? 'none' : '0 10px 30px rgba(0,0,0,0.08)',
        border: isFullscreen ? 'none' : '1px solid rgba(0,0,0,0.1)',
      }}
    >
      {/* Bara de control */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          background: 'rgba(255, 255, 255, 0.92)',
          padding: '12px 24px',
          borderRadius: '12px',
          boxShadow: '0 4px 18px rgba(0,0,0,0.1)',
          backdropFilter: 'blur(6px)',
          minWidth: '800px',
          justifyContent: 'center'
        }}
      >
        <button
          onClick={() => setPasCurent(p => Math.max(0, p - 1))}
          disabled={pasCurent === 0}
          style={btnStyle(pasCurent === 0)}
        >
          Înapoi
        </button>

        <div style={{ fontWeight: 'bold', fontSize: '13.5px', textAlign: 'center', flex: 1, color: '#1a2426', fontFamily: 'sans-serif', lineHeight: '1.4' }}>
          {stareaCurenta.titlu}
        </div>

        <button
          onClick={() => setPasCurent(p => Math.min(pașiAlgoritm.length - 1, p + 1))}
          disabled={pasCurent === pașiAlgoritm.length - 1}
          style={btnStyle(pasCurent === pașiAlgoritm.length - 1)}
        >
          Înainte
        </button>

        <button onClick={toggleFullscreen} style={fsBtnStyle}>
          {isFullscreen ? 'Ieșire ↙' : 'Fullscreen ↗'}
        </button>
      </div>

      <ReactFlow
        nodes={stareaCurenta.nodes}
        edges={stareaCurenta.edges}
        nodeTypes={nodeTypes}
        fitView
        minZoom={0.01}
        maxZoom={1.2}
        nodesDraggable={false}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#e2e8f0" gap={20} size={1} />
        <Controls />
      </ReactFlow>
    </div>
  );
}

// =======================================================
// EXPORT FINAL CU PROVIDER
// =======================================================
export default function MinimaxVisualizer() {
  return (
    <ReactFlowProvider>
      <MinimaxVisualizerInner />
    </ReactFlowProvider>
  );
}

/**
 * @param {boolean} d - Disabled status
 * @returns {React.CSSProperties}
 */
const btnStyle = (d) => ({
  padding: '8px 18px', borderRadius: '8px', border: 'none',
  background: d ? '#cbd5e1' : '#0A7E8C', color: 'white',
  fontWeight: '600', cursor: d ? 'not-allowed' : 'pointer',
  transition: 'background 0.2s'
});

const fsBtnStyle = {
  padding: '8px 14px', borderRadius: '8px', border: '1px solid #0A7E8C',
  background: 'transparent', color: '#0A7E8C', fontWeight: '600', cursor: 'pointer'
};