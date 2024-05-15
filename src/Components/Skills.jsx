import React from "react";
import Card from "./SkillCard";

export default function Skills() {
  return (
    <div className="bg-black pt-12 pb-24" id="skills">
      <h2 className="text-center text-3xl text-white py-6">Expertise</h2>
      <h1 className="text-center text-5xl text-green-500 font-extralight">
        My Skills & Tools
      </h1>
      {/*  grid grid-cols-5 gap-y-12 */}
      <div className="w-8/12 mt-20 m-auto flex flex-wrap gap-10">
        <Card name="HTML" src={"/Images/Html-logo.png"} />
        <Card name="CSS" src={"/Images/Css-logo.png"} />
        <Card name="Javascript" src={"/Images/Js-logo.png"} />

        <Card name="ReactJs" src={"/Images/React-logo.png"} />
        <Card name="Recoil" src={"/Images/Recoil-logo.png"} />

        <Card name="NodeJs" src={"/Images/Node-logo.png"} />
        <Card name="ExpressJs" src={"/Images/Express-logo.png"} />

        <Card name="MongoDB" src={"/Images/Mongo-logo.png"} />

        <Card name="JAVA" src={"/Images/Java-logo.png"} />
        <Card name="Material UI" src={"/Images/MUI-logo.png"} />
        <Card name="Tailwind" src={"/Images/tailwind-logo.png"} />
        <Card name="Bootstrap" src={"/Images/Bootstrap-logo.png"} />

        <Card name="Github" src={"/Images/Github-logo.png"} />
        <Card name="Postman API" src={"/Images/Postman-logo.png"} />
        <Card name="Netlify" src={"/Images/Netlify-logo.png"} />
      </div>
    </div>
  );
}
