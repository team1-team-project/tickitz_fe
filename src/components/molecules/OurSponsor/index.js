/* eslint-disable no-undef */
import React from "react";

const OurSponsor = () => {
  return (
    <>
      <div className="flex-1 flex flex-col justify-center items-center">
        <h1 className="font-bold mb-6">Our Sponsor</h1>
        <img
          src={require("../../../assets/icons/ebv-logo.webp")}
          alt="ebv-logo"
          className="mb-4 w-32"
        />
        <img
          src={require("../../../assets/icons/cineone-logo.webp")}
          alt="cineone-logo"
          className="mb-4 w-32"
        />
        <img
          src={require("../../../assets/icons/hiflix-logo.png")}
          alt="hiflix-logo"
          className="mb-4 w-32"
        />
      </div>
    </>
  );
};

export default OurSponsor;
