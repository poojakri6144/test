"use client";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Sidebar from "../sidebar/Sidebar";

const MenuIconComponent = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="text-gray-600 hover:text-gray-800 mt-1"
      >
        <FiMenu size={24} color="blue" />
      </button>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </>
  );
};

export default MenuIconComponent;
