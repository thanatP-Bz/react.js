import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Mike's Pizza</h1>
        <p>Lorem, ipsum dolor sit amet</p>
        <Link to="/menu">
          <button>Order Now!</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
