import React from 'react'
import Player from '../player';
import Opponent from '../opponent';
import QuestionComp from '../questionModal';

function Grid(props) {
    return (
        <div 
            style={{
                backgroundColor: 'navy',
                border: '9px solid green',
                margin: '10px auto',
                width: '100%',
                height: '100%'
            }}
        >
            <Player 
            showModal={props.showModal}
            show={props.show}/>
            <Opponent/>
            <QuestionComp 
            show={props.show}/>
        </div>
    )
}

export default Grid