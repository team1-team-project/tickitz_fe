/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import logo from "../../../assets/images/Vector.png";
import bar from "../../../assets/images/bar.png";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import { AiOutlinePrinter } from "react-icons/ai";
import html2canvas from "html2canvas";
import "./index.css";

const OrderDetail = () => {
  const ref = React.useRef(null);
  const id = JSON.parse(localStorage.getItem("@login")).data.user.id_profile;
  const { id_booking } = useParams();
  const [data, setData] = useState();
  const [seats, setSeats] = useState();
  useEffect(() => {
    axios
      .get(`https://tickitz.herokuapp.com/api/order/${id}/${id_booking}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  let a = "Spider-Man: Homecoming";
  useEffect(() => {
    axios
      .get(`https://tickitz.herokuapp.com/api/seat`)
      .then((res) => {
        setSeats(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const handleDownload = () => {
    // e.preventDefault();

    const screenShotTarget = ref.current;
    html2canvas(screenShotTarget).then((canvas) => {
      const base64image = canvas.toDataURL("image/png");
      var anchor = document.createElement("a");
      anchor.setAttribute("href", base64image);
      anchor.setAttribute("download", "ticket.png");
      anchor.click();
      anchor.remove();
    });
  };

  const showSeat = () => {
    const arrSeat = [];
    if (seats) {
      seats.map((i) => {
        data[0].seat.split(",").map((seat) => {
          if (i.id_seat == seat) {
            // console.log("iya");
            // return (
            //   <>
            //     <p>{seat}</p>
            //   </>
            // );
            arrSeat.push(i.seat_number);
          }
        });
      });
      const result = arrSeat.join(",");
      return result;
    }
  };

  const handlePrint = () => {
    print();
  };

  return (
    <div id="wrapper" className="bg-base py-20 px-32 font-mulish font-bold">
      <div id="inner-wrapper" className="bg-white py-10">
        <p id="title" className="text-center font-bold text-xl ">
          Proof of Payment
        </p>

        <div
          id="ticket"
          ref={ref}
          className="lg:w-[60vw] lg:h-full flex mx-auto rounded-2xl mt-10 border"
        >
          <section
            id="ticket-left"
            className="flex-1 border-r border-dashed border-slate-500"
          >
            <div
              id="header-left"
              className="flex items-center justify-between bg-primary px-10 py-3 rounded-tl-2xl"
            >
              <img src={logo} />
              <p className="text-white font-semibold whitespace-nowrap">
                Admit one
              </p>
            </div>

            <div className="px-10 bg-white pt-5 rounded-bl-2xl py-5 h-[35vh]">
              <p className="text-xs text-slate-500 font-semibold">Movie</p>
              <p className="pt-1">{data && data[0].movie_name}</p>

              <div className="grid grid-cols-3 gap-x-1 gap-y-5 place-items-stretch pt-3">
                <div>
                  <p className="text-xs text-slate-500 font-semibold">Date</p>
                  <p className="pt-1 text-sm">{data && data[0].date}</p>
                </div>
                {/* <div>
                  <p className="text-xs text-slate-500 font-semibold">Time</p>
                  <p className="pt-1">{}</p>
                </div> */}
                {/* <div>
                  <p className="text-xs text-slate-500 font-semibold">
                    Category
                  </p>
                  <p className="pt-1">{}</p>
                </div> */}
                <div>
                  <p className="text-xs text-slate-500 font-semibold">Count</p>
                  <p className="pt-1">
                    {data && data[0].seat.split(",").length}-Pieces
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold">Seats</p>
                  <p className="pt-1">
                    {/* {data && seat
                      ? seat.map((item) => {
                          data[0].seat.split(",").map((seats) => {
                            if (item.id_seat === seats) {
                              return (
                                <p key={item.id_time}>{item.start_number}</p>
                              );
                            }
                          });
                        })
                      : ""} */}
                    {showSeat()}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold">Price</p>
                  <p className="pt-1">
                    ${data && data[0].price * data[0].seat.split(",").length}.00
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="ticket-right">
            <div
              id="header-right"
              className="bg-primary rounded-tr-2xl py-3 px-20"
            >
              <img src={logo} />
            </div>

            <div className="bg-white rounded-br-2xl px-10 flex pt-2 h-[35vh]">
              <div className="pr-5">
                <p className="text-xs text-slate-500 font-semibold">Movie</p>
                {data && data[0].movie_name}
                <div className="grid grid-cols-2 gap-y-5 place-items-stretch pt-3">
                  <div>
                    <p className="text-xs text-slate-500 font-semibold">Date</p>
                    <p className="pt-1 text-sm w-1/2">{data && data[0].date}</p>
                  </div>
                  {/* <div>
                    <p className="text-xs text-slate-500 font-semibold">Time</p>
                    <p className="pt-1">02:00pm</p>
                  </div> */}
                  <div>
                    <p className="text-xs text-slate-500 font-semibold">
                      Count
                    </p>
                    <p className="pt-1">
                      {data && data[0].seat.split(",").length}-Pieces
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold">
                      Seats
                    </p>
                    <p className="pt-1">{showSeat()}</p>
                  </div>
                  <div className="">
                    <p className="text-xs text-slate-500 font-semibold"></p>
                    <p className="pt-1"></p>
                  </div>
                  {/* <div className="">
                    <p className="text-xs text-slate-500 font-semibold">
                      Category
                    </p>
                    <p className="pt-1">PG-13</p>
                  </div> */}
                </div>
              </div>

              <div>
                <img src={bar} />
                <img src={bar} />
                <img src={bar} />
                <img src={bar} />
              </div>
            </div>
          </section>
        </div>
        <div
          id="action-button"
          className="flex place-content-center w-[25vw] mx-auto justify-around mt-10"
        >
          <button
            onClick={handleDownload}
            className="bg-slate-300 border-2 border-slate-500 px-5 py-2 rounded-lg whitespace-nowrap flex items-center"
          >
            <FiDownload />
            <p className="pl-3">Download</p>
          </button>
          <button
            onClick={handlePrint}
            className="bg-slate-300 border-2 border-slate-500 px-5 py-2 rounded-lg whitespace-nowrap flex items-center"
          >
            <AiOutlinePrinter />
            <p className="pl-3">Print</p>
          </button>
        </div>
      </div>

      <script></script>
    </div>
  );
};

export default OrderDetail;
