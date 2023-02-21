import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CinemaDetailSection = () => {
  const { id_cinema } = useParams();
  const [cinemaDetail, setCinemaDetail] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/cinema/${id_cinema}`)
      .then((result) => {
        setCinemaDetail(result.data.data);
        // console.log(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className="container w-full h-[100vh] flex flex-col justify-center max-sm:pt-20">
      <div className="w-full h-full flex flex-col sm:flex-row">
        <div className="w-full sm:w-2/6 h-full flex justify-center items-center">
          <div className="cinema-img-card w-72 h-96 border-[1px] border-[#DEDEDE] rounded-xl flex items-center justify-center p-8">
            <div className="border-[1px] border-[#dedede] w-full h-full rounded-xl flex items-center justify-center">
              {/* sementara pakai text dulu untuk image cinemanya */}
              {/* <img src="" alt="" /> */}
              <h2 className="text-4xl pb-2">
                {cinemaDetail[0]?.cinema_name}
                <span className="text-sm">image</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-4/6 h-full flex flex-col justify-center items-center sm:items-start">
          <h2 className="text-4xl pb-2">
            {cinemaDetail[0]?.cinema_name} :{" "}
            <span className="text-2xl">{cinemaDetail[0]?.cinema_room}</span>
          </h2>
          <p className="cinema-location text-[#6E7191] pb-6">
            {cinemaDetail[0]?.city[0]?.city ?? "(Empty city)"},{" "}
            {cinemaDetail[0]?.city[0]?.address ?? "(Empty address)"}
          </p>
          <p className="text-xl sm:text-lg font-bold pb-10">
            Rp.{cinemaDetail[0]?.price}/seat
          </p>
        </div>
      </div>
      {/* <hr /> */}
      {/* <div className="flex flex-col justify-center items-start w-60 gap-2 pt-4 pb-4">
        <h2 className="text-[#14142B] text-2xl font-bold">
          Cinema Room List :
        </h2>
        <div className="bg-primary w-40 h-1 rounded-xl"></div>
      </div>
      <div className="cinema-room-row w-full flex gap-3">
        {[1, 2, 3, 4, 5].map((r) => {
          return (
            <div
              key={r.id}
              className="cinema-room-card bg-[#f1f1f1] w-40 h-16 rounded-xl flex items-center justify-center text-lg shadow-xl"
            >
              {cinemaDetail[0]?.cinema_room}
            </div>
          );
        })}
      </div> */}
    </section>
  );
};
