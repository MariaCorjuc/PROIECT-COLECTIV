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
	() => import('./nodes/15')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/dashboard": [~3],
		"/dashboard/A": [4],
		"/dashboard/BFS": [5],
		"/dashboard/DFS": [6],
		"/dashboard/Expectimax": [7],
		"/dashboard/IDA": [8],
		"/dashboard/IDA/Problema1": [9],
		"/dashboard/IDA/Problema2": [10],
		"/dashboard/MINIMAX": [11],
		"/dashboard/RecursiveBFS": [12],
		"/dashboard/UCS": [13],
		"/dashboard/UCS/Problema1": [14],
		"/dashboard/UCS/Problema2": [15]
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