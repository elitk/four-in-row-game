import React, { Component } from 'react';
import Square from '../Square/Square';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(42).fill(null),
            xIsNext: true,
        };
    }
    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O ';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,

        })
    }
    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }
     calculateWinner(squares) {
        const lines=[
            [0,1,2,3],
            [1,2,3,4],
            [2,3,4,5],
            [3,4,5,6],
            [7,8,9,10],
            [8,9,10,11],
            [9,10,11,12],
            [10,11,12,13],
            [14,15,16,17],
            [15,16,17,18],
            [16,17,18,19],
            [17,18,19,20],
            [21,22,23,24],
            [22,23,24,25],
            [23,24,25,26],
            [24,25,26,27],
            [28,29,30,31],
            [29,30,31,32],
            [30,31,32,33],
            [31,32,33,34],
            [35,36,37,38],
            [36,37,38,39],
            [37,38,39,40],
            [38,39,40,41],
            [,,,],
            [,,,],
            [,,,],
            [,,,],
            [,,,],
            [,,,],
            [,,,],
            [,,,],
            [,,,],
            [,,,],
            [,,,],
            [,,,],
            [,,,],
        ]
    }

    render() {
        const status = 'Next player:' + (this.state.xIsNext ? 'X' : 'O');

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                </div>
                <div className="board-row">
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                    {this.renderSquare(10)}
                    {this.renderSquare(11)}
                    {this.renderSquare(12)}
                    {this.renderSquare(13)}
                </div>
                <div className="board-row">
                    {this.renderSquare(14)}
                    {this.renderSquare(15)}
                    {this.renderSquare(16)}
                    {this.renderSquare(17)}
                    {this.renderSquare(18)}
                    {this.renderSquare(19)}
                    {this.renderSquare(20)}
                </div>
                <div className="board-row">
                    {this.renderSquare(21)}
                    {this.renderSquare(22)}
                    {this.renderSquare(23)}
                    {this.renderSquare(24)}
                    {this.renderSquare(25)}
                    {this.renderSquare(26)}
                    {this.renderSquare(27)}
                </div>
                <div className="board-row">
                    {this.renderSquare(28)}
                    {this.renderSquare(29)}
                    {this.renderSquare(30)}
                    {this.renderSquare(31)}
                    {this.renderSquare(32)}
                    {this.renderSquare(33)}
                    {this.renderSquare(34)}
                </div>
                <div className="board-row">
                    {this.renderSquare(35)}
                    {this.renderSquare(36)}
                    {this.renderSquare(37)}
                    {this.renderSquare(38)}
                    {this.renderSquare(39)}
                    {this.renderSquare(40)}
                    {this.renderSquare(41)}
                </div>
            </div>
        );
    }
}
export default Board;
