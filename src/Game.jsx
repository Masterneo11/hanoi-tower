import Tower from "./Tower";
import React, { useState } from 'react';
import d1 from "./assets/HaGreB.svg";
import d2 from "./assets/HanBLE.svg";
import d3 from "./assets/HaORB.svg";
import d4 from "./assets/d4.svg";
import { DndContext } from '@dnd-kit/core';
import { useDrag } from 'react-dnd';

const discs = [
    { id: '1', image: d1 },
    { id: '2', image: d2 },
    { id: '3', image: d3 },
    { id: '4', image: d4 },
];

export default function Game() {
    const [parent, setParent] = useState(null);
    const [towerState, setTowerState] = useState({
        t1: [...discs],
        t2: [],
        t3: [],
    })
    const handleDragEnd = ({ active, over }) => {
        setParent(over ? over.id : null);
        const newT1 = towerState.t1.filter(disc => disc.id !== active.id);
        const newT2 = towerState.t2.filter(disc => disc.id !== active.id);
        const newT3 = towerState.t3.filter(disc => disc.id !== active.id);
        // add disc 
        const disc = discs.find(disc => disc.id === active.id);
        // get discs from traget tower the over tower 
        const targetDiscs = towerState[over.id];
        if (targetDiscs.length > 0) {
            const lastDisc = targetDiscs[targetDiscs.length - 1];
            // check if the current disc we got above has a larger id than
            // the last disc in the target tower
            // if its smaller, add the disc. Otherwise, put it back on the 
            // tower it came from
            if (disc.id > lastDisc.id) {
                console.log("bad move");
                return;
            }
        }
        if (over.id === "t1") newT1.unshift(disc);
        else if (over.id === "t2") {
            newT2.unshift(disc);
        } else if (over.id === "t3") {
            newT3.unshift(disc);
        }
        setTowerState({
            t1: newT1,
            t2: newT2,
            t3: newT3,
        });
    }
    return (
        <div className="game">
            <DndContext onDragEnd={handleDragEnd}>
                < Tower towerId={"t1"} discs={towerState.t1} />
                < Tower towerId={"t2"} discs={towerState.t2} />
                < Tower towerId={"t3"} discs={towerState.t3} />
            </DndContext>
        </div >
    );
}