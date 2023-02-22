import React, { useState } from "react";
import { CinemaDetailSection } from "./CinemaDetailSection";
import Header from '../../organisms/Header'
import Footer from '../../organisms/Footer'
import MovieList from '../../organisms/MoviesList'

export const CinemaDetail = () => {
  const [dataCinema, setDataCinema] = useState()

  return (
    <>
      <Header active='Cinemas'/>
      <main className="w-full bg-white font-mulish">
        <CinemaDetailSection setData={setDataCinema} />
        <MovieList dataCinema={dataCinema}/>
      </main>
      <Footer/>
    </>
  );
};
