import React from 'react'
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const Videos = () => {
 const isUserSignedIn = !!localStorage.getItem("token");
 console.log(isUserSignedIn + " in Account Page");
 const navigate = useNavigate();

 // Redirect to login if user is not authenticated
 if (!isUserSignedIn) {
   navigate("/login");
   return null; // Render nothing if redirecting
 }

  return (
    <>
      <div className="d-flex flex-column">
        <Navbar />
        <hr />
      </div>
      <div>Videos</div>
    </>
  );
}

export default Videos