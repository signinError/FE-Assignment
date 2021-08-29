import React from 'react';
import './styles.css';

export default function Quandrant({qNo, width, height, setPositionClassFunc}) {
    const dragOver = (e) =>  {
        e.preventDefault();
    }
    const dragDrop = (e) =>  {
        e.preventDefault();
        if (e.target.classList.contains('quandrant1')) {
            setPositionClassFunc('holofy place-top-left');
        } else if (e.target.classList.contains('quandrant2')) {
            setPositionClassFunc('holofy place-top-right');
        } else if (e.target.classList.contains('quandrant3')) {
            setPositionClassFunc('holofy place-bottom-right');
        } else if (e.target.classList.contains('quandrant4')) {
            setPositionClassFunc('holofy place-bottom-left');
        } else {
            setPositionClassFunc('holofy');
        }
    }
    return (
        <div className={`quandrant quandrant${qNo}`} style={{height: `${height}px`, width: `${width}px`}} onDragOver={dragOver} onDrop={dragDrop}>

        </div>
    )
}
