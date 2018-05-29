import React from "react";
import Board from "../components/Board";
import GameInfo from "../components/GameInfo";

const gameLayoutStyle = {
  width: 650,
  height: `calc(90%)`,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: "auto"
};

class GameLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cells: Array(9).fill(null),
      currentPlayer: "player 1"
    };
  }

  // getDerivedStateFromProps is called before every render,
  // use it to infer new state values from props or state changes.
  static getDerivedStateFromProps(props, state) {
    return state;
  }

  onClickCell(index){
    if(this.state.currentPlayer === "player 1" && this.state.cells[index] == null){
      this.setState({ currentPlayer: "player 2" });
      var tab = [...this.state.cells];
      tab[index] = 'X';
      this.setState({ cells: tab });
    }
    else if(this.state.currentPlayer === "player 2" && this.state.cells[index] == null){
      this.setState({ currentPlayer: "player 1" });
      var tab = [...this.state.cells];
      tab[index] = 'O';
      this.setState({ cells: tab });
    }
  }

  render() {
    return (
      <div
        style={gameLayoutStyle}
        /*onClick={() => this.setState({ currentPlayer: (this.state.currentPlayer === "player 2" ? "player 1" : "player 2") })}
      */>
        <GameInfo gameState={this.state} currentPlayer={this.state.currentPlayer} />
        <Board cells={this.state.cells} onClickCell={(id) => this.onClickCell(id)}/>
      </div>
    );
  }
}

export default GameLayout;
