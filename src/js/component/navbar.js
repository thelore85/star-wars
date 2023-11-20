import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="p-4 d-flex">
        <Link to="/" className="me-auto">
          <span className="mb-0 h3 ">Home</span>
        </Link>
        <Link to="/create">
          <button className="btn btn-primary">Create New Contact</button>
        </Link>

    </nav>
  );
};
