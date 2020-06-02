import React from 'react'
import Grid  from '../grid';
// import Player from '../player';

function Board(props) {
    return (
        <div
        style={{
            position: 'relative',
            width: '800px',
            height: '600px',
            margin: '20px auto'
        }}>
            <Grid 
            showModal={props.showModal}
            show={props.show}/>
            {/* <Player /> */}
 
        </div>
    )
}

export default Board