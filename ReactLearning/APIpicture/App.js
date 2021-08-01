import React, { Component } from "react";
import Unsplash from "./API/Unsplash";
import SearchBar from "./Components/SearchBar";
import ImageList from "./ImageList";

export class App extends Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await Unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div>
        <div className="ui container" style={{ marginTop: "10px" }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default App;
