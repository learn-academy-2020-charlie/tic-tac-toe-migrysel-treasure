import React, { Component } from 'react'
//THIS IS FOR TIC TAC TOE
class Square extends Component{

    cursorClick = () => {
      this.props.handleClick(this.props.index, this.props.value)
    }

  render(){
    return(
      <React.Fragment>
        <div id="square" onClick = {this.cursorClick}>
          {this.props.value}
        </div>
      </React.Fragment>
    )
  }
}
export default Square
