import { useDrag } from 'react-dnd';
import { useDraggable } from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';

function Disc({ discSRC, isTopDisc}) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: discSRC.id,
        disabled: !isTopDisc,
    });
    const style = {
        transform: CSS.Translate.toString(transform),
    };
    return (
        <img src={discSRC.image} 
        {...listeners} 
        {...attributes} 
        ref={setNodeRef}
        draggable={false}
        style={style} 
        alt={"Disc"}/>
    )
} export default Disc
