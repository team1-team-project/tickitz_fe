import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ListCinema = () => {
  const [cinema, setCinema] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/cinema`)
      .then((result) => {
        setCinema(result.data.data);
        console.log(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //   console.log(cinema);
  return (
    <section className="container h-screen w-full flex flex-col justify-center">
      <div className="w-full h-[15%]">
        <div className="flex flex-col justify-center items-start w-40 gap-2">
          <h2 className="text-[#14142B] text-2xl font-bold">The Cinema</h2>
          <div className="bg-primary w-20 h-1 rounded-xl"></div>
        </div>
      </div>
      <div className="cinema-row w-full h-[85%] flex flex-wrap gap-5">
        {cinema?.map((c) => {
          return (
            <>
              <div
                key={c.id_cinema}
                className="cinema-card bg-[#f1f1f1] rounded-xl flex flex-col justify-between w-80 h-48 p-5 shadow-xl"
              >
                <div className="flex w-full gap-7">
                  <h2 className="cinema-name text-2xl font-bold">
                    {c.cinema_name}
                  </h2>
                  <p className="cinema-location text-[#6E7191]">
                    Whatever street No.12, South Purwokerto
                  </p>
                </div>
                <p>{c.cinema_room}</p>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold">Rp.{c.price}/seat</p>
                  <Link to={`/cinema/${c.id_cinema}`}>
                    <button className="btn-primary">See details</button>
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};
