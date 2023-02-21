/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const Navlink = ({ active, label, href }) => {
  return (
    <>
      <Link to={href}>
        <li
          className={
            active === label
              ? "text-primary font-semibold"
              : "text-black font-semibold hover:text-primary"
          }
        >
          {label}
        </li>
      </Link>
    </>
  );
};

export default Navlink;
