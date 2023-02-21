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
        // console.log(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const [validate, setValidate] = useState({
  //   error: false,
  //   message: "",
  // });

  const [page, setPage] = useState(1);
  const [refetchPagination, setRefetchPagination] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/cinema?${page && `page=${page}`}`)
      .then((result) => {
        setCinema(result.data.data);
        // console.log(result.data.data);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        // setValidate({ message: err.response.data.message });
      });
  }, [refetchPagination, page]);
  return (
    <section className="container h-[220vh] sm:h-[110vh] w-full flex flex-col justify-center">
      <div className="w-full h-[5%] sm:h-[15%]">
        <div className="flex flex-col justify-center items-start w-40 gap-2">
          <h2 className="text-[#14142B] text-2xl font-bold">The Cinema</h2>
          <div className="bg-primary w-20 h-1 rounded-xl"></div>
        </div>
      </div>
      <div className="cinema-row w-full h-[85%] flex flex-col sm:flex-row sm:flex-wrap gap-5">
        {cinema?.map((c) => {
          return (
            <>
              <div
                key={c.id_cinema}
                className="cinema-card bg-[#f1f1f1] rounded-xl flex flex-col justify-between w-[22rem] h-56 p-5 shadow-xl"
              >
                <div className="flex w-full justify-between gap-7 ">
                  <h2 className="cinema-name text-2xl font-bold">
                    {c.cinema_name}
                  </h2>
                  <div className="flex flex-col">
                    <p className="cinema-city text-[#6E7191]">
                      {c.city[0]?.city ?? "(Empty city)"}
                      {/* South Purwokerto */}
                    </p>
                    <p className="cinema-city text-[#6E7191]">
                      {c.city[0]?.address ?? "(Empty address)"}
                      {/* Whatever street No.12 */}
                    </p>
                  </div>
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
      <div className="pagination flex pt-20 justify-center gap-x-4">
        <button
          onClick={() => {
            setRefetchPagination(true);
            setPage(1);
          }}
          className="w-14 h-14 text-lg font-semibold text-primary bg-white border-[2px] border-primary hover:bg-primary hover:text-white duration-200 rounded-xl"
        >
          1
        </button>
        <button
          onClick={() => {
            setRefetchPagination(true);
            setPage(2);
          }}
          className="w-14 h-14 text-lg font-semibold text-primary bg-white border-[2px] border-primary hover:bg-primary hover:text-white duration-200 rounded-xl"
        >
          2
        </button>
        <button
          onClick={() => {
            setRefetchPagination(true);
            setPage(3);
          }}
          className="w-14 h-14 text-lg font-semibold text-primary bg-white border-[2px] border-primary hover:bg-primary hover:text-white duration-200 rounded-xl"
        >
          3
        </button>
        <button
          onClick={() => {
            setRefetchPagination(true);
            setPage(4);
          }}
          className="w-14 h-14 text-lg font-semibold text-primary bg-white border-[2px] border-primary hover:bg-primary hover:text-white duration-200 rounded-xl"
        >
          4
        </button>
      </div>
    </section>
  );
};
