import React from 'react'
import "./hero.css"
import illustration from '../assets/image1.png';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = () => {
  return (
    <>
      <section className="solutions-wrapper">
        The decorative blue blob/wave on the left
        <div className="decoration-shape"></div>

        <div className="solutions-container">
          {/* Left Side: Text Content */}
          <div className="solutions-text-side">
            <h1 className="solutions-heading">Fürst Solutions</h1>
            <p className="solutions-body">
              Your professional partner for the installation, setup, maintenance and care of medical products,
              as well as professional product training and workshops on the use of medical products,
              in accordance with the applicable standards.
            </p>
          </div>

          {/* Right Side: Illustration */}
          <div className="solutions-visual-slide">
          <div className="my-carousel">
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
      >
        <div>
           <img 
            src={illustration} alt="Fürst Solutions Illustration" 
            className="illustration-img" 
          />
        </div>

        <div>
          <img 
            src={illustration} alt="Fürst Solutions Illustration" 
            className="illustration-img" 
          />
        </div>

        <div>
          <img 
            src={illustration} alt="Fürst Solutions Illustration" 
            className="illustration-img" 
          />
        </div>
      </Carousel>
    </div>

          </div>






          {/* <div className="solutions-visual-side">
          <img 
            src={illustration} alt="Fürst Solutions Illustration" 
            className="illustration-img" 
          />
        </div> */}
        </div>

        {/* Pagination dots at the bottom */}
        {/* <div className="pagination-container">
          <span className="pag-dot"></span>
          <span className="pag-dot"></span>
          <span className="pag-dot active"></span>
        </div>  */}
      </section>
    </>
  )
}

export default Hero