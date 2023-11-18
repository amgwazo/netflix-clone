import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.png';
import Image from "react-bootstrap/Image";
import { Nav } from 'react-bootstrap';

const Navbar = () => {
  const isUserSignedIn = !!localStorage.getItem('token');
  
  console.log(isUserSignedIn + ' in Navbar');

  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('token');
    console.log(isUserSignedIn);
    navigate('/login');

  }

  return (
    <Nav className="d-flex justify-content-between ">
      <Link to="/">
        <Image className="nav-netflix-logo ms-5 mt-3 mb-0 pb-0" src={logo} alt="Netflix logo" />
      </Link>

      <ul className="d-flex me-5 mt-3 mb-0 pb-2">
        {isUserSignedIn ? (
          <>
            <Link
              to="/account"
              className=" btn btn-sm  btn-danger form-buttons m-2"
            >
              <li> Account</li>
            </Link>

            <Link
              to=""
              className=" btn btn-sm  btn-danger form-buttons m-2"
              onClick={handleSignOut}
            >
              <li> Sign Out</li>
            </Link>
            {/* <li>
              <Button  className='btn btn-sm' onClick={handleSignOut}>Sign Out</Button>
            </li> */}
          </>
        ) : (
          <>
            <Link
              to="/login"
              className=" btn btn-sm  btn-danger form-buttons m-2"
            >
              <li> Sign In</li>
            </Link>
            {/* <Link to="/signup" className="btn btn-sm btn-danger form-buttons m-2">
            <li>Get Started</li>
          </Link> */}
          </>
        )}
      </ul>
    </Nav>
  );
}

export default Navbar