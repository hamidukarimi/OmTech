import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faBell, faCircle } from "@fortawesome/free-solid-svg-icons";
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
      <nav className="sticky -top-1 z-40 w-full bg-darkGray flex justify-between text-2xl text-white py-4 px-5">
        <span onClick={handleSidebar} className="flex justify-center items-center cursor-pointer">
          <img src={icons.bars} alt="Menu" />
        </span>
        <div className="flex gap-3 items-center relative">
          <span className="text-xl text-green-500 relative inline-block">
            <FontAwesomeIcon icon={faCircle} className="animate-pulse" />
          </span>
          <span onClick={handleNotifications} className="text-ourOrange cursor-pointer">
            <FontAwesomeIcon icon={faBell} />
          </span>
          {notificationsOpen && (
            <div onClick={handleNotifications} className="bg-[rgba(0,0,0,0.5)] w-[100vw] h-[100vh] fixed top-16 left-0">
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
