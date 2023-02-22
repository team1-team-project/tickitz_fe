import React from "react";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <>
      <div className="flex-1 flex flex-col items-center">
        <h1 className="font-bold">Explore</h1>
        <ul className="mt-6">
          <li>
            <Link to="/cinemas" className="hover:text-primary">
              Cinemas
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-primary">
              Movies List
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-primary">
              My Ticket
            </Link>
          </li>
          <li>
            <Link className="hover:text-primary">Notification</Link>
          </li>
        </ul>
      </div>
      ;
    </>
  );
};

export default Explore;
