import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../components/HomeStyles.css";
import play from "../assests/play.png";
import sec1 from "../assests/sec1.png";
import sec2 from "../assests/sec2.png";
import { Link } from "react-router-dom";

const Home = () => {
  const [firstImage, setFirstImage] = useState(" ");
  const [secondImage, setSecondImage] = useState("activeImage");

  if (firstImage === " " && secondImage === " ") {
    setSecondImage("activeImage");
  }

  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="hero__content">
          <h1>
            <span id="hero">Welcome to </span>christ embassy
            <span id="hero1">yaba Church </span>
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

      <div className="learnmore">
        <div className="learnmore__img">
          <div
            className={"imgc " + firstImage}
            onMouseOver={() => setFirstImage("activeImage2")}
            onMouseOut={() => setFirstImage(" ")}
          >
            <img src={sec1} alt="sec1" />
          </div>
          <div
            className={"imgp " + secondImage}
            onMouseOver={() => setSecondImage("activeImage")}
            onMouseOut={() => setSecondImage(" ")}
          >
            <img src={sec2} alt="sec2" />
          </div>
        </div>

        <div class="vl"></div>

        <div className="learnmore__text">
          <h3>A story about</h3>
          <h2>Christ Embassy</h2>
          <p>
            We are a global ministry with a vision of taking God’s divine
            presence to the nations of the world and to demonstrate the
            character of the Holy Spirit. Being in Christ Embassy is more than
            being in a church. It’s a Vision, and when you worship at Christ
            Embassy.
          </p>
          <p className="learnmore__context">
            Our mission is to raise generations of men and women who will come
            into their inheritance as we teach the word of God so that they will
            fulfil God's dream.
          </p>

          <button>Learn More</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
