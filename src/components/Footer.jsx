import React from 'react'
import "./footer.css"
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
     <footer className="footer">
      <div className="footer-container">
        
        {/* Left Section */}
        <div className="footer-column">
          <h3>MAIN NAVIGATION</h3>
          <ul>
            <li>Contact</li>
            <li>Services</li>
            <li>Team</li>
            <li>Privacy Policy</li>
            <li>Legal Notice</li>
          </ul>
        </div>

        {/* Middle Section */}
        <div className="footer-column">
          <h3>Oodeo Projects Limited</h3>
          <p>
            c/o TechQuartier, Platz der Einheit 2,<br />
            60327 Frankfurt am Main
          </p>

          <p className="contact-info">
            Phone: +2348034720889<br />
            Email: kunleorelusi@yahoo.com<br />
            Web: oodeoprojectslimited.com
          </p>
        </div>

        {/* Right Section */}
        <div className="footer-column">
          <h3>You need help?</h3>
          <p>Click on the button and fill out the form.</p>

          {/* <button className="footer-btn">Hotline Service</button> */}

          <Link to="/hotline-service">
             <button className="footer-btn">Hotline Service</button>
          </Link>

        

        </div>

      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        © 2026 Oodeo Projects Limited | All rights reserved
      </div>
    </footer>

    </>
  )
}

export default Footer