import React from "react";
import { Link } from "react-router-dom";

export default function UpcomingShow() {
  return (
    <>
      <section className=" w-screen p-5">
        <div className="flex m-5 justify-between">
          <div className="py-2 hover:text-[#5F2EEA] hover:border-b-2 border-[#5F2EEA]">
            <a className="m-2 font-bold lg:mx-10 lg:text-[24px] ">
              Upcoming Movies
            </a>
          </div>
          <a className="m-2 text-[#5F2EEA] font-semibold lg:mx-10">View All</a>
        </div>
        <div className="flex justify-evenly">
          <div className="justify-center my-5">
            <button className="p-3 border border-[#5F2EEA] text-[#5F2EEA] font-semibold rounded-lg w-[120px] hover:text-white hover:bg-[#5F2EEA]">
              January
            </button>
          </div>
          <div className="flex justify-center my-5">
            <button className="p-3 border border-[#5F2EEA] text-[#5F2EEA] font-semibold rounded-lg w-[120px] hover:text-white hover:bg-[#5F2EEA]">
              February
            </button>
          </div>
          <div className="flex justify-center my-5">
            <button className="p-3 border border-[#5F2EEA] text-[#5F2EEA] font-semibold rounded-lg w-[120px] hover:text-white hover:bg-[#5F2EEA]">
              March
            </button>
          </div>
          <div className="flex justify-center my-5">
            <button className="p-3 border border-[#5F2EEA] text-[#5F2EEA] font-semibold rounded-lg w-[120px] hover:text-white hover:bg-[#5F2EEA]">
              April
            </button>
          </div>
          <div className="flex justify-center my-5">
            <button className="p-3 border border-[#5F2EEA] text-[#5F2EEA] font-semibold rounded-lg w-[120px] hover:text-white hover:bg-[#5F2EEA]">
              May
            </button>
          </div>
          <div className="flex justify-center my-5">
            <button className="p-3 border border-[#5F2EEA] text-[#5F2EEA] font-semibold rounded-lg w-[120px] hover:text-white hover:bg-[#5F2EEA]">
              June
            </button>
          </div>
          <div className="flex justify-center my-5">
            <button className="p-3 border border-[#5F2EEA] text-[#5F2EEA] font-semibold rounded-lg w-[120px] hover:text-white hover:bg-[#5F2EEA]">
              July
            </button>
          </div>
        </div>
        <div className="p-2 h-full">
          <div className="flex px-10 justify-evenly">
            <div className="p-3">
              <Link to="/movie-detail">
                <div className="p-2 w-[200px] md:w-[300px] lg:md:w-[300px] bg-white border border-gray-200 rounded-lg shadow ">
                  <div className="flex items-center justify-center p-5">
                    <img
                      className="rounded-lg"
                      src={require("../../../assets/images/home/movie2.png")}
                    />
                  </div>
                  <div className="font-bold text-center pt-5">
                    Spiderman : No Way Home
                  </div>
                  <div className="px-5 pt-3 text-center">
                    Action, Adventure, Sci-fi
                  </div>
                  <div className="flex justify-center my-5">
                    <button className="p-3 border border-[#5F2EEA] text-[#5F2EEA] font-semibold rounded-lg w-full hover:text-white hover:bg-[#5F2EEA]">
                      Details
                    </button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="p-3">
              <Link to="/movie-detail">
                <div className="p-2 w-[200px] md:w-[300px] lg:md:w-[300px] bg-white border border-gray-200 rounded-lg shadow ">
                  <div className="flex items-center justify-center p-5">
                    <img
                      className="rounded-lg"
                      src={require("../../../assets/images/home/movie2.png")}
                    />
                  </div>
                  <div className="font-bold text-center pt-5">
                    Spiderman : No Way Home
                  </div>
                  <div className="px-5 pt-3 text-center">
                    Action, Adventure, Sci-fi
                  </div>
                  <div className="flex justify-center my-5">
                    <button className="p-3 border border-[#5F2EEA] text-[#5F2EEA] font-semibold rounded-lg w-full hover:text-white hover:bg-[#5F2EEA]">
                      Details
                    </button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="p-3">
              <Link to="/movie-detail">
                <div className="p-2 w-[200px] md:w-[300px] lg:md:w-[300px] bg-white border border-gray-200 rounded-lg shadow ">
                  <div className="flex items-center justify-center p-5">
                    <img
                      className="rounded-lg"
                      src={require("../../../assets/images/home/movie2.png")}
                    />
                  </div>
                  <div className="font-bold text-center pt-5">
                    Spiderman : No Way Home
                  </div>
                  <div className="px-5 pt-3 text-center">
                    Action, Adventure, Sci-fi
                  </div>
                  <div className="flex justify-center my-5">
                    <button className="p-3 border border-[#5F2EEA] text-[#5F2EEA] font-semibold rounded-lg w-full hover:text-white hover:bg-[#5F2EEA]">
                      Details
                    </button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="p-3">
              <Link to="/movie-detail">
                <div className="p-2 w-[200px] md:w-[300px] lg:md:w-[300px] bg-white border border-gray-200 rounded-lg shadow ">
                  <div className="flex items-center justify-center p-5">
                    <img
                      className="rounded-lg"
                      src={require("../../../assets/images/home/movie2.png")}
                    />
                  </div>
                  <div className="font-bold text-center pt-5">
                    Spiderman : No Way Home
                  </div>
                  <div className="px-5 pt-3 text-center">
                    Action, Adventure, Sci-fi
                  </div>
                  <div className="flex justify-center my-5">
                    <button className="p-3 border border-[#5F2EEA] text-[#5F2EEA] font-semibold rounded-lg w-full hover:text-white hover:bg-[#5F2EEA]">
                      Details
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
