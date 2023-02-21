import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
//import { useNavigate, Link } from "react-router-dom";
import { Link } from "react-router-dom";

export default function NowShow() {
  const [dataMovies, setDataMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const nowYear = new Date().getFullYear();
  //const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://tickitz.herokuapp.com/api/movie/?searchBy=release_date&search=${nowYear}&sort_by=id_category`
      )
      .then((res) => {
        setDataMovies(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }, []); //[] jika dependencys dihapus maka looping terus
  /*
  const handleGotoDetail = (id) => {
    navigate(`/movie-detail/${id}`);
  };
  */

  return (
    <>
      <section className="w-screen p-5">
        <div className="flex m-5 justify-between">
          <div className="py-2 hover:text-[#5F2EEA] hover:border-b-2 border-[#5F2EEA]">
            <a className="m-2 font-bold lg:mx-10 lg:text-[24px] ">
              Now Showing
            </a>
          </div>
          <a className="m-2 text-[#5F2EEA] font-semibold lg:mx-10">View All</a>
        </div>

        <div className="p-2 h-full">
          <div className="flex px-10 justify-evenly">
            {isLoading ? (
              <p>loading...</p>
            ) : (
              dataMovies.results.map((item) => {
                return (
                  <div key={item.id_movies} className="p-3">
                    <Link to={`/movie-detail/${item.id_movies}`}>
                      <div className="p-2 w-[200px] md:w-[300px] lg:md:w-[300px] bg-white border border-gray-200 rounded-lg shadow ">
                        <div className="flex items-center justify-center p-5">
                          <img
                            className="rounded-lg"
                            src={`https://tickitz.herokuapp.com/upload/${item.poster}`}
                            /*onClick={navigate(
                              `/movie-detail/${item.id_movies}`
                            )}
                            bagus digunakan untuk login sign up, karena tidak bisa di open new tab
                            */
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
    </>
  );
}
