import React, { Component } from "react";
import SearchBar from "./SearchBar";
import YouTube from "./API/YouTube";

export class App extends Component {
  onTermSubmit = (term) => {
    YouTube.get("/search", {
      params: {
        q: term,
      },
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
