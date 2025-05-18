import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faBell,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import { icons } from "@/assets/images";
import Notifications from "../notifications/Notifications";

let Header = () => {
  const [sidebarShow, setSidebarShow] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const handleSidebar = () => setSidebarShow((prev) => !prev);
  const closeSidebar = () => setSidebarShow(false);
  const handleNotifications = () => setNotificationsOpen((prev) => !prev);

  return (
    <>
      <nav className="lg:z-50 sticky -top-1 z-40 w-full bg-darkGray flex justify-between text-2xl text-white py-4 xl:py-3   px-5 lg:px-10 ">
        <span
          onClick={handleSidebar}
          className="flex justify-center items-center cursor-pointer"
        >
          <img src={icons.bars} alt="Menu" />
          <p className="hidden lg:block  text-ourOrange text-3xl font-bold ml-6">
            OmTech
          </p>
        </span>

        <div className="relative flex-1 max-w-md mx-4 lg:mx-8">
          <input
            type="search"
            placeholder="What's on your mind?"
            className="hidden lg:block w-full rounded-md border border-ourOrange bg-transparent px-3 py-2 text-sm text-white placeholder-gray-400 focus:border-ourOrange focus:outline-none"
            aria-label="Search"
          />
        </div>

        <div className="flex gap-3 justify-end items-center relative">
          {/* <input
              className="hidden lg:block  w-full  pl-3 pr-14  h-full  rounded-md text-white text-sm bg-transparent border border-ourOrange outline-none"
              placeholder="What Is On Your Mind?"
            /> */}

          <span className="text-xl text-green-500 relative inline-block">
            <FontAwesomeIcon icon={faCircle} className="animate-pulse" />
          </span>
          <span
            onClick={handleNotifications}
            className="text-ourOrange cursor-pointer"
          >
            <FontAwesomeIcon icon={faBell} />
          </span>
          {notificationsOpen && (
            <div
              onClick={handleNotifications}
              className="bg-[rgba(0,0,0,0.5)] w-[100vw] h-[100vh] fixed top-16 left-0"
            >
              <Notifications />
            </div>
          )}
        </div>
      </nav>

      {/* Sidebar is always mounted and its visibility is animated via CSS */}
      <Sidebar sidebarShow={sidebarShow} closeSidebar={closeSidebar} />
    </>
  );
};

export default Header;