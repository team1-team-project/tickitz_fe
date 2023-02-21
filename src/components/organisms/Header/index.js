/* eslint-disable react/prop-types */
import React from "react";
import logo from "../../../assets/icons/Tickitz-logo.svg";
import Navbar from "../../molecules/Navbar";
import Features from "../../molecules/Features";

const Header = ({ active }) => {
  return (
    <>
      <header className="max-w-screen bg-white py-6 shadow-lg font-mulish">
        <div className="container flex justify-between items-center">
          <div className="brand flex items-center space-x-12">
            <img src={logo} alt="logo tickitz" />
            <Navbar active={active} />
          </div>
          <div className="features">
            <Features active={active} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
