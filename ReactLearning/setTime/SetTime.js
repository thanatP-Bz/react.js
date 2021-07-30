import React, { Component } from "react";
import "./SetTime.css";

class SetTime extends Component {
  state = { time: "" };

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }
  render() {
    return (
      <div className="container">
        <h1>The time is: {this.state.time}</h1>
      </div>
    );
  }
}

export default SetTime;
