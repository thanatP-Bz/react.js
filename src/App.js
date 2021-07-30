import SearchBar from "./Components/SearchBar";
import React, { Component } from "react";

export class App extends Component {
  onSearchSubmit = (term) => {
    console.log(term);
  };
  render() {
    return (
      <div>
        <div className="ui container" style={{ marginTop: "10px" }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
      </div>
    );
  }
}

export default App;
