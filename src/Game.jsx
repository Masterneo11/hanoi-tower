import Tower from "./Tower";
import React, { useState } from 'react';
import d1 from "./assets/HaGreB.svg";
import d2 from "./assets/HanBLE.svg";
import d3 from "./assets/HaORB.svg";
import d4 from "./assets/d4.svg";
import { DndContext } from '@dnd-kit/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Counter from "./Counter";
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
    });
    const [moveCount , setMoveCount] = useState(0);

    const message = " Can't put a bigger disc on a smaller disc "
    const notify = () => toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",

    });
    const w = " Congragulations You just got hacked, nah jk jk  "
    const win = () => toast.success(w, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
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
                notify();
                return;
            }
        }
        if (over.id === "t1") newT1.unshift(disc);
        else if (over.id === "t2") {
            newT2.unshift(disc);
        } else if (over.id === "t3") {
            newT3.unshift(disc);
        }
        // if (targetDiscs.lengh > 3) {
        //     console.log("finish")
        // }

        setTowerState({
            t1: newT1,
            t2: newT2,
            t3: newT3,
        });
        setMoveCount(prevCount => prevCount + 1);
        if (newT2.length === discs.length) {
            console.log("t2 is full");
            win();
        }
        if (newT3.length === discs.length) {
            console.log("t3 is full");
            win();
        }
        if (newT1.length === discs.length) {
            console.log("t1 is full");
            win();
        }
    };
    return (
        <div className="game">
              <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"/>
              <DndContext onDragEnd={handleDragEnd}>
                < Tower towerId={"t1"} discs={towerState.t1} />
                < Tower towerId={"t2"} discs={towerState.t2} />
                < Tower towerId={"t3"} discs={towerState.t3} />
                <Counter count={moveCount} />
            </DndContext>
            {/* <DndContext onDragEnd={handleDragEnd}>
                < Tower towerId={"t1"} discs={towerState.t1} />
                <div className="tc">
                < Tower towerId={"t2"} discs={towerState.t2} />
                    <Counter count={moveCount} />
                </div>
                < Tower towerId={"t3"} discs={towerState.t3} />
            </DndContext> */}
        </div >
    );
}