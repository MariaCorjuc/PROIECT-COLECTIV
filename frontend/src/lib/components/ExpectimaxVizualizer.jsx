// @ts-nocheck
import React, { useState } from 'react';

export default function ExpectimaxVisualizer() {
  const leaves = [
    3, 12, 8,  2, 4, 6,  14, 5, 2,  
    4, 21, 1,  3, 12, 5,  6, 1, 1,  
    2, 3, 5,   5, 6, 9,   1, 4, 5   
  ];

  const [level2Values, setLevel2Values] = useState(Array(9).fill('MAX'));
  const [level1Values, setLevel1Values] = useState(Array(3).fill('CHANCE'));
  const [rootValue, setRootValue] = useState('MAX');

  function startExpectimax() {
    const computedLevel2 = []; 
    for (let i = 0; i < leaves.length; i += 3) {
      const group = leaves.slice(i, i + 3);
      computedLevel2.push(Math.max(...group));
    }

    const computedLevel1 = []; 
    for (let i = 0; i < computedLevel2.length; i += 3) {
      const group = computedLevel2.slice(i, i + 3);
      const average = group.reduce((sum, val) => sum + val, 0) / group.length;
      computedLevel1.push(Number(average.toFixed(2))); 
    }
    const computedRoot = Math.max(...computedLevel1);

    setTimeout(() => {
      setLevel2Values(computedLevel2.map(String));
    }, 1500);

    setTimeout(() => {
      setLevel1Values(computedLevel1.map(String));
    }, 3500);

    setTimeout(() => {
      setRootValue(String(computedRoot));
    }, 5500);
  }

  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={startExpectimax}>
        ▶ Start Expectimax
      </button>

      <div style={styles.level}>
        <div style={styles.maxRootNode}>
          <div style={styles.label}>MAX</div>
          {rootValue}
        </div>
      </div>

      <div style={styles.levelGroup}>
        {level1Values.map((val, idx) => (
          <div key={idx} style={styles.chanceNode}>
            <div style={styles.label}>CHANCE</div>
            {val}
          </div>
        ))}
      </div>

      <div style={styles.levelGroup}>
        {level2Values.map((val, idx) => (
          <div key={idx} style={styles.maxSubNode}>
            <div style={styles.label}>MAX</div>
            {val}
          </div>
        ))}
      </div>

      <div style={styles.leavesGrid}>
        {leaves.map((val, idx) => (
          <div key={idx} style={styles.valueNode}>
            {val}
          </div>
        ))} 
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '40px',
    padding: '30px 10px',
    fontFamily: 'sans-serif',
    backgroundColor: '#f5f7fa',
    borderRadius: '12px'
  },
  button: {
    padding: '15px 30px',
    fontSize: '18px',
    background: '#023e8a',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  },
  level: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  levelGroup: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    maxWidth: '1200px',
    padding: '0 20px'
  },
  leavesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(27, 1fr)',
    gap: '4px',
    width: '100%',
    maxWidth: '1300px',
    padding: '0 10px'
  },
  maxRootNode: {
    width: '110px',
    height: '110px',
    borderRadius: '8px',
    background: '#0077b6',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '24px',
    transition: 'all 0.5s ease',
    boxShadow: '0 4px 8px rgba(0,0,0,0.15)'
  },
  chanceNode: {
    width: '90px',
    height: '90px',
    borderRadius: '50%',
    background: '#ffd166',
    color: '#073b4c',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '18px',
    transition: 'all 0.5s ease',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  },
  maxSubNode: {
    width: '75px',
    height: '75px',
    borderRadius: '8px',
    background: '#00b4d8',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '16px',
    transition: 'all 0.5s ease',
    boxShadow: '0 3px 5px rgba(0,0,0,0.1)'
  },
  valueNode: {
    height: '45px',
    borderRadius: '4px',
    background: '#06d6a0',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '14px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  },
  label: {
    fontSize: '10px',
    opacity: 0.8,
    marginBottom: '4px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }
};