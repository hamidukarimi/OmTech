import Marquee from 'react-fast-marquee';
import { icons } from "@/assets/images";


let Categories = () => {
  const categoriesCards = [
    {
      id: 0,
      icon: icons.web,
      title: "Web Development",
      subTitle: "8 Courses",
    },
    {
      id: 1,
      icon: icons.pencil,
      title: "Graphic Design",
      subTitle: "5 Courses",
    },
    {
      id: 2,
      icon: icons.uxui,
      title: "UX/UI Design",
      subTitle: "6 Courses",
    },
    {
      id: 3,
      icon: icons.finance,
      title: "Financial Accounting",
      subTitle: "5 Courses",
    },
    {
      id: 3,
      icon: icons.mobileDev,
      title: "Mobile Development",
      subTitle: "7 Courses",
    },
  ];

  return (
    <>
      <div className="pb-14 pt-10 lg:pt-16    px-7 md:px-14 xl:px-52  text-center">
        <p className="text-2xl md:text-3xl xl:text-4xl mb-14 md:mb-20 lg:mb-24 md:px-20 lg:px-56   ">
          Discover Leading Categories to alevate <br className="hidden xl:block"/> your journey
        </p>
        
      <div className="block md:hidden   md:px-14">
        {categoriesCards.map((card) => (
          <div
            key={card.id}
            className=" font-bold  mb-20  flex flex-col justify-center items-center"
          >
            <img className="mb-5" src={card.icon} />
            <p className="text-xl my-3">{card.title}</p>
            <p>{card.subTitle}</p>
          </div>
        ))}
        </div>

        <div className='hidden md:block'>
        <Marquee speed={50} gradient={false}   loop={0} pauseOnHover={true} play={true} className="w-full" autoFill={true}>
        <div className="flex  gap-14 ml-14">
        {categoriesCards.map((card) => (
          <div
            key={card.id}
            className=" font-bold  mb-20  flex flex-col justify-center items-center"
          >
            <img className="mb-4 lg:mb-5 w-[50px]" src={card.icon} />
            <p className="text-xl my-2 lg:my-3">{card.title}</p>
            <p>{card.subTitle}</p>
          </div>
        ))}
        </div>
        </Marquee>
        </div>



      </div>
    </>
  );
};

export default Categories;
