import React from 'react';
import Monster from '../monster';
import Player from  '../player';

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
        </div>
    )
}

export default Map;