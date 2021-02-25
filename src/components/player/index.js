import React from 'react';
//import walkSprite from './player_walk.png';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return{
        ...state.player
    }
}

function Player(props){
    console.log(props);
    return (
        <div 
        style={{
            // position: 'absolute',
            bottom: '500px',
            right: '800px'
            // backgroundImage: `url('${walkSprite}')`,
            // width: '52px',
            // height: '65px'
        }}
        className= {props.playerclass}
        />
    )
}

export default connect(mapStateToProps)(Player);