import React from "react";
import { Link } from "react-router-dom";


const Navbar = props => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
           Adsapp
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/family">Family</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/upsell">Upsell</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
