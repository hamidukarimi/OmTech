import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faBell,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

import { icons } from "@/assets/images";
import Notifications from "../notifications/Notifications";

let Header = () => {
  const [sidebarShow, setSidebarShow] = useState(false);

  const handleSidebar = () => {
    if (sidebarShow === false) {
      setSidebarShow(true);
    } else {
      setSidebarShow(false);
    }
  };

  const closeSidebar = () => {
    setSidebarShow(false);
  };

  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const handleNotifications = () => {
    if (notificationsOpen === false) {
      setNotificationsOpen(true)
    } else {
      setNotificationsOpen(false)
    }
  };

  const menus = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/About",
    },
    {
      name: "Courses",
      path: "undefined",
    },
    {
      name: "FAQ",
      path: "/FAQ",
    },
    {
      name: "Contact",
      path: "undefined",
    },
  ];

  return (
    <>
      <nav className="sticky -top-1 z-40 w-full bg-darkGray flex justify-between text-2xl text-white py-4 px-5">
        {/* <Link to="/"><span className="font-bold text-ourOrange text-[27px] ">OmTech</span></Link> */}
        <span
          onClick={handleSidebar}
          className="flex justify-center items-center cursor-pointer"
        >
          <img src={icons.bars} />
        </span>
        <div className="flex gap-3 items-center relative ">
          
          <span className="text-xl text-green-500 relative inline-block">
            <FontAwesomeIcon icon={faCircle} className="animate-pulse" />
          </span>

          
          <span onClick={handleNotifications} className="text-ourOrange cursor-pointer">
            <FontAwesomeIcon icon={faBell} />
          </span>

          {notificationsOpen ? (
            <div onClick={handleNotifications} className="bg-[rgba(0,0,0,0.5)]  w-[100vw] h-[100vh] fixed top-16 left-0">
              <Notifications />
            </div>
          ) : ""}
          
        </div>
      </nav>

      {sidebarShow === true ? <Sidebar closeSidebar={closeSidebar} /> : ""}
    </>
  );
};

export default Header;
