import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Nav } from "react-bootstrap";
import "../components/Navbar.css";
import logo from "../images/logo.png";
import Image from "react-bootstrap/Image";
import "./Login.css";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <>
      <div className="background-image d-flex flex-column">
        {/*Navbar */}
        <Nav className="d-flex justify-content-between ">
          <Link to="/">
            <Image
              className="nav-netflix-logo m-5"
              src={logo}
              alt="Netflix logo"
            />
          </Link>
        </Nav>

        {/* body / form */}
        <div className="d-flex w-75 m-auto pt-3 pb-5 mb-5 justify-content-center  ">
          <form
            action="#"
            method="post"
            aria-label="Login"
            className="d-flex flex-column w-50  justify-content-center p-5 rounded-3 opacity-75 black-bg "
          >
            <h3 className="text-white">Login</h3>
            <input
              type="text"
              name="Email"
              placeholder="Email "
              className="p-2 mt-4"
            />
            <input
              type="text"
              name="Password"
              placeholder="Add a password"
              className="p-2 mt-2"
            />

            <Button variant="danger" size="lg" className="form-buttons mt-5 ">
              Next
            </Button>

            <div className="d-flex flex mt-2  text-white">
              <Form.Check aria-label="option 1" className="me-2" />
              <span className="me-5">Remember me</span>
              <Link to="/faq" className="nav text-white float-end ms-5">
                Need Help?
              </Link>
            </div>

            <div className="d-flex flex mt-5  text-white">
              <span className="mt-2 me-2">New to Netflix?</span>
              <Link to="/signup" className="text-white mt-2 ">
                Sign up now.
              </Link>
            </div>
            <div className="d-flex flex mt-3  text-white">
              <span>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
                <Link to="" className="ms-2">
                  Learn more
                </Link>
              </span>
            </div>
          </form>
        </div>

        {/*  Footer */}
        <div className="bg-black mt-2 pt-5 opacity-75 text-secondary">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Login;
