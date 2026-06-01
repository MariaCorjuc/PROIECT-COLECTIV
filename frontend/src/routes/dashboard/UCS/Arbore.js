
import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';
import React from 'react';
import {createRoot} from 'react-dom/client'; 

/** @type {any} */
let root=null;

/**
 * @param {HTMLElement} elementHtml
 * @param {any[]} noduriDeAfisat
 * @param {any[]} muchiiDeAfisat
 */

export function monteazaArbore(elementHtml, noduriDeAfisat, muchiiDeAfisat){

    if(root && noduriDeAfisat.length<=1 && muchiiDeAfisat.length<=1)
    {
        //curatam memoria
        root.unmount();
        root=null;
    }

    if(!root)
    {
        root=createRoot(elementHtml);
    }
    root.render(
        React.createElement(ReactFlow, {
            key: noduriDeAfisat.length,
            nodes: noduriDeAfisat,
            edges: muchiiDeAfisat,
            fitView: true,
            fitViewOptions:{
                padding: 0.3,
                includeHiddenNodes:true
            },
            minZoom: 0.2,
            maxZoom: 1.5
        })
    )
}