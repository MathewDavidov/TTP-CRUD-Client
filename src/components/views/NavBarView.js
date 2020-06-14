import React from "react";
import "./styles/NavBarView.css";
import { Link } from "react-router-dom";

const NavBarView = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/campuses" className="nav-link">
            Campuses
          </Link>
          <Link to="/students" className="nav-link">
            Students
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBarView;
