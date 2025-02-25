import React from "react";
// import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
 

import Header from "../header/Header";
import Hero from "../hero/Hero";
import Services from "../services/Services";
import Categories from "../categories/Categories";
import PopularCourses from "../popularCourses/PopularCourses";
import Standout from "../standout/Standout";
import Testimonials from "../testimonials/Testimonials";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";

function Home() {
  return (
    <div>
      
      <Header />
      <Hero />
      <Services />
      <Categories />
      <PopularCourses />
      <Standout />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
export default Home;
