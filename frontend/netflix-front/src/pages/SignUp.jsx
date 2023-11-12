import React from 'react'
import Navbar from "../components/Navbar";
 import "./Signup.css";
import { Button, Form } from 'react-bootstrap';

const SignUp = () => {
  return (
    <>
      <div className="d-flex flex-column">
        <Navbar className="" />
        <hr />

        <div className="d-flex w-75 m-auto pt-3  justify-content-center ">
          <form
            action="#"
            method="post"
            aria-label="Sign up or restart your membership with Netflix."
            className="d-flex flex-column w-50  justify-content-center p-5 rounded-3 "
          >
            <h3>Create a password to start your membership</h3>
            <h5 className="text-secondary">
              Just a few more steps and you're done! We hate paperwork, too.
            </h5>
            <input
              type="text"
              name="Email"
              placeholder="Email "
              className="p-2 mt-2"
            />
            <input
              type="text"
              name="Password"
              placeholder="Add a password"
              className="p-2 mt-2"
            />
            <div className="d-flex flex mt-2 text-secondary">
              <Form.Check
                aria-label="option 1"
                className="ps-1 pe-1 me-2 border border-1 rounded-2 border-secondary"
              />
              Please do not email me Netflix special offers.
            </div>
            <Button variant="danger" size="lg" className="form-buttons mt-2 ">
              Next
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp