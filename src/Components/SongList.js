import React, { Component } from "react";
import { connect } from "react-redux";

export class SongList extends Component {
  render() {
    /* this.props === {songs: state.song} */
    return <div>SongList</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
