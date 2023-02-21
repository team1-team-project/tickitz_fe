/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Unauthorized = ({ active }) => {
  const [search, setSearch] = useState();
  const [query, setQuery] = useState("");

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
        {/* <Link to="/sign-up">
          <button className="btn-primary w-max px-8">Sign Up</button>
        </Link> */}
        <button
          className="btn-primary min-w-max px-8"
          onClick={() =>
            localStorage.setItem(
              "@userLogin",
              JSON.stringify({ images: "avatar.webp" })
            )
          }
        >
          Sign Up
        </button>
      </div>
    </>
  );
};

export default Unauthorized;
