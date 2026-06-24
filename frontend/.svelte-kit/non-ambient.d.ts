
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/dashboard" | "/dashboard/A" | "/dashboard/A/problema1" | "/dashboard/A/problema2" | "/dashboard/BFS" | "/dashboard/BFS/probleme" | "/dashboard/DFS" | "/dashboard/DFS/problema1" | "/dashboard/DFS/problema2" | "/dashboard/Expectimax" | "/dashboard/Expectimax/probleme" | "/dashboard/IDA" | "/dashboard/IDA/Problema1" | "/dashboard/IDA/Problema2" | "/dashboard/Minimax" | "/dashboard/Minimax/problema1" | "/dashboard/Minimax/problema2" | "/dashboard/RecursiveBFS" | "/dashboard/RecursiveBFS/problema1" | "/dashboard/RecursiveBFS/problema2" | "/dashboard/UCS" | "/dashboard/UCS/Problema1" | "/dashboard/UCS/Problema2" | "/login";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/dashboard": Record<string, never>;
			"/dashboard/A": Record<string, never>;
			"/dashboard/A/problema1": Record<string, never>;
			"/dashboard/A/problema2": Record<string, never>;
			"/dashboard/BFS": Record<string, never>;
			"/dashboard/BFS/probleme": Record<string, never>;
			"/dashboard/DFS": Record<string, never>;
			"/dashboard/DFS/problema1": Record<string, never>;
			"/dashboard/DFS/problema2": Record<string, never>;
			"/dashboard/Expectimax": Record<string, never>;
			"/dashboard/Expectimax/probleme": Record<string, never>;
			"/dashboard/IDA": Record<string, never>;
			"/dashboard/IDA/Problema1": Record<string, never>;
			"/dashboard/IDA/Problema2": Record<string, never>;
			"/dashboard/Minimax": Record<string, never>;
			"/dashboard/Minimax/problema1": Record<string, never>;
			"/dashboard/Minimax/problema2": Record<string, never>;
			"/dashboard/RecursiveBFS": Record<string, never>;
			"/dashboard/RecursiveBFS/problema1": Record<string, never>;
			"/dashboard/RecursiveBFS/problema2": Record<string, never>;
			"/dashboard/UCS": Record<string, never>;
			"/dashboard/UCS/Problema1": Record<string, never>;
			"/dashboard/UCS/Problema2": Record<string, never>;
			"/login": Record<string, never>
		};
		Pathname(): "/" | "/dashboard" | "/dashboard/A" | "/dashboard/A/problema1" | "/dashboard/A/problema2" | "/dashboard/BFS" | "/dashboard/BFS/probleme" | "/dashboard/DFS" | "/dashboard/DFS/problema1" | "/dashboard/DFS/problema2" | "/dashboard/Expectimax" | "/dashboard/Expectimax/probleme" | "/dashboard/IDA" | "/dashboard/IDA/Problema1" | "/dashboard/IDA/Problema2" | "/dashboard/Minimax" | "/dashboard/Minimax/problema1" | "/dashboard/Minimax/problema2" | "/dashboard/RecursiveBFS" | "/dashboard/RecursiveBFS/problema1" | "/dashboard/RecursiveBFS/problema2" | "/dashboard/UCS" | "/dashboard/UCS/Problema1" | "/dashboard/UCS/Problema2";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/poze/AEX2.png" | "/poze/Astar.png" | "/poze/BFS.png" | "/poze/euristica.png" | "/poze/ex2_UCS.jpg" | "/poze/expectimax.png" | "/poze/harta+euristica.png" | "/poze/harta.png" | "/poze/logo.png" | "/poze/logo2.png" | "/poze/poza_ex1_UCS.jpg" | "/poze/problema_1_ida.png" | "/poze/problema_2_ida.jpg" | "/poze/problema_2_ucs.png" | "/robots.txt" | string & {};
	}
}