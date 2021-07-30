import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./Components/SearchBar";

export class App extends Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await axios.get(
      "https://api.unsplash.com//search/photos",
      {
        params: {
          query: term,
        },
        headers: {
          Authorization:
            "Client-ID CY9v9ZAvQLwyIKVP5vNL0pL_yZ7fEnPAe1hl_H0rI4U",
        },
      }
    );
    console.log(response.data.results);
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
