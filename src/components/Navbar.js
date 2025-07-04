import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-4 py-3">
      <a className="navbar-brand text-danger fw-bold" href="#">
        DivinePath
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/services">Services</Link> {/* ✅ fixed route */}
          </li>
        </ul>

        <ul className="navbar-nav">
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="btn btn-outline-danger" to="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
