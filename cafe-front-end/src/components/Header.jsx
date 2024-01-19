import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { doLogout, getCurrentUserDetails, isLoggedIn } from "../Auth";
import { toast } from "react-toastify";

const Header = () => {
  const [login, setLogin] = useState(false);

  const [user, setUser] = useState(undefined);

  useEffect(() => {
    setLogin(isLoggedIn());
    setUser(getCurrentUserDetails());
  }, [login]);

  const logOut = () => {
    doLogout(() => {
      setLogin(false);
      Navigate("/");
      toast.info("Logout successfully.");
    });
  };

  return (
    <header
      className="p-3 text-bg-dark"
      style={{ paddingLeft: "15px", paddingRight: "15px" }}
    >
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" className="nav-link px-2 text-secondary">
              Home
            </Link>
          </li>
          <li>
            <Link to="/user/Dashboard" className="nav-link px-2 text-white">
              Dashboard
            </Link>
          </li>
          <li>
            <a href="#" className="nav-link px-2 text-white">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 text-white">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 text-white">
              About
            </a>
          </li>
        </ul>

        <div className="text-end">
          <>
            {login && (
              <>
                <Link
                  onClick={logOut}
                  type="button"
                  className="btn btn-outline-light "
                >
                  Logout
                </Link>

                {/* <Link type="button" className="btn btn-outline-light ">
                  {user.email}
                </Link> */}
              </>
            )}
            {!login && (
              <>
                <Link
                  to="/Login"
                  type="button"
                  className="btn btn-outline-light "
                >
                  Login
                </Link>
                <Link
                  to="/Registration"
                  type="button"
                  className="btn btn-warning signup"
                >
                  Sign-up
                </Link>

                <Link
                  to="/forgotPassword"
                  type="button"
                  className="btn btn-info forgotPassword"
                >
                  Forgot Password
                </Link>
              </>
            )}
          </>
        </div>
      </div>
    </header>
  );
};

export default Header;
