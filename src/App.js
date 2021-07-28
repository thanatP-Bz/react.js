import React from "react";
import Season from "./Season";
import Loading from "./Loading";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  /* componentDidUpdate() {
    console.log("My component was just updated");
  }  */
  //React we have to define render
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <Season lat={this.state.lat} />;
    }

    return <Loading />;
  }
}

export default App;
