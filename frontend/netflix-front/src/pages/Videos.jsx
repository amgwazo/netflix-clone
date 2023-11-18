import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import {  useNavigate } from 'react-router-dom';
import Banner from '../components/videos/Banner';
import './Videos.css';

const Videos = () => {
 const isUserSignedIn = !!localStorage.getItem("token");
 console.log(isUserSignedIn + " in Account Page");
 const navigate = useNavigate();

 // Redirect to login if user is not authenticated
 if (!isUserSignedIn) {
  console.log(isUserSignedIn + " : user is signed out");
   navigate("/login");
  //  return null; // Render nothing if redirecting
 }

 const tmdbUrl =
   process.env.REACT_APP_TMDB_API_END_POINT +
   "api_key=" +
   process.env.REACT_APP_TMDB_API_KEY;
 console.log(tmdbUrl);
 console.log(process.env.REACT_APP_TMDB_API_END_POINT);
 console.log(process.env.REACT_APP_TMDB_API_KEY)

 const [movieList, setMovieList] = useState([]);



  console.log(movieList);

  useEffect(() => {
    const getMovie = () => {
      fetch(tmdbUrl)
        .then((res) => res.json())
        .then((json) => setMovieList(json.results));
    };
    getMovie();
  }, [tmdbUrl]);

  return (
    <>
      <div className="h-100">
        <div className="nav-bar d-flex flex-column bg-black  ">
          <Navbar />
          {/* <hr /> */}
        </div>
        <Banner />

        <div className="d-flex col justify-content-center flex-wrap bg-black">
          {movieList.map((movie) => (
            <img
              style={{
                maxWidth: "350px",
                maxHeight: "250px",
                marginLeft: "10px",
                marginTop: "10px",
              }}
              /* variant="top"*/
              src={`${process.env.REACT_APP_TMDB_IMAGES_API_END_POINT}${movie.poster_path}`}
              alt="Movie Cover"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Videos