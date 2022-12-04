import  "./Navbar.css"
import {Link} from "react-router-dom"
import logo from "../assests/logo.png"


const Navbar = () => {

       return (
       <>
        <nav className="navbar">
      <div className="navbar__container">
            <Link to="/" id="navbar__logo"><img src={logo} alt="ceyaba" /></Link>
            <p className="logo__text">CHRIST EMBASSY YABA</p>
            <div className="navbar__toggle" id="mobile-menu">
                <span className="bar"></span> <span className="bar"></span>
                <span className="bar"></span> 
                
            </div>

            <div className ="navbar__menu">
            <ul className= "navbar__menu">
                <li className="navbar__item">
                    <Link to="/" className="navbar__links">HOME</Link>
                </li>
                <li className="navbar__item">
                    <Link to="/About" className="navbar__links">ABOUT US</Link>
                </li>
                <li className="navbar__item">
                    <Link to="/Service" className="navbar__links">WATCH SERVICE</Link>
                </li>
                <li className="navbar__item">
                    <Link to="/Event" className="navbar__links">EVENTS</Link>
                </li>

                <li className="navbar__item">
                    <Link to="/Testimonies" className="navbar__links">TESTIMONIES</Link>
                </li>

                <li className="navbar__item">
                    <Link to="/Contact" className="navbar__links">CONTACT US</Link>
                </li>
                
                

            </ul>

            </div>

      </div>

  </nav>
        </>

    )
}

export default Navbar