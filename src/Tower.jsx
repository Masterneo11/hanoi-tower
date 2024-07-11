
import React from 'react';
import Disc from './Disc';
import { useDroppable } from '@dnd-kit/core';

export default function Tower({ towerId, discs }) {
    const { isOver, setNodeRef } = useDroppable({
        id: towerId,
    });
    const style = {
        opacity: isOver ? 1 : 1,
    };
    return (
        <div ref={setNodeRef} style={style} className="tower">
            {discs.map((disc, i) => <Disc 
            key={i} 
            discSRC={disc} 
            isTopDisc={i === 0} />
            )}
        </div>
    );
}