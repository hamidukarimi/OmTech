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
      icon: icons.results,
      title: "Expert Instructor",
      description: "Lorem ispum doler aset met kia meritonhe meri",
    },
    {
      id: 2,
      icon: icons.learning,
      title: "Flexible Learningr",
      description: "Lorem ispum doler aset met kia meritonhe meri",
    },
    {
      id: 3,
      icon: icons.results,
      title: "Flexible Learningr",
      description: "Lorem ispum doler aset met kia meritonhe meri",
    },
  ];

  return (
    <div className="my-28 text-center px-5">
      <p className="text-lg mb-7">What Makes Us Stand Out?</p>
      <p className="text-2xl ">Transform Your Learning Experiences</p>

      {StandOuts.map((card) => (
        <div className=" font-bold  my-20 px-20 flex flex-col justify-center items-center">
          <img className="mb-5" src={card.icon} />
          <p className="text-xl my-3 ">{card.title}</p>
          <p className="font-normal">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Standout;
