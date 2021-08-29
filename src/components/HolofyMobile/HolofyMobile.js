import React, { useState } from 'react';
import VideoElement from '../VideoElement/videoElement';

import "./holofymobile.css";

export default function HolofyMobile({width, height}) {
    const [posClass, setPosClass] = useState('');
    const [moved, setMoved] = useState(false);
    const handleTouchStart = (e) => {
        e.preventDefault(); // stop browser from continuing to process touch event
    }

    const handleTouchEnd = (e) => {
        // e.preventDefault();
        var touches = e.changedTouches;
        let xPos = touches[0].pageX;
        let yPos = touches[0].pageY;
        if (((0<=xPos) && (xPos < width)) && ((0<=yPos) && (yPos < height))) {
            setPosClass('place-top-left');
            setMoved(true);
        } else if (((width<=xPos) && (xPos < width*2)) && ((0<=yPos) && (yPos < height))) {
            setPosClass('place-top-right');
            setMoved(true);
        } else if (((width<=xPos) && (xPos < width*2)) && ((yPos >= height) && (yPos < height*2))) {
            setPosClass('place-bottom-right');
            setMoved(true);
        } else if (((0<=xPos) && (xPos < width) && ((yPos >= height) && (yPos < height*2)))){
            setPosClass('place-bottom-left');
            setMoved(true);
        } else {
            setPosClass('');
            setMoved(false);
        }
    }

    const handleTouchMove = (e) => {
        // e.preventDefault();
        var touches = e.changedTouches;
        console.log(touches[0].pageX);
        console.log(touches[0].pageY);
    }
    return (
        <div className={`holofy-mobile ${posClass}`} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} draggable={true}>
            <div className="video-wrapper">
                <VideoElement moved={moved}></VideoElement>
            </div>
        </div>
    )
}
