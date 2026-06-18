import React from "react";
import "./home.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import ServiceOptions from "../components/ServiceOptions";
import Profile from "../components/Profile";
import Footer from "../components/Footer";
import Stat from "../components/Stat";
import MyHero from "../components/MyHero";
import SecondNav from "../components/SecondNav";



const Home = () => {
  return (
    <>
      {/* <Navbar/> */}
      <SecondNav/>
      <MyHero />
      {/* <Hero/> */}
      <Services />
      {/* <ServiceOptions /> */}
      <Profile />
      <Stat />
    
      
      {/* <Footer/>  */}
    </>
  );
};

export default Home;
