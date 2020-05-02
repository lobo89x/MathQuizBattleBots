import React, { Component } from 'react';


class Game extends Component {
    state = {
        score: 0
      };

    handleKeyDown(e) {
      console.log(e.keyCode);
        const { cursor, result } = this.state

      // arrow up/down button should select next/previous list element
      if (e.keyCode === 38 && cursor > 0) {
        // this.setState( prevState => ({
        //   cursor: prevState.cursor - 1
        // }))
      } else if (e.keyCode === 40 && cursor < result.length - 1) {
        // this.setState( prevState => ({
        //   cursor: prevState.cursor + 1
        // }))
      }
    }
    
    render() {
        return (
            console.log("im here")
        );
    }
    
};

 export default Game;