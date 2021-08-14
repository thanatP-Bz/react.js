import React from "react";
import { connect } from "react-redux";

const SongDetail = (props) => {
  console.log(props);
  return <div>SongDetails</div>;
};

const mapStateToProps = (state) => {
  return { songs: state.selcectSong };
};

export default connect(mapStateToProps)(SongDetail);
