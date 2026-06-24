export const pașiAlgoritm = [
  {
    titlu: "1. Starea inițială: Se adaugă Arad în stivă",
    nodes: [
      { id: 'Arad', type: 'dfsNode', position: { x: 350, y: 30 }, data: { label: 'Arad', info: 'Start (Curent)', isVisited: false, isCurrent: true, isGoal: false } }
    ],
    edges: []
  },
  {
    titlu: "2. Expandare Arad: Alegem primul vecin în ordine alfabetică (Sibiu).",
    nodes: [
      { id: 'Arad', type: 'dfsNode', position: { x: 350, y: 30 }, data: { label: 'Arad', info: 'Vizitat', isVisited: true, isCurrent: false, isGoal: false } },
      { id: 'Sibiu', type: 'dfsNode', position: { x: 100, y: 130 }, data: { label: 'Sibiu', info: 'Curent', isVisited: false, isCurrent: true, isGoal: false } },
      { id: 'Timisoara', type: 'dfsNode', position: { x: 350, y: 130 }, data: { label: 'Timisoara', info: 'În stivă', isVisited: false, isCurrent: false, isGoal: false } },
      { id: 'Zerind', type: 'dfsNode', position: { x: 600, y: 130 }, data: { label: 'Zerind', info: 'În stivă', isVisited: false, isCurrent: false, isGoal: false } }
    ],
    edges: [
      { id: 'e1', source: 'Arad', target: 'Sibiu', type: 'smoothstep', animated: true, style: { stroke: '#0A7E8C', strokeWidth: 2 } },
      { id: 'e2', source: 'Arad', target: 'Timisoara', type: 'smoothstep', style: { stroke: '#b5b5b5', strokeWidth: 1 } },
      { id: 'e3', source: 'Arad', target: 'Zerind', type: 'smoothstep', style: { stroke: '#b5b5b5', strokeWidth: 1 } }
    ]
  },
  {
    titlu: "3. Expandare Sibiu: DFS coboară adânc. Primul vecin alfabetic este Făgăraș.",
    nodes: [
      { id: 'Arad', type: 'dfsNode', position: { x: 350, y: 30 }, data: { label: 'Arad', info: 'Vizitat', isVisited: true, isCurrent: false, isGoal: false } },
      { id: 'Sibiu', type: 'dfsNode', position: { x: 100, y: 130 }, data: { label: 'Sibiu', info: 'Vizitat', isVisited: true, isCurrent: false, isGoal: false } },
      { id: 'Timisoara', type: 'dfsNode', position: { x: 350, y: 130 }, data: { label: 'Timisoara', info: 'În stivă', isVisited: false, isCurrent: false, isGoal: false } },
      { id: 'Zerind', type: 'dfsNode', position: { x: 600, y: 130 }, data: { label: 'Zerind', info: 'În stivă', isVisited: false, isCurrent: false, isGoal: false } },
      { id: 'Fagaras', type: 'dfsNode', position: { x: -50, y: 230 }, data: { label: 'Fagaras', info: 'Curent', isVisited: false, isCurrent: true, isGoal: false } },
      { id: 'Oradea', type: 'dfsNode', position: { x: 100, y: 230 }, data: { label: 'Oradea', info: 'În stivă', isVisited: false, isCurrent: false, isGoal: false } },
      { id: 'Rimnicu', type: 'dfsNode', position: { x: 250, y: 230 }, data: { label: 'Rimnicu Vilcea', info: 'În stivă', isVisited: false, isCurrent: false, isGoal: false } }
    ],
    edges: [
      { id: 'e1', source: 'Arad', target: 'Sibiu', type: 'smoothstep', style: { stroke: '#0A7E8C', strokeWidth: 2 } },
      { id: 'e2', source: 'Arad', target: 'Timisoara', type: 'smoothstep', style: { stroke: '#b5b5b5', strokeWidth: 1 } },
      { id: 'e3', source: 'Arad', target: 'Zerind', type: 'smoothstep', style: { stroke: '#b5b5b5', strokeWidth: 1 } },
      { id: 'e4', source: 'Sibiu', target: 'Fagaras', type: 'smoothstep', animated: true, style: { stroke: '#0A7E8C', strokeWidth: 2 } },
      { id: 'e5', source: 'Sibiu', target: 'Oradea', type: 'smoothstep', style: { stroke: '#b5b5b5', strokeWidth: 1 } },
      { id: 'e6', source: 'Sibiu', target: 'Rimnicu', type: 'smoothstep', style: { stroke: '#b5b5b5', strokeWidth: 1 } }
    ]
  },
  {
    titlu: "4. Expandare Făgăraș: Descoperim vecinul Bucharest (Destinația)!",
    nodes: [
      { id: 'Arad', type: 'dfsNode', position: { x: 350, y: 30 }, data: { label: 'Arad', info: 'Vizitat', isVisited: true, isCurrent: false, isGoal: false } },
      { id: 'Sibiu', type: 'dfsNode', position: { x: 100, y: 130 }, data: { label: 'Sibiu', info: 'Vizitat', isVisited: true, isCurrent: false, isGoal: false } },
      { id: 'Timisoara', type: 'dfsNode', position: { x: 350, y: 130 }, data: { label: 'Timisoara', info: 'În stivă', isVisited: false, isCurrent: false, isGoal: false } },
      { id: 'Zerind', type: 'dfsNode', position: { x: 600, y: 130 }, data: { label: 'Zerind', info: 'În stivă', isVisited: false, isCurrent: false, isGoal: false } },
      { id: 'Fagaras', type: 'dfsNode', position: { x: -50, y: 230 }, data: { label: 'Fagaras', info: 'Vizitat', isVisited: true, isCurrent: false, isGoal: false } },
      { id: 'Oradea', type: 'dfsNode', position: { x: 100, y: 230 }, data: { label: 'Oradea', info: 'În stivă', isVisited: false, isCurrent: false, isGoal: false } },
      { id: 'Rimnicu', type: 'dfsNode', position: { x: 250, y: 230 }, data: { label: 'Rimnicu Vilcea', info: 'În stivă', isVisited: false, isCurrent: false, isGoal: false } },
      { id: 'Bucharest', type: 'dfsNode', position: { x: -50, y: 330 }, data: { label: 'Bucharest', info: 'Destinație Găsită!', isVisited: false, isCurrent: true, isGoal: true } }
    ],
    edges: [
      { id: 'e1', source: 'Arad', target: 'Sibiu', type: 'smoothstep', style: { stroke: '#0A7E8C', strokeWidth: 2 } },
      { id: 'e2', source: 'Arad', target: 'Timisoara', type: 'smoothstep', style: { stroke: '#b5b5b5', strokeWidth: 1 } },
      { id: 'e3', source: 'Arad', target: 'Zerind', type: 'smoothstep', style: { stroke: '#b5b5b5', strokeWidth: 1 } },
      { id: 'e4', source: 'Sibiu', target: 'Fagaras', type: 'smoothstep', style: { stroke: '#0A7E8C', strokeWidth: 2 } },
      { id: 'e5', source: 'Sibiu', target: 'Oradea', type: 'smoothstep', style: { stroke: '#b5b5b5', strokeWidth: 1 } },
      { id: 'e6', source: 'Sibiu', target: 'Rimnicu', type: 'smoothstep', style: { stroke: '#b5b5b5', strokeWidth: 1 } },
      { id: 'e7', source: 'Fagaras', target: 'Bucharest', type: 'smoothstep', animated: true, style: { stroke: '#0A7E8C', strokeWidth: 2 } }
    ]
  },
  {
    titlu: "Final: Algoritmul DFS a atins starea obiectiv. Drumul găsit: Arad -> Sibiu -> Făgăraș -> Bucharest.",
    nodes: [
      { id: 'Arad', type: 'dfsNode', position: { x: 350, y: 30 }, data: { label: 'Arad', info: 'Start', isVisited: true, isCurrent: false, isGoal: false } },
      { id: 'Sibiu', type: 'dfsNode', position: { x: 100, y: 130 }, data: { label: 'Sibiu', info: 'Pas 1', isVisited: true, isCurrent: false, isGoal: false } },
      { id: 'Timisoara', type: 'dfsNode', position: { x: 350, y: 130 }, data: { label: 'Timisoara', info: 'Neexplorat', isVisited: false, isCurrent: false, isGoal: false } },
      { id: 'Zerind', type: 'dfsNode', position: { x: 600, y: 130 }, data: { label: 'Zerind', info: 'Neexplorat', isVisited: false, isCurrent: false, isGoal: false } },
      { id: 'Fagaras', type: 'dfsNode', position: { x: -50, y: 230 }, data: { label: 'Fagaras', info: 'Pas 2', isVisited: true, isCurrent: false, isGoal: false } },
      { id: 'Oradea', type: 'dfsNode', position: { x: 100, y: 230 }, data: { label: 'Oradea', info: 'Neexplorat', isVisited: false, isCurrent: false, isGoal: false } },
      { id: 'Rimnicu', type: 'dfsNode', position: { x: 250, y: 230 }, data: { label: 'Rimnicu Vilcea', info: 'Neexplorat', isVisited: false, isCurrent: false, isGoal: false } },
      { id: 'Bucharest', type: 'dfsNode', position: { x: -50, y: 330 }, data: { label: 'Bucharest', info: 'SCOP ATINS', isVisited: false, isCurrent: false, isGoal: true } }
    ],
    edges: [
      { id: 'e1', source: 'Arad', target: 'Sibiu', type: 'smoothstep', style: { stroke: '#0A7E8C', strokeWidth: 4 } },
      { id: 'e2', source: 'Arad', target: 'Timisoara', type: 'smoothstep', style: { stroke: '#e0e0e0', strokeWidth: 1 } },
      { id: 'e3', source: 'Arad', target: 'Zerind', type: 'smoothstep', style: { stroke: '#e0e0e0', strokeWidth: 1 } },
      { id: 'e4', source: 'Sibiu', target: 'Fagaras', type: 'smoothstep', style: { stroke: '#0A7E8C', strokeWidth: 4 } },
      { id: 'e5', source: 'Sibiu', target: 'Oradea', type: 'smoothstep', style: { stroke: '#e0e0e0', strokeWidth: 1 } },
      { id: 'e6', source: 'Sibiu', target: 'Rimnicu', type: 'smoothstep', style: { stroke: '#e0e0e0', strokeWidth: 1 } },
      { id: 'e7', source: 'Fagaras', target: 'Bucharest', type: 'smoothstep', style: { stroke: '#0A7E8C', strokeWidth: 4 } }
    ]
  }
];