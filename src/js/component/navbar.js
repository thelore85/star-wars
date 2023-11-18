import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="p-4 d-flex">
        <Link to="/">
          <span className="navbar-brand mb-0 h3">Home</span>
        </Link>
        <Link to="/agenda" className="me-auto">
          <span className="navbar-brand mb-0 h3">Agenda</span>
        </Link>

        <Link to="/">
          <button className="btn btn-primary">Run a Function</button>
        </Link>

    </nav>
  );
};
