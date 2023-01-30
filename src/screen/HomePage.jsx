import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import bgImg from "../assets/Arka Plan.svg"
import { About } from "../components/About";
import Works from "../components/Works";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Arrow from "../components/Arrow";
import Ecommerce from "../servicesPages/Ecommerce";
import Website from "../servicesPages/Website";

function HomePage() {
  return (
    <div className="w-full">
      <Arrow></Arrow>
      <Hero></Hero>
      <Services></Services>
      <Ecommerce></Ecommerce>
      <About></About>
      <Works></Works>
      <Website></Website>
      <Contact></Contact>
      <Footer></Footer>

    </div>
  );
}

export default HomePage;
