/* eslint-disable react/prop-types */
import React from "react";
import Navlink from "../../atoms/Navlink";

const Navbar = ({ active }) => {
  return (
    <>
      <nav>
        <ul className="flex space-x-12">
          <Navlink active={active} label="Movies" href="/" />
          <Navlink active={active} label="Cinemas" href="/cinema" />
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
