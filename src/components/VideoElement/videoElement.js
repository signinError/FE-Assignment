import React, { useEffect, useRef, useState } from 'react'
import product from '../../videos/product.mp4';
import './styles.css';
export default function VideoElement({moved}) {
    const [playState, setPlay] = useState(false);
    console.log(moved);
    const videoRef = useRef(null);
    // make sure, video is paused when loaded
    useEffect(() => {
        videoRef.current.pause();
    },[]);


    useEffect(() => {
        // console.log(moved);
        if(playState) {
            videoRef.current.play();
        }
        else {
            videoRef.current.pause();
        }
    },[playState]);

    // handle click on video
    const handleVideoClick =  (e) => {
        e.preventDefault();
        setPlay(!playState);
    }
    
    return (
        <>
            <video height="100%" width="100%" ref={videoRef} onClick={handleVideoClick} autoPlay loop>
                <source src={product} type="video/mp4" />
            </video>
        </>
    )
}
