import React from 'react';
//import sprite from './monster_2.png';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return{
        ...state.player
    }
}

function Monster(props){
    console.log(props.monsterclass);
    return (
        <div 
        style={{
            bottom: '-82%',
            left: '25%'
            // backgroundImage: `url('${sprite}')`,
            // width: '235px',
            // height: '214px'
        }}
        className={props.monsterclass}
        />
    )
}

export default connect(mapStateToProps)(Monster);