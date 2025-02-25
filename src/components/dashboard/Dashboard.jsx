import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Dashboard = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const [activeSection, setActiveSection] = useState("Services");

  const cards = [
    {
      title: "120+",
      subTitle: "Total Courses",
      state: "text-green-500",
    },
    {
      title: "20",
      subTitle: "Free Courses",
      state: "text-yellow-500",
    },
    {
      title: "5,000+",
      subTitle: "Certificates",
      state: "text-green-500",
    },
    {
      title: "30,000+",
      subTitle: "Total Users",
      state: "text-blue-500",
    },
  ];

  const progressCards = [
    {
      title: "Active Users",
      state: "w-[80%]",
      color: "bg-blue-500",
    },
    {
      title: "Live Courses",
      state: "w-[40%]",
      color: "bg-green-500",
    },
    {
      title: "Content Upload",
      state: "w-[87%]",
      color: "bg-blue-500",
    },
    {
      title: "Feedback & Reviews",
      state: "w-[65%]",
      color: "bg-green-500",
    },
    {
      title: "Pending Requasts",
      state: "w-[14%]",
      color: "bg-red-500",
    },
    {
      title: "Security & Settings",
      state: "w-[70%]",
      color: "bg-green-500",
    },
    {
      title: "Website Traffic",
      state: "w-[20%]",
      color: "bg-yellow-500",
    },
  ];

  return (
    <div>
      <Header />

      <div className="px-5 py-9">
        <p className="text-[32px] font-bold">Dashboard</p>

        <ul className="flex text-[23px] gap-7 my-6">
          {["Services", "Suscription"].map((section) => (
            <div>
              <li
                className={`${activeSection === section ? "border-b pb-2" : null}`}
                onClick={() => setActiveSection(section)}
              >
                {section}
              </li>
            </div>
          ))}
        </ul>

        {activeSection === "Services" && (
          <section>
            <div className="grid grid-cols-2 gap-4">
              {cards.map((card) => (
                <div className="relative hover:shadow-[0px_0px_20px_1px_#ffbb763f] border border-transparent transition-all duration-300 ease-in-out hover:border-white/45 w-full h-[145px] bg-[#222222] rounded-lg p-3 text-center pt-8 shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
                  <FontAwesomeIcon
                    className={`absolute right-4 top-4 text-xs  ${card.state}`}
                    icon={faCircle}
                  />
                  <p className="text-3xl font-bold ">{card.title}</p>
                  <p className="text-xl mt-3">{card.subTitle}</p>
                </div>
              ))}
            </div>

            <div className="my-10">
              {progressCards.map((card) => (
                <div className="w-full h-[77px] mb-4 bg-[#222222] text-xl font-bold flex items-center gap-7 px-5 rounded-lg transition-all duration-300 ease-in-out hover:bg-[#2e2e2e]  hover:scale-[1.02]">
                  <p className="w-[75%] transition-colors duration-300 ease-in-out hover:text-[#ffbb76]">
                    {card.title}
                  </p>
                  <div className="w-full h-[11px] bg-[#979797] rounded-xl overflow-hidden">
                    <div
                      className={`h-full ${card.color} ${card.state} transition-all duration-300 ease-in-out`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === "Suscription" && (
          <div className="w-full relative h-[300px]">
            <p className="text-2xl text-center text-nowrap absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              No canten to show
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
