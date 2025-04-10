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

let SidebarMenu = ({ icon, name, path, onClick }) => {
  return (
    <NavLink
      to={path || "#"}
      exact
      activeClassName=" "
      style={({ isActive }) => ({
        color: isActive ? "white" : "#b9b9b9",
      })}
      onClick={onClick}
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

  // New state for search query
  const [searchQuery, setSearchQuery] = useState("");

  // Define your sidebar items in groups
  const mainItems = [
    { icon: faFolder, name: "Dashboard", path: "/dashboard" },
    { icon: faHome, name: "Home", path: "/" },
    { icon: faGraduationCap, name: "All Courses", path: "/all-courses" },
    { icon: faUsers, name: "About", path: "/About" },
    { icon: faBook, name: "FAQ", path: "/FAQ" },
    { icon: faAddressBook, name: "Contact", path: "/contact-page" },
  ];

  const suggestedItems = [
    { icon: faDotCircle, name: "React Js", path: "/suggested-courses" },
    { icon: faDotCircle, name: "UX/UI Design", path: "/suggested-courses" },
    { icon: faDotCircle, name: "Git GitHub", path: "/suggested-courses" },
    { icon: faDotCircle, name: "Photo Shop", path: "/suggested-courses" },
    { icon: faDotCircle, name: "Angular Js", path: "/suggested-courses" },
    // Only show these extra items when "showAllOpen" is true and add them to the array.
    ...(showAllOpen
      ? [
          { icon: faDotCircle, name: "Next Js", path: "/suggested-courses" },
          { icon: faDotCircle, name: "React Js", path: "/suggested-courses" },
          { icon: faDotCircle, name: "Vue Js", path: "/suggested-courses" },
        ]
      : []),
  ];

  const freeItems = [
    { icon: faDotCircle, name: "HTML 5", path: "/free-courses" },
    { icon: faDotCircle, name: "Figms", path: "/free-courses" },
    { icon: faDotCircle, name: "GitHub", path: "/free-courses" },
    { icon: faDotCircle, name: "SEO", path: "/free-courses" },
    { icon: faDotCircle, name: "Tailwind CSS", path: "/free-courses" },
    // Only show these extra items when "showAllOpen" is false
    ...(!showAllOpen
      ? [
          { icon: faDotCircle, name: "Next.Js", path: "/free-courses" },
          { icon: faDotCircle, name: "React Js", path: "/free-courses" },
          { icon: faDotCircle, name: "Vue Js", path: "/free-courses" },
        ]
      : []),
  ];

  const otherItems = [
    { icon: faBookmark, name: "Saved Courses", path: "/bookmarks" },
    // For Support Uz, we want to trigger the share modal.
    { icon: faCoffee, name: "Support Uz", onClick: handleShare },
    { icon: faArrowRightFromBracket, name: "Log out", path: "/free-courses" },
  ];

  // Combine all items into a single flat array for filtering.
  const allItems = [...mainItems, ...suggestedItems, ...freeItems, ...otherItems];

  // Filter items based on the search query
  const filteredItems = allItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="absolute top-[33px] right-4">
            {/* <img src={icons.search2} alt="Search" /> */}
          </span>
        </div>

        {/* If there's a search query, render only the filtered items */}
        {searchQuery ? (
          <div>
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <SidebarMenu
                  key={index}
                  icon={item.icon}
                  name={item.name}
                  path={item.path}
                  onClick={item.onClick}
                />
              ))
            ) : (
              <p className="text-[#b9b9b9] text-xl">No items found.</p>
            )}
          </div>
        ) : (
          <>
            <Link to="/">
              <div className="border-2 flex items-center justify-between border-green-400 rounded-lg px-5 text-xl py-3 font-bold mb-3">
                <p>Live Classes</p>
                <span className="text-lg text-green-500 relative inline-block">
                  <FontAwesomeIcon icon={faCircle} className="animate-pulse" />
                </span>
              </div>
            </Link>
            <div>
              {mainItems.map((item, index) => (
                <SidebarMenu key={index} icon={item.icon} name={item.name} path={item.path} />
              ))}
            </div>
            <div className="mt-12 mb-6">
              <p className="mb-5 text-[#b9b9b9]">Suggested Courses</p>
              {suggestedItems.map((item, index) => (
                <SidebarMenu key={index} icon={item.icon} name={item.name} path={item.path} />
              ))}
            </div>
            <span onClick={toggleShowAll} className="p-3 cursor-pointer bg-darkGray">
              {showAllOpen ? "Show Less" : "Show All"}
            </span>
            <div className="mt-14 mb-6">
              <p className="mb-5 text-[#b9b9b9]">Free Courses</p>
              {freeItems.map((item, index) => (
                <SidebarMenu key={index} icon={item.icon} name={item.name} path={item.path} />
              ))}
            </div>
            <span onClick={toggleShowAll} className="p-3 cursor-pointer bg-darkGray">
              {showAllOpen ? "Show All" : "Show Less"}
            </span>
            <div className="mt-14 mb-6">
              {otherItems.map((item, index) => (
                <SidebarMenu
                  key={index}
                  icon={item.icon}
                  name={item.name}
                  path={item.path}
                  onClick={item.onClick}
                />
              ))}
            </div>
          </>
        )}
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
    </>
  );
};

export default Sidebar;
