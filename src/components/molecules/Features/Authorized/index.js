/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Authorized = ({ active, logout }) => {
  const [search, setSearch] = useState();
  const [query, setQuery] = useState("");
  const handleLogout = () => {
    localStorage.removeItem("@login");
    logout(false);
  };

  const handleSearch = () => {
    alert(query);
  };

  return (
    <>
      <div className="flex items-center space-x-10">
        {active === "Movies" ? (
          ""
        ) : (
          <select className="select select-ghost max-w-xs">
            <option disabled selected>
              Choose a location
            </option>
            <option>Jakarta</option>
            <option>Tangerang</option>
            <option>Bandung</option>
          </select>
        )}
        {search ? (
          <div className="flex items-center space-x-4 p-2 px-5 bg-slate-200 rounded-xl w-[27rem]">
            <input
              type="text"
              placeholder="Type here"
              className="input w-full"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
            <span className="text-2xl">
              <FiSearch
                onClick={() => {
                  query.length < 1 ? setSearch(false) : handleSearch();
                }}
              />
            </span>
          </div>
        ) : (
          <span className="text-2xl">
            <FiSearch onClick={() => setSearch(true)} />
          </span>
        )}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img
                  src={`https://tickitz.herokuapp.com/upload/${
                    JSON.parse(localStorage.getItem("@login")).images ||
                    "avatar.webp"
                  }`}
                />
              </div>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li className="text-red-500" onClick={() => handleLogout()}>
              <p>Logout</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Authorized;
