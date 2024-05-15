import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-black text-white " id="about">
      <h1 className="text-center py-10 text-3xl ">Who I Am</h1>
      <h1 className="text-green-500 text-5xl text-center font-extralight">
        A Passionate Developer Who <br /> Loves to Code
      </h1>

      <div className="lg:flex  w-full max-w-7xl mx-auto">
        <div className="w-full mt-12 lg:w-1/2 text-center lg:text-left flex lg:items-center">
          <img
            src="/Images/IMAGE.jpg"
            // height={'400'}
            // width={'300'}
            alt=""
            className="h-96  mx-auto lg:mx-0 lg:ml-20 rounded-lg shadow-2xl shadow-yellow-800 hover:scale-110 hover:-translate-y-2 hover:rotate-x-12 transform transition duration-500 ease-in-out"
          />
        </div>

        <div className="w-full lg:w-1/2 text-white pt-12 lg:mt-0">
          <h1 className="text-4xl my-6 text-center lg:text-left">About Me</h1>

          <div className="text-2xl text-gray-400 font-light px-6 lg:px-0">
            {/* <motion.p animate={controls}> */}I am a passionate Full Stack
            Developer currently pursuing a Bachelor of Technology in Computer
            Science Engineering (CSE) from Starex University. My enthusiasm lies
            in enhancing my coding skills and developing innovative applications
            and websites. Proficient in the MERN stack, I specialize in building
            dynamic WebApps and Websites. Working independently to improve my
            skills, I particularly enjoy creating Full-Stack clones that
            showcase my abilities.
            {/* </motion.p> */}
          </div>

          <div className="border rounded-lg mt-12 mb-10 mx-6 lg:mx-0 overflow-x-auto">
            <table className="w-full rounded-t-full text-xl">
              <thead>
                <tr className="text-left">
                  <th className="w-1/2 lg:w-auto border-r-2 pt-4 pl-6">Name</th>
                  <th className="w-1/2 lg:w-auto pt-4 pl-6">Address</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-gray-400 font-extralight">
                  <td className="w-1/2 lg:w-auto border-r-2 pl-6">
                    Lokesh Bijarniya
                  </td>
                  <td className="w-1/2 lg:w-auto pl-6">
                    Sikar, Rajasthan, India
                  </td>
                </tr>
                <tr className="text-left">
                  <th className="w-1/2 lg:w-auto border-r-2 pt-4 pl-6">
                    Email
                  </th>
                  <th className="w-1/2 lg:w-auto pt-4 pl-6">Degree</th>
                </tr>
                <tr className="text-gray-400 font-extralight">
                  <td className="w-1/2 lg:w-auto border-r-2 pl-6">
                    Lkbijarniya2@gmail.com
                  </td>
                  <td className="w-1/2 lg:w-auto pl-6">
                    Bachelor of Technology in CSE
                  </td>
                </tr>
                <tr className="text-left">
                  <th className="w-1/2 lg:w-auto border-r-2 pt-4 pl-6">
                    Phone
                  </th>
                  <th className="w-1/2 lg:w-auto pt-4 pl-6">Freelance</th>
                </tr>
                <tr className="text-gray-400 font-extralight">
                  <td className="w-1/2 lg:w-auto border-r-2 pl-6 pb-4">
                    +91 96100XXXXX
                  </td>
                  <td className="w-1/2 lg:w-auto pl-6 pb-4">Available</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center lg:text-left">
            <button className="bg-green-500 p-2 px-6 text-2xl rounded-full hover:scale-110 hover:-translate-y-2 hover:rotate-x-12 transform transition duration-500 ease-in-out">
              <a
                href="https://drive.google.com/file/d/1kqCZukZPa_F7glBhC4V2hXVB_O7tXX0X/view?usp=sharing"
                target="_blank"
              >
                Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
