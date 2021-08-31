import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="headerContainer">
        <h1>Mike's Pizza</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          pariatur.
        </p>
        <Link to="/menu">
          <button>Order Now!</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
