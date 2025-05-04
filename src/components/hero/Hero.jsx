import React from "react";
// import "./App.css";

import { backgrounds, icons } from "@/assets/images";

let Hero = () => {
  return (
    <>
      <div className="relative">
        <div
          className="nowex h-[450px] lg:h-[510px] xl:h-[650px] "
          style={{ backgroundImage: `url(${backgrounds.heroBG})` }}
        ></div>
        <div className="hero-overlay w-full h-[450px] lg:h-[510px] xl:h-[650px]  ] absolute top-0 z-10"></div>

        <div className=" hero-content absolute top-24 lg:top-28 xl:top-32 left-4 right-4 text-white z-30">
          <p className="block lg:hidden  text-5xl xl:text-[58px] font-bold leading-tight  md:text-center">
            Elearning Platform for <br className="hidden lg:block" />{" "}
            <span className="text-ourOrange">IT</span> Courses
          </p>

          <p className="hidden lg:block text-[42px] xl:text-[58px] font-bold leading-tight  md:text-center">
            E-LEARNING PLATFORM FOR <br className="hidden lg:block" />{" "}
            <span className="text-ourOrange">IT</span> COURSES
          </p>

          <div className="hidden lg:block  mx-auto w-[680px] xl:w-[750px] border-x rounded-md border-ourOrange px-3">
            <p className="text-center mt-8 text-xl xl:text-2xl text-gray-300">
              lorem ispum doler sign is something diffrent that anything that we
              see the in this workd that we lorem ispum doler sign is something
              diffrent that anything that we see the in this workd that we lorem
              ispum doler sign is something diffrent{" "}
            </p>
          </div>

          <div className="relative md:px-20">
            <input
              className="block lg:hidden  w-full pl-5 pr-14 py-4 md:py-3 mt-12 rounded-xl text-white text-2xl md:text-xl bg-bodyColor border border-ourOrange outline-none"
              placeholder="What Is On Your Mind?"
            />
            <span className="block md:hidden absolute right-5 top-4 ">
              <img className="w-[35px] " src={icons.search2} />
            </span>
          </div>

          <div className="hidden lg:flex w-full h-[110px] xl:h-[175px]  justify-center gap-5 xl:gap-9 lg:mt-[90px] xl:mt-32 ">
            <div className="w-[160px] xl:w-[245px] h-full flex flex-col gap-2 xl:gap-3 justify-center items-center text-center bg-[#222222] shadow-[0_2px_5px_rgba(0,0,0,0.5)]   hover:shadow-[0px_0px_20px_1px_#ffbb763f] border border-gray-500 transition-all duration-300 ease-in-out hover:border-white/45 rounded-3xl">
              <p className="font-bold text-2xl xl:text-4xl">350,000+</p>
              <p className="text-lg xl:text-2xl">Active Users</p>
            </div>

            <div className="w-[160px] xl:w-[245px] h-full flex flex-col gap-2 xl:gap-3 justify-center items-center text-center bg-[#222222] shadow-[0_2px_5px_rgba(0,0,0,0.5)]   hover:shadow-[0px_0px_20px_1px_#ffbb763f] border border-gray-500 transition-all duration-300 ease-in-out hover:border-white/45 rounded-3xl">
              <p className="font-bold text-2xl xl:text-4xl">120+</p>
              <p className="text-lg xl:text-2xl">Online Courses</p>
            </div>

            <div className="w-[160px] xl:w-[245px] h-full flex flex-col gap-2 xl:gap-3 justify-center items-center text-center bg-[#222222] shadow-[0_2px_5px_rgba(0,0,0,0.5)]   hover:shadow-[0px_0px_20px_1px_#ffbb763f] border border-gray-500 transition-all duration-300 ease-in-out hover:border-white/45 rounded-3xl">
              <p className="font-bold text-2xl xl:text-4xl">6000</p>
              <p className="text-lg xl:text-2xl">Certificates</p>
            </div>

           
          </div>

        </div>
      </div>
    </>
  );
};

export default Hero;
