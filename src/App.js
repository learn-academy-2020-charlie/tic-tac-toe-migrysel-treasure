import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'
//TIC TAC TOE
class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["", "", "", "", "", "", "", "", ""],
      counter: 0,
      winningIndex: [
        [0,1,2],
        [3,4,5],
        [6,7,8], 
        [0,3,6],
        [1,4,7], 
        [2,5,8],
        [0,4,8], 
        [2,4,6],
      ]
    }
  }
  
  //if counter === 6, alert game over. ___ wins, cat game(no one wins)

  //As a user, when someone has won the game (3 squares in a row: horizontally, vertically, or diagonally) I should see a notice telling me who won.
  // winIndex: [0,1,2] & [3,4,5]  &[6,7,8]
  // vertical: [0,3,6] & [1,4,7] & [2,5,8]
  // diagonal: [0,4,8] & [2,4,6]
  //use a map function for winningIndex to give access to every array inside and use filter method 
  //squares[index].filter()
  //map through larger array in order to create each value of that map function to access smaller array. then destructure each smaller array to assign a variable to hold each value. 
  //[a,b,c] does a=x b=x c=x
  //add item in state for currentplayer in order to toggle between each player 

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
  // if (squares[index] = "X" && squares[index] = this.state.winningIndex) {
  //   alert ("'X' Wins!")
  // } else if (
  //   ) {
  //   alert ("'O' Wins!")
  //}
  // if (squares[0]=== squares[1] === squares[2]) {
  //   alert "You Win!"
  // }
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
