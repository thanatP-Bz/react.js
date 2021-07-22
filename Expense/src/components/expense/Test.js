import React, { useState } from "react";

export default function Test(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("ipad");
  };

  return (
    <div>
      <h2>{title}</h2>
      <h2>{props.title}</h2>
      <h2>{props.amount}</h2>
      <button onClick={clickHandler}>click</button>
    </div>
  );
}
