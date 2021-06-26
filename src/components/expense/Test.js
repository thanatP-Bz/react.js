import React, { useState } from "react";

const Test = (props) => {
  const [title, updateTitle] = useState(props.title);

  const clickHandler = () => {
    updateTitle("ipad");
  };

  return (
    <div>
      <h2>{title}</h2>
      <h2>{props.title}</h2>
      <h2>{props.amount}</h2>
      <button onClick={clickHandler}>click</button>
    </div>
  );
};

export default Test;
