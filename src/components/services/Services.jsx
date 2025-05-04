import "../../App.css";
import { icons } from "@/assets/images";

let Services = () => {
  const services = [
    {
      id: 0,
      icon: icons.onlineLearning,
      title: "Online Courses",
      descrption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut incididunt ut.",
    },
    {
      id: 1,
      icon: icons.free,
      title: "Free Courses",
      descrption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut incididunt ut.",
    },
    {
      id: 2,
      icon: icons.doc,
      title: "Certifications",
      descrption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut incididunt ut.",
    },
  ];

  return (
    <>
      <div className="  py-14 lg:py-20 lg:mt-20 xl:mt-0 xl:py-40 px-7 md:px-14 xl:px-52 text-center ">
        <p className=" font-bold text-2xl md:text-3xl xl:text-4xl ">Our Services</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 xl:gap-x-12 ">
          {services.map((card) => (
            <div className="h-[320px] md:h-[260px] lg:h-[240px] 2xl:h-[260px]  justForShadow  relative    px-10 bg-bodyColor mt-14  lg:mt-12  flex flex-col justify-center items-center gap-4 md:gap-3 lg:gap-2 ">
              <div className="w-[110px] h-[5px] bg-ourOrange absolute top-0"></div>
              <img className="w-[90px] md:w-[69px] lg:w-[58px] 2xl:w-[60px]" src={card.icon} />
              <p className="text-3xl md:text-2xl lg:text-[21px] 2xl:text-3xl font-bold   shine-animate">
                {card.title}
              </p>
              <p className="text-md md:text-sm lg:text-xs 2xl:text-lg  leading-tight text-[#ffffffc9]">
                {card.descrption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
