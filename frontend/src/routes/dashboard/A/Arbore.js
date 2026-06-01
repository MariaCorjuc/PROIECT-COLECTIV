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

import { pașiAlgoritm } from './DateArbore';

if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
  @keyframes pulse {
    0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(10,126,140,0.35); }
    50% { transform: scale(1.06); box-shadow: 0 0 0 10px rgba(10,126,140,0); }
    100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(10,126,140,0); }
  }
  `;
  document.head.appendChild(style);
}


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
  position: 'relative',
  boxShadow: isExpanded ? '0 6px 18px rgba(0,0,0,0.14)' : '0 2px 8px rgba(0,0,0,0.08)',
  transition: 'all 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
  transform: isCurrent ? 'scale(1.06)' : 'scale(1)',
  animation: isCurrent ? 'pulse 1.6s infinite' : 'none',
});

/** @param {{ data: { isExpanded: boolean; isCurrent: boolean; isGoal: boolean; label: string; f: string; g: string; h: string } }} props */
const AStarNode = ({ data }) => {
  return React.createElement(
    'div',
    { style: nodeContainerStyle },
    
    React.createElement(Handle, {
      type: 'target',
      position: Position.Top,
      style: { background: '#1a2426', width: 6, height: 6 }
    }),
    
    React.createElement(
      'div',
      { style: ellipseStyle(data.isExpanded, data.isGoal, data.isCurrent) },
      data.isCurrent ? React.createElement('span', {
        style: { position: 'absolute', left: '-16px', top: '50%', transform: 'translateY(-50%)', fontSize: '14px', color: '#0A7E8C' }
      }, '▶') : null,
      data.label
    ),
    
    React.createElement(
      'div',
      { style: { fontSize: '12px', marginTop: '4px', fontWeight: '500', color: '#1a2426' } },
      `${data.f} = ${data.g} + ${data.h}`
    ),
    
    React.createElement(Handle, {
      type: 'source',
      position: Position.Bottom,
      style: { background: '#1a2426', width: 6, height: 6 }
    })
  );
};

const nodeTypes = { aStarNode: AStarNode };

function AVisualizerInner() {
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

  return React.createElement(
    'div',
    {
      ref: containerRef,
      style: {
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
      }
    },
    
    React.createElement(
      'div',
      {
        style: {
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
        }
      },
      React.createElement('button', {
        onClick: () => setPasCurent(p => Math.max(0, p - 1)),
        disabled: pasCurent === 0,
        style: btnStyle(pasCurent === 0)
      }, 'Înapoi'),
      
      React.createElement('div', {
        style: { fontWeight: 'bold', fontSize: '14px', textAlign: 'center', flex: 1 }
      }, stareaCurenta.titlu),
      
      React.createElement('button', {
        onClick: () => setPasCurent(p => Math.min(pașiAlgoritm.length - 1, p + 1)),
        disabled: pasCurent === pașiAlgoritm.length - 1,
        style: btnStyle(pasCurent === pașiAlgoritm.length - 1)
      }, 'Înainte'),
      
      React.createElement('button', {
        onClick: toggleFullscreen,
        style: fsBtnStyle
      }, isFullscreen ? 'Ieșire ↙' : 'Fullscreen ↗')
    ),

    React.createElement(
      ReactFlow,
      {
        nodes: stareaCurenta.nodes,
        edges: stareaCurenta.edges,
        nodeTypes: nodeTypes,
        fitView: true,
        minZoom: 0.01,
        maxZoom: 1.5,
        nodesDraggable: false,
        proOptions: { hideAttribution: true }
      },
      React.createElement(Background, { color: '#d6d6d6', gap: 18, size: 1 }),
      React.createElement(Controls, null)
    )
  );
}

export default function AVisualizer() {
  return React.createElement(
    ReactFlowProvider,
    null,
    React.createElement(AVisualizerInner, null)
  );
}

/**
 * @param {boolean} d
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