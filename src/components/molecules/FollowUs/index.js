import React from "react";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { AiOutlineYoutube } from "react-icons/ai";
import { Link } from "react-router-dom";

const FollowUs = () => {
  return (
    <>
      <div className="flex-1 flex flex-col items-center">
        <h1 className="font-bold">Follow Us</h1>
        <ul className="mt-6">
          <li>
            <Link className="hover:text-primary flex space-x-3 items-center mb-3">
              <FiFacebook />
              <p>Tickitz Cinema id</p>
            </Link>
          </li>
          <li>
            <Link className="hover:text-primary flex space-x-3 items-center mb-3">
              <FaInstagram />
              <p>tickitz.id</p>
            </Link>
          </li>
          <li>
            <Link className="hover:text-primary flex space-x-3 items-center mb-3">
              <SlSocialTwitter />
              <p>tickitz.id</p>
            </Link>
          </li>
          <li>
            <Link className="hover:text-primary flex space-x-3 items-center mb-3">
              <AiOutlineYoutube />
              <p>Tickitz Cinema id</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FollowUs;
