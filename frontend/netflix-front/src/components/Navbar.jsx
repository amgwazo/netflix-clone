import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.png';
import Image from "react-bootstrap/Image";
import { Nav } from 'react-bootstrap';

const Navbar = () => {
  const isUserSignedIn = !!localStorage.getItem('token');

  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('token');
    navigate('/login');

  }

  return (
    <Nav className="d-flex justify-content-between ">
      <div className="d-flex">
        <Link to="/videos">
          <Image
            className="nav-netflix-logo ms-5 mt-3 mb-0 pb-0"
            src={logo}
            alt="Netflix logo"
          />
        </Link>
        {isUserSignedIn ? (
          <div className=" d-flex nav-buttons ms-5">
            <Link to="/" className=" nav-button m-2">
              <li> Home</li>
            </Link>
            <Link to="/videos" className=" nav-button  m-2">
              <li> TV Shows</li>
            </Link>
            <Link to="/videos" className=" nav-button m-2">
              <li> Movies</li>
            </Link>
          </div>
        ) : null}
        
      </div>

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