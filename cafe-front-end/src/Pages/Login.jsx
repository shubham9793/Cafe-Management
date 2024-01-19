import { Link, useNavigate } from "react-router-dom";
import cafeLogo from "../../public/vite.svg";
import { useRef } from "react";
import { logIn } from "../Services/use-service";
import { toast } from "react-toastify";
import { doLogin, getCurrentUserDetails } from "../Auth";
import BasePage from "./BasePage";

const Login = () => {
  const naviagte = useNavigate();
  const emailElement = useRef();
  const passwordElement = useRef();

  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailElement.current.value;
    const password = passwordElement.current.value;

    const data = { email, password };

    // console.log("getCurrentUserDetails", getCurrentUserDetails());
    logIn(data)
      .then((res) => {
        doLogin(res, () => {});
        toast.success("Login Success!");
        naviagte("/user/dashboard");
      })
      .catch((error) => {
        toast.error("Bad Credentials.");
      });
  };

  return (
    <>
      <BasePage>
        <div className="container col-xl-8 col-md-10 col-sm-12 mx-auto">
          <div className="row align-items-center g-lg-5 py-5">
            <div className="col-lg-6 text-center">
              <img
                src={cafeLogo}
                alt="Cafe Logo"
                className="mb-4"
                style={{ width: "120px", height: "120px", borderRadius: "50%" }}
              />
              <h1 className="display-4 fw-bold text-body-emphasis mb-3">
                Welcome to My Cafe
              </h1>
              <p className="fs-5 text-secondary">
                Indulge in a sensory journey at our charming café, where every
                cup is a masterpiece and every bite is a delight. Immerse
                yourself in a cozy ambiance, savor artisanal brews, and treat
                your taste buds to exquisite flavors. At{" "}
                <strong>My Cafe</strong>, we craft more than coffee – we create
                moments of joy and connection.
              </p>
            </div>
            <div className="col-lg-6">
              <form
                className="p-4 p-md-5 border rounded-3 bg-light"
                style={{ width: "120%" }}
              >
                <h2 className="h4 mb-4">Login to My Cafe</h2>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    name="email"
                    ref={emailElement}
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    name="password"
                    ref={passwordElement}
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    autoComplete="off"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
                <button
                  onClick={(event) => {
                    event.preventDefault(); // Prevent default form submission
                    handleLogin(event);
                  }}
                  className="w-100 btn btn-lg btn-primary mb-3"
                  type="submit"
                >
                  Log in
                </button>
                <Link
                  to="/Registration"
                  type="button"
                  className="w-100 btn btn-lg btn-success"
                >
                  Create Account
                </Link>
                <hr className="my-4" />
                <small className="text-secondary">
                  By clicking Sign in, you agree to the terms of use.
                </small>
              </form>
            </div>
          </div>
        </div>
      </BasePage>
    </>
  );
};

export default Login;
