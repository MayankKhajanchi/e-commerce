import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      color: "red"
    };
  }
  changeColor = e => {
    this.setState({ color: this.myRef.current.value });
  };
  componentDidMount() {}

  focusInput = () => {
    this.myRef.current.focus();
  };

  render() {
    return (
      <div style={{ display: "inline-block" }}>
        <div
          style={{
            height: "200px",
            width: "200px",
            background: this.state.color
          }}
        >
          <input
            type="text"
            ref={this.myRef}
            value={this.state.color}
            placeholder="Type the color"
            onChange={e => this.changeColor(e)}
          />
        </div>
      </div>
    );
  }
}

export default Counter;
