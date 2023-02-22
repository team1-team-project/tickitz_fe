import React from "react";
//import React, { useRef, useState } from "react";
//import { Swiper, SwiperSlide } from "swiper/react";
//import { Pagination } from "swiper";

import HomeHeader from "../organisms/homeHeader";
import NowShow from "../organisms/NowShow";
// import UpcomingShow from "../organisms/upcomingShow";
import Header from "../organisms/Header";
import Moviegoers from "../organisms/MoviegoersCard";
import Footer from "../organisms/Footer";

const Home = () => {
  return (
    <>
      <Header active="Movies" />
      <main className="">
        <div>
          <HomeHeader />
          <NowShow />
          {/* <UpcomingShow /> */}
        </div>
      </main>
      <Moviegoers />
      <Footer />
    </>
  );
};

export default Home;
