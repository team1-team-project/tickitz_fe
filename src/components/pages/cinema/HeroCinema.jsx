import React from "react";
import heroImg1 from "../../../assets/images/hero-img-1.png";
import heroImg2 from "../../../assets/images/hero-img-2.png";
import heroImg3 from "../../../assets/images/hero-img-3.png";
// import heroImg from "../../../assets/images/hero-img.png";

export const HeroCinema = () => {
  return (
    <section className="container h-screen w-full flex flex-col-reverse sm:flex-row ">
      <section className="left h-full w-full sm:w-1/2 flex flex-col justify-center items-center sm:items-start ">
        <h3 className="text-xl sm:text-lg text-[#A0A3BD]">
          Nearest Cinema, Newest Movie,
        </h3>
        <h2 className="text-primary text-center font-bold sm:text-5xl text-6xl">
          Find out now!
        </h2>
      </section>
      <section className="right h-full w-full sm:w-1/2 flex items-center ">
        <div className="img-wrapper h-full w-full flex items-center relative">
          <img
            src={heroImg1}
            alt=""
            className="h-3/4 absolute max-sm:left-10 left-0 bottom-1 hover:scale-110 duration-200"
          />
          <img
            src={heroImg2}
            alt=""
            className="h-3/4 absolute max-sm:left-32 left-36 hover:scale-110 duration-200"
          />
          <img
            src={heroImg3}
            alt=""
            className="h-3/4 absolute max-sm:right-10 right-20 top-2 hover:scale-110 duration-200"
          />
        </div>
      </section>
    </section>
  );
};
