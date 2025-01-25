import React, { useState } from "react";

const NotificationIcon = ({isOpen, onClose}) => {

  return (
    <div
    className={`fixed top-0 right-0 w-[270px] h-[60%] bg-white opacity-80 box-shadow-lg rounded-l-[25px] border-l-[1px] border-solid border-gray-300 overflow-y-auto transition-all duration-300 ease-in-out z-50 ${
      isOpen ? "translate-x-0" : "translate-x-full"
    }`}
  >
    {/* Popup Header */}
    <div className="popup-header bg-blue-600 text-white px-4 py-3 flex justify-between items-center border-b border-gray-300">
      <h3 className="text-lg font-semibold">Notifications</h3>
      <span
        className="close-btn text-2xl font-bold cursor-pointer"
        onClick={onClose}
      >
        &times;
      </span>
    </div>

    {/* Popup Content */}
    <div className="popup-content px-4 py-3 text-sm text-gray-700">
      <p>You have new notifications!</p>
    </div>
  </div>
  );
};

export default NotificationIcon;
