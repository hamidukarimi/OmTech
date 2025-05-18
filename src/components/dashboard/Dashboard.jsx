import React, { useState, useEffect, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const statsCards = [
  { id: 1, title: "120+", subTitle: "Total Courses", iconColor: "text-green-500" },
  { id: 2, title: "20", subTitle: "Free Courses", iconColor: "text-yellow-500" },
  { id: 3, title: "5,000+", subTitle: "Certificates", iconColor: "text-green-500" },
  { id: 4, title: "30,000+", subTitle: "Total Users", iconColor: "text-blue-500" },
];

const progressItems = [
  { id: 1, label: "Active Users", progressClass: "w-[80%] bg-blue-500" },
  { id: 2, label: "Live Courses", progressClass: "w-[40%] bg-green-500" },
  { id: 3, label: "Content Upload", progressClass: "w-[87%] bg-blue-500" },
  { id: 4, label: "Feedback & Reviews", progressClass: "w-[65%] bg-green-500" },
  { id: 5, label: "Pending Requests", progressClass: "w-[14%] bg-red-500" },
  { id: 6, label: "Security & Settings", progressClass: "w-[70%] bg-green-500" },
  { id: 7, label: "Website Traffic", progressClass: "w-[20%] bg-yellow-500" },
];

const SectionTabs = memo(({ active, onChange }) => (
  <ul className="flex text-[23px] gap-7 my-6">
    {["Services", "Subscription"].map(section => (
      <li
        key={section}
        className={`cursor-pointer ${active === section ? "border-b pb-2" : "text-gray-400"}`}
        onClick={() => onChange(section)}
      >
        {section}
      </li>
    ))}
  </ul>
));

const StatsCard = memo(({ title, subTitle, iconColor }) => (
  <div className="relative w-full h-[145px] bg-[#222222] rounded-lg p-3 pt-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
    <FontAwesomeIcon
      icon={faCircle}
      className={`absolute right-4 top-4 text-xs ${iconColor}`}
    />
    <p className="text-3xl font-bold">{title}</p>
    <p className="text-xl mt-3 text-gray-200">{subTitle}</p>
  </div>
));

const ProgressItem = memo(({ label, progressClass }) => (
  <div className="w-full h-[77px] mb-4 bg-[#222222] rounded-lg flex items-center px-5 transition-transform duration-300 hover:scale-105">
    <p className="w-[75%] text-xl font-bold hover:text-[#ffbb76] transition-colors duration-300">
      {label}
    </p>
    <div className="flex-1 h-[11px] bg-[#979797] rounded-xl overflow-hidden">
      <div className={`${progressClass} h-full transition-width duration-500`}></div>
    </div>
  </div>
));

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("Services");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col  text-white">
      <Header />
      <main className="flex-grow px-7 md:px-14 xl:px-52 py-9">
        <h1 className="text-[32px] font-bold mb-6">Dashboard</h1>
        <SectionTabs active={activeSection} onChange={setActiveSection} />

        {activeSection === "Services" ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {statsCards.map(card => (
                <StatsCard key={card.id} {...card} />
              ))}
            </div>

            <div className="mt-10">
              {progressItems.map(item => (
                <ProgressItem key={item.id} {...item} />
              ))}
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-[300px]">
            <p className="text-2xl text-gray-500">No content to show</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;