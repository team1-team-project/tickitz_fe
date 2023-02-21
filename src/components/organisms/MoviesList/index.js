/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMovies } from "../../../utils/redux/action/movieList";
import TimeList from "../../molecules/TimeList";

const MoviesList = () => {
  const dispatch = useDispatch();
  const { getMovieLoading, getMovieResult, getMovieError } = useSelector(
    (state) => state.cinemasReducer
  );
  const [time, setTime] = useState();
  const [movie, setMovie] = useState();
  let [page, setPage] = useState(1);
  const navigate = useNavigate();

  const handleBooking = (id_movies) => {
    if (time === undefined) {
      alert("Please choose show time!");
    } else {
      alert(`${time}, ${id_movies}`);
      navigate(`/payment/${"cinema 1"}/${id_movies}/${time}`);
    }
  };

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <>
      <div className="py-20 bg-slate-200 font-mulish text-black">
        <div className="container flex flex-col items-center">
          <h1 className="text-2xl font-bold">Showtimes and Tickets</h1>
          <div className="flex mt-12">
            <div className="flex space-x-6">
              <input
                type="text"
                placeholder="Type here"
                className="input max-w-xs"
              />
              <button className="btn-primary">
                <FiSearch />
              </button>
            </div>
          </div>
          <div className="w-full grid grid-cols-12 gap-x-6 gap-y-7 my-14">
            {getMovieResult ? (
              getMovieResult.results.map((item) => {
                return (
                  <>
                    <div
                      key={item}
                      className="col-span-3 p-6 bg-white rounded-2xl"
                    >
                      <img
                        src={require("../../../assets/images/spider-poster.png")}
                        alt="logo ebv"
                        className="w-[70%] mx-auto rounded-2xl"
                      />
                      <div>
                        <h3 className="text-2xl font-bold mt-5 text-center">
                          {item.movie_name}
                        </h3>
                        <p className="text-sm">
                          Genre: Advanture, Action, Romance
                        </p>
                        <p className="text-sm">Release: {item.release_date}</p>
                        <p className="text-sm">Duration: {item.duration}</p>
                      </div>
                      <hr className="my-5" />
                      <TimeList
                        movie_id={"1"}
                        cinema_id={item.id_movies}
                        setTime={setTime}
                        time={time}
                        setCinema={setMovie}
                      />
                      <button
                        className="btn-primary mt-5 mx-auto block"
                        onClick={() => handleBooking(item.id_movies)}
                      >
                        Book now
                      </button>
                    </div>
                  </>
                );
              })
            ) : getMovieLoading ? (
              <p className="text-center text-2xl">Loading...</p>
            ) : getMovieError ? (
              <p className="text-center text-2xl">500 : SORRY, SERVER ERROR</p>
            ) : (
              <p className="text-center text-2xl">DATA EMPTY</p>
            )}
          </div>
          {/* <div className="btn-group">
            <button className="btn bg-primary text-white mr-3 border-none hover:bg-primary">
              1
            </button>
            <button className="btn bg-white text-black mr-3 border-none hover:bg-primary hover:text-white">
              2
            </button>
            <button className="btn bg-white text-black mr-3 border-none hover:bg-primary hover:text-white">
              3
            </button>
            <button className="btn bg-white text-black mr-3 border-none hover:bg-primary hover:text-white">
              4
            </button>
          </div> */}
          <div className="btn-group grid grid-cols-2">
            <button
              className="btn btn-outline hover:bg-primary"
              onClick={() => handlePrev()}
            >
              Previous page
            </button>
            <button
              className="btn btn-outline hover:bg-primary"
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviesList;
