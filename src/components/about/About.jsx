import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import TestimonialCard from "../testimonials/TestimonialCard";

import { backgrounds } from "@/assets/images";

let About = () => {
  // State to check if the main course image has finished loading
  const [imageLoaded, setImageLoaded] = useState(false);

  // isLoading here is determined by whether the image has loaded
  const isLoading = !imageLoaded;

  // When the image loads, update the state
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const ourTeam = [
    {
      id: 0,
      image:
        "https://i.pinimg.com/236x/1d/3d/5a/1d3d5a32cf8ad773b86d92a20ec8429d.jpg",
      name: "Ahmad Khan",
      position: "CEO & FOUNDER",
      facebookLink: "",
      xLink: "",
      linkedinLink: "",
    },
    {
      id: 0,
      image:
        "https://i.pinimg.com/236x/18/1e/52/181e52c7ceaf545ca1c103a97efa3593.jpg",
      name: "Zainab Ommah",
      position: "General Manager",
      facebookLink: "",
      xLink: "",
      linkedinLink: "",
    },
    {
      id: 0,
      image:
        "https://i.pinimg.com/236x/8c/dc/1b/8cdc1b3ecd021d43e8ae4d7513121b2f.jpg ",
      name: "Othman Ubbo",
      position: "Finance Officer",
      facebookLink: "",
      xLink: "",
      linkedinLink: "",
    },
  ];

  return (
    <div>
      <Header />

      <div
        className="nowex h-[530px]"
        style={{ backgroundImage: `url(${backgrounds.aboutBG})` }}
      ></div>

      <div className="hero-overlay w-full h-[530px]  ] absolute top-[62px] z-10"></div>

      <div className="hero-content absolute top-72 left-4 right-4 text-white z-30">
        <p className="text-[48px] font-bold leading-tight">About Us</p>
        <p className="text-3xl font-bold mt-2">
          Lorem Ispum doller amit sit om for things over the other things we see
          them.
        </p>
      </div>

      <div className="w-full  bg-darkGray rounded-[20px_20px_0_0] -mt-16 z-20 relative font-bold p-5 pt-6 ">
        <p className="text-3xl  mb-3">Our purpose</p>
        <div className="w-[47px] h-[7px] bg-ourOrange"></div>

        <p className="mt-7 mb-9 text-2xl ">
          Lorem ispum doller amit sit on the things that we altreadu thiking fo
          rthem so this is okay. that we altreadu thiking fo rthem so this is
          okay. that we altreadu thiking fo rthem so this is okay. rthem so this
          is okay.
        </p>

        <hr />

        <div className="text-center mt-14">
          <p className="text-4xl">Meet Our Team</p>
          <p className="text-xl mt-6">
            Lorem Ispum doller sign is something diffrent that i really thimkign
            abou the wor
          </p>

          <div className="px-2">
            {ourTeam.map((card) => (
              <div className="my-14 w-full h-[360px] rounded-3xl  relative">
                <div className="w-full h-[360px] rounded-[18px] overflow-hidden">
                  {!imageLoaded && (
                    <Skeleton
                      height={200}
                      width="100%"
                      baseColor="darkGray"
                      className=" "
                    />
                  )}
                  {/* Render the image but hide it until it's loaded */}

                  <img
                    onLoad={handleImageLoad}
                    className="w-full h-full object-cover"
                    src={card.image}
                    style={{ display: imageLoaded ? "block" : "none" }}
                  />
                </div>
                <div className="overlay w-full h-[155px] rounded-[0_0_18px_18px] absolute bottom-0"></div>
                <div className="personContent font-bold text-center absolute bottom-0 w-full">
                  <p className="text-3xl mb-2">{card.name}</p>
                  <p className="text-2xl">{card.position}</p>

                  <div className="flex gap-4 justify-center py-4">
                    <span className=" px-4 py-2 rounded-full bg-ourOrange">
                      f
                    </span>
                    <span className=" px-4 py-2 rounded-full bg-ourOrange">
                      X
                    </span>
                    <span className=" px-4 py-2 rounded-full bg-ourOrange">
                      in
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center pt-16 px-5 font-bold">
        <p className="text-3xl">What Our Students say?</p>
        <p className="text-xl mt-6">
          Lorem Ispum doller sign is something diffrent that i really thimkign
          abou the wor
        </p>
      </div>

      <div className="px-5 pb-28">
        <TestimonialCard
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
          image="https://i.pinimg.com/236x/c6/0b/ec/c60bec168e19a2c9881bfc2806766fc7.jpg"
          name="Emma Carter"
          position="Front-End Developer"
        />
        <TestimonialCard
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
          image="https://i.pinimg.com/236x/16/32/55/1632554a2d56114c2513492486171066.jpg"
          name="Maria Hassa"
          position="Graphic Designer"
        />
        <TestimonialCard
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
          image="https://i.pinimg.com/236x/9f/b3/f3/9fb3f3e99221c84726335d003813e1e9.jpg"
          name="John Beast"
          position="UX/UI Designer"
        />
        <TestimonialCard
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
          image="https://i.pinimg.com/236x/cb/e2/9e/cbe29ea7139e76c33cb28a9c945acc2b.jpg"
          name="Layla Hussain"
          position="Data Analyst"
        />
        <TestimonialCard
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
          image="https://i.pinimg.com/236x/b5/37/28/b5372811c4b763201c6cf324db5820ec.jpg"
          name="Zayd Ahmad"
          position="Digital Marketer"
        />
      </div>

      <Footer />
    </div>
  );
};

export default About;
