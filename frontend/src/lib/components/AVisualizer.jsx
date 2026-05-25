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
@keyframes pulse {
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(10,126,140,0.35); }
  50% { transform: scale(1.06); box-shadow: 0 0 0 10px rgba(10,126,140,0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(10,126,140,0); }
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
 * @param {boolean} isExpanded
 * @param {boolean} isGoal
 * @param {boolean} isCurrent
 * @returns {React.CSSProperties}
 */
const ellipseStyle = (isExpanded, isGoal, isCurrent) => ({
  padding: '6px 24px',
  borderRadius: '999px',
  backgroundColor: isGoal ? '#0A7E8C' : (isExpanded ? '#d9d9d9' : '#ffffff'),
  border: isGoal ? '3px solid #083d44' : '1.5px solid #1a2426',
  color: isGoal ? '#ffffff' : '#000000',
  fontWeight: 'bold',
  fontSize: '13px',
  textAlign: 'center',
  minWidth: '100px',
  position: /** @type {const} */ ('relative'), // <--- Rezolvă eroarea de poziție incompatibilă
  boxShadow: isExpanded ? '0 6px 18px rgba(0,0,0,0.14)' : '0 2px 8px rgba(0,0,0,0.08)',
  transition: 'all 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
  transform: isCurrent ? 'scale(1.06)' : 'scale(1)',
  animation: isCurrent ? 'pulse 1.6s infinite' : 'none',
});
/** @param {{ data: { isExpanded: boolean; isCurrent: boolean; isGoal: boolean; label: string; f: string; g: string; h: string } }} props */
const AStarNode = ({ data }) => (
  <div style={nodeContainerStyle}>
    <Handle type="target" position={Position.Top} style={{ background: '#1a2426', width: 6, height: 6 }} />
    <div style={ellipseStyle(data.isExpanded, data.isGoal, data.isCurrent)}>
      {data.isCurrent && <span style={{ position: 'absolute', left: '-16px', top: '50%', transform: 'translateY(-50%)', fontSize: '14px', color: '#0A7E8C' }}>▶</span>}
      {data.label}
    </div>
    <div style={{ fontSize: '12px', marginTop: '4px', fontWeight: '500', color: '#1a2426' }}>{data.f} = {data.g} + {data.h}</div>
    <Handle type="source" position={Position.Bottom} style={{ background: '#1a2426', width: 6, height: 6 }} />
  </div>
);

const nodeTypes = { aStarNode: AStarNode };

// =======================================================
// DATE ALGORITM (TOȚI PAȘII)
// =======================================================
const pașiAlgoritm = [
  {
    titlu: "(a) The initial state",
    nodes: [{ id: 'Arad', type: 'aStarNode', position: { x: 350, y: 20 }, data: { label: 'Arad', f: '366', g: '0', h: '366', isExpanded: false, isCurrent: true, isGoal: false } }],
    edges: []
  },
  {
    titlu: "(b) After expanding Arad",
    nodes: [
      { id: 'Arad', type: 'aStarNode', position: { x: 350, y: 20 }, data: { label: 'Arad', f: '366', g: '0', h: '366', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Sibiu', type: 'aStarNode', position: { x: 120, y: 140 }, data: { label: 'Sibiu', f: '393', g: '140', h: '253', isExpanded: false, isCurrent: true, isGoal: false } },
      { id: 'Timisoara', type: 'aStarNode', position: { x: 370, y: 140 }, data: { label: 'Timisoara', f: '447', g: '118', h: '329', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Zerind', type: 'aStarNode', position: { x: 620, y: 140 }, data: { label: 'Zerind', f: '449', g: '75', h: '374', isExpanded: false, isCurrent: false, isGoal: false } }
    ],
    edges: [
      { id: 'e1', source: 'Arad', target: 'Sibiu', type: 'smoothstep', animated: true, style: { stroke: '#0A7E8C', strokeWidth: 2 } },
      { id: 'e2', source: 'Arad', target: 'Timisoara', type: 'smoothstep', animated: true, style: { stroke: '#0A7E8C', strokeWidth: 2 } },
      { id: 'e3', source: 'Arad', target: 'Zerind', type: 'smoothstep', animated: true, style: { stroke: '#0A7E8C', strokeWidth: 2 } }
    ]
  },
  {
    titlu: "(c) After expanding Sibiu",
    nodes: [
      { id: 'Arad', type: 'aStarNode', position: { x: 350, y: 20 }, data: { label: 'Arad', f: '366', g: '0', h: '366', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Sibiu', type: 'aStarNode', position: { x: 120, y: 140 }, data: { label: 'Sibiu', f: '393', g: '140', h: '253', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Timisoara', type: 'aStarNode', position: { x: 480, y: 140 }, data: { label: 'Timisoara', f: '447', g: '118', h: '329', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Zerind', type: 'aStarNode', position: { x: 700, y: 140 }, data: { label: 'Zerind', f: '449', g: '75', h: '374', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Arad-2', type: 'aStarNode', position: { x: -100, y: 260 }, data: { label: 'Arad', f: '646', g: '280', h: '366', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Fagaras', type: 'aStarNode', position: { x: 50, y: 260 }, data: { label: 'Fagaras', f: '415', g: '239', h: '176', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Oradea', type: 'aStarNode', position: { x: 200, y: 260 }, data: { label: 'Oradea', f: '671', g: '291', h: '380', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Rimnicu', type: 'aStarNode', position: { x: 350, y: 260 }, data: { label: 'Rimnicu Vilcea', f: '413', g: '220', h: '193', isExpanded: false, isCurrent: true, isGoal: false } }
    ],
    edges: [
      { id: 'e1', source: 'Arad', target: 'Sibiu', type: 'smoothstep' },
      { id: 'e2', source: 'Arad', target: 'Timisoara', type: 'smoothstep' },
      { id: 'e3', source: 'Arad', target: 'Zerind', type: 'smoothstep' },
      { id: 'e4', source: 'Sibiu', target: 'Arad-2', type: 'smoothstep', animated: true, style: { stroke: '#0A7E8C', strokeWidth: 2 } },
      { id: 'e5', source: 'Sibiu', target: 'Fagaras', type: 'smoothstep', animated: true, style: { stroke: '#0A7E8C', strokeWidth: 2 } },
      { id: 'e6', source: 'Sibiu', target: 'Oradea', type: 'smoothstep', animated: true, style: { stroke: '#0A7E8C', strokeWidth: 2 } },
      { id: 'e7', source: 'Sibiu', target: 'Rimnicu', type: 'smoothstep', animated: true, style: { stroke: '#0A7E8C', strokeWidth: 2 } }
    ]
  },
  {
    titlu: "(d) After expanding Rimnicu Vilcea",
    nodes: [
      { id: 'Arad', type: 'aStarNode', position: { x: 350, y: 20 }, data: { label: 'Arad', f: '366', g: '0', h: '366', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Sibiu', type: 'aStarNode', position: { x: 120, y: 140 }, data: { label: 'Sibiu', f: '393', g: '140', h: '253', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Timisoara', type: 'aStarNode', position: { x: 550, y: 140 }, data: { label: 'Timisoara', f: '447', g: '118', h: '329', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Zerind', type: 'aStarNode', position: { x: 750, y: 140 }, data: { label: 'Zerind', f: '449', g: '75', h: '374', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Arad-2', type: 'aStarNode', position: { x: -100, y: 260 }, data: { label: 'Arad', f: '646', g: '280', h: '366', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Fagaras', type: 'aStarNode', position: { x: 50, y: 260 }, data: { label: 'Fagaras', f: '415', g: '239', h: '176', isExpanded: false, isCurrent: true, isGoal: false } },
      { id: 'Oradea', type: 'aStarNode', position: { x: 200, y: 260 }, data: { label: 'Oradea', f: '671', g: '291', h: '380', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Rimnicu', type: 'aStarNode', position: { x: 350, y: 260 }, data: { label: 'Rimnicu Vilcea', f: '413', g: '220', h: '193', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Craiova', type: 'aStarNode', position: { x: 230, y: 380 }, data: { label: 'Craiova', f: '526', g: '366', h: '160', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Pitesti', type: 'aStarNode', position: { x: 370, y: 380 }, data: { label: 'Pitesti', f: '417', g: '317', h: '100', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Sibiu-2', type: 'aStarNode', position: { x: 510, y: 380 }, data: { label: 'Sibiu', f: '553', g: '300', h: '253', isExpanded: false, isCurrent: false, isGoal: false } }
    ],
    edges: [
      { id: 'e1', source: 'Arad', target: 'Sibiu', type: 'smoothstep' },
      { id: 'e2', source: 'Arad', target: 'Timisoara', type: 'smoothstep' },
      { id: 'e3', source: 'Arad', target: 'Zerind', type: 'smoothstep' },
      { id: 'e4', source: 'Sibiu', target: 'Arad-2', type: 'smoothstep' },
      { id: 'e5', source: 'Sibiu', target: 'Fagaras', type: 'smoothstep' },
      { id: 'e6', source: 'Sibiu', target: 'Oradea', type: 'smoothstep' },
      { id: 'e7', source: 'Sibiu', target: 'Rimnicu', type: 'smoothstep' },
      { id: 'e8', source: 'Rimnicu', target: 'Craiova', type: 'smoothstep', animated: true, style: { stroke: '#0A7E8C', strokeWidth: 2 } },
      { id: 'e9', source: 'Rimnicu', target: 'Pitesti', type: 'smoothstep', animated: true, style: { stroke: '#0A7E8C', strokeWidth: 2 } },
      { id: 'e10', source: 'Rimnicu', target: 'Sibiu-2', type: 'smoothstep', animated: true, style: { stroke: '#0A7E8C', strokeWidth: 2 } }
    ]
  },
  {
    titlu: "(e) After expanding Fagaras",
    nodes: [
      { id: 'Arad', type: 'aStarNode', position: { x: 350, y: 20 }, data: { label: 'Arad', f: '366', g: '0', h: '366', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Sibiu', type: 'aStarNode', position: { x: 120, y: 140 }, data: { label: 'Sibiu', f: '393', g: '140', h: '253', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Timisoara', type: 'aStarNode', position: { x: 550, y: 140 }, data: { label: 'Timisoara', f: '447', g: '118', h: '329', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Zerind', type: 'aStarNode', position: { x: 750, y: 140 }, data: { label: 'Zerind', f: '449', g: '75', h: '374', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Arad-2', type: 'aStarNode', position: { x: -100, y: 260 }, data: { label: 'Arad', f: '646', g: '280', h: '366', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Fagaras', type: 'aStarNode', position: { x: 50, y: 260 }, data: { label: 'Fagaras', f: '415', g: '239', h: '176', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Oradea', type: 'aStarNode', position: { x: 200, y: 260 }, data: { label: 'Oradea', f: '671', g: '291', h: '380', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Rimnicu', type: 'aStarNode', position: { x: 350, y: 260 }, data: { label: 'Rimnicu Vilcea', f: '413', g: '220', h: '193', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Craiova', type: 'aStarNode', position: { x: 230, y: 380 }, data: { label: 'Craiova', f: '526', g: '366', h: '160', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Pitesti', type: 'aStarNode', position: { x: 370, y: 380 }, data: { label: 'Pitesti', f: '417', g: '317', h: '100', isExpanded: false, isCurrent: true, isGoal: false } },
      { id: 'Sibiu-2', type: 'aStarNode', position: { x: 510, y: 380 }, data: { label: 'Sibiu', f: '553', g: '300', h: '253', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Sibiu-3', type: 'aStarNode', position: { x: -60, y: 380 }, data: { label: 'Sibiu', f: '591', g: '338', h: '253', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Bucharest-1', type: 'aStarNode', position: { x: 70, y: 380 }, data: { label: 'Bucharest', f: '450', g: '450', h: '0', isExpanded: false, isCurrent: false, isGoal: false } }
    ],
    edges: [
      { id: 'e1', source: 'Arad', target: 'Sibiu', type: 'smoothstep' },
      { id: 'e2', source: 'Arad', target: 'Timisoara', type: 'smoothstep' },
      { id: 'e3', source: 'Arad', target: 'Zerind', type: 'smoothstep' },
      { id: 'e4', source: 'Sibiu', target: 'Arad-2', type: 'smoothstep' },
      { id: 'e5', source: 'Sibiu', target: 'Fagaras', type: 'smoothstep' },
      { id: 'e6', source: 'Sibiu', target: 'Oradea', type: 'smoothstep' },
      { id: 'e7', source: 'Sibiu', target: 'Rimnicu', type: 'smoothstep' },
      { id: 'e8', source: 'Rimnicu', target: 'Craiova', type: 'smoothstep' },
      { id: 'e9', source: 'Rimnicu', target: 'Pitesti', type: 'smoothstep' },
      { id: 'e10', source: 'Rimnicu', target: 'Sibiu-2', type: 'smoothstep' },
      { id: 'e11', source: 'Fagaras', target: 'Sibiu-3', type: 'smoothstep', animated: true, style: { stroke: '#0A7E8C', strokeWidth: 2 } },
      { id: 'e12', source: 'Fagaras', target: 'Bucharest-1', type: 'smoothstep', animated: true, style: { stroke: '#0A7E8C', strokeWidth: 2 } }
    ]
  },
  {
    titlu: "(f) After expanding Pitesti",
    nodes: [
      { id: 'Arad', type: 'aStarNode', position: { x: 350, y: 20 }, data: { label: 'Arad', f: '366', g: '0', h: '366', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Sibiu', type: 'aStarNode', position: { x: 120, y: 140 }, data: { label: 'Sibiu', f: '393', g: '140', h: '253', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Timisoara', type: 'aStarNode', position: { x: 550, y: 140 }, data: { label: 'Timisoara', f: '447', g: '118', h: '329', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Zerind', type: 'aStarNode', position: { x: 750, y: 140 }, data: { label: 'Zerind', f: '449', g: '75', h: '374', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Arad-2', type: 'aStarNode', position: { x: -100, y: 260 }, data: { label: 'Arad', f: '646', g: '280', h: '366', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Fagaras', type: 'aStarNode', position: { x: 50, y: 260 }, data: { label: 'Fagaras', f: '415', g: '239', h: '176', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Oradea', type: 'aStarNode', position: { x: 200, y: 260 }, data: { label: 'Oradea', f: '671', g: '291', h: '380', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Rimnicu', type: 'aStarNode', position: { x: 350, y: 260 }, data: { label: 'Rimnicu Vilcea', f: '413', g: '220', h: '193', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Craiova', type: 'aStarNode', position: { x: 230, y: 380 }, data: { label: 'Craiova', f: '526', g: '366', h: '160', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Pitesti', type: 'aStarNode', position: { x: 370, y: 380 }, data: { label: 'Pitesti', f: '417', g: '317', h: '100', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Sibiu-2', type: 'aStarNode', position: { x: 510, y: 380 }, data: { label: 'Sibiu', f: '553', g: '300', h: '253', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Sibiu-3', type: 'aStarNode', position: { x: -60, y: 380 }, data: { label: 'Sibiu', f: '591', g: '338', h: '253', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Bucharest-1', type: 'aStarNode', position: { x: 70, y: 380 }, data: { label: 'Bucharest', f: '450', g: '450', h: '0', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Bucharest-2', type: 'aStarNode', position: { x: 230, y: 500 }, data: { label: 'Bucharest', f: '418', g: '418', h: '0', isExpanded: false, isCurrent: true, isGoal: false } },
      { id: 'Craiova-2', type: 'aStarNode', position: { x: 370, y: 500 }, data: { label: 'Craiova', f: '615', g: '455', h: '160', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Rimnicu-2', type: 'aStarNode', position: { x: 510, y: 500 }, data: { label: 'Rimnicu Vilcea', f: '607', g: '414', h: '193', isExpanded: false, isCurrent: false, isGoal: false } }
    ],
    edges: [
      { id: 'e1', source: 'Arad', target: 'Sibiu', type: 'smoothstep' },
      { id: 'e2', source: 'Arad', target: 'Timisoara', type: 'smoothstep' },
      { id: 'e3', source: 'Arad', target: 'Zerind', type: 'smoothstep' },
      { id: 'e4', source: 'Sibiu', target: 'Arad-2', type: 'smoothstep' },
      { id: 'e5', source: 'Sibiu', target: 'Fagaras', type: 'smoothstep' },
      { id: 'e6', source: 'Sibiu', target: 'Oradea', type: 'smoothstep' },
      { id: 'e7', source: 'Sibiu', target: 'Rimnicu', type: 'smoothstep' },
      { id: 'e8', source: 'Rimnicu', target: 'Craiova', type: 'smoothstep' },
      { id: 'e9', source: 'Rimnicu', target: 'Pitesti', type: 'smoothstep' },
      { id: 'e10', source: 'Rimnicu', target: 'Sibiu-2', type: 'smoothstep' },
      { id: 'e11', source: 'Fagaras', target: 'Sibiu-3', type: 'smoothstep' },
      { id: 'e12', source: 'Fagaras', target: 'Bucharest-1', type: 'smoothstep' },
      { id: 'e13', source: 'Pitesti', target: 'Bucharest-2', type: 'smoothstep', animated: true, style: { stroke: '#0A7E8C', strokeWidth: 2 } },
      { id: 'e14', source: 'Pitesti', target: 'Craiova-2', type: 'smoothstep', animated: true, style: { stroke: '#0A7E8C', strokeWidth: 2 } },
      { id: 'e15', source: 'Pitesti', target: 'Rimnicu-2', type: 'smoothstep', animated: true, style: { stroke: '#0A7E8C', strokeWidth: 2 } }
    ]
  },
  {
    titlu: "Soluție Finală Găsită! Bucharest (f=418) este selectat din Pitești. Drumul optim: Arad -> Sibiu -> Rimnicu Vilcea -> Pitesti -> Bucharest.",
    nodes: [
      { id: 'Arad', type: 'aStarNode', position: { x: 350, y: 20 }, data: { label: 'Arad', f: '366', g: '0', h: '366', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Sibiu', type: 'aStarNode', position: { x: 120, y: 140 }, data: { label: 'Sibiu', f: '393', g: '140', h: '253', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Timisoara', type: 'aStarNode', position: { x: 550, y: 140 }, data: { label: 'Timisoara', f: '447', g: '118', h: '329', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Zerind', type: 'aStarNode', position: { x: 750, y: 140 }, data: { label: 'Zerind', f: '449', g: '75', h: '374', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Arad-2', type: 'aStarNode', position: { x: -100, y: 260 }, data: { label: 'Arad', f: '646', g: '280', h: '366', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Fagaras', type: 'aStarNode', position: { x: 50, y: 260 }, data: { label: 'Fagaras', f: '415', g: '239', h: '176', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Oradea', type: 'aStarNode', position: { x: 200, y: 260 }, data: { label: 'Oradea', f: '671', g: '291', h: '380', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Rimnicu', type: 'aStarNode', position: { x: 350, y: 260 }, data: { label: 'Rimnicu Vilcea', f: '413', g: '220', h: '193', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Craiova', type: 'aStarNode', position: { x: 230, y: 380 }, data: { label: 'Craiova', f: '526', g: '366', h: '160', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Pitesti', type: 'aStarNode', position: { x: 370, y: 380 }, data: { label: 'Pitesti', f: '417', g: '317', h: '100', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Sibiu-2', type: 'aStarNode', position: { x: 510, y: 380 }, data: { label: 'Sibiu', f: '553', g: '300', h: '253', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Sibiu-3', type: 'aStarNode', position: { x: -60, y: 380 }, data: { label: 'Sibiu', f: '591', g: '338', h: '253', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Bucharest-1', type: 'aStarNode', position: { x: 70, y: 380 }, data: { label: 'Bucharest', f: '450', g: '450', h: '0', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Bucharest-2', type: 'aStarNode', position: { x: 230, y: 500 }, data: { label: 'Bucharest', f: '418', g: '418', h: '0', isExpanded: false, isCurrent: false, isGoal: true } },
      { id: 'Craiova-2', type: 'aStarNode', position: { x: 370, y: 500 }, data: { label: 'Craiova', f: '615', g: '455', h: '160', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Rimnicu-2', type: 'aStarNode', position: { x: 510, y: 500 }, data: { label: 'Rimnicu Vilcea', f: '607', g: '414', h: '193', isExpanded: false, isCurrent: false, isGoal: false } }
    ],
    edges: [
      { id: 'e1', source: 'Arad', target: 'Sibiu', type: 'smoothstep', style: { stroke: '#0A7E8C', strokeWidth: 3 } },
      { id: 'e2', source: 'Arad', target: 'Timisoara', type: 'smoothstep' },
      { id: 'e3', source: 'Arad', target: 'Zerind', type: 'smoothstep' },
      { id: 'e4', source: 'Sibiu', target: 'Arad-2', type: 'smoothstep' },
      { id: 'e5', source: 'Sibiu', target: 'Fagaras', type: 'smoothstep' },
      { id: 'e6', source: 'Sibiu', target: 'Oradea', type: 'smoothstep' },
      { id: 'e7', source: 'Sibiu', target: 'Rimnicu', type: 'smoothstep', style: { stroke: '#0A7E8C', strokeWidth: 3 } },
      { id: 'e8', source: 'Rimnicu', target: 'Craiova', type: 'smoothstep' },
      { id: 'e9', source: 'Rimnicu', target: 'Pitesti', type: 'smoothstep', style: { stroke: '#0A7E8C', strokeWidth: 3 } },
      { id: 'e10', source: 'Rimnicu', target: 'Sibiu-2', type: 'smoothstep' },
      { id: 'e11', source: 'Fagaras', target: 'Sibiu-3', type: 'smoothstep' },
      { id: 'e12', source: 'Fagaras', target: 'Bucharest-1', type: 'smoothstep' },
      { id: 'e13', source: 'Pitesti', target: 'Bucharest-2', type: 'smoothstep', style: { stroke: '#0A7E8C', strokeWidth: 3 } },
      { id: 'e14', source: 'Pitesti', target: 'Craiova-2', type: 'smoothstep' },
      { id: 'e15', source: 'Pitesti', target: 'Rimnicu-2', type: 'smoothstep' }
    ]
  }
];

// =======================================================
// COMPONENTA INTERNĂ CU LOGICĂ DE FULLSCREEN
// =======================================================
function AVisualizerInner() {
  const [pasCurent, setPasCurent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  /** @type {React.RefObject<HTMLDivElement | null>} */
  const containerRef = useRef(null);
  const { fitView } = useReactFlow();

  const stareaCurenta = pașiAlgoritm[pasCurent];

  // Auto-centrare când se schimbă pasul sau modul ecranului
  useEffect(() => {
    const timer = setTimeout(() => {
      fitView({ padding: isFullscreen ? 0.7 : 1.4, duration: 400 });
    }, 100);
    return () => clearTimeout(timer);
  }, [pasCurent, fitView, isFullscreen]);

  // Listener pentru detectarea ieșirii din fullscreen (ex: tasta ESC)
  useEffect(() => {
    const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    const element = containerRef.current;
    if (!element) return;
    if (!document.fullscreenElement) {
      element.requestFullscreen().catch((/** @type {any} */ err) => {
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
      {/* Bara de control MUTATĂ ÎN INTERIORUL containerului de fullscreen */}
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

// =======================================================
// EXPORT FINAL CU PROVIDER
// =======================================================
export default function AVisualizer() {
  return (
    <ReactFlowProvider>
      <AVisualizerInner />
    </ReactFlowProvider>
  );
}

/**
 * @param {boolean} d - Indică dacă butonul este dezactivat (disabled)
 * @returns {React.CSSProperties}
 */
const btnStyle = (d) => ({
  padding: '8px 16px', borderRadius: '8px', border: 'none',
  background: d ? '#d8d8d8' : '#0A7E8C', color: 'white',
  fontWeight: '600', cursor: d ? 'not-allowed' : 'pointer'
});

const fsBtnStyle = {
  padding: '8px 12px', borderRadius: '8px', border: '1px solid #0A7E8C',
  background: 'transparent', color: '#0A7E8C', fontWeight: '600', cursor: 'pointer'
};