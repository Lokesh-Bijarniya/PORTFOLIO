import React, { useEffect } from "react";
import ContactCard from "./ContactCard";

export default function Contact() {
  return (
    <div className="bg-black p-12 text-white" id="contact">
      <h1 className="text-center text-4xl ">Contact me</h1>
      <h2 className="text-center text-3xl text-green-500 mt-6 mb-12 font-extralight">
        I will happy to help you out
      </h2>

      <div className="flex flex-wrap justify-center">
        <ContactCard
          head="Call Me At :"
          description="+91 96100-XXXXX"
          src={
            "https://t4.ftcdn.net/jpg/04/63/63/59/360_F_463635935_IweuYhCqZRtHp3SLguQL8svOVroVXvvZ.webp"
          }
          href={"/"}
        />

        <ContactCard
          head="Email At :"
          description="Lkbijarniya2@gmail.com"
          src={
            "https://media.istockphoto.com/id/1016416224/vector/new-message-vector-icon.jpg?s=612x612&w=0&k=20&c=icP9QBFaMq67KeUhnF3-7o5GtHJclEFmGhjM5LQrM0s="
          }
          href={"mailto:lkbijarniya2@gmail.com"}
        />

        <ContactCard
          head="LinkedIn"
          description="Lokesh-Bijarniya"
          src={"https://cdn-icons-png.flaticon.com/128/4494/4494497.png"}
          href={"https://www.linkedin.com/in/lokesh-bijarniya/"}
        />

        <ContactCard
          head="Twitter"
          description="LokeshBijarnia_"
          src={
            "https://media.istockphoto.com/id/1316036523/vector/blue-bird-icon-on-a-grey-background.jpg?s=612x612&w=0&k=20&c=ler4bmvuUrnem3PricKZVLU1Jt-32Livga1xq0CRCo8="
          }
          href={"https://twitter.com/LokeshBijarnia_"}
        />
      </div>
    </div>
  );
}
