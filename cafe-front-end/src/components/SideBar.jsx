import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars } from "react-icons/fa";
import "../index.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar "
      style={{ width: "280px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">My Cafe</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" onClick={() => console.log("Clicked")}>
          <Link to="/" className={`nav-link text-white `} aria-current="page">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </Link>
        </li>
        <li onClick={() => console.log("Clicked")}>
          <Link to="/user/Dashboard" className={`nav-link text-white `}>
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Dashboard
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
