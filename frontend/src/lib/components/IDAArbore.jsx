import React from 'react';
import {createRoot} from 'react-dom/client'; 
import ReactFlow, {Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';

import { NodIDA} from './IDANod';

const nodeTypes={
    nodul: NodIDA
};


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
        <div style= {{ width: '100%', height: '100%' }}>
        <ReactFlow            
            key= {noduriDeAfisat.length}
            nodes={noduriDeAfisat}
            edges= {muchiiDeAfisat}
            nodeTypes={nodeTypes}
            fitView
            fitViewOptions={{ padding: 0.4, includeHiddenNodes: true}}
            minZoom={ 0.2 }
            maxZoom={ 1.5 }
            nodesDraggable={false}
                proOptions={{ hideAttribution: true }}
        >
            <Controls />
            </ReactFlow >
        </div>
    );
}