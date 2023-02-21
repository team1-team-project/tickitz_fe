import React from "react";
export default function HomeHeader() {
  return (
    <section className=" w-screen p-10">
      <div className="lg:flex items-center justify-evenly">
        <div>
          <div className="text-[16px] text-[#A0A3BD] lg:text-[21px]">
            Nearest Cinema, Newest Movie
          </div>
          <div className="text-[35px] text-[#5F2EEA] font-bold lg:text-[50px]">
            Find out now!
          </div>
        </div>
        <div className="flex justify-center">
          <img
            className=""
            src={require("../../../assets/images/home/header-home.png")}
          />
        </div>
      </div>
    </section>
  );
}
