import React from "react";
import MenuCard from "./MenuCard";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-gray-950 text-white py-4 px-8 fixed top-0 w-full z-10">
      <div className="flex items-center">
        <img
          src="/src/assets/programming (2).png"
          alt=""
          className="h-12 w-12 mr-4 lg:relative left-32"
        />
        {/* <h1 className='text-2xl font-bold'>Lokesh</h1> */}
      </div>

      <nav className="hidden md:block lg:relative right-8">
        <ul className="flex space-x-20 ">
          <li>
            <a href="#home" className="hover:text-red-700 ">
              HOME
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-red-700 "
              activeClassName="text-red-700"
            >
              ABOUT US
            </a>
          </li>
          {/* <li><a href="#services" className='hover:text-red-700'>SERVICES</a></li> */}
          <li>
            <a href="#skills" className="hover:text-red-700">
              SKILLS
            </a>
          </li>
          <li>
            <a href="#work" className="hover:text-red-700">
              WORK
            </a>
          </li>
          {/* <li><a href="#blog" className='hover:text-red-700'>BLOG</a></li> */}
          <li>
            <a href="#contact" className="hover:text-red-700">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>

      <div className="block md:hidden">
        <MenuCard />
      </div>
    </div>
  );
}


