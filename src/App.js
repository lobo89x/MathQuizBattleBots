import React, { Component } from 'react';
import Board from './components/board';
// import logo from './logo.svg';
// import Card from './components/card'
import './App.css';




class App extends Component {
  state = {
    score: 0,
    show: false
  };

  showModal = () => {
    this.setState({
      show: true
    })
  } 

  updatescore = (gl) => {
    this.setState( { score: gl.length }, () => {
      console.log(this.state.score);
  });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Turnbased battle game Test</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 text-center"></div>
            <div className="col-lg-6 text-center">
            </div>
            <div className="col-lg-3 text-center"></div>
          </div>
          <Board 
          showModal={this.showModal}
          show={this.state.show}/>
        </div>

      </div>
    );
  }
}

export default App;

