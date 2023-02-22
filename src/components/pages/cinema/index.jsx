import React from "react";
// import { useNavigate } from "react-router-dom";
import { HeroCinema } from "./HeroCinema";
import { ListCinema } from "./ListCinema";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer"

export const Cinema = () => {
  // const navigate = useNavigate();
  // const isLogged = JSON.parse(localStorage.getItem("@login"));
  // if (isLogged === null) {
  //   navigate("/sign-in");
  // }
  return (
    <>
      <Header active={'Cinemas'}/>
      <main className="w-full h-[400vh] sm:h-[250vh] bg-white font-mulish">
        <HeroCinema />
        <ListCinema />
      </main>
      <Footer/>
    </>
  );
};
