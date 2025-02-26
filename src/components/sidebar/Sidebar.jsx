import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "@/assets/images";

import {
  faBell,
  faCircle,
  faFolder,
  faHome,
  faGraduationCap,
  faUsers,
  faBook,
  faAddressBook,
  faBookmark,
  faCoffee,
  faArrowRightFromBracket,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import { faDotCircle } from "@fortawesome/free-regular-svg-icons";

let SidebarMenu = ({ icon, name, path }) => {
  return (
    <NavLink
      to={path}
      exact
      activeClassName=" "
      style={({ isActive }) => ({
        color: isActive ? "white" : "#b9b9b9",
      })}
    >
      <div className="flex items-center py-3 text-[22px] font-bold gap-2">
        <FontAwesomeIcon className="w-[30px]" icon={icon} />
        <p>{name}</p>
      </div>
    </NavLink>
  );
};

const Sidebar = ({ sidebarShow, closeSidebar }) => {
  const [showAllOpen, setShowAllOpen] = useState(false);
  const toggleShowAll = () => setShowAllOpen((prev) => !prev);

  const [showShareOptions, setShowShareOptions] = useState(false);
  const handleShare = () => setShowShareOptions((prev) => !prev);

  return (
    <div
      className={`
        fixed top-0 left-0 w-[80%] h-full overflow-y-scroll scrollbar-none z-40 bg-[#262626] pb-5 px-6
        transform transition-transform duration-300
        ${sidebarShow ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <div className="sticky z-30 top-0 flex justify-between items-center bg-[#262626] h-[85px]">
        <p className="text-ourOrange text-3xl font-bold">OmTech</p>
        <span onClick={closeSidebar} className="text-[25px] cursor-pointer text-ourOrange">
          <img src={icons.bars} alt="Close Sidebar" />
        </span>
      </div>
      <div className="relative">
        <input
          className="w-full bg-darkGray p-4 pr-14 rounded-lg mt-4 mb-6 text-xl outline-none"
          placeholder="Search"
        />
        <span className="absolute top-[33px] right-4">
          <img src={icons.search2} alt="Search" />
        </span>
      </div>
      <Link to="/">
        <div className="border-2 flex items-center justify-between border-green-400 rounded-lg px-5 text-xl py-3 font-bold mb-3">
          <p>Live Classes</p>
          <span className="text-lg text-green-500 relative inline-block">
            <FontAwesomeIcon icon={faCircle} className="animate-pulse" />
          </span>
        </div>
      </Link>
      <div>
        <SidebarMenu icon={faFolder} name="Dashboard" path="/dashboard" />
        <SidebarMenu icon={faHome} name="Home" path="/" />
        <SidebarMenu icon={faGraduationCap} name="All Courses" path="/all-courses" />
        <SidebarMenu icon={faUsers} name="About" path="/About" />
        <SidebarMenu icon={faBook} name="FAQ" path="/FAQ" />
        <SidebarMenu icon={faAddressBook} name="Contact" path="/contact-page" />
      </div>
      <div className="mt-12 mb-6">
        <p className="mb-5 text-[#b9b9b9]">Suggested Courses</p>
        <SidebarMenu icon={faDotCircle} name="React Js" path="/free-courses" />
        <SidebarMenu icon={faDotCircle} name="UX/UI Design" path="/free-courses" />
        <SidebarMenu icon={faDotCircle} name="Git GitHub" path="/free-courses" />
        <SidebarMenu icon={faDotCircle} name="Photo Shop" path="/free-courses" />
        <SidebarMenu icon={faDotCircle} name="Angular Js" path="/free-courses" />
        <div className={showAllOpen ? "block" : "hidden"}>
          <SidebarMenu icon={faDotCircle} name="Next Js" path="/free-courses" />
          <SidebarMenu icon={faDotCircle} name="React Js" path="/free-courses" />
          <SidebarMenu icon={faDotCircle} name="Vue Js" path="/free-courses" />
        </div>
      </div>
      <span onClick={toggleShowAll} className="p-3 cursor-pointer bg-darkGray">
        {showAllOpen ? "Show Less" : "Show All"}
      </span>
      <div className="mt-14 mb-6">
        <p className="mb-5 text-[#b9b9b9]">Free Courses</p>
        <SidebarMenu icon={faDotCircle} name="HTML 5" path="/free-courses" />
        <SidebarMenu icon={faDotCircle} name="Figms" path="/free-courses" />
        <SidebarMenu icon={faDotCircle} name="GitHub" path="/free-courses" />
        <SidebarMenu icon={faDotCircle} name="SEO" path="/free-courses" />
        <SidebarMenu icon={faDotCircle} name="Tailwind CSS" path="/free-courses" />
        <div className={showAllOpen ? "hidden" : "block"}>
          <SidebarMenu icon={faDotCircle} name="Next.Js" path="/free-courses" />
          <SidebarMenu icon={faDotCircle} name="React Js" path="/free-courses" />
          <SidebarMenu icon={faDotCircle} name="Vue Js" path="/free-courses" />
        </div>
      </div>
      <span onClick={toggleShowAll} className="p-3 cursor-pointer bg-darkGray">
        {showAllOpen ? "Show All" : "Show Less"}
      </span>
      <div className="mt-14 mb-6">
        <SidebarMenu icon={faBookmark} name="Saved Courses" path="/bookmarks" />
        <span onClick={handleShare}>
          <SidebarMenu icon={faCoffee} name="Support Uz" />
        </span>
        <a href="/free-courses">
          <div className="flex text-red-500 items-center py-3 text-[22px] font-bold gap-2">
            <FontAwesomeIcon className="w-[30px]" icon={faArrowRightFromBracket} />
            <p>Log out</p>
          </div>
        </a>
      </div>
      {showShareOptions && (
        <div className="shareOptionsContainer">
          <div className="shareOptionsModal">
            <div className="shareOptionsHeader">
              <p className="shareOptionsTitle">Choose where to share</p>
              <button
                className="closeShareOptionsBtn"
                onClick={() => setShowShareOptions(false)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="shareOptionsList">
              <button className="shareOption">
                <FontAwesomeIcon icon={faFacebook} />
                Facebook
              </button>
              <button className="shareOption">
                <FontAwesomeIcon icon={faInstagram} />
                Instagram
              </button>
              <button className="shareOption">
                <FontAwesomeIcon icon={faLinkedin} />
                Linkedin
              </button>
              <button className="shareOption">
                <FontAwesomeIcon icon={faWhatsapp} />
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
