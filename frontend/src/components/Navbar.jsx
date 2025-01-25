import React from "react";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, useNavigate } from "react-router-dom";
import Notification from "../pages/Notification";

const Navbar = ({ openLogin, scrollToPosts, user }) => {
  const [isNotificationPopupOpen, setNotificationPopupOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNotificationPopup = () => {
    console.log("Notification button clicked");
    setNotificationPopupOpen(!isNotificationPopupOpen);
    console.log("Notification popup state:", !isNotificationPopupOpen);
  };

  const handleProfileClick = () => {
    if (user) {
      navigate("/profile");
    } else {
      openLogin();
    }
  };

  return (
    <div>
      <nav className="flex items-center justify-between p-5 text-white sticky top-0 z-30">
        {/* Logo Section */}
        <div className="text-[40px] font-black">
          <Link to="/">GlobeTogether</Link>
        </div>
        {/* menu Section */}

        <div className=" menu flex items-center justify-center gap-4">
          {/* Profile Icon */}
          <div
            className="container relative group text-center w-[54px] h-[50px] rounded-full flex items-center justify-center text-[24px] cursor-pointer"
            id="profileBtn"
          >
            <button
              onClick={handleProfileClick}
              className="text-white text-[16px] flex items-center justify-center w-full h-full rounded-[5px] transition-colors duration-300 hover:bg-blue-600"
              aria-label="Profile"
            >
              {" "}
              <i className="fa-solid fa-user h-[30px] w-[30px] flex items-center justify-center " />
              <span className="tooltip absolute top-[120%] left-1/2 -transform-translate-x-1/2  bg-black bg-opacity-80 text-white p-[5px_10px] rounded text-[12px] whitespace-nowrap  opacity-0 invisible transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:visible">
                Profile
              </span>
            </button>
          </div>
          {/* Notification Icon */}
          <div className="container relative group text-center w-[54px] h-[50px] rounded-full flex items-center justify-center text-[24px] cursor-pointer">
            <button
              onClick={toggleNotificationPopup}
              className="text-white text-[16px] flex items-center justify-center px-[12px] py-[8px] rounded-[5px] transition-colors duration-300 hover:bg-blue-500"
              href="#"
              aria-label="Notifications"
              id="notificationBtn"
            >
              <i className="fa-solid fa-bell h-[30px] w-[30px] flex items-center justify-center"></i>
              <span className="tooltip absolute top-[120%] left-1/2 transform-translate-x-1/2  bg-black bg-opacity-80 text-white p-[5px_10px] rounded text-[12px] whitespace-nowrap  opacity-0 invisible transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:visible">
                Notification
              </span>
            </button>
          </div>
          <div className="container relative group text-center w-[54px] h-[50px] rounded-full flex items-center justify-center text-[24px] cursor-pointer">
            <button
              onClick={scrollToPosts}
              className="text-white text-[16px] flex items-center justify-center px-[12px] py-[8px] rounded-[5px] transition-colors duration-300 hover:bg-blue-500"
              href="#"
              aria-label="Globe Gather" // Scroll to PostsSection
            >
              <i className="fa-solid fa-people-group h-[30px] w-[30px] flex items-center justify-center"></i>
              <span className="tooltip absolute top-[120%] left-1/2 transform-translate-x-1/2  bg-black bg-opacity-80 text-white p-[5px_10px] rounded text-[12px] whitespace-nowrap  opacity-0 invisible transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:visible">
                Globe Gather
              </span>
            </button>
          </div>
          {/* Chat Panel */}
          <div
            className="container relative group text-center w-[54px] h-[50px] rounded-full flex items-center justify-center text-[24px] cursor-pointer"
            id="chatPanelBtn"
          >
            <a
              className="text-white text-[16px] flex items-center justify-center px-[12px] py-[8px] rounded-[5px] transition-colors duration-300 hover:bg-blue-500"
              href="#"
              aria-label="Chat"
            >
              <i className="fa-brands fa-rocketchat h-[30px] w-[30px] flex items-center justify-center"></i>
              <span className="tooltip absolute top-[120%] left-1/2 transform-translate-x-1/2  bg-black bg-opacity-80 text-white p-[5px_10px] rounded text-[12px] whitespace-nowrap  opacity-0 invisible transition-opacity duration-300 ease-out group-hover:opacity-100 group-hover:visible">
                Chat
              </span>
            </a>
          </div>
        </div>
      </nav>
      {/* Notification Popup */}
      <Notification
        isOpen={isNotificationPopupOpen}
        onClose={toggleNotificationPopup}
      />
      {/* Chats */}
      {/* <Chats isVisible={isChatboxVisible} onClose={toggleChatbox} ></Chats> */}
    </div>
  );
};

export default Navbar;
