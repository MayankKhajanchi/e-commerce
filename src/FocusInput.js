import React, { Component } from "react";
import Color from "./Color";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  focusInput = () => {
    this.myRef.current.focusInput();
  };

  render() {
    return (
      <div style={{ display: "inline-block" }}>
        <Color ref={this.myRef} />
        <button onClick={this.focusInput}>Focus</button>
      </div>
    );
  }
}

export default Counter;
