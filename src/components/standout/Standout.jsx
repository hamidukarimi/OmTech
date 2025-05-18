import { icons } from "@/assets/images";

let Standout = () => {
  const StandOuts = [
    {
      id: 0,
      icon: icons.instructor,
      title: "Expert Instructor",
      description: "Lorem ispum doler aset met kia meritonhe meri",
    },
    {
      id: 1,
      icon: icons.learning,
      title: "Flexible Learning",
      description: "Lorem ispum doler aset met kia meritonhe meri",
    },
    {
      id: 2,
      icon: icons.pricing,
      title: "Affordable Pricing",
      description: "Lorem ispum doler aset met kia meritonhe meri",
    },
    {
      id: 3,
      icon: icons.results,
      title: "Proven Results Instructors",
      description: "Lorem ispum doler aset met kia meritonhe meri",
    },


   

    {
      id: 0,
      icon: icons.instructor,
      title: "Expert Instructor",
      description: "Lorem ispum doler aset met kia meritonhe meri",
    }, {
      id: 0,
      icon: icons.instructor,
      title: "Expert Instructor",
      description: "Lorem ispum doler aset met kia meritonhe meri",
    },
  ];

  return (
    <div className="my-28 xl:my-32 text-center px-7 md:px-14 xl:px-52">
      <p className="text-lg md:text-xl lg:text-2xl mb-7">What Makes Us Stand Out?</p>
      <p className="text-2xl md:text-3xl xl:text-4xl mb-20">Transform Your Learning Experiences</p>

    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-16">
      {StandOuts.map((card) => (
        <div className=" font-bold   px-20 md:px-0 flex flex-col justify-center items-center   ">
          <img className="mb-4" src={card.icon} />
          <p className="text-xl">{card.title}</p>
          {/* <p className="font-normal text-sm md:text-">{card.description}</p> */}
        </div>
      ))}
      </div>
    </div>
  );
};

export default Standout;
