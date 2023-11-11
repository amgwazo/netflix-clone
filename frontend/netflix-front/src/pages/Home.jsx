import React from "react";
import "./Home.css";
import Banner from "../components/Banner";
import EnjoyTv from "../components/home/EnjoyTv";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DownloadShows from "../components/home/DownloadShows";

const Home = () => {
  return (
    <div className="homepage">
      <div className="header">
        <Navbar className="navbar" />
        <Banner />
      </div>
      {/* Enjoy your tv   */}
      <section className="bg-black">
        <EnjoyTv className="enjoytv" />
      </section>

      {/*  Download your TV Shows Section */}
      <section className="bg-black ps-5">
        <DownloadShows />
      </section>

      {/*  Watch Everywhere Section */}

      <section className="bg-black ps-5">
        <div class="row">
          <div class="col-7 watch-everywhere">
            <h2>Watch</h2>
            <h2>everywhere</h2>
            <p>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
        </div>

      </section>

      {/* Kid's Section */}

      <section className="bg-black"></section>

      {/*  FAQ Section */}

      <section className="bg-black"></section>

      {/*  Footer */}
      <div className="bg-black mt-2 pt-5 ">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
