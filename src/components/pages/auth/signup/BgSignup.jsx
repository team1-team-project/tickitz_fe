import React from "react";
import bgAuth from "../../../../assets/images/bg-auth.png";
import tickitzLogo from "../../../../assets/images/logo-auth-small.png";

export const BgSignup = () => {
  return (
    <section className="bg-signup hidden w-7/12 bg-[#2B156BCC] bg-no-repeat bg-cover relative sm:flex flex-col font-mulish">
      <div
        className="w-full h-full opacity-10 bg-cover bg-no-repeat absolute"
        style={{ backgroundImage: `url(${bgAuth})` }}
      ></div>
      <img
        src={tickitzLogo}
        alt="tickitz-logo"
        className="absolute z-10 sm:px-20 sm:pt-14"
      />
      <div className="absolute z-10 flex flex-col justify-center w-full h-full sm:px-20 ">
        <h2 className="text-4xl font-semibold text-white">
          Lets build your account
        </h2>
        <p className="text-xl text-white opacity-70 pt-5">
          To be a loyal moviegoer and access all of features, your details are
          required.
        </p>
        <div className="flex flex-col gap-6 pt-10">
          <li className="flex items-center text-xl gap-6">
            <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
              <p className="">1</p>
            </div>
            <p className="text-white">Fill your additional details</p>
          </li>
          <li className="flex items-center text-xl gap-6">
            <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
              <p className="">2</p>
            </div>
            <p className="text-white">Activate your account</p>
          </li>
          <li className="flex items-center text-xl gap-6">
            <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
              <p className="">3</p>
            </div>
            <p className="text-white">Done</p>
          </li>
        </div>
      </div>
    </section>
  );
};
