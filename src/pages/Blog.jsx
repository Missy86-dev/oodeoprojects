import React, { useState } from 'react'
import styles from "./blog.module.css"
import { Link } from 'react-router-dom'
import imgOne from "../assets/image1.png"
import imgTwo from "../assets/image2.png"
import imgThree from "../assets/image3.png"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const slides = [
  { img: imgOne,   title: "Health and Safety in the workplace",          to: "/sceneone"   },
  { img: imgTwo,   title: "Creating awareness for Kidney Health",         to: "/scenetwo"   },
  { img: imgThree, title: "A possible shortage of Nephrologists looming", to: "/scenethree" },
  { img: imgOne,   title: "Kidney patients and Covid-19: Where are we now?", to: "/scenefour"  },
  { img: imgTwo,   title: "Health and Safety in the workplace",           to: "/scenefive"  },
  { img: imgThree, title: "Creating awareness for Kidney Health",         to: "/scenesix"   },
]

const Blog = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 20,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

  return (
    <div className={styles.blogMedia}>
      <div className={styles.carouselBox}>

        {/* SLIDES */}
        <div ref={sliderRef} className="keen-slider">
          {slides.map((slide, index) => (
            <div key={index} className={`keen-slider__slide ${styles.slide}`}>
              <Link to={slide.to}>
                <div className={styles.cardOne}>
                  <img src={slide.img} alt={slide.title} />
                </div>
                <h3>{slide.title}</h3>
              </Link>
            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className={styles.dots}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => instanceRef.current?.moveToIdx(index)}
              className={`${styles.dot} ${currentSlide === index ? styles.active : ""}`}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Blog



























// import React from 'react'
// import styles from "./blog.module.css"
// // import Navbar from '../components/Navbar'
// // import {cardData } from "./data.js"
// import { Link } from 'react-router-dom'
// import imgOne from "../assets/image1.png"
// import imgTwo from "../assets/image2.png"
// import imgThree from "../assets/image3.png"
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Blog = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: false,
//   };

//   return (
    
//     <div className={styles.blogMedia}>
//       <div className={styles.carouselBox}>
//         <Slider  {...settings}>

//           {/* SLIDE 1 */}
//           <div className={styles.slide}>
//             <Link to="/sceneone"> {/* ✅ LINK */}
//               <div className={styles.cardOne}>
//                 <img src={imgOne} alt="Health and Safety" />
//               </div>
//               <h3>Health and Safety in the workplace</h3>
//             </Link>
//           </div>

//           {/* SLIDE 2 */}
//           <div className={styles.slide}>
//             <Link to="/scenetwo"> {/* ✅ LINK */}
//               <div className={styles.cardOne}>
//                 <img src={imgTwo} alt="Kidney Health" />
//               </div>
//               <h3>Creating awareness for Kidney Health</h3>
//             </Link>
//           </div>

//           {/* SLIDE 3 */}
//           <div className={styles.slide}>
//             <Link to="/scenethree"> {/* ✅ LINK */}
//               <div className={styles.cardOne}>
//                 <img src={imgThree} alt="Nephrologists shortage" />
//               </div>
//               <h3>A possible shortage of Nephrologists looming</h3>
//             </Link>
//           </div>

//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Blog;

//   return (
//     <>
  
//       <section className={styles.section}>
//       <div className={styles.container}>
        
//         {/* Section Header */}
//         <h2 className={styles.mainHeader}>
//           Latest Blog
//         </h2>

//         {/* Content Wrapper */}
//         <div className={styles.contentWrapper}>
//           <div className={styles.textContent}>
//             <h3 className={styles.blogTitle}>
//               Health and Safety in the <br /> workplace
//             </h3>
            
//             <p className={styles.description}>
//               Occupational health and safety (OHS) are rules and regulations that 
//               a worker, as well as the workplace, should follow and adhere to for a 
//               safe working environment. Ensuring that all staff members are 
//               aware of and fully understand these regulations is of utmost 
//               importance.
//             </p>
//           </div>
//         </div>

        
//     {/* {blog latest carousel} */}
//     {/*  Bottom layout */}

//     <div className="blog-media">
//       <div className="carousel-box">

//         <Slider {...settings}>
//           <div className={styles.slide}>
//             <Link to="/sceneone">
//             <div className="cardOne">
//               <div className={styles.cardImg}>
//                 <img src={blogOne} alt="" />
//               </div>
        
//             </div>
//             </Link>
//             <h3>Hello World</h3>
//           </div>

//           <div className={styles.slide}>
//             <Link to="/sceneone">
//             <div className="cardOne">
//               <div className={styles.cardImg}>
//                 <img src={blogOne} alt="" />
//               </div>
        
//             </div>
//             </Link>
//             <h3>Hello World</h3>
//           </div>

//           <div className={styles.slide}>
//             <Link to="/sceneone">
//             <div className="cardOne">
//               <div className={styles.cardImg}>
//                 <img src={blogOne} alt="" />
//               </div>
        
//             </div>
//             </Link>
//             <h3>Hello World</h3>
//           </div>

//           <div className={styles.slide}>
//             <Link to="/sceneone">
//             <div className="cardOne">
//               <div className={styles.cardImg}>
//                 <img src={blogOne} alt="" />
//               </div>
        
//             </div>
//             </Link>
//             <h3>Hello World</h3>
//           </div>

//           <div className={styles.slide}>
//             <Link to="/sceneone">
//             <div className="cardOne">
//               <div className={styles.cardImg}>
//                 <img src={blogOne} alt="" />
//               </div>
        
//             </div>
//             </Link>
//             <h3>Hello World</h3>
//           </div>

//           <div className={styles.slide}>
//             <Link to="/sceneone">
//             <div className="cardOne">
//               <div className={styles.cardImg}>
//                 <img src={blogOne} alt="" />
//               </div>
        
//             </div>
//             </Link>
//             <h3>Hello World</h3>
//           </div>

//           <div className={styles.slide}>
//             <Link to="/sceneone">
//             <div className="cardOne">
//               <div className={styles.cardImg}>
//                 <img src={blogOne} alt="" />
//               </div>
        
//             </div>
//             </Link>
//             <h3>Hello World</h3>
//           </div>

//         </Slider>
//       </div>
//     </div> 
        
//       </div>
//     </section>

//     {/* {/* {blog latest carousel}
//     {/*  second layout */}
//     {/* <div className={styles.container}>
//       <Link to ="/sceneone">
//       <div className="cardOne">
//         <div className={styles.cardImg}>
//   <img src={blogOne} alt="" />
//         </div>
//         <h1>Hello world</h1>
      
//       </div>
//       </Link>
    
   
//     </div>   */}
    
//     </>
//   )
// }

// export default Blog