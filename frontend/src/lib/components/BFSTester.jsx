// @ts-ignore
import React, { useState } from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';

const problemsConfig = {
  1: {
    title: 'Problema 1: Construirea Arborelui BFS dintr-un Graf Orientat',
    start: 'S',
    goal: 'F',
    availableNodes: ['S', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    solutionEdges: [
      ['S', 'A'],
      ['S', 'B'],
      ['S', 'C'],
      ['A', 'G'],
      ['B', 'D'],
      ['G', 'E'],
      ['D', 'F']
    ],
    maxXP: 100
  },
  2: {
    title: 'Problema 2: Construirea Arborelui BFS dintr-un Graf Orientat',
    start: 'S',
    goal: 'E',
    availableNodes: ['S', 'A', 'B', 'C', 'D', 'E', 'F'],
    solutionEdges: [
      ['S', 'A'],
      ['S', 'B'],
      ['A', 'C'],
      ['A', 'D'],
      ['B', 'F'],
      ['C', 'E']
    ],
    maxXP: 100
  }
};

export default function BFSTester() {
  const [activeProblemId, setActiveProblemId] = useState(1);
 
  // @ts-ignore
  const problem = problemsConfig[activeProblemId];

  // @ts-ignore
  const getInitialNodes = (startNode) => [
    {
      id: startNode,
      data: { label: startNode },
      position: { x: 350, y: 40 },
      style: {
        background: '#bef264',
        border: '2px solid #65a30d',
        borderRadius: '50%',
        width: 50,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        color: '#1e293b'
      }
    }
  ];

  const [nodes, setNodes] = useState(() => getInitialNodes(problem.start));
  const [edges, setEdges] = useState([]);
  const [selectedSource, setSelectedSource] = useState('');
  const [selectedTarget, setSelectedTarget] = useState('');
  const [feedback, setFeedback] = useState(null);


  const addEdgeToGraph = () => {
    if (!selectedSource || !selectedTarget) {
      alert('Selectează ambele noduri (Părinte și Succesor).');
      return;
    }
    if (selectedSource === selectedTarget) {
      alert('Un nod nu se poate lega de el însuși.');
      return;
    }

    const sourceNode = nodes.find((n) => n.id === selectedSource);
    if (!sourceNode) {
      alert(`Nodul părinte "${selectedSource}" trebuie să fie deja plasat în arbore.`);
      return;
    }

    const targetNodeExists = nodes.some((n) => n.id === selectedTarget);
    if (targetNodeExists) {
      alert(`Nodul "${selectedTarget}" a fost deja adăugat! În BFS, fiecare nod unic are un singur părinte.`);
      return;
    }

    const edgeId = `${selectedSource}-${selectedTarget}`;
    // @ts-ignore
    if (edges.some((e) => e.id === edgeId)) {
      alert('Această muchie există deja.');
      return;
    }

    const childY = sourceNode.position.y + 110;
    const nodesOnSameLevel = nodes.filter((n) => n.position.y === childY);
    
    let childX = sourceNode.position.x;
    if (nodesOnSameLevel.length > 0) {
      const highestX = Math.max(...nodesOnSameLevel.map((n) => n.position.x));
      childX = highestX + 130;
    } else {
      childX = sourceNode.position.x - 60;
    }

    const updatedNodes = [...nodes, {
      id: selectedTarget,
      data: { label: selectedTarget },
      position: { x: childX, y: childY },
      style: {
        background: selectedTarget === problem.goal ? '#bbf7d0' : '#e2e8f0',
        border: selectedTarget === problem.goal ? '2px solid #22c55e' : '2px solid #94a3b8',
        borderRadius: '50%',
        width: 50,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        color: '#1e293b'
      }
    }];

    const newEdge = {
      id: edgeId,
      source: selectedSource,
      target: selectedTarget,
      animated: true,
      style: { stroke: '#0A7E8C', strokeWidth: 2.5 }
    };

    setNodes(updatedNodes);
    // @ts-ignore
    setEdges([...edges, newEdge]);
    setSelectedSource('');
    setSelectedTarget('');
  };

  const verifyFinalSolution = () => {
    const expected = problem.solutionEdges;
    
    if (edges.length === 0) {
      // @ts-ignore
      setFeedback({ text: 'Arborele tău nu conține nicio muchie!', type: 'error', xp: 0 });
      return;
    }

    if (edges.length !== expected.length) {
      // @ts-ignore
      const missing = expected.length > edges.length ? expected.length - edges.length : 0;
      // @ts-ignore
      const wrong = edges.length > expected.length ? edges.length - expected.length : 0;
      setFeedback({
        // @ts-ignore
        text: `Răspuns incorect. Structura nu respectă pașii exacți ai algoritmului BFS.`,
        type: 'warning',
        xp: 0
      });
      return;
    }

    let isSequenceCorrect = true;
    for (let i = 0; i < expected.length; i++) {
      // @ts-ignore
      if (edges[i].source !== expected[i][0] || edges[i].target !== expected[i][1]) {
        isSequenceCorrect = false;
        break;
      }
    }

    if (isSequenceCorrect) {
      setFeedback({
        // @ts-ignore
        text: `Perfect! Ai construit corect arborele de parcurgere BFS respectând ordinea alfabetică până la starea scop ${problem.goal}.`,
        type: 'success',
        xp: 100
      });
    } else {
      setFeedback({
        // @ts-ignore
        text: `Răspuns incorect. Deși nodurile pot fi corecte, ordinea de extindere a muchiilor nu respectă parcurgerea BFS alfabetică strictă!`,
        type: 'warning',
        xp: 0
      });
    }
  };

  const resetProblem = () => {
    setNodes(getInitialNodes(problem.start));
    setEdges([]);
    setSelectedSource('');
    setSelectedTarget('');
    setFeedback(null);
  };

  return (
    <div 
// @ts-ignore
    style={containerStyle}>
      <div style={tabsContainerStyle}>
        <button 
          onClick={() => ((id) => {
            setActiveProblemId(id);
            // @ts-ignore
            const targetProblem = problemsConfig[id];
            setNodes(getInitialNodes(targetProblem.start));
            setEdges([]);
            setSelectedSource('');
            setSelectedTarget('');
            setFeedback(null);
          })(1)} 
          style={{...tabButtonStyle, backgroundColor: activeProblemId === 1 ? '#0A7E8C' : '#e2e8f0', color: activeProblemId === 1 ? 'white' : '#475569'}}
        >
          Problema 1
        </button>
        <button 
          onClick={() => ((id) => {
            setActiveProblemId(id);
            // @ts-ignore
            const targetProblem = problemsConfig[id];
            setNodes(getInitialNodes(targetProblem.start));
            setEdges([]);
            setSelectedSource('');
            setSelectedTarget('');
            setFeedback(null);
          })(2)} 
          style={{...tabButtonStyle, backgroundColor: activeProblemId === 2 ? '#0A7E8C' : '#e2e8f0', color: activeProblemId === 2 ? 'white' : '#475569'}}
        >
          Problema 2
        </button>
      </div>

      <div style={headerStyle}>
        <div style={{ flex: 1 }}>
          <h2 style={{ margin: '0 0 6px 0', color: '#1e293b' }}>{problem.title}</h2>
          <p style={{ margin: '0 0 10px 0', color: '#4b5563', fontSize: '14px', lineHeight: '1.5' }}>
            Priviți graful de conexiuni din dreapta. Pornind din nodul <strong>{problem.start}</strong>, construiți în spațiul de lucru de dedesubt arborele rezultat în urma aplicării algoritmului <strong>BFS</strong> cu scopul de a găsi nodul <strong>{problem.goal}</strong>.
            <br />
            <span style={{ color: '#ef4444', fontWeight: '600' }}>Regulă:</span> Extindeți nodurile în ordine alfabetică și respectați strict orientarea săgeților!
          </p>
          <div style={{ fontSize: '13px', fontWeight: '500' }}>
            <strong>Start:</strong> <span style={{ color: '#65a30d' }}>{problem.start}</span> | 
            <strong> Scop (Goal):</strong> <span style={{ color: '#22c55e' }}>{problem.goal}</span> | 
            <strong> Recompensă:</strong> <span style={{ color: '#f59e0b' }}>{problem.maxXP} XP</span>
          </div>
        </div>

        <div 
// @ts-ignore
        style={graphContainerStyle}>
          {activeProblemId === 1 ? (
            <>
              <div 
// @ts-ignore
              style={{ ...nodeCircleStyle, top: '20px', left: '20px', background: '#bef264' }}>S</div>
              <div 
// @ts-ignore
              style={{ ...nodeCircleStyle, top: '20px', left: '120px' }}>A</div>
              <div 
// @ts-ignore
              style={{ ...nodeCircleStyle, top: '20px', left: '220px' }}>G</div>
              <div 
// @ts-ignore
              style={{ ...nodeCircleStyle, top: '20px', left: '320px' }}>E</div>
              <div 
// @ts-ignore
              style={{ ...nodeCircleStyle, top: '90px', left: '170px' }}>H</div>
              <div 
// @ts-ignore
              style={{ ...nodeCircleStyle, top: '160px', left: '20px' }}>B</div>
              <div 
// @ts-ignore
              style={{ ...nodeCircleStyle, top: '160px', left: '120px' }}>C</div>
              <div 
// @ts-ignore
              style={{ ...nodeCircleStyle, top: '160px', left: '220px' }}>D</div>
              <div 
// @ts-ignore
              style={{ ...nodeCircleStyle, top: '160px', left: '320px', background: '#bbf7d0' }}>F</div>

              <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="22" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569" />
                  </marker>
                </defs>
                <line x1="35" y1="35" x2="120" y2="35" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />
                <line x1="35" y1="35" x2="35" y2="160" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />
                <line x1="35" y1="35" x2="120" y2="160" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />
                <line x1="135" y1="35" x2="220" y2="35" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />
                <line x1="135" y1="35" x2="135" y2="160" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />
                <line x1="235" y1="35" x2="320" y2="35" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />
                <line x1="235" y1="35" x2="235" y2="160" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />
                <line x1="335" y1="35" x2="335" y2="160" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />
                <line x1="35" y1="175" x2="220" y2="175" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />
                <line x1="35" y1="160" x2="120" y2="35" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />
                <line x1="135" y1="160" x2="170" y2="105" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />
                <line x1="120" y1="175" x2="35" y2="175" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />
                <line x1="185" y1="90" x2="135" y2="35" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />
                <line x1="185" y1="105" x2="220" y2="160" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />
                <line x1="235" y1="175" x2="320" y2="175" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />
                <line x1="235" y1="160" x2="320" y2="35" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />
              </svg>
            </>
          ) : (
            <>
              <div 
// @ts-ignore
              style={{ ...nodeCircleStyle, top: '20px', left: '70px', background: '#bef264' }}>S</div>
              <div 
// @ts-ignore
              style={{ ...nodeCircleStyle, top: '20px', left: '220px' }}>A</div>
              <div 
// @ts-ignore
              style={{ ...nodeCircleStyle, top: '90px', left: '20px' }}>B</div>
              <div 
// @ts-ignore
              style={{ ...nodeCircleStyle, top: '90px', left: '140px' }}>C</div>
              <div 
// @ts-ignore
              style={{ ...nodeCircleStyle, top: '90px', left: '260px' }}>D</div>
              <div 
// @ts-ignore
              style={{ ...nodeCircleStyle, top: '160px', left: '20px' }}>F</div>
              <div 
// @ts-ignore
              style={{ ...nodeCircleStyle, top: '160px', left: '140px', background: '#bbf7d0' }}>E</div>

              <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="22" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569" />
                  </marker>
                </defs>
                <line x1="85" y1="35" x2="220" y2="35" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />
                <line x1="85" y1="35" x2="35" y2="90" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />
                <line x1="235" y1="35" x2="155" y2="90" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />
                <line x1="235" y1="35" x2="275" y2="90" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />
                <line x1="235" y1="35" x2="35" y2="90" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />
                <line x1="35" y1="105" x2="35" y2="160" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />
                <line x1="155" y1="105" x2="155" y2="160" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />
                <line x1="155" y1="105" x2="35" y2="160" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />
                <line x1="275" y1="105" x2="155" y2="160" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />
              </svg>
            </>
          )}
        </div>
      </div>

      <div style={mainStyle}>
        <div style={flowStyle}>
          <ReactFlow nodes={nodes} edges={edges} fitView>
            <Background />
            <Controls />
          </ReactFlow>
        </div>

        <div 
// @ts-ignore
        style={sidebarStyle}>
          <h3 style={{ margin: '0 0 10px 0', color: '#1e293b' }}>Panou de Control</h3>

          <div 
// @ts-ignore
          style={badgeContainerStyle}>
            {problem.availableNodes.map((
// @ts-ignore
            node) => (
              <span key={node} style={{
                ...badgeStyle, 
                background: nodes.some(n => n.id === node) ? '#e0f2fe' : '#f1f5f9',
                borderColor: nodes.some(n => n.id === node) ? '#bae6fd' : '#cbd5e1'
              }}>
                {node}
              </span>
            ))}
          </div>

          <label style={labelStyle}>Nod Părinte (Sursă)</label>
          <select value={selectedSource} onChange={(e) => setSelectedSource(e.target.value)} style={inputStyle}>
            <option value="">Alege părinte...</option>
            {problem.availableNodes.map((
// @ts-ignore
            node) => (
              <option key={node} value={node}>{node}</option>
            ))}
          </select>

          <label style={labelStyle}>Nod Succesor (Țintă)</label>
          <select value={selectedTarget} onChange={(e) => setSelectedTarget(e.target.value)} style={inputStyle}>
            <option value="">Alege succesor...</option>
            {problem.availableNodes.map((
// @ts-ignore
            node) => (
              <option key={node} value={node}>{node}</option>
            ))}
          </select>

          <button onClick={addEdgeToGraph} style={addButtonStyle}>
            Adaugă Muchie în Arbore
          </button>

          <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '12px 0' }} />

          <button onClick={verifyFinalSolution} style={verifyButtonStyle}>
            Verifică Rezultat
          </button>

          <button onClick={resetProblem} style={resetButtonStyle}>
            Resetează Graf
          </button>

          {feedback && (
            <div 
// @ts-ignore
            style={{
              ...feedbackBoxStyle,
              // @ts-ignore
              background: feedback.type === 'success' ? '#def7ec' : '#fde8e8',
              // @ts-ignore
              color: feedback.type === 'success' ? '#03543f' : '#9b1c1c',
              // @ts-ignore
              border: `1px solid ${feedback.type === 'success' ? '#bbf7d0' : '#fca5a5'}`
            }}>
              <div style={{ fontSize: '13px', marginBottom: '6px' }}>{feedback.
// @ts-ignore
              text}</div>
              <div style={xpBadgeStyle}>+{feedback.
// @ts-ignore
              xp} XP</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const containerStyle = { width: '100%', height: 'calc(100vh - 120px)', display: 'flex', flexDirection: 'column', background: '#f8fafc' };
const tabsContainerStyle = { display: 'flex', gap: '10px', padding: '10px 20px', background: '#f1f5f9', borderBottom: '1px solid #cbd5e1' };
const tabButtonStyle = { padding: '8px 16px', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px', transition: 'all 0.2s' };
const headerStyle = { padding: '16px 20px', background: 'white', borderBottom: '2px solid #e2e8f0', display: 'flex', gap: '20px', alignItems: 'center' };
const graphContainerStyle = { width: '440px', height: '220px', position: 'relative', background: '#fafafa', borderRadius: '10px', border: '2px solid #cbd5e1', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' };
const nodeCircleStyle = { position: 'absolute', width: '32px', height: '32px', borderRadius: '50%', background: 'white', border: '2px solid #475569', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold', color: '#1e293b', zIndex: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' };
const mainStyle = { flex: 1, display: 'flex', overflow: 'hidden' };
const flowStyle = { flex: 1, height: '100%' };
const sidebarStyle = { width: '340px', background: 'white', borderLeft: '2px solid #e2e8f0', padding: '20px', display: 'flex', flexDirection: 'column', gap: '6px', overflowY: 'auto' };
const badgeContainerStyle = { display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '10px' };
const badgeStyle = { padding: '4px 10px', borderRadius: '999px', border: '1px solid #cbd5e1', fontWeight: 'bold', fontSize: '12px' };
const labelStyle = { fontWeight: 'bold', fontSize: '13px', color: '#4b5563' };
const inputStyle = { width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1', background: '#f8fafc' };
const addButtonStyle = { padding: '10px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', marginTop: '6px' };
const verifyButtonStyle = { padding: '10px', background: '#0A7E8C', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' };
const resetButtonStyle = { padding: '10px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' };
const feedbackBoxStyle = { marginTop: '10px', padding: '12px', borderRadius: '8px', fontWeight: 'bold', textAlign: 'center' };
const xpBadgeStyle = { background: '#ffffff', color: '#0A7E8C', padding: '4px 12px', borderRadius: '20px', fontSize: '14px', fontWeight: '800', display: 'inline-block', marginTop: '4px', border: '1px solid #e2e8f0' };