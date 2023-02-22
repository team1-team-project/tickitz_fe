import React from "react";
//import React, { useRef, useState } from "react";
//import { Swiper, SwiperSlide } from "swiper/react";
//import { Pagination } from "swiper";

import HomeHeader from "../organisms/homeHeader";
import NowShow from "../organisms/NowShow";
import UpcomingShow from "../organisms/upcomingShow";
//import Moviegoers from "src/section/Moviegoers";

const Home = () => {
  return (
    <>
      <main className="">
        <div>
          <HomeHeader />
          <NowShow />
          <UpcomingShow />
        </div>
      </main>
    </>
  );
};

export default Home;
