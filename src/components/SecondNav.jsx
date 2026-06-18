import React from "react";
import "./secondnav.css";
import companylogo from "../assets/Oodeologo.png";
import { Link } from "react-router-dom";

const SecondNav = () => {
  return (
    <>
      <header>
        <div className="logo">
          <img src={companylogo} alt="Company Logo" />
        </div>

        <nav>
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
      </header>
    </>
  );
};

export default SecondNav;
