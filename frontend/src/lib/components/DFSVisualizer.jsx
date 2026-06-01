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

const style = document.createElement('style');
style.innerHTML = `
@keyframes pulse {
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(142, 40, 10, 0.35); }
  50% { transform: scale(1.06); box-shadow: 0 0 0 10px rgba(142, 40, 10, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(142, 40, 10, 0); }
}
`;
document.head.appendChild(style);

/** @type {import('react').CSSProperties} */
const nodeContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: 'sans-serif',
};

/**
 * @param {boolean} isVisited
 * @param {boolean} isGoal
 * @param {boolean} isCurrent
 * @returns {React.CSSProperties}
 */
const ellipseStyle = (isVisited, isGoal, isCurrent) => ({
  padding: '6px 24px',
  borderRadius: '999px',
  backgroundColor: isGoal ? '#8E280A' : (isVisited ? '#d9d9d9' : '#ffffff'),
  border: isGoal ? '3px solid #4a1203' : '1.5px solid #1a2426',
  color: isGoal ? '#ffffff' : '#000000',
  fontWeight: 'bold',
  fontSize: '13px',
  textAlign: 'center',
  minWidth: '100px',
  position: 'relative',
  boxShadow: isVisited ? '0 6px 18px rgba(0,0,0,0.14)' : '0 2px 8px rgba(0,0,0,0.08)',
  transition: 'all 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
  transform: isCurrent ? 'scale(1.06)' : 'scale(1)',
  animation: isCurrent ? 'pulse 1.6s infinite' : 'none',
});

/** @param {{ data: { isVisited: boolean; isCurrent: boolean; isGoal: boolean; label: string; info: string } }} props */
const DFSNode = ({ data }) => (
  <div style={nodeContainerStyle}>
    <Handle type="target" position={Position.Top} style={{ background: '#1a2426', width: 6, height: 6 }} />
    <div style={ellipseStyle(data.isVisited, data.isGoal, data.isCurrent)}>
      {data.isCurrent && <span style={{ position: 'absolute', left: '-16px', top: '50%', transform: 'translateY(-50%)', fontSize: '14px', color: '#8E280A' }}>▶</span>}
      {data.label}
    </div>
    <div style={{ fontSize: '11px', marginTop: '4px', fontWeight: '600', color: data.isCurrent ? '#8E280A' : '#555' }}>
      {data.info}
    </div>
    <Handle type="source" position={Position.Bottom} style={{ background: '#1a2426', width: 6, height: 6 }} />
  </div>
);

const nodeTypes = { dfsNode: DFSNode };

const pașiAlgoritm = [
  {
    titlu: "(a) Starea inițială: Se adaugă Arad în stivă",
    nodes: [{ id: 'Arad', type: 'dfsNode', position: { x: 350, y: 20 }, data: { label: 'Arad', info: 'Curent (Rădăcină)', isVisited: false, isCurrent: true, isGoal: false } }],
    edges: []
  },
  {
    titlu: "(b) Expandare Arad: Se aleg vecinii (Sibiu, Timișoara, Zerind). Se merge pe prima ramură: Sibiu",
    nodes: [
      { id: 'Arad', type: 'dfsNode', position: { x: 350, y: 20 }, data: { label: 'Arad', info: 'Vizitat', isVisited: true, isCurrent: false, isGoal: false } },
      { id: 'Sibiu', type: 'dfsNode', position: { x: 120, y: 140 }, data: { label: 'Sibiu', info: 'Curent', isVisited: false, isCurrent: true, isGoal: false } },
      { id: 'Timisoara', type: 'dfsNode', position: { x: 350, y: 140 }, data: { label: 'Timisoara', info: 'În așteptare (Stivă)', isVisited: false, isCurrent: false, isGoal: false } },
      { id: 'Zerind', type: 'dfsNode', position: { x: 580, y: 140 }, data: { label: 'Zerind', info: 'În așteptare (Stivă)', isVisited: false, isCurrent: false, isGoal: false } }
    ],
    edges: [
      { id: 'e1', source: 'Arad', target: 'Sibiu', type: 'smoothstep', animated: true, style: { stroke: '#8E280A', strokeWidth: 2 } },
      { id: 'e2', source: 'Arad', target: 'Timisoara', type: 'smoothstep', style: { stroke: '#b5b5b5' } },
      { id: 'e3', source: 'Arad', target: 'Zerind', type: 'smoothstep', style: { stroke: '#b5b5b5' } }
    ]
  },
  {
    titlu: "(c) Expandare Sibiu: Se explorează opțiunile noi. Mergem adânc spre Făgăraș",
    nodes: [
      { id: 'Arad', type: 'dfsNode', position: { x: 350, y: 20 }, data: { label: 'Arad', info: 'Vizitat', isVisited: true, isCurrent: false, isGoal: false } },
      { id: 'Sibiu', type: 'dfsNode', position: { x: 120, y: 140 }, data: { label: 'Sibiu', info: 'Vizitat', isVisited: true, isCurrent: false, isGoal: false } },
      { id: 'Timisoara', type: 'dfsNode', position: { x: 480, y: 140 }, data: { label: 'Timisoara', info: 'În stivă', isVisited: false, isCurrent: false, isGoal: false } },
      { id: 'Zerind', type: 'dfsNode', position: { x: 680, y: 140 }, data: { label: 'Zerind', info: 'În stivă', isVisited: false, isCurrent: false, isGoal: false } },
      { id: 'Fagaras', type: 'dfsNode', position: { x: -20, y: 260 }, data: { label: 'Fagaras', info: 'Curent', isVisited: false, isCurrent: true, isGoal: false } },
      { id: 'Rimnicu', type: 'dfsNode', position: { x: 150, y: 260 }, data: { label: 'Rimnicu Vilcea', info: 'În stivă', isVisited: false, isCurrent: false, isGoal: false } },
      { id: 'Oradea', type: 'dfsNode', position: { x: 300, y: 260 }, data: { label: 'Oradea', info: 'În stivă', isVisited: false, isCurrent: false, isGoal: false } }
    ],
    edges: [
      { id: 'e1', source: 'Arad', target: 'Sibiu', type: 'smoothstep' },
      { id: 'e2', source: 'Arad', target: 'Timisoara', type: 'smoothstep' },
      { id: 'e3', source: 'Arad', target: 'Zerind', type: 'smoothstep' },
      { id: 'e4', source: 'Sibiu', target: 'Fagaras', type: 'smoothstep', animated: true, style: { stroke: '#8E280A', strokeWidth: 2 } },
      { id: 'e5', source: 'Sibiu', target: 'Rimnicu', type: 'smoothstep', style: { stroke: '#b5b5b5' } },
      { id: 'e6', source: 'Sibiu', target: 'Oradea', type: 'smoothstep', style: { stroke: '#b5b5b5' } }
    ]
  },
  {
    titlu: "(d) Expandare Făgăraș: DFS merge direct către vecinul Bucharest!",
    nodes: [
      { id: 'Arad', type: 'dfsNode', position: { x: 350, y: 20 }, data: { label: 'Arad', info: 'Vizitat', isVisited: true, isCurrent: false, isGoal: false } },
      { id: 'Sibiu', type: 'dfsNode', position: { x: 120, y: 140 }, data: { label: 'Sibiu', info: 'Vizitat', isVisited: true, isCurrent: false, isGoal: false } },
      { id: 'Timisoara', type: 'dfsNode', position: { x: 480, y: 140 }, data: { label: 'Timisoara', info: 'În stivă', isVisited: false, isCurrent: false, isGoal: false } },
      { id: 'Zerind', type: 'dfsNode', position: { x: 680, y: 140 }, data: { label: 'Zerind', info: 'În stivă', isVisited: false, isCurrent: false, isGoal: false } },
      { id: 'Fagaras', type: 'dfsNode', position: { x: -20, y: 260 }, data: { label: 'Fagaras', info: 'Vizitat', isVisited: true, isCurrent: false, isGoal: false } },
      { id: 'Rimnicu', type: 'dfsNode', position: { x: 150, y: 260 }, data: { label: 'Rimnicu Vilcea', info: 'În stivă', isVisited: false, isCurrent: false, isGoal: false } },
      { id: 'Oradea', type: 'dfsNode', position: { x: 300, y: 260 }, data: { label: 'Oradea', info: 'În stivă', isVisited: false, isCurrent: false, isGoal: false } },
      { id: 'Bucharest', type: 'dfsNode', position: { x: -20, y: 380 }, data: { label: 'Bucharest', info: 'Destinație Găsită!', isVisited: false, isCurrent: true, isGoal: false } }
    ],
    edges: [
      { id: 'e1', source: 'Arad', target: 'Sibiu', type: 'smoothstep' },
      { id: 'e2', source: 'Arad', target: 'Timisoara', type: 'smoothstep' },
      { id: 'e3', source: 'Arad', target: 'Zerind', type: 'smoothstep' },
      { id: 'e4', source: 'Sibiu', target: 'Fagaras', type: 'smoothstep' },
      { id: 'e5', source: 'Sibiu', target: 'Rimnicu', type: 'smoothstep' },
      { id: 'e6', source: 'Sibiu', target: 'Oradea', type: 'smoothstep' },
      { id: 'e7', source: 'Fagaras', target: 'Bucharest', type: 'smoothstep', animated: true, style: { stroke: '#8E280A', strokeWidth: 2 } }
    ]
  },
  {
    titlu: "Soluție DFS Găsită! Bucharest a fost extras din stivă. Drumul blocat în adâncime: Arad -> Sibiu -> Fagaras -> Bucharest.",
    nodes: [
      { id: 'Arad', type: 'dfsNode', position: { x: 350, y: 20 }, data: { label: 'Arad', info: 'Rădăcină', isVisited: true, isCurrent: false, isGoal: false } },
      { id: 'Sibiu', type: 'dfsNode', position: { x: 120, y: 140 }, data: { label: 'Sibiu', info: 'Pasul 2', isVisited: true, isCurrent: false, isGoal: false } },
      { id: 'Timisoara', type: 'dfsNode', position: { x: 480, y: 140 }, data: { label: 'Timisoara', info: 'Neexplorat', isVisited: false, isCurrent: false, isGoal: false } },
      { id: 'Zerind', type: 'dfsNode', position: { x: 680, y: 140 }, data: { label: 'Zerind', info: 'Neexplorat', isVisited: false, isCurrent: false, isGoal: false } },
      { id: 'Fagaras', type: 'dfsNode', position: { x: -20, y: 260 }, data: { label: 'Fagaras', info: 'Pasul 3', isVisited: true, isCurrent: false, isGoal: false } },
      { id: 'Rimnicu', type: 'dfsNode', position: { x: 150, y: 260 }, data: { label: 'Rimnicu Vilcea', info: 'Neexplorat', isVisited: false, isCurrent: false, isGoal: false } },
      { id: 'Oradea', type: 'dfsNode', position: { x: 300, y: 260 }, data: { label: 'Oradea', info: 'Neexplorat', isVisited: false, isCurrent: false, isGoal: false } },
      { id: 'Bucharest', type: 'dfsNode', position: { x: -20, y: 380 }, data: { label: 'Bucharest', info: 'SCOP ATINS', isVisited: false, isCurrent: false, isGoal: true } }
    ],
    edges: [
      { id: 'e1', source: 'Arad', target: 'Sibiu', type: 'smoothstep', style: { stroke: '#8E280A', strokeWidth: 3 } },
      { id: 'e2', source: 'Arad', target: 'Timisoara', type: 'smoothstep', style: { stroke: '#e0e0e0' } },
      { id: 'e3', source: 'Arad', target: 'Zerind', type: 'smoothstep', style: { stroke: '#e0e0e0' } },
      { id: 'e4', source: 'Sibiu', target: 'Fagaras', type: 'smoothstep', style: { stroke: '#8E280A', strokeWidth: 3 } },
      { id: 'e5', source: 'Sibiu', target: 'Rimnicu', type: 'smoothstep', style: { stroke: '#e0e0e0' } },
      { id: 'e6', source: 'Sibiu', target: 'Oradea', type: 'smoothstep', style: { stroke: '#e0e0e0' } },
      { id: 'e7', source: 'Fagaras', target: 'Bucharest', type: 'smoothstep', style: { stroke: '#8E280A', strokeWidth: 3 } }
    ]
  }
];

function DFSVisualizerInner() {
  const [pasCurent, setPasCurent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  /** @type {React.RefObject<HTMLDivElement | null>} */
  const containerRef = useRef(null);
  const { fitView } = useReactFlow();

  const stareaCurenta = pașiAlgoritm[pasCurent];

  useEffect(() => {
    const timer = setTimeout(() => {
      fitView({ padding: isFullscreen ? 0.7 : 1.4, duration: 400 });
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
        height: isFullscreen ? '100vh' : '620px',
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
          background: 'rgba(255, 255, 255, 0.9)',
          padding: '10px 20px',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
          backdropFilter: 'blur(5px)',
          minWidth: '700px',
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

        <div style={{ fontWeight: 'bold', fontSize: '14px', textAlign: 'center', flex: 1 }}>
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
        maxZoom={1.5}
        nodesDraggable={false}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#d6d6d6" gap={18} size={1} />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default function DFSVisualizer() {
  return (
    <ReactFlowProvider>
      <DFSVisualizerInner />
    </ReactFlowProvider>
  );
}

/**
 * @param {boolean} d - Disabled status
 * @returns {React.CSSProperties}
 */
const btnStyle = (d) => ({
  padding: '8px 16px', borderRadius: '8px', border: 'none',
  background: d ? '#d8d8d8' : '#8E280A', color: 'white',
  fontWeight: '600', cursor: d ? 'not-allowed' : 'pointer'
});

const fsBtnStyle = {
  padding: '8px 12px', borderRadius: '8px', border: '1px solid #8E280A',
  background: 'transparent', color: '#8E280A', fontWeight: '600', cursor: 'pointer'
};