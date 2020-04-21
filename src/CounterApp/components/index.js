import React from "react";
import { connect } from "react-redux";

const Counter = (props) => {
  const changeCurrency = (val) => {
    props.currencyChanged(val);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>{props.currency}</div>

        <button onClick={() => changeCurrency("gbp")}>+</button>
        <button onClick={() => changeCurrency("gbp")}>-</button>
      </header>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
