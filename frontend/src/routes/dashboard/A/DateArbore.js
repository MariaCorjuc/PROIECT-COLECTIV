export const pașiAlgoritm = [
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
      { id: 'Fagaras', type: 'aStarNode', position: { x: 50, y: 260 }, data: { label: 'Fagaras', f: '415', g: '239', h: '176', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Oradea', type: 'aStarNode', position: { x: 200, y: 260 }, data: { label: 'Oradea', f: '671', g: '291', h: '380', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Rimnicu', type: 'aStarNode', position: { x: 350, y: 260 }, data: { label: 'Rimnicu Vilcea', f: '413', g: '220', h: '193', isExpanded: true, isCurrent: false, isGoal: false } },
      { id: 'Craiova', type: 'aStarNode', position: { x: 230, y: 380 }, data: { label: 'Craiova', f: '526', g: '366', h: '160', isExpanded: false, isCurrent: false, isGoal: false } },
      { id: 'Pitesti', type: 'aStarNode', position: { x: 370, y: 380 }, data: { label: 'Pitesti', f: '417', g: '317', h: '100', isExpanded: true, isCurrent: false, isGoal: false } },
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