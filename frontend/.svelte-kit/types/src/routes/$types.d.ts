import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;
type RouteParams = {  };
type RouteId = '/';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = EnsureDefined<LayoutData>;
type LayoutRouteId = RouteId | "/" | "/dashboard" | "/dashboard/A" | "/dashboard/A/problema1" | "/dashboard/A/problema2" | "/dashboard/BFS" | "/dashboard/BFS/probleme" | "/dashboard/DFS" | "/dashboard/DFS/problema1" | "/dashboard/DFS/problema2" | "/dashboard/Expectimax" | "/dashboard/Expectimax/probleme" | "/dashboard/IDA" | "/dashboard/IDA/Problema1" | "/dashboard/IDA/Problema2" | "/dashboard/Minimax" | "/dashboard/Minimax/problema1" | "/dashboard/Minimax/problema2" | "/dashboard/RecursiveBFS" | "/dashboard/RecursiveBFS/problema1" | "/dashboard/RecursiveBFS/problema2" | "/dashboard/UCS" | "/dashboard/UCS/Problema1" | "/dashboard/UCS/Problema2" | null
type LayoutParams = RouteParams & {  }
type LayoutParentData = EnsureDefined<{}>;

export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type PageProps = { params: RouteParams; data: PageData }
export type LayoutServerData = null;
export type LayoutData = Expand<LayoutParentData>;
export type LayoutProps = { params: LayoutParams; data: LayoutData; children: import("svelte").Snippet }