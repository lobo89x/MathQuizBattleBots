import React, { Component } from 'react';
import Player from '../player';
import Map from '../map';
import Monster from '../monster';
import QuizBox from '../quiz'



class World extends Component {

  render() {
    return (
      <div>
        <Map />
        <Player />
        <Monster />
        <QuizBox />
      </div>
    );
  }
}

export default World;

