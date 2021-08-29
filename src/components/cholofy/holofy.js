import React, { Component, useContext } from 'react';
import VideoElement from '../VideoElement/videoElement';

import './styles.css';


class Holofy extends Component {
    constructor(props) {
        super(props);
        this.handleDragStart = this.handleDragStart.bind(this);
    }
    handleDragStart = (e) =>{
        setTimeout(() => {
            e.target.className = 'invisible';
        }, 0);
    }
    render() {
        // console.log(this.props.positionClass);
        return( 
        <div className={`holofy ${this.props.positionClass ? this.props.positionClass: ''}`} draggable={true} onDragStart={this.handleDragStart}>
            <div className="video-wrapper">
                <VideoElement moved={(this.props.positionClass ? true: false)}></VideoElement>
            </div>
        </div>
        )
    }
}

export default Holofy;