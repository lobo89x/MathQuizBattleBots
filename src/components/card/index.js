import React, { Component } from "react";
import Player from "../player";

//import React from "react";
// import { prependOnceListener } from 'cluster';


  // const move = ({ keyCode }) => {
  //   console.log(keyCode);
  //   if (!gameOver) {
  //     if (keyCode === 37) {
  //       movePlayer(-1);
  //     } else if (keyCode === 39) {
  //       movePlayer(1);
  //     } else if (keyCode === 40) {
  //       dropPlayer();
  //     } else if (keyCode === 38) {
  //       playerRotate(stage, 1);
  //     }
  //   }
  // };


class Card extends Component {

state = {
    guesslist: [],
    cardlist: []
  };

  select = num => {
      if (this.state.guesslist.includes(num)) {
        
        this.setState({ guesslist: [] }, () => {
            console.log(this.state.guesslist);
        this.props.scoreupdate(this.state.guesslist)    
        });
    }
    else 
    {
        this.state.guesslist.push(num);
        console.log(this.state.guesslist);
        this.props.scoreupdate(this.state.guesslist)
      }
        this.scramblenumbers();
  }; 

  scramblenumbers = () => {
      var temp = [];
    if  (this.state.cardlist.length < 10) {
        //console.log("this is your prps length:: "+this.props.cards.length+" thisis your cards length:: "+this.state.cardlist.length)
        //console.log("this is the right track")
        for (var i = 0; temp.length < this.props.cards.length; i++) {
          var x = Math.floor(Math.random() * 9);
          
          //var y  = x - 1;
        //   console.log("this is your random num:: "+x);
          //console.log(this.state.cardlist.includes(y));
          if (temp.includes(this.props.cards[x])===false) {
            // let newState = { cardlist:[...this.state.cardlist, this.props.cards[x].id]}
            temp.push(this.props.cards[x]);
            
        }
        //console.log(temp);
        this.setState({ cardlist: temp }, () => {
            // console.log(this.state.cardlist);
        });
    
        //   console.log(this.props.cards[i].id);
        //   if (this.props.cards[i].id===y) {
        //     for (var j = 0; j < this.state.cardlist.length; j++) {
        //         if (this.state.cardlist[j].id===this.props.cards[i].id) {
        //             console.log("j is i");
        //         }
                
        //     }
        //     this.state.cardlist.push(this.props.cards[i].id);
        //     console.log(this.state.cardlist);
        //   }
        }
    }
  }

  componentDidMount() {
    this.scramblenumbers();
  }

// function Card(props) {
    render() {
      console.log(this.state.cardlist);
      if(this.state.cardlist.length!==0) {

        
        return (
          [...Array(9).keys()].map(square =>  <RowSquare key={`${rowIndex}-${square}`} rowIndex={rowIndex} columnIndex={square}/>)
          // <React.Fragment>
          //       <div className='card-group'>
          //       <div className="card text-white bg-dark mb-3">
          //           <div className="card-body" onClick={() => this.select(this.state.cardlist[0].name)}>
          //               <h5 className="card-title">{this.state.cardlist[0].name}</h5>
          //               <p className="card-text"></p>
          //           </div>
          //         </div>
          //       </div>
          //       <Player />
          //       </React.Fragment>
                );
      }
      else {
        return (
              
          <div className='card-group'>
            <h2> LOADING.........
            </h2>
          </div>
           
          );
      }
          }
}

export default Card;

