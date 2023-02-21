/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getTimeList } from "../../../utils/redux/action/movieList";

const TimeList = ({ setTime, setCinema, cinema_id }) => {
  // const dispatch = useDispatch();
  const [active, setActive] = useState();
  const [activeCine, setActiveCine] = useState();
  // const { getTimeLoading, getTimeResult, getTimeError } = useSelector(
  //   (state) => state.cinemasReducer
  // );
  const start_time = [
    { id_time: 1, start_time: "08.30" },
    { id_time: 2, start_time: "10.30" },
    { id_time: 3, start_time: "12.00" },
    { id_time: 4, start_time: "14.00" },
    { id_time: 5, start_time: "16.30" },
    { id_time: 6, start_time: "19.00" },
    { id_time: 7, start_time: "20.30" },
    { id_time: 8, start_time: "22.00" },
  ];

  return (
    <>
      <div className="grid grid-cols-12 gap-2">
        {start_time.map((item) => {
          return (
            <>
              <label
                htmlFor={item.id_time}
                key={item.id_time}
                className={`col-span-3 text-[18px] cursor-pointer hover:text-primary text-black`}
              >
                {item.start_time}
              </label>
              <input
                type="radio"
                name="radio-1"
                value={item.id_time}
                className="radio hidden"
                id={item.id_time}
                onChange={(e) => {
                  setTime(e.target.value);
                  setActive(e.target.value);
                  setCinema(cinema_id);
                  setActiveCine(cinema_id);
                }}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default TimeList;
