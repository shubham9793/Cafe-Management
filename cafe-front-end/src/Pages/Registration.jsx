import { Link } from "react-router-dom";
import RegistrationMess from "../components/RegistrationMess";
import { useRef, useState } from "react";
import signUp from "../Services/use-service";
import { toast } from "react-toastify";
import BasePage from "./BasePage";

const Registration = () => {
  const nameElement = useRef();
  const contactNumberElement = useRef();
  const emailElement = useRef();
  const passwordElement = useRef();

  const handleRegistration = (event) => {
    event.preventDefault();
    const name = nameElement.current.value;
    const contactNumber = contactNumberElement.current.value;
    const email = emailElement.current.value;
    const password = passwordElement.current.value;
    const data = { name, contactNumber, email, password };

    signUp(data)
      .then((res) => {
        toast.success(res.message);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <>
      <BasePage>
        <section className="p-3 p-md-4 p-xl-5">
          <div className="container">
            <div className="card border-light-subtle shadow-sm">
              <div className="row g-0">
                <RegistrationMess />
                <div className="col-12 col-md-6">
                  <div className="card-body p-3 p-md-4 p-xl-5">
                    <div className="row">
                      <div className="col-12">
                        <div className="mb-5">
                          <h2 className="h3 ">Register here!</h2>
                          <h3 className="fs-6 fw-normal text-secondary m-0">
                            Enter your details to register
                          </h3>
                        </div>
                      </div>
                    </div>
                    <form action="#!">
                      <div className="row gy-3 gy-md-4 overflow-hidden">
                        <div className="col-12">
                          <label htmlFor="name" className="form-label">
                            Full Name <span className="text-danger">*</span>
                          </label>
                          <input
                            ref={nameElement}
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                            required
                          />
                        </div>
                        <div className="col-12">
                          <label htmlFor="contactNumber" className="form-label">
                            Contact Number{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            ref={contactNumberElement}
                            className="form-control"
                            name="contactNumber"
                            id="contactNumber"
                            placeholder="Contact Number"
                            required
                          />
                        </div>
                        <div className="col-12">
                          <label htmlFor="email" className="form-label">
                            Email <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            ref={emailElement}
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="name@example.com"
                            required
                          />
                        </div>
                        <div className="col-12">
                          <label htmlFor="password" className="form-label">
                            Password <span className="text-danger">*</span>
                          </label>
                          <input
                            type="password"
                            ref={passwordElement}
                            className="form-control"
                            name="password"
                            id="password"
                            required
                          />
                        </div>
                        <div className="col-12">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="iAgree"
                              id="iAgree"
                              required
                            />
                            <label
                              className="form-check-label text-secondary"
                              htmlFor="iAgree"
                            >
                              I agree to the{" "}
                              <a
                                href="#!"
                                className="link-primary text-decoration-none"
                              >
                                terms and conditions
                              </a>
                            </label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="d-grid">
                            <button
                              onClick={(event) => {
                                event.preventDefault(); // Prevent default form submission
                                handleRegistration(event);
                              }}
                              className="btn bsb-btn-xl btn-primary"
                              type="submit"
                            >
                              Register
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="row">
                      <div className="col-12">
                        <hr className="mt-5 mb-4 border-secondary-subtle" />
                        <p className="m-0 text-secondary text-center">
                          Already have an account?{" "}
                          <Link
                            to="/Login"
                            className="link-primary text-decoration-none"
                          >
                            Log in
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <p className="mt-5 mb-4">
                          <strong>Or sign in with</strong>
                        </p>
                        <div className="d-flex gap-3 flex-column flex-xl-row">
                          <a
                            href="#!"
                            className="btn bsb-btn-xl btn-outline-primary"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-google"
                              viewBox="0 0 16 16"
                            ></svg>
                            <span className="ms-2 fs-6">Google</span>
                          </a>
                          <a
                            href="#!"
                            className="btn bsb-btn-xl btn-outline-primary"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-facebook"
                              viewBox="0 0 16 16"
                            ></svg>
                            <span className="ms-2 fs-6">Facebook</span>
                          </a>
                          <a
                            href="#!"
                            className="btn bsb-btn-xl btn-outline-primary"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-twitter"
                              viewBox="0 0 16 16"
                            ></svg>
                            <span className="ms-2 fs-6">Twitter</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </BasePage>
    </>
  );
};

export default Registration;
