
import Footer from "../footer/Footer";
import Header from "../header/Header";
import TestimonialCard from "../testimonials/TestimonialCard";

import { backgrounds, members, students } from "@/assets/images";


let About = () => {
  const ourTeam = [
    {
      id: 0,
      image: members.member1,
      name: "Isabella Hughes",
      position: "CEO & FOUNDER",
      facebookLink: "",
      xLink: "",
      linkedinLink: "",
    },
    {
      id: 0,
      image: members.member2,
      name: "Isabella Hughes",
      position: "CEO & FOUNDER",
      facebookLink: "",
      xLink: "",
      linkedinLink: "",
    },
    {
      id: 0,
      image: members.member3,
      name: "Isabella Hughes",
      position: "CEO & FOUNDER",
      facebookLink: "",
      xLink: "",
      linkedinLink: "",
    },
  ];

  return (
    <div>
      <Header />

      <div className="nowex h-[530px]" style={{ backgroundImage: `url(${backgrounds.aboutBG})` }}></div>

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
              <img className="w-full h-full object-cover" src={card.image} />

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
          message="lorem ispum doler asinfd d dfdsufy dsfuufy dfhdvu fhv fuh hvuahv vuhv cudchdhc dhdhduvhr uhcdhv"
          image={students.std1}
          name="Emma Carter"
          position="Front-End Developer"
        />
        <TestimonialCard
          message="lorem ispum doler asinfd d dfdsufy dsfuufy dfhdvu fhv fuh hvuahv vuhv cudchdhc dhdhduvhr uhcdhv"
          image={students.std2}
          name="Olivia Bennett"
          position="Graphic Designer"
        />
        <TestimonialCard
          message="lorem ispum doler asinfd d dfdsufy dsfuufy dfhdvu fhv fuh hvuahv vuhv cudchdhc dhdhduvhr uhcdhv"
          image={students.std3}
          name="Sophia Collins"
          position="UX/UI Designer"
        />
        <TestimonialCard
          message="lorem ispum doler asinfd d dfdsufy dsfuufy dfhdvu fhv fuh hvuahv vuhv cudchdhc dhdhduvhr uhcdhv"
          image={students.std3}
          name="Sophia Collins"
          position="UX/UI Designer"
        />
        <TestimonialCard
          message="lorem ispum doler asinfd d dfdsufy dsfuufy dfhdvu fhv fuh hvuahv vuhv cudchdhc dhdhduvhr uhcdhv"
          image={students.std3}
          name="Sophia Collins"
          position="UX/UI Designer"
        />
      </div>

      <Footer />
    </div>
  );
};

export default About;
