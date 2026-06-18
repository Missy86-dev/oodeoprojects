import React from "react";
import "./myhero.css";
import illustration from "../assets/image1.png";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const MyHero = () => {
  return (
    <>
      <section className="solutions-wrapper">
        <div className="decoration-shape"></div>

        <div className="solutions-container">
          {/* LEFT SIDE */}
          <div className="solutions-text">
            <h1>Oodeo Projects</h1>
            <p>
              Your professional partner for the installation, setup, maintenance
              and care of medical products, as well as professional product
              training and workshops on the use of medical products, in
              accordance with the applicable standards.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="solutions-media">
            <div className="carousel-box">
              <Carousel
                autoPlay
                infiniteLoop
                interval={3000}
                transitionTime={500}
                showArrows={false}
                showThumbs={false}
                showStatus={false}
                showIndicators={true}
                stopOnHover={false}
              >
                <div className="slide">
                  <img src={illustration} alt="slide 1" />
                </div>

                <div className="slide">
                  <img src={illustration} alt="slide 2" />
                </div>

                <div className="slide">
                  <img src={illustration} alt="slide 3" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyHero;
