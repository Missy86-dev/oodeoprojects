import React, { useState } from "react";
import "./secondnav.css";
import companylogo from "../assets/Oodeologo.png";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const SecondNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header>
        <div className="logo">
          <img src={companylogo} alt="Company Logo" />
        </div>

        <nav className={menuOpen ? "active" : ""}>
          <ul className="navLinks">
            <li>
              <Link to="/" className="ink">
                <h4>Home</h4>
              </Link>
            </li>

            {/* SERVICES DROPDOWN */}
            <li className="services">
              <Link to="/service" className="ink" >
                <h4>Services</h4>
              </Link>

              <ul className="dropdown">
                <li>
                  <Link to="/consulting" className="ink">
                  Consulting
                  </Link>
                  </li>
                <li>
                  <Link to="/installation" className="ink">
                  Installations
                  </Link>
                </li>
                <li>
                  <Link to="/productTraining" className="ink">
                  Product Training
                  </Link>
                </li>
                <li>
                  <Link to="/Maintenance" className="ink">
                  Maintenance
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/team" className="ink">
                <h4>Team</h4>
              </Link>
            </li>

            {/* <li>
              <Link to="/projects" className="ink">
                <h4>Projects</h4>
              </Link>
            </li> */}

           <li>
            <Link to="/projects" className="ink"> 
            <h4>Projects</h4>
            </Link>
           </li>


            <li>
              <Link to="/blog" className="ink">
                <h4>Blog</h4>
              </Link>
            </li>
          </ul>
        </nav>

        <Link to="/contact" className="contactUs_btn">
          <button>Contact Us</button>
        </Link>
        <div
  className="hamburger"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <FaTimes /> : <FaBars />}
</div>
      </header>
    </>
  );
};

export default SecondNav;
