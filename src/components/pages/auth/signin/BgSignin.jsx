import React from "react";
import bgAuth from "../../../../assets/images/bg-auth.png";
import tickitzLogo from "../../../../assets/images/tickitz-signin.png";

export const BgSignin = () => {
  return (
    <section className="bg-signup hidden w-7/12 bg-[#2B156BCC] bg-no-repeat bg-cover relative sm:flex flex-col font-mulish">
      <div
        className="w-full h-full opacity-10 bg-cover bg-no-repeat absolute"
        style={{ backgroundImage: `url(${bgAuth})` }}
      ></div>
      <div className="flex flex-col justify-center items-center absolute z-10 w-full h-full">
        <img
          src={tickitzLogo}
          alt="tickitz-logo"
          className=" sm:px-20 sm:pt-14"
        />
        <p className="text-4xl text-white">wait, watch, wow!</p>
      </div>
    </section>
  );
};
