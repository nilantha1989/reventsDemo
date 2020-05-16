import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./testActions";
import { Button } from "semantic-ui-react";

//mapStateToProp
const mapState = (state) => ({
  data: state.test.data,
});

//mapActionToProps

const actions = {
  incrementCounter,
  decrementCounter,
};

class TestComponent extends Component {
  render() {
    const { data, incrementCounter, decrementCounter } = this.props;
    return (
      <div>
        <h1>{data}</h1>
        <Button onClick={incrementCounter} positive content="Increment" />
        <Button onClick={decrementCounter} negative content="Decrement" />
      </div>
    );
  }
}
export default connect(mapState, actions)(TestComponent);
