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
      <div className="pb-14 pt-10 px-5  text-center">
        <p className="text-2xl mb-14">
          Discover Leading Categories to alevate your journey
        </p>

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
    </>
  );
};

export default Categories;
