import React from "react";
import { HeroCinema } from "./HeroCinema";
import { ListCinema } from "./ListCinema";

export const Cinema = () => {
  return (
    <>
      {/* <Header/> */}
      <main className="w-full h-[200vh] bg-white font-mulish">
        <HeroCinema />
        <ListCinema />
      </main>
      {/* <Footer/> */}
    </>
  );
};
