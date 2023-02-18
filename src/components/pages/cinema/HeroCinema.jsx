import React from "react";
import heroImg1 from "../../../assets/images/hero-img-1.png";
import heroImg2 from "../../../assets/images/hero-img-2.png";
import heroImg3 from "../../../assets/images/hero-img-3.png";
// import heroImg from "../../../assets/images/hero-img.png";

export const HeroCinema = () => {
  return (
    <section className="container h-screen w-full flex ">
      <section className="left h-full w-1/2 flex flex-col justify-center items-start">
        <h3 className="text-lg text-[#A0A3BD]">
          Nearest Cinema, Newest Movie,
        </h3>
        <h2 className="text-primary font-bold text-5xl">Find out now!</h2>
      </section>
      <section className="right h-full w-1/2 flex items-center">
        <div className="img-wrapper h-full w-full flex items-center relative ">
          <img
            src={heroImg1}
            alt=""
            className="h-3/4 absolute left-0 bottom-1 hover:scale-110 duration-200"
          />
          <img
            src={heroImg2}
            alt=""
            className="h-3/4 absolute left-36 hover:scale-110 duration-200"
          />
          <img
            src={heroImg3}
            alt=""
            className="h-3/4 absolute right-20 top-2 hover:scale-110 duration-200"
          />
        </div>
      </section>
    </section>
  );
};
