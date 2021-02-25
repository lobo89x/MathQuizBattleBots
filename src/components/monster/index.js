import React from 'react';
//import sprite from './monster_2.png';
//import { connect } from 'react-redux';

function Monster(props){
    return (
        <div 
        style={{
            bottom: '500px',
            left: '700px'
            // backgroundImage: `url('${sprite}')`,
            // width: '235px',
            // height: '214px'
        }}
        className='mosnter-still'
        />
    )
}

export default Monster;