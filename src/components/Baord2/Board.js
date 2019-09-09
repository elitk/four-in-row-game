import React, { Component } from 'react';
import Slat from '../slats/Slats';
// import Game from './components/Game/Game';
import '../../App.css'
import { thisExpression } from '@babel/types';

class Board extends Component {

  constructor() {
    super();
    this.state = {
      boardState: new Array(7).fill(new Array(6).fill(null)),
      playerTurn: true,
      gameMode: '',
      gameSelected: false,
      winner: '',
    }
    this.counter = 0;
    this.itDraw = false;


  }

  selectedGame(mode) {
    this.setState({
      gameMode: mode,
      gameSelected: true,
      boardState: new Array(7).fill(new Array(6).fill(null))
    })
  }

  makeMove(slatID) {
    // console.log(slatID)
    const boardCopy = this.state.boardState.map((arr) => {
      return arr.slice();
    });
    if (boardCopy[slatID].indexOf(null) !== -1) {
      let newSlat = boardCopy[slatID].reverse()
      newSlat[newSlat.indexOf(null)] = this.state.playerTurn ? 'Red' : 'Yellow'
      newSlat.reverse()
      this.setState({
        playerTurn: !this.state.playerTurn,
        boardState: boardCopy
      })
      this.counter++;
    }
  }

  /*Only make moves if winner doesn't exist*/
  handleClick(slatID) {
    if (this.state.winner === '') {
      this.makeMove(slatID)
    }
  }

  checkLine(a, b, c, d) {
    return ((a !== null) && (a === b) && (a === c) && (a === d));
  }
  checkDraw(board) {
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (board[r][c] === null) {
          return false;
        }
      }
    }
    return true;
  }
  checkWinner(bs) {
    for (let c = 0; c < 7; c++)
      for (let r = 0; r < 4; r++)
        if (this.checkLine(bs[c][r], bs[c][r + 1], bs[c][r + 2], bs[c][r + 3]))
          return bs[c][r] + ' wins!'

    for (let r = 0; r < 6; r++)
      for (let c = 0; c < 4; c++)
        if (this.checkLine(bs[c][r], bs[c + 1][r], bs[c + 2][r], bs[c + 3][r]))
          return bs[c][r] + ' wins!'

    for (let r = 0; r < 3; r++)
      for (let c = 0; c < 4; c++)
        if (this.checkLine(bs[c][r], bs[c + 1][r + 1], bs[c + 2][r + 2], bs[c + 3][r + 3]))
          return bs[c][r] + ' wins!'

    for (let r = 0; r < 4; r++)
      for (let c = 3; c < 6; c++)
        if (this.checkLine(bs[c][r], bs[c - 1][r + 1], bs[c - 2][r + 2], bs[c - 3][r + 3]))
          return bs[c][r] + ' wins!'


    if (this.checkDraw(this.state.boardState) ) {
      return 'its a draw!'
    }

    return "";
  }
  /*check the winner and make AI move IF game is in AI mode*/
  componentDidUpdate() {
    let winner = this.checkWinner(this.state.boardState)
    console.log(winner);
    // let draw = this.checkDraw(this.state.boardState)
    // if (this.counter !== 42) {

    //   console.log("this.itDraw= !this.itDraw", this.itDraw = !this.itDraw)
    //   this.itDraw = !this.itDraw;
    //   // this.setState({})
    // }
    if (this.state.winner !== winner ) {

      this.setState({
        winner,
      })
    }

    else {
      if (this.state.gameMode === 'ai' && this.state.playerTurn === 'Blue') {
        let validMove = -1;
        while (validMove === -1) {
          let slat = Math.floor((Math.random() * 7))
          if (this.state.boardState[slat].indexOf(null) !== -1) {
            validMove = slat
          } else {
            validMove = -1
          }
        }
        this.makeMove(validMove)
      }
    }
  }



  render() {

    let winnerMessageStyle;
    if (this.state.winner !== "" || this.itDraw === true) {
      console.log('hrfuh')
      winnerMessageStyle = "winnerMessage appear"
    } else {
      winnerMessageStyle = "winnerMessage"
    }

    /*Contruct slats allocating column from board*/
    let slats = [...Array(this.state.boardState.length)].map((x, i) =>
      // console.log("this.state.boardState[i]-=-=-=", this.state.boardState[i])

      < Slat
        key={i}
        holes={this.state.boardState[i]}
        handleClick={() => this.handleClick(i)

        }


      ></Slat >
    )
    // console.log("slats-=-=-=", slats)


    return (

      <div>
        {this.state.gameSelected &&
          <div className="Board">
            {slats}
          </div>
        }
        <div className={winnerMessageStyle}>{this.state.winner} {this.itDraw ? 'its a draw!' : ''}</div>
        {(!this.state.gameSelected || this.state.winner !== '' || this.itDraw) &&
          <div>
            <button onClick={() => this.selectedGame('game')}>new game</button>
            {/* <button onClick={() => this.selectedGame('ai')}>Play AI</button> */}
          </div>
        }
      </div>
    )
  }
}

export default Board;
