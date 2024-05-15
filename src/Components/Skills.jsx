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
        <Card name="HTML" src={"src/assets/Html-logo.png"} />
        <Card name="CSS" src={"src/assets/Css-logo.png"} />
        <Card name="Javascript" src={"src/assets/Js-logo.png"} />

        <Card name="ReactJs" src={"src/assets/React-logo.png"} />
        <Card name="Recoil" src={"src/assets/Recoil-logo.png"} />

        <Card name="NodeJs" src={"src/assets/Node-logo.png"} />
        <Card name="ExpressJs" src={"src/assets/Express-logo.png"} />

        <Card name="MongoDB" src={"src/assets/Mongo-logo.png"} />

        <Card name="JAVA" src={"src/assets/Java-logo.png"} />
        <Card name="Material UI" src={"src/assets/MUI-logo.png"} />
        <Card name="Tailwind" src={"src/assets/Tailwind-logo.png"} />
        <Card name="Bootstrap" src={"src/assets/Bootstrap-logo.png"} />

        <Card name="Github" src={"src/assets/Github-logo.png"} />
        <Card name="Postman API" src={"src/assets/Postman-logo.png"} />
        <Card name="Netlify" src={"src/assets/Netlify-logo.png"} />
      </div>
    </div>
  );
}
