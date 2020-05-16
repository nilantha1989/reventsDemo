import React, { Component } from "react";
import { connect } from "react-redux";

const mapState = (state) => ({
  data: state.data,
});
class TstComponent extends Component {
  render() {
    return <h1>{this.props.data}</h1>;
  }
}

export default connect(mapState)(TstComponent);
