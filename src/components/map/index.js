import React from 'react';
import Monster from '../monster';
import Player from  '../player';
import Effect from '../player/effect';

function Map(props) {
    return (
        <div
        style={{
            width:'800px',
            height:'500px',
            backgroundColor:'green',
            margin:'10px auto'
        }}>
            <Monster />
            <Player />
            <Effect />
        </div>
    )
}

export default Map;