import React from "react";

const cellStyle = {
  display: "block",
  backgroundColor: "white",
  width: "200px",
  height: "200px",
  border: "1px solid #333",
  outline: "none",
  textAlign: "center",
  lineHeight: "200px",
  cursor: "pointer"
};

const cellStyleOver = {
  display: "block",
  backgroundColor: "cyan",
  width: "200px",
  height: "200px",
  border: "1px solid #333",
  outline: "none",
  textAlign: "center",
  lineHeight: "200px",
  cursor: "pointer"
};

//const Cell = () => <div style={cellStyle}>?</div>;
class Cell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStyle: cellStyle,
    };
  }

  render() {
    return <div style={this.state.currentStyle}
                onMouseOver={() => this.setState({ currentStyle: cellStyleOver })}
                onMouseOut={() => this.setState({ currentStyle: cellStyle })}
                onClick={() => this.props.onClick()}>{this.props.value}</div>;
  }
}

export default Cell;
