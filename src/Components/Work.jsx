import React from "react";
import WorkCard from "./WorkCard";

export default function Work() {
  return (
    <div className="bg-black text-white p-12" id="work">
      <h1 className="text-center text-4xl">Look At Our Projects</h1>
      <h1 className="text-center text-3xl text-green-500 font-extralight my-6">
        Code Samples
      </h1>

      <div className="flex flex-wrap gap-6 justify-evenly items-center lg:p-12">
        <WorkCard
          src={"public/images/Techi.png"}
          head={"Techispot"}
          description={
            "Explore the latest tech news, discover hilarious tech memes, and find inspiring projects on our platform, designed for tech enthusiasts like you."
          }
          tech={[
            "#ReactJs",
            "#Recoil",
            "#Javascript",
            "#Bootstrap",
            "#Modular Css",
            "#MUI",
          ]}
          gitLink={"https://github.com/Lokesh-Bijarniya/TechiSpot"}
        />
        <WorkCard
          src={"public/images/quiz.png"}
          head={"Quiz Application"}
          description={
            "Challenge yourself and test your knowledge with our interactive Quiz App, designed to make learning fun and engaging."
          }
          tech={["#ReactJs", "#Recoil", "#Javascript", "#Modular Css", "#MUI"]}
          gitLink={"https://github.com/Lokesh-Bijarniya/Quiz-App"}
        />
        <WorkCard
          src={"public/images/Notes.png"}
          head={"Notes Application"}
          description={
            "Simplify your life with our intuitive notes app. Organize your thoughts, ideas, and to-do lists effortlessly."
          }
          tech={[
            "#ReactJs",
            "#Javascript",
            "#React Toastify",
            "#ModularCss",
            "#MUI",
          ]}
          gitLink={"https://github.com/Lokesh-Bijarniya/NOTES-APP"}
        />
      </div>
    </div>
  );
}
