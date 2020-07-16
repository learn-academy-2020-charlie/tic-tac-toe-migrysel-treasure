import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'
import background from './assets/background.jpg'
import ghost from './assets/ghost.png'
import pumpkin from './assets/pumpkin.png'
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

handleClick = (index, value) => {
let { squares, counter, gameEnded } = this.state
  if(gameEnded === false) { 
  //user should be able to click on a square to mark it
  // this.setState({squares: squares, counter: counter, gameEnded: gameEnded })
  // console.log(counter);
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
} else if (gameEnded === true){
  alert("The game is over sucka!")
}
  // This calls the function that checks if there is a winner and assigns the return to a variable called result
  var result = this.checkWinner();
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
    if(squares[winningIndex[i][0]] === squares[winningIndex[i][1]] && squares[winningIndex[i][1]] === squares[winningIndex[i][2]]){
        return squares[winningIndex[i][0]];
    }
    if(counter === 8) {
    return "draw"
    }
  }
  // This if else tree will display the alert and end the game if there is a winner
  var result = ""
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
