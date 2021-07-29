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

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <Season lat={this.state.lat} />;
    }

    return <Loading message="Please accept location request" />;
  }
  render() {
    return <div className="boder red">{this.renderContent()}</div>;
  }
}

export default App;
