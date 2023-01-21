import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../components/HomeStyles.css";
import play from "../assests/play.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="hero__content">
          <h1>
            {" "}
            <span id="hero">Welcome to </span>christ embassy{" "}
            <span id="hero1">yaba Church </span>{" "}
          </h1>
          <Link to="/watchlive" style={{ textDecoration: "none" }}>
            <button className="play__btn">
              <span>watch live</span>
              <div className="play">
                <img src={play} alt="play" />
              </div>
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
