import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return{
        ...state.player
    }
}

function Effect(props){
    return (
        <div
        style={{
            // width: '100%',
            // height: '100%'
        }}
        className={props.effectclass} />
    )
}

export default connect(mapStateToProps)(Effect);