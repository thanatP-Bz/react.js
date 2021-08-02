import "./SearchBar.css";
import React, { Component } from "react";
import Button from "./Button";

export class SearchBar extends Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.setState({ term: "" });

    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="form-control">
        <form onSubmit={this.onFormSubmit}>
          <label className="text">
            <h3>Image Search</h3>
          </label>
          <input
            className="input"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <Button type="submit">Search</Button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
