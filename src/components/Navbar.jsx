import React from 'react'
import './Navbar.css'
import companylogo from "../assets/Oodeologo.png"
import { Link, Links, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <img src={companylogo} alt="Company Logo" />
      </div>

      <nav>
        <ul className="navLinks">
          <li>
            <Link to="/" className='ink'><h4>Home</h4></Link>
            </li>

          <li className="services">
            <Link to="/service" className='ink'><h4>Services</h4></Link>
         
            <ul className="dropdown">
              <li>Consulting</li>
              <li>Installations</li>
              <li>Product Training</li>
              <li>Maintenanace</li>
            </ul>
          </li>

          <li>
            <Link to="/" className='ink'> <h4>Team</h4></Link></li>

          <li>
            <Link to="/" className='ink'> <h4>Projects</h4></Link>
            </li>
          <li>
            <Link to="/blog" className='ink'><h4>Blog</h4></Link>
            </li>
        </ul>
      </nav>
      

      <div className="contactUs_btn">
        <button>Contact Us</button>
      </div>
      
    </header>
  )
}

export default Navbar