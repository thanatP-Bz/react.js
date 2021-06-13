import "./Card.css";
import React from "react";

const Card = (props) => {
  const classes = " card " + props.className; //it has to have a white space
  return <div className={classes}>{props.children}</div>;
};

export default Card;
