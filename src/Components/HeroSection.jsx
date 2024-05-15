import React, { useState, useEffect, useRef } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Typed from "typed.js";
import Particle from "../Particle";
import { motion } from "framer-motion";

export default function HeroSection() {
  const jobTitles = [
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "MERN Stack Developer",
  ];
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: jobTitles,
      loop: true,
      typeSpeed: 70,
      backSpeed: 25,
      backDelay: 500,
    };
    typedRef.current = new Typed(".typing-text", options);

    return () => {
      typedRef.current.destroy();
    };
  }, []);

  return (
    <>
      <Particle />

      <div className="h-screen" id="home">
        <div className="lg:flex items-center justify-center">
          <div className="relative w-8/12 lg:left-28 left-12 top-32 ">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <h1>
                <span className="absolute top-0 left-0 w-12 h-1 bg-white"></span>
                <span className="absolute top-2 left-12 w-12 h-1 bg-green-400"></span>
                <span className="relative bottom-1 left-28  text-white text-2xl">
                  <span className="text-green-500">
                    Turning <span className="text-yellow-400">ideas</span>
                  </span>{" "}
                  into elegant solutions
                </span>
              </h1>

              <h1 className="text-7xl text-white font-semibold mt-10">
                <span className="text-green-500">Lokesh</span> Bijarniya
              </h1>

              <p className="text-gray-300 my-12 w-3/4 text-green-500 text-3xl">
                I Am Into &nbsp;
                <span className="text-blue-300 typing-text"></span>
              </p>

              <button className="border-dotted border-2 border-green-600 text-white p-2 px-8 text-2xl mr-8 rounded-lg cursor-pointer shadow-2xl shadow-green-700 font-extralight hover:scale-110 hover:-translate-y-2 hover:rotate-x-12 transform transition duration-500 ease-in-out">
                <a
                  href="https://drive.google.com/file/d/1kqCZukZPa_F7glBhC4V2hXVB_O7tXX0X/view?usp=sharing"
                  target="_blank"
                >
                  Hire Me
                </a>
              </button>
            </motion.div>
          </div>

          <div className="text-white ml-80 my-44 hidden lg:block relative z-0">
            <div className="border rounded-full p-2 my-6 hover:bg-sky-700 ">
              <a href="https://www.linkedin.com/in/lokesh-bijarniya/">
                <LinkedInIcon />
              </a>
            </div>

            <div className="border rounded-full p-2 my-6  hover:bg-sky-700">
              <a href="">
                <TwitterIcon />
              </a>
            </div>

            <div className="border rounded-full p-2 my-6 hover:bg-rose-500">
              <a href="">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
