import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { currencyChanged } from "./actions";
import Counter from "./CounterApp/components";

const App = (props) => {
  const changeCurrency = (val) => {
    props.currencyChanged(val);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>{props.currency.value}</div>
        <button onClick={() => changeCurrency("inr")}>inr</button>
        <button onClick={() => changeCurrency("gbp")}>gbp</button>

        <button onClick={() => changeCurrency("gbp")}>+</button>
        <button onClick={() => changeCurrency("gbp")}>-</button>
      </header>
    </div>
  );
};

const mapStateToProps = ({ currency }) => {
  return {
    currency,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    currencyChanged: (currency) => dispatch(currencyChanged(currency)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
