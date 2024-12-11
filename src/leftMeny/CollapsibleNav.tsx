import React, { useState } from "react";
import { NavLink } from "react-router-dom";

interface CollapsibleNavProps {
  onToggle: (isOpen: boolean) => void; // Callback för att meddela om menyens tillstånd
}

const CollapsibleNav: React.FC<CollapsibleNavProps> = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle(newState); // Meddela om tillståndet
  };

  return (
    <div
    className={`bg-gray-800 text-white h-full transition-transform duration-300`}
    style={{
      width: isOpen ? "14rem" : "0",
      overflow: "hidden", // Dölj innehåll när menyn är stängd
    }}>
      {/* Hamburgermeny-ikon */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 left-4 z-50 text-white bg-gray-700 p-2 rounded-md focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Menyn */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
        style={{ width: "14rem" }}
      >
        <ul className="list-none p-4 mt-20">
          <li className="mb-4">
            <NavLink to="/admin" className={({ isActive }) =>  `text-white text-xl py-2  ${isActive ? "border-b": ""}`}>
              Admin
            </NavLink>
          </li>
          <li>
            <NavLink to="/race" className={({ isActive }) =>  `text-white text-xl py-2  ${isActive ? "border-b": ""}`}>
              TV Page
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CollapsibleNav;
