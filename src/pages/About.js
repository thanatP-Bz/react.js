import React from "react";
import multiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${multiplePizzas})` }}
      />
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos,
          veritatis, quas est aspernatur possimus, omnis quasi quo dolorum
          perspiciatis laborum molestias incidunt ipsa similique sed deserunt
          ratione sunt officiis quod mollitia ex? Iste maiores soluta sunt
          necessitatibus, odio inventore quo? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ipsam, quasi.
        </p>
      </div>
    </div>
  );
};

export default About;
