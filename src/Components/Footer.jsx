import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Confetti from "react-confetti";

export default function Footer() {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [formSubmit, setFormSubmit] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const notify = (message, err) => {
    if (err) {
      toast.error(message);
    } else {
      toast.success(message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data["name"] === "") {
      notify("Please enter a name", true);
    } else if (data["email"] === "") {
      notify("Please enter an email", true);
    } else if (data["subject"] === "") {
      notify("Please enter a subject", true);
    } else if (data["phone"] === "") {
      notify("Please enter a Mob. No", true);
    } else if (data["message"] === "") {
      notify("Please enter a message", true);
    } else {
      notify("Message Send Successefully", false);
      setFormSubmit(!formSubmit);
      setData({ name: "", email: "", subject: "", phone: "", message: "" });
    }
  };

  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1.5 },
      });
    } else {
      controls.start({
        opacity: 0,
        y: -50,
      });
    }
  }, [controls, inView]);

  return (
    <div
      className="bg-black text-white p-6 lg:flex lg:justify-between relative z-10"
      ref={ref}
    >
      <div className="lg:w-1/2">
        <h3 className="text-2xl md:text-center">Any Question?</h3>
        <h1 className="text-4xl text-green-500 mt-6 md:text-center">
          Drop Me A Line
        </h1>

        <div className="mt-6 md:mt-16 mx-auto max-w-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                placeholder="Name"
                className="border-b-2 w-full focus:outline-none p-2 bg-black text-white"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Email"
                className="border-b-2 w-full focus:outline-none p-2 bg-black text-white"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="subject"
                value={data.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="border-b-2 w-full focus:outline-none p-2 bg-black text-white"
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                name="phone"
                value={data.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="border-b-2 w-full focus:outline-none p-2 bg-black text-white"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Message"
                name="message"
                value={data.message}
                onChange={handleChange}
                className="border-b-2 w-full focus:outline-none p-2 bg-black text-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="border-2 mb-4 border-green-500 rounded-lg p-2 px-4 text-green-500 hover:text-sky-400 hover:scale-110 hover:-translate-y-2 hover:rotate-x-12 transform transition duration-500 ease-in-out"
            >
              Send Message
            </button>
            <ToastContainer position="top-center" className="mt-16" />
          </form>
        </div>
      </div>

      <div className="lg:w-1/2 mt-12 lg:mt-0">
        <img
          src="public/images/Footer.gif"
          alt=""
          className="h-44  mx-auto rounded-lg"
        />
        <motion.div
          animate={controls}
          className="text-2xl text-gray-400 font-light px-6 lg:px-0"
        >
          <h1 className="text-xl font-light text-center mt-6 lg:mt-12">
            Thanks for visiting my personal portfolio website. Let's stay
            connected! Reach out to me through social media or via live chat.
            <br />
            <br />
            Keep Rising 🚀
          </h1>
        </motion.div>
      </div>

      {formSubmit && <Confetti className="w-full h-full" />}
    </div>
  );
}
