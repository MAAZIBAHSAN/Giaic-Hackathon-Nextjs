import React from "react";
import { CiUser } from "react-icons/ci";

// Top Header

import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { PiShoppingCart } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";

export function TopHeader() {
  return (
    <div className="bg-gray-800 text-white py-2 px-4 flex justify-between items-center">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1 cursor-pointer">
          <FaPhoneAlt />
          <span>(225) 555-0118</span>
        </div>
        <div className="flex items-center space-x-1 cursor-pointer pl-7">
          <FaEnvelope />
          <span>michelle.rivera@example.com</span>
        </div>
      </div>

      {/* Middle Section */}
      <div className="text-center">
        <span>Follow Us and get a chance to win 80% off</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4 cursor-pointer pr-5">
        <FaInstagram />
        <FaYoutube />
        <FaFacebook />
        <FaTwitter />
      </div>
    </div>
  );
}

// 2nd Header
export const Header = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800 cursor-pointer">Bandage</div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6 text-gray-600 pr-64">
        <a href="#" className="hover:text-gray-800 cursor-pointer">
          Home
        </a>
        <div className="relative group">
          <a href="#" className="hover:text-gray-800 flex items-center cursor-pointer">
            Shop
            <span className="ml-1"><RiArrowDropDownLine height={10} width={10}/></span>
          </a>
          {/* Dropdown (optional) */}
          <div className="absolute left-0 hidden group-hover:block bg-white shadow-md mt-2 rounded-md cursor-pointer">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Category 1
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Category 2
            </a>
          </div>
        </div>
        <a href="#" className="hover:text-gray-800">
          About
        </a>
        <a href="#" className="hover:text-gray-800">
          Blog
        </a>
        <a href="#" className="hover:text-gray-800">
          Contact
        </a>
        <a href="#" className="hover:text-gray-800">
          Pages
        </a>
      </div>

      {/* User Actions */}
      <div className="flex items-center space-x-5 text-gray-600">
      <CiUser className="hover:text-gray-900 text-gray-800 cursor-pointer h-[26px] w-[23px]"/>  
        <a href="#" className="text-blue-700 hover:underline font-semibold">
        Login / Register
        </a>
        <button className="hover:text-gray-800">
        <IoMdSearch className="h-[32px] w-[22px]"/>
        </button>
        <button className="relative hover:text-gray-800">
        <PiShoppingCart className="h-[27px] w-[22px]"/>
          <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs rounded-full px-1">
            1
          </span>
        </button>
        <button className="hover:text-gray-800">
        <FaRegHeart className="h-[27px] w-[22px]" />
        </button>
      </div>
    </nav>
  );
};




// const Topheader = () => {
//   return(
//   <div className="w-[100vw] h-[58px] bg-[#252B42]">
//        <div className="w-[1438px] h-[46px] top-[9px] left-[2px]">
//         <div className="w-[415px] h-[46px] fixed gap-[10px]">
//            <BsTelephone height={16} width={16} className="w-[145px] h-[44px] p-[10px] gap-[5px] text-[#FFFFFF]"/>
//         <h2>(225) 555-0118</h2>
//         </div>

//        </div>
//     </div>
//   );
// };

// export default Topheader;

// export const Header = () => {
//   return <div>header</div>;
// };
