import React from "react";
import Accordion from "./Components/Accordion";

const items = [
  {
    title: "what is react",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime hic voluptas, commodi dicta in pariatur perspiciatis voluptatum atque animi distinctio.",
  },
  {
    title: "what is react",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime hic voluptas, commodi dicta in pariatur perspiciatis voluptatum atque animi distinctio.",
  },
  {
    title: "what is react",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime hic voluptas, commodi dicta in pariatur perspiciatis voluptatum atque animi distinctio.",
  },
];
function App() {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;
