import React, { useState } from "react";
import img from "../assets/logo.png";
import icon from "../assets/icon.svg";
import Main2 from "./Main2";
import vector1 from "../assets/vector1.svg";
import menu from "../assets/menu.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div>
      <nav className="flex justify-between items-center px-[127px] ">
        <div className="left flex  sm:flex-col ">
          <div>
            <img src={img} alt="Logo" />
          </div>
          <ul
            className={`flex  sm:${
              isMenuOpen ? "block" : "hidden"
            }  sm:flex-col sm:w-[100vw] sm:items-center`}
          >
            <li className="flex items-center font-bold text-[18px]">
              Solutions <img src={icon} alt="Icon" />
            </li>
            <li className="flex items-center font-bold text-[18px]">
              Features <img src={icon} alt="Icon" />
            </li>
            <li className="flex items-center font-bold text-[18px]">
              Blogs <img src={icon} alt="Icon" />
            </li>
            <li className="flex items-center font-bold text-[18px]">
              About <img src={icon} alt="Icon" />
            </li>
          </ul>
        </div>
        <div className="absolute top-0 right-3 flex items-center ">
          <button className="border-[3px] border-[#0076CE] py-[10px] px-[20px] font-bold mr-2 rounded-sm">
            Login
          </button>
          <button className="text-[#FFF] text-base bg-[#0076CE] py-[10px] px-[20px] rounded-sm">
            Register
          </button>
          <button
            onClick={toggleMenu}
            className="lg:hidden md:hidden xl:hidden 2xl:hidden"
          >
            <img src={menu} alt="Menu" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
