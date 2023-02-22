import React from "react";

const MoviegoersCard = () => {
  return (
    <>
      <div className="container font-mulish text-black my-20 p-16 flex flex-col items-center shadow-xl rounded-3xl">
        <h3 className="text-2xl">Be the vanguard of the</h3>
        <h1 className="text-6xl font-bold text-primary">Moviegoers</h1>
        <div className="flex my-10 space-x-4">
          <input
            type="email"
            placeholder="Type your email"
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn-primary min-w-max">Join now</button>
        </div>
        <p>
          By joining you as a Tickitz member, we will always send you the latest
          updates via email .
        </p>
      </div>
    </>
  );
};

export default MoviegoersCard;
