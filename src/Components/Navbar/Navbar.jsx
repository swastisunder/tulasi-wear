import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { use, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <div className="sticky top-0 z-50 bg-white/30 backdrop-blur-md">
      <div className="flex items-center justify-center bg-gray-900 p-4 sticky top-0 z-50">
        <div className="bg-black text-green-400 font-mono text-lg p-6 rounded-xl shadow-lg max-w-2xl mx-auto">
          <p>
            $ git commit -m{" "}
            <span className="text-yellow-300">
              "Project in progress... don't judge 😅"
            </span>
          </p>
        </div>
      </div>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>
            <Link to="/">Tulasi Wear</Link>
          </p>
        </div>
        <ul className="nav-menu">
          <li>
            <Link to="/"> Shop </Link>
            {location.pathname === "/" && <hr />}
          </li>
          <li>
            <Link to="/mens"> Men </Link>
            {location.pathname === "/mens" && <hr />}
          </li>
          <li>
            <Link to="/womens"> Women </Link>
            {location.pathname === "/womens" && <hr />}
          </li>
          <li>
            <Link to="/kids"> Kids </Link>
            {location.pathname === "/kids" && <hr />}
          </li>
        </ul>
        <div className="nav-login-cart">
          <button>
            <Link to="/login">Login</Link>
          </button>
          <Link to="/cart">
            <img src={cart_icon} alt="" />
          </Link>
          <div className="nav-cart-count">0</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
