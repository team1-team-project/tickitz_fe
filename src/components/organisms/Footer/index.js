/* eslint-disable no-undef */
import React from "react";
import logoTickitz from "../../../assets/icons/Tickitz-logo.svg";
import Explore from "../../molecules/Explore";
import FollowUs from "../../molecules/FollowUs";
import OurSponsor from "../../molecules/OurSponsor";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container pt-20 pb-10 text-black font-mulish">
          <div className="flex">
            <div className="brand flex-1">
              <img src={logoTickitz} alt="logo-tickitz" className="h-16" />
              <p className="pt-6 text-xl text-primary">
                Stop waiting in line. Buy tickets
                <br /> conveniently, watch movies quietly.
              </p>
            </div>
            <Explore />
            <OurSponsor />
            <FollowUs />
          </div>
          <p className="text-center mt-6">
            © 2020 Tickitz. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
