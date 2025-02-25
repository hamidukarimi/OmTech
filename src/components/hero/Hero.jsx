import React from "react";
// import "./App.css";

import { backgrounds, icons } from "@/assets/images";


let Hero = () => {
  return (
    <>
      <div className="relative">
        <div className="nowex h-[450px] " style={{ backgroundImage: `url(${backgrounds.heroBG})` }}></div>
        <div className="hero-overlay w-full h-[450px]  ] absolute top-0 z-10"></div>

        <div className="hero-content absolute top-24 left-4 right-4 text-white z-30">
          <p className="text-5xl font-bold leading-tight">
            Elearning Platform for IT Courses
          </p>
          <div className="relative">
            <input
              className="  w-full pl-5 pr-14 py-4 mt-12 rounded-xl text-white text-2xl bg-black border border-ourOrange outline-none"
              placeholder="What Is On Your Mind?"
            />
            <span className="absolute right-5 top-16 ">
              <img className="w-[35px] " src={icons.search2} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
