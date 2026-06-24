export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/dashboard": [~3],
		"/dashboard/A": [4],
		"/dashboard/A/problema1": [5],
		"/dashboard/A/problema2": [6],
		"/dashboard/BFS": [7],
		"/dashboard/BFS/probleme": [8],
		"/dashboard/DFS": [9],
		"/dashboard/DFS/problema1": [10],
		"/dashboard/DFS/problema2": [11],
		"/dashboard/Expectimax": [12],
		"/dashboard/Expectimax/probleme": [13],
		"/dashboard/IDA": [14],
		"/dashboard/IDA/Problema1": [15],
		"/dashboard/IDA/Problema2": [16],
		"/dashboard/Minimax": [17],
		"/dashboard/Minimax/problema1": [18],
		"/dashboard/Minimax/problema2": [19],
		"/dashboard/RecursiveBFS": [20],
		"/dashboard/RecursiveBFS/problema1": [21],
		"/dashboard/RecursiveBFS/problema2": [22],
		"/dashboard/UCS": [23],
		"/dashboard/UCS/Problema1": [24],
		"/dashboard/UCS/Problema2": [25]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));
export const encoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.encode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';