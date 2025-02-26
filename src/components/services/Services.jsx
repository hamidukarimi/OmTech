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
      <div className="  py-14 px-7 text-center text-2xl">
        <p className=" font-bold ">Our Services</p>

        {services.map((card) => (
          <div className="justForShadow  relative  py-14 px-10 bg-bodyColor mt-14  flex flex-col justify-center items-center ">
            <div className="w-[110px] h-[5px] bg-ourOrange absolute top-0"></div>
            <img className="w-[100px]" src={card.icon} />
            <p className="text-[27px] font-bold mt-10 mb-5  shine-animate">{card.title}</p>
            <p className="text-[18px]  leading-tight text-[#ffffffc9]">{card.descrption}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
