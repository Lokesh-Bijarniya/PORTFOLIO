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
        <Card name="HTML" src={"public/Images/Html-logo.png"} />
        <Card name="CSS" src={"public/images/Css-logo.png"} />
        <Card name="Javascript" src={"public/images/Js-logo.png"} />

        <Card name="ReactJs" src={"public/images/React-logo.png"} />
        <Card name="Recoil" src={"public/images/Recoil-logo.png"} />

        <Card name="NodeJs" src={"public/images/Node-logo.png"} />
        <Card name="ExpressJs" src={"public/images/Express-logo.png"} />

        <Card name="MongoDB" src={"public/images/Mongo-logo.png"} />

        <Card name="JAVA" src={"public/images/Java-logo.png"} />
        <Card name="Material UI" src={"public/images/MUI-logo.png"} />
        <Card name="Tailwind" src={"public/images/Tailwind-logo.png"} />
        <Card name="Bootstrap" src={"public/images/Bootstrap-logo.png"} />

        <Card name="Github" src={"public/images/Github-logo.png"} />
        <Card name="Postman API" src={"public/images/Postman-logo.png"} />
        <Card name="Netlify" src={"public/images/Netlify-logo.png"} />
      </div>
    </div>
  );
}
