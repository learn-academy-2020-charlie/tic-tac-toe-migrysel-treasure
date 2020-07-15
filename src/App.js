import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'
//TIC TAC TOE
class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["", "", "", "", "", "", "", "", ""],
      //counter is to keep track of whose turn it is
      counter: 0
    }
  }

  //if counter === 6, alert game over. ___ wins, cat game(no one wins)
  
  //As a user, when someone has won the game (3 squares in a row: horizontally, vertically, or diagonally) I should see a notice telling me who won.

handleClick = (index, value) => {
  let { squares, counter } = this.state
  //user should be able to click on a square to mark it
  // counter.length < 5
  this.setState({squares: squares, counter: counter })
  console.log(counter);
  if(squares[index] === ""){
  //use a conditional using modulo to set odd and even player.
  if (counter % 2 === 0) { 
    squares[index] = "X"
    counter = counter + 1
    this.setState({squares: squares, counter: counter})
  } else if (counter % 2 !== 0){
    squares[index] = "O"
    counter = counter + 1
    this.setState({squares: squares, counter: counter})
  } 
  }
}

  render(){
    let box = this.state.squares.map((value, index)=> {
      return (
        <Square 
          value = { value }
          index = { index }
          handleClick = { this.handleClick }
          squares = { this.squares }
          key = { index }
        />
      )
    })
    return (
      <React.Fragment>
        <h1>Tic Tac Toe</h1>
        <div id="gameboard">
          { box }
        </div>
      </React.Fragment>
    )
  }
}
export default App
