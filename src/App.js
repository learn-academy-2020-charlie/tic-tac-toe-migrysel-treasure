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
      gameEnded: false
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
let { squares, counter, gameEnded } = this.state
  if(gameEnded === false) {
  //user should be able to click on a square to mark it
  // counter.length < 5
  this.setState({squares: squares, counter: counter, gameEnded: gameEnded })
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

// This calls the function that checks if there is a winner and assigns the return to a variable called result
  var result = this.checkWinner();

// This if else tree will display the alert and end the game if there is a winner
  if(result === "X"){
    this.setState({ gameEnded : true })
    alert("X has won the game!")
  } else if(result === "O"){
    this.setState({ gameEnded : true })
    alert("O has won the game!")
  } else if (result === "draw") {
    this.setState({ gameEnded : true })
    alert("Cat game!")
  }
} else if (gameEnded === true){
  alert("The game is over sucka!")
}
}

checkWinner = () => {
  let winningIndex = [
    [0,1,2],
    [3,4,5],
    [6,7,8], 
    [0,3,6],
    [1,4,7], 
    [2,5,8],
    [0,4,8], 
    [2,4,6]]
  let { squares, counter } = this.state
  for(let i=0;i<winningIndex.length;i++) {
    if(squares[winningIndex[i][0]] === squares[winningIndex[i][1]] && squares[winningIndex[i][1]] === squares[winningIndex[i][2]])
        return squares[winningIndex[i][0]];
  }
  if(counter === 8) {
    return "draw"
  }
}

playAgain = () => {
  this.setState({
      squares: ["", "", "", "", "", "", "", "", ""],
      counter: 0,
      gameEnded: false
  })
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
        <button id="restart"
        onClick={ this.playAgain }>
          Play Again!
        </button>
      </React.Fragment>
    )
  }
}
export default App
