import React, { useState, useEffect, useRef } from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';

const bfsSteps = [
  {
    nodes: [
      { id: 'bucuresti', data: { label: 'Bucuresti (Start)' }, position: { x: 400, y: 50 }, style: { background: '#93c5fd' } }
    ],
    edges: []
  },
  {
    nodes: [
      { id: 'bucuresti', data: { label: 'Bucuresti' }, position: { x: 400, y: 50 }, style: { background: '#cbd5e1' } },
      { id: 'buzau', data: { label: 'Buzau' }, position: { x: 200, y: 150 }, style: { background: '#93c5fd' } },
      { id: 'pitesti', data: { label: 'Pitesti' }, position: { x: 400, y: 150 }, style: { background: '#93c5fd' } },
      { id: 'targoviste', data: { label: 'Targoviste' }, position: { x: 600, y: 150 }, style: { background: '#93c5fd' } }
    ],
    edges: [
      { id: 'b-bu', source: 'bucuresti', target: 'buzau' },
      { id: 'b-p', source: 'bucuresti', target: 'pitesti' },
      { id: 'b-t', source: 'bucuresti', target: 'targoviste' }
    ]
  },
  {
    nodes: [
      { id: 'bucuresti', data: { label: 'Bucuresti' }, position: { x: 400, y: 50 }, style: { background: '#cbd5e1' } },
      { id: 'buzau', data: { label: 'Buzau (Expandat)' }, position: { x: 200, y: 150 }, style: { background: '#cbd5e1' } },
      { id: 'pitesti', data: { label: 'Pitesti' }, position: { x: 400, y: 150 }, style: { background: '#93c5fd' } },
      { id: 'targoviste', data: { label: 'Targoviste' }, position: { x: 600, y: 150 }, style: { background: '#93c5fd' } }
    ],
    edges: [
      { id: 'b-bu', source: 'bucuresti', target: 'buzau', animated: true },
      { id: 'b-p', source: 'bucuresti', target: 'pitesti' },
      { id: 'b-t', source: 'bucuresti', target: 'targoviste' }
    ]
  }
];

export default function BfsVisualizer() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  /** @type {React.MutableRefObject<number | null>} */
  const timerRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = window.setInterval(() => {
        setCurrentStep((prev) => {
          if (prev < bfsSteps.length - 1) {
            return prev + 1;
          } else {
            if (timerRef.current !== null) {
              clearInterval(timerRef.current);
              timerRef.current = null;
            }
            setIsPlaying(false);
            return prev;
          }
        });
      }, 1500);
    } else {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isPlaying]);

  const handleNext = () => {
    if (currentStep < bfsSteps.length - 1) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      <div style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>
        <button onClick={handleBack} disabled={currentStep === 0} style={btnStyle}>
          Back
        </button>

        {isPlaying ? (
          <button onClick={() => setIsPlaying(false)} style={btnStyle}>
            Pause
          </button>
        ) : (
          <button
            onClick={() => setIsPlaying(true)}
            disabled={currentStep === bfsSteps.length - 1}
            style={btnStyle}
          >
            Play
          </button>
        )}

        <button
          onClick={handleNext}
          disabled={currentStep === bfsSteps.length - 1}
          style={btnStyle}
        >
          Next
        </button>

        <button onClick={handleRestart} style={btnStyle}>
          Restart
        </button>
      </div>

      <div style={{ fontWeight: 'bold', marginBottom: '10px', color: '#4b5563' }}>
        Pasul: {currentStep} / {bfsSteps.length - 1}
      </div>

      <div style={{ width: '100%', height: '450px', border: '2px solid #e2e8f0', borderRadius: '8px', background: '#f8fafc' }}>
        <ReactFlow
          nodes={bfsSteps[currentStep].nodes}
          edges={bfsSteps[currentStep].edges}
          fitView
        >
          <Background color="#cbd5e1" gap={16} />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}

const btnStyle = {
  padding: '8px 16px',
  fontSize: '16px',
  cursor: 'pointer',
  backgroundColor: '#0A7E8C',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  fontWeight: 'bold'
};