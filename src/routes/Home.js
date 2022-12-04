import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../components/HomeStyles.css"

const Home = () => {

    return(
        <>
        <Navbar />
        <div className="hero">
            <div className="hero__content">
                <h1> <span id="hero">Welcome to </span>christ embassy yaba</h1>

                <p>watch live</p>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Home