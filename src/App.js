import React, { useState } from "react";
import Translate from "./Translate.js";

import DropDown from "./Components/DropDown.js";
/* import Accordion from "./Components/Accordion"; */

/* const items = [
  {
    title: "what is react",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime hic voluptas, commodi dicta in pariatur perspiciatis voluptatum atque animi distinctio.",
  },
  {
    title: "what is Js",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime hic voluptas, commodi dicta in pariatur perspiciatis voluptatum atque animi distinctio.",
  },
  {
    title: "what is library",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime hic voluptas, commodi dicta in pariatur perspiciatis voluptatum atque animi distinctio.",
  },
]; */

const options = [
  {
    label: "the color red",
    value: "red",
  },
  {
    label: "the color green",
    value: "green",
  },
  {
    label: "the color blue",
    value: "blue",
  },
];

function App() {
  return (
    <div>
      <Translate />
    </div>
  );
}

export default App;
