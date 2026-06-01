import React from 'react';
import { Handle, Position } from 'reactflow';

/** @param {{ data: any }} props */
export const NodIDA =  ({data}) => {

    return(
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            <Handle type="target" position={Position.Top} />

             {data.c !=undefined &&(
                    <div className='cutoff'>
                       cutoff= {data.c}
                    </div>
            )}

            <div className='nod-caseta'>
                {data.label}
            </div>

            <div className='cost-nod'>
                {data.g + data.h} = {data.g} + {data.h} 
                {data.verif != undefined && (
                    <span className='verificare' style={{ color: '#ef4444', fontWeight: 'bold', marginLeft: '5px' }}>
                        {data.verif}
                    </span>
                )}
            </div>

            <Handle type="source" position={Position.Bottom} />

        </div>
    );

};