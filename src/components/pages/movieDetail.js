import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import LocationDropdown from "../organisms/detailMovie/location";
import DateDropdown from "../organisms/detailMovie/time";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [detailMovies, setDetailMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`https://tickitz.herokuapp.com/api/movie/${movieId}`)
      .then((res) => {
        console.log(res);
        setDetailMovies(res.data.data);
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }, []); //[] jika dependencys dihapus maka looping terus

  return (
    <>
      <div className="movieDetail p-[30px]">
        <div className="w-[100%] object-center sm:flex justify-center w-[100%]">
          <div className="border-[1px] rounded-xl ">
            <div className="p-[50px]">
              <img src={require("../../assets/images/home/movieDetail.png")} />
            </div>
          </div>
          <div>
            <div className="px-[50px]">
              <div className="pb-[30px]">
                <h1 className="font-bold text-[32px] my-[30px] sm:my-[0px]">
                  {detailMovies.movie_name}
                </h1>
                <h2>{detailMovies.id_category}</h2>
              </div>

              <div className="flex mb-[30px]">
                <div className="mr-[70px]">
                  <h1 className="text-[#8692A6]">Release Date</h1>
                  <h2>{detailMovies.release_date}</h2>
                </div>
                <div>
                  <h1 className="text-[#8692A6]">Directed by</h1>
                  <h2>{detailMovies.director}</h2>
                </div>
              </div>
              <div className="flex mb-[30px]">
                <div className="mr-[30px]">
                  <h1 className="text-[#8692A6]">Duration</h1>
                  <h2>{detailMovies.duration}</h2>
                </div>
                <div>
                  <h1 className="text-[#8692A6]">Cast</h1>
                  <h2>{detailMovies.actor}</h2>
                </div>
              </div>
              <hr className="mb-[30px]" />
              <div>
                <div className="w-[100%] sm:w-[50%]">
                  <h1 className="font-[20px] mb-[10px]">Synopsis</h1>
                  <h2 className="w-[100%] sm:w-[50vw]">
                    {detailMovies.synopsis}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="showtime">
          <h1 className="text-[24px] font-bold text-center my-[30px] sm:my-[0px]">
            Showtime and Tickets
          </h1>
          <div className="flex justify-center my-[30px]">
            <div className="mx-[5px]">
              <DateDropdown />
            </div>
            <div className="mx-[5px]">
              <LocationDropdown />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
