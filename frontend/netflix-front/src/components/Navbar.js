import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from "react-bootstrap";
import './Navbar.css';
import logo from '../images/logo.png';
import Image from "react-bootstrap/Image";

const Navbar = () => {
  return (
    <>
      <Nav className="d-flex justify-content-between nav ">
        <Link to="/" >
          <Image className="nav-netflix-logo" src={logo} alt="Netflix logo" />
        </Link>
        <ul className="d-flex">
          <Link to="/login" className=" btn btn-sm  btn-danger m-2">
            <li> Sign In</li>
          </Link>
          <Link to="/signup" className="btn btn-sm btn-danger m-2">
            <li>Get Started</li>
          </Link>
        </ul>
      </Nav>
    </>
  );
}

export default Navbar