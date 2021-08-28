import React, { useState } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const clickHandler = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <Fragment>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            NAVIGATOR
          </Link>
          <div className="menu-icon" onClick={clickHandler}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
