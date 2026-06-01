export const pașiAlgoritm = [
  {
    titlu: "1. Starea inițială (Arad)",
    nodes: [
      { id: 'Arad', type: 'rbfsNode', position: { x: 400, y: 30 }, data: { label: 'Arad', f: '366', fLimit: '∞', isExpanded: false, isCurrent: true, isGoal: false } }
    ],
    edges: []
  },
  {
    titlu: "2. Extinderea Arad (Limită: ∞). Sibiu este cel mai promițător (393).",
    nodes: [
      { id: 'Arad', type: 'rbfsNode', position: { x: 400, y: 30 }, data: { label: 'Arad', f: '366', fLimit: '∞', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Sibiu', type: 'rbfsNode', position: { x: 200, y: 130 }, data: { label: 'Sibiu', f: '393', isExpanded: false, isCurrent: true, isGoal: false } },
      { id: 'Timisoara', type: 'rbfsNode', position: { x: 550, y: 130 }, data: { label: 'Timisoara', f: '447', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Zerind', type: 'rbfsNode', position: { x: 750, y: 130 }, data: { label: 'Zerind', f: '449', isExpanded: false, isCurrent: false, isGoal: false } }
    ],
    edges: [
      { id: 'e1', source: 'Arad', target: 'Sibiu', type: 'smoothstep' },
      { id: 'e2', source: 'Arad', target: 'Timisoara', type: 'smoothstep' },
      { id: 'e3', source: 'Arad', target: 'Zerind', type: 'smoothstep' }
    ]
  },
  {
    titlu: "3. Extinderea Sibiu. Noua limită este 447 (moștenită de la Timișoara). Râmnicu Vâlcea (413) e cel mai bun.",
    nodes: [
      { id: 'Arad', type: 'rbfsNode', position: { x: 400, y: 30 }, data: { label: 'Arad', f: '366', fLimit: '∞', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Sibiu', type: 'rbfsNode', position: { x: 200, y: 130 }, data: { label: 'Sibiu', f: '393', fLimit: '447', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Timisoara', type: 'rbfsNode', position: { x: 550, y: 130 }, data: { label: 'Timisoara', f: '447', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Zerind', type: 'rbfsNode', position: { x: 750, y: 130 }, data: { label: 'Zerind', f: '449', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Arad2', type: 'rbfsNode', position: { x: 0, y: 230 }, data: { label: 'Arad', f: '646', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Fagaras', type: 'rbfsNode', position: { x: 150, y: 230 }, data: { label: 'Fagaras', f: '415', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Oradea', type: 'rbfsNode', position: { x: 300, y: 230 }, data: { label: 'Oradea', f: '671', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Rimnicu', type: 'rbfsNode', position: { x: 450, y: 230 }, data: { label: 'Rimnicu Vilcea', f: '413', isExpanded: false, isCurrent: true, isGoal: false } }
    ],
    edges: [
      { id: 'e1', source: 'Arad', target: 'Sibiu', type: 'smoothstep' }, { id: 'e2', source: 'Arad', target: 'Timisoara', type: 'smoothstep' }, { id: 'e3', source: 'Arad', target: 'Zerind', type: 'smoothstep' },
      { id: 'e4', source: 'Sibiu', target: 'Arad2', type: 'smoothstep' }, { id: 'e5', source: 'Sibiu', target: 'Fagaras', type: 'smoothstep' }, { id: 'e6', source: 'Sibiu', target: 'Oradea', type: 'smoothstep' }, { id: 'e7', source: 'Sibiu', target: 'Rimnicu', type: 'smoothstep' }
    ]
  },
  {
    titlu: "(a) Extinderea Râmnicu Vâlcea. Noua limită e 415 (moștenită de la Făgăraș). Toți descendenții depășesc limita.",
    nodes: [
      { id: 'Arad', type: 'rbfsNode', position: { x: 400, y: 30 }, data: { label: 'Arad', f: '366', fLimit: '∞', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Sibiu', type: 'rbfsNode', position: { x: 200, y: 130 }, data: { label: 'Sibiu', f: '393', fLimit: '447', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Timisoara', type: 'rbfsNode', position: { x: 550, y: 130 }, data: { label: 'Timisoara', f: '447', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Zerind', type: 'rbfsNode', position: { x: 750, y: 130 }, data: { label: 'Zerind', f: '449', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Arad2', type: 'rbfsNode', position: { x: 0, y: 230 }, data: { label: 'Arad', f: '646', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Fagaras', type: 'rbfsNode', position: { x: 150, y: 230 }, data: { label: 'Fagaras', f: '415', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Oradea', type: 'rbfsNode', position: { x: 300, y: 230 }, data: { label: 'Oradea', f: '671', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Rimnicu', type: 'rbfsNode', position: { x: 450, y: 230 }, data: { label: 'Rimnicu Vilcea', f: '413', fLimit: '415', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Craiova', type: 'rbfsNode', position: { x: 300, y: 330 }, data: { label: 'Craiova', f: '526', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Pitesti', type: 'rbfsNode', position: { x: 450, y: 330 }, data: { label: 'Pitesti', f: '417', isExpanded: false, isCurrent: true, isGoal: false } },
      { id: 'Sibiu2', type: 'rbfsNode', position: { x: 600, y: 330 }, data: { label: 'Sibiu', f: '553', isExpanded: false, isCurrent: false, isGoal: false } }
    ],
    edges: [
      { id: 'e1', source: 'Arad', target: 'Sibiu', type: 'smoothstep' }, { id: 'e2', source: 'Arad', target: 'Timisoara', type: 'smoothstep' }, { id: 'e3', source: 'Arad', target: 'Zerind', type: 'smoothstep' },
      { id: 'e4', source: 'Sibiu', target: 'Arad2', type: 'smoothstep' }, { id: 'e5', source: 'Sibiu', target: 'Fagaras', type: 'smoothstep' }, { id: 'e6', source: 'Sibiu', target: 'Oradea', type: 'smoothstep' }, { id: 'e7', source: 'Sibiu', target: 'Rimnicu', type: 'smoothstep' },
      { id: 'e8', source: 'Rimnicu', target: 'Craiova', type: 'smoothstep' }, { id: 'e9', source: 'Rimnicu', target: 'Pitesti', type: 'smoothstep' }, { id: 'e10', source: 'Rimnicu', target: 'Sibiu2', type: 'smoothstep' }
    ]
  },
  {
    titlu: "(b) Întoarcere (Unwind) la Sibiu. Actualizare Râmnicu la 417. Extindere Făgăraș (Limită: 417 moștenită de la Râmnicu).",
    nodes: [
      { id: 'Arad', type: 'rbfsNode', position: { x: 400, y: 30 }, data: { label: 'Arad', f: '366', fLimit: '∞', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Sibiu', type: 'rbfsNode', position: { x: 200, y: 130 }, data: { label: 'Sibiu', f: '393', fLimit: '447', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Timisoara', type: 'rbfsNode', position: { x: 550, y: 130 }, data: { label: 'Timisoara', f: '447', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Zerind', type: 'rbfsNode', position: { x: 750, y: 130 }, data: { label: 'Zerind', f: '449', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Arad2', type: 'rbfsNode', position: { x: 0, y: 230 }, data: { label: 'Arad', f: '646', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Fagaras', type: 'rbfsNode', position: { x: 150, y: 230 }, data: { label: 'Fagaras', f: '415', fLimit: '417', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Oradea', type: 'rbfsNode', position: { x: 300, y: 230 }, data: { label: 'Oradea', f: '671', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Rimnicu', type: 'rbfsNode', position: { x: 450, y: 230 }, data: { label: 'Rimnicu Vilcea', f: '417', oldF: '413', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Sibiu3', type: 'rbfsNode', position: { x: 50, y: 330 }, data: { label: 'Sibiu', f: '591', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Bucharest1', type: 'rbfsNode', position: { x: 200, y: 330 }, data: { label: 'Bucharest', f: '450', isExpanded: false, isCurrent: true, isGoal: false } }
    ],
    edges: [
      { id: 'e1', source: 'Arad', target: 'Sibiu', type: 'smoothstep' }, { id: 'e2', source: 'Arad', target: 'Timisoara', type: 'smoothstep' }, { id: 'e3', source: 'Arad', target: 'Zerind', type: 'smoothstep' },
      { id: 'e4', source: 'Sibiu', target: 'Arad2', type: 'smoothstep' }, { id: 'e5', source: 'Sibiu', target: 'Fagaras', type: 'smoothstep' }, { id: 'e6', source: 'Sibiu', target: 'Oradea', type: 'smoothstep' }, { id: 'e7', source: 'Sibiu', target: 'Rimnicu', type: 'smoothstep' },
      { id: 'e11', source: 'Fagaras', target: 'Sibiu3', type: 'smoothstep' }, { id: 'e12', source: 'Fagaras', target: 'Bucharest1', type: 'smoothstep' }
    ]
  },
  {
    titlu: "(c) Întoarcere la Sibiu. Actualizare Făgăraș la 450. Comutare înapoi la Râmnicu și extindere Pitești.",
    nodes: [
      { id: 'Arad', type: 'rbfsNode', position: { x: 400, y: 30 }, data: { label: 'Arad', f: '366', fLimit: '∞', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Sibiu', type: 'rbfsNode', position: { x: 200, y: 130 }, data: { label: 'Sibiu', f: '393', fLimit: '447', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Timisoara', type: 'rbfsNode', position: { x: 550, y: 130 }, data: { label: 'Timisoara', f: '447', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Zerind', type: 'rbfsNode', position: { x: 750, y: 130 }, data: { label: 'Zerind', f: '449', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Arad2', type: 'rbfsNode', position: { x: 0, y: 230 }, data: { label: 'Arad', f: '646', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Fagaras', type: 'rbfsNode', position: { x: 150, y: 230 }, data: { label: 'Fagaras', f: '450', oldF: '415', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Oradea', type: 'rbfsNode', position: { x: 300, y: 230 }, data: { label: 'Oradea', f: '671', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Rimnicu', type: 'rbfsNode', position: { x: 450, y: 230 }, data: { label: 'Rimnicu Vilcea', f: '417', fLimit: '447', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Craiova', type: 'rbfsNode', position: { x: 300, y: 330 }, data: { label: 'Craiova', f: '526', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Pitesti', type: 'rbfsNode', position: { x: 450, y: 330 }, data: { label: 'Pitesti', f: '417', fLimit: '447', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Sibiu2', type: 'rbfsNode', position: { x: 600, y: 330 }, data: { label: 'Sibiu', f: '553', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Bucharest2', type: 'rbfsNode', position: { x: 300, y: 430 }, data: { label: 'Bucharest', f: '418', isExpanded: false, isCurrent: true, isGoal: false } },
      { id: 'Craiova2', type: 'rbfsNode', position: { x: 450, y: 430 }, data: { label: 'Craiova', f: '615', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Rimnicu2', type: 'rbfsNode', position: { x: 600, y: 430 }, data: { label: 'Rimnicu Vilcea', f: '607', isExpanded: false, isCurrent: false, isGoal: false } }
    ],
    edges: [
      { id: 'e1', source: 'Arad', target: 'Sibiu', type: 'smoothstep' }, { id: 'e2', source: 'Arad', target: 'Timisoara', type: 'smoothstep' }, { id: 'e3', source: 'Arad', target: 'Zerind', type: 'smoothstep' },
      { id: 'e4', source: 'Sibiu', target: 'Arad2', type: 'smoothstep' }, { id: 'e5', source: 'Sibiu', target: 'Fagaras', type: 'smoothstep' }, { id: 'e6', source: 'Sibiu', target: 'Oradea', type: 'smoothstep' }, { id: 'e7', source: 'Sibiu', target: 'Rimnicu', type: 'smoothstep' },
      { id: 'e8', source: 'Rimnicu', target: 'Craiova', type: 'smoothstep' }, { id: 'e9', source: 'Rimnicu', target: 'Pitesti', type: 'smoothstep' }, { id: 'e10', source: 'Rimnicu', target: 'Sibiu2', type: 'smoothstep' },
      { id: 'e13', source: 'Pitesti', target: 'Bucharest2', type: 'smoothstep' }, { id: 'e14', source: 'Pitesti', target: 'Craiova2', type: 'smoothstep' }, { id: 'e15', source: 'Pitesti', target: 'Rimnicu2', type: 'smoothstep' }
    ]
  },
  {
    titlu: "Final: București (f=418) este selectat. f=418 este mai mic decât limita 447. Soluție găsită!",
    nodes: [
      { id: 'Arad', type: 'rbfsNode', position: { x: 400, y: 30 }, data: { label: 'Arad', f: '366', fLimit: '∞', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Sibiu', type: 'rbfsNode', position: { x: 200, y: 130 }, data: { label: 'Sibiu', f: '393', fLimit: '447', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Timisoara', type: 'rbfsNode', position: { x: 550, y: 130 }, data: { label: 'Timisoara', f: '447', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Zerind', type: 'rbfsNode', position: { x: 750, y: 130 }, data: { label: 'Zerind', f: '449', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Arad2', type: 'rbfsNode', position: { x: 0, y: 230 }, data: { label: 'Arad', f: '646', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Fagaras', type: 'rbfsNode', position: { x: 150, y: 230 }, data: { label: 'Fagaras', f: '450', oldF: '415', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Oradea', type: 'rbfsNode', position: { x: 300, y: 230 }, data: { label: 'Oradea', f: '671', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Rimnicu', type: 'rbfsNode', position: { x: 450, y: 230 }, data: { label: 'Rimnicu Vilcea', f: '417', fLimit: '447', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Craiova', type: 'rbfsNode', position: { x: 300, y: 330 }, data: { label: 'Craiova', f: '526', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Pitesti', type: 'rbfsNode', position: { x: 450, y: 330 }, data: { label: 'Pitesti', f: '417', fLimit: '447', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Sibiu2', type: 'rbfsNode', position: { x: 600, y: 330 }, data: { label: 'Sibiu', f: '553', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Bucharest2', type: 'rbfsNode', position: { x: 300, y: 430 }, data: { label: 'Bucharest', f: '418', isExpanded: false, isCurrent: false, isGoal: true } },
      { id: 'Craiova2', type: 'rbfsNode', position: { x: 450, y: 430 }, data: { label: 'Craiova', f: '615', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Rimnicu2', type: 'rbfsNode', position: { x: 600, y: 430 }, data: { label: 'Rimnicu Vilcea', f: '607', isExpanded: false, isCurrent: false, isGoal: false } }
    ],
    edges: [
      { id: 'e1', source: 'Arad', target: 'Sibiu', type: 'smoothstep', style: { stroke: '#0A7E8C', strokeWidth: 3 } }, { id: 'e2', source: 'Arad', target: 'Timisoara', type: 'smoothstep' }, { id: 'e3', source: 'Arad', target: 'Zerind', type: 'smoothstep' },
      { id: 'e4', source: 'Sibiu', target: 'Arad2', type: 'smoothstep' }, { id: 'e5', source: 'Sibiu', target: 'Fagaras', type: 'smoothstep' }, { id: 'e6', source: 'Sibiu', target: 'Oradea', type: 'smoothstep' }, { id: 'e7', source: 'Sibiu', target: 'Rimnicu', type: 'smoothstep', style: { stroke: '#0A7E8C', strokeWidth: 3 } },
      { id: 'e8', source: 'Rimnicu', target: 'Craiova', type: 'smoothstep' }, { id: 'e9', source: 'Rimnicu', target: 'Pitesti', type: 'smoothstep', style: { stroke: '#0A7E8C', strokeWidth: 3 } }, { id: 'e10', source: 'Rimnicu', target: 'Sibiu2', type: 'smoothstep' },
      { id: 'e13', source: 'Pitesti', target: 'Bucharest2', type: 'smoothstep', style: { stroke: '#0A7E8C', strokeWidth: 3 } }, { id: 'e14', source: 'Pitesti', target: 'Craiova2', type: 'smoothstep' }, { id: 'e15', source: 'Pitesti', target: 'Rimnicu2', type: 'smoothstep' }
    ]
  }
];