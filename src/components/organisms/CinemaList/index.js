/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCinemas } from "../../../utils/redux/action/movieList";
import TimeList from "../../molecules/TimeList";

const CinemaList = ({ dataMovie }) => {
  const [time, setTime] = useState();
  const [cinema, setCinema] = useState();
  let [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { getCinemasLoading, getCinemasResult, getCinemasError } = useSelector(
    (state) => state.cinemasReducer
  );
  const navigate = useNavigate();
  const { movieId } = useParams();
  // const { id } = "sdaddsadaj";
  // const movie_name = "contohfilm";
  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    dispatch(getCinemas(page));
  }, [page]);

  const handleBooking = (id_cinema, city, price, cinema_name, cinema_room) => {
    if (time === undefined) {
      alert("Please choose show time!");
    } else {
      // alert(`${time}, ${id_cinema}`);
      const date = new Date();
      const data = {
        id_movies: movieId,
        id_profile: JSON.parse(localStorage.getItem("@login")).data.user
          .id_profile,
        movie_name: dataMovie.movie_name,
        cinema_name,
        cinema_room,
        id_room: id_cinema,
        address: city,
        id_time: time,
        price,
        date: `${day[date.getDay()]}, ${date.getDate()} ${
          month[date.getMonth()]
        } ${date.getFullYear()}`,
        hour: `${date.getHours()}:${date.getMinutes()}`,
        seat: [],
      };
      localStorage.setItem("paymentInfo", JSON.stringify(data));
      navigate(`/order`);
    }
  };

  const handlePrev = () => {
    if (page > 0) {
      setPage(page - 1);
    } else {
      setPage(1);
    }
  };

  return (
    <>
      <div className="py-20 bg-slate-200 font-mulish text-black">
        <div className="container flex flex-col items-center">
          <h1 className="text-2xl font-bold">Showtimes and Tickets</h1>
          <div className="flex mt-12">
            <select className="select w-full max-w-xs">
              <option disabled selected>
                Choose a location
              </option>
              <option>Jakarta</option>
              <option>Bandung</option>
              <option>Tangerang</option>
              <option>Purwokerto</option>
              <option>Bogor</option>
            </select>
          </div>
          <div className="w-full grid grid-cols-12 gap-x-6 gap-y-7 my-14">
            {getCinemasResult ? (
              getCinemasResult.map((item) => {
                return (
                  <>
                    <div
                      key={item}
                      className="col-span-4 p-6 bg-white rounded-2xl"
                    >
                      <div className="flex items-center space-x-6">
                        <img
                          src={`https://tickitz.herokuapp.com/upload/${item.cinema_name}.webp`}
                          alt="logo ebv"
                          className="w-[30%]"
                        />
                        <div>
                          <h3 className="text-2xl font-bold">
                            {item.cinema_room}
                          </h3>
                          <p className="mt-3 text-sm">{item.city[0].address}</p>
                        </div>
                      </div>
                      <hr className="my-5" />
                      <TimeList
                        movie_id={"0dce5e21-7639-4fd8-876e-76bd80801c8c"}
                        cinema_id={item.id_cinema}
                        setTime={setTime}
                        time={time}
                        setCinema={setCinema}
                      />
                      <div className="flex justify-between text-xl mt-6">
                        <p>Price</p>
                        <p className="font-bold">${item.price}.00/seat</p>
                      </div>
                      <button
                        className="btn-primary mt-5 mx-auto block"
                        onClick={(e) =>
                          handleBooking(
                            item.id_cinema,
                            item.city[0].address,
                            item.price,
                            item.cinema_name,
                            item.cinema_room
                          )
                        }
                      >
                        Book now
                      </button>
                    </div>
                  </>
                );
              })
            ) : getCinemasLoading ? (
              <p className="text-center text-2xl">Loading...</p>
            ) : getCinemasError ? (
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

export default CinemaList;
