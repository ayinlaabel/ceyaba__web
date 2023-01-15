import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../components/HomeStyles.css"
import play from "../assests/play.png";



const Home = () => {

    return(
        <>
            <Navbar />
            <div className="hero">
                <div className="hero__content">
                    <h1> <span id="hero">Welcome to </span>christ embassy <span id="hero1">yaba Church </span> </h1>

                   <div className="play__btn"><p>watch live</p>  <img src={play} alt="play"/></div> 
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home