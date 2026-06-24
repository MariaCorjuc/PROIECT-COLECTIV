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
	() => import('./nodes/19')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/dashboard": [~3],
		"/dashboard/A": [4],
		"/dashboard/A/problema1": [5],
		"/dashboard/A/problema2": [6],
		"/dashboard/BFS": [7],
		"/dashboard/DFS": [8],
		"/dashboard/Expectimax": [9],
		"/dashboard/IDA": [10],
		"/dashboard/IDA/Problema1": [11],
		"/dashboard/IDA/Problema2": [12],
		"/dashboard/Minimax": [13],
		"/dashboard/RecursiveBFS": [14],
		"/dashboard/RecursiveBFS/problema1": [15],
		"/dashboard/RecursiveBFS/problema2": [16],
		"/dashboard/UCS": [17],
		"/dashboard/UCS/Problema1": [18],
		"/dashboard/UCS/Problema2": [19]
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