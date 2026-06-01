
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
		RouteId(): "/" | "/dashboard" | "/dashboard/A" | "/dashboard/BFS" | "/dashboard/DFS" | "/dashboard/Expectimax" | "/dashboard/IDA" | "/dashboard/MINIMAX" | "/dashboard/RecursiveBFS" | "/dashboard/UCS" | "/login";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/dashboard": Record<string, never>;
			"/dashboard/A": Record<string, never>;
			"/dashboard/BFS": Record<string, never>;
			"/dashboard/DFS": Record<string, never>;
			"/dashboard/Expectimax": Record<string, never>;
			"/dashboard/IDA": Record<string, never>;
			"/dashboard/MINIMAX": Record<string, never>;
			"/dashboard/RecursiveBFS": Record<string, never>;
			"/dashboard/UCS": Record<string, never>;
			"/login": Record<string, never>
		};
		Pathname(): "/" | "/dashboard" | "/dashboard/A" | "/dashboard/BFS" | "/dashboard/DFS" | "/dashboard/IDA" | "/dashboard/MINIMAX" | "/dashboard/RecursiveBFS" | "/dashboard/UCS";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/poze/euristica.png" | "/poze/harta+euristica.png" | "/poze/harta.png" | "/poze/logo.png" | "/poze/logo2.png" | "/robots.txt" | string & {};
	}
}