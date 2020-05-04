import React from 'react'
//import { connect } from 'react-redux'
import botsprite from './metabee-sumilidon-character-blakbeetle-medabots (1).jpg'
//import handleMovement from './movement'

function Opponent(props) {
    return (
        <div
            // className='user'
            style={{
                position: 'absolute',
                top: 0,
                left: 325,
                backgroundImage: `url('${botsprite}')`,
                height: '100%',
                width: '100%'
            }}
        />
    )
}



export default Opponent