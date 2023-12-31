import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import boy from '../boy.png'

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between item-center  h-24 max-w-[1240px] mx-auto text-white ">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] "> <img  className="h-20 w-20 bg-blue-500 rounded-full"src={boy}/></h1>
      <ul className="hidden md:flex ">
        <li className="p-4 ">home</li>
        <li className="p-4 ">Company</li>
        <li className="p-4 ">Resources</li>
        <li className="p-4 ">About</li>
        <li className="p-4 ">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] border-r h-full bg-[#000300] border-r-gray-900 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4"><img  className="h-20 w-20 bg-blue-500 rounded-full"src={boy}/></h1>
        <ul className="p-4 uppercase  ">
          <li className="p-4 border-b border-gray-600 ">home</li>
          <li className="p-4 border-b border-gray-600 ">Company</li>
          <li className="p-4 border-b border-gray-600 ">Resources</li>
          <li className="p-4 border-b border-gray-600 ">About</li>
          <li className="p-4 border-b border-gray-600 ">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
