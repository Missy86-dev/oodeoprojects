import React from 'react'
import { Link } from 'react-router-dom'
import "./serviceOptions.css"
import serviceImg from "../assets/image1.png"; // replace with your actual image


const ServiceOptions = () => {
  return (
    <>
    <section className="service-wrapper">
          <div className="service-container">
            
            {/* LEFT IMAGE */}
            <div className="service-image">
              <img src={serviceImg} alt="Services Illustration" />
            </div>
    
            {/* RIGHT BUTTONS */}
            <div className="service-buttons">
              {/* <button>Consulting</button>
              <button>Installations</button>
              <button>Product Training</button>
              <button>Maintenance</button>
               */}
             
            <button>
              <Link to="/consulting">Consulting</Link>
            </button>

            <button>
              <Link to="/installation">Installations</Link>
              
            </button>

            <button>
              <Link to="/producttraining">Product Training</Link>
            </button>

           <button>
             <Link to="/maintenance">Maintenance</Link>
           </button>

            </div>
            
          </div>
        </section>
    </>
  )
}

export default ServiceOptions