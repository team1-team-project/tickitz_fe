import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
  const navigate = useNavigate();
  const [orderDetail, setOrderDetail] = useState({
    seat: [],
  });

  //   console.log(orderDetail.seat);

  const handleCheckout = (e) => {
    e.preventDefault();

    setOrderDetail({
      ...orderDetail,
      id_profile: JSON.parse(localStorage.getItem("@login")).id_profile,
    });
    navigate(`/payment-page`);
  };

  const collectSeat = async (e) => {
    if (e.target.checked) {
      setOrderDetail({ seat: [...orderDetail.seat, e.target.id] });
      const orderList = JSON.parse(localStorage.getItem("paymentInfo"));
      const newData = {
        ...orderList,
        ...orderDetail,
      };
      localStorage.setItem("paymentInfo", JSON.stringify(newData));
    } else {
      setOrderDetail({
        seat: orderDetail.seat.filter((f) => f !== e.target.id),
      });
      const orderList = JSON.parse(localStorage.getItem("paymentInfo"));
      const newData = {
        ...orderList,
        ...orderDetail,
      };
      localStorage.setItem("paymentInfo", JSON.stringify(newData));
    }

    // console.log(orderList);
  };
  return (
    <div className="bg-base pt-20 pb-20">
      <div className="container font-mulish flex ">
        <section id="left" className="w-[60vw]">
          <div>
            <h2 className="font-bold">Movie selected</h2>
            <div className="bg-white rounded-2xl px-5 py-4 flex items-center justify-between mt-5 shadow-lg">
              <p className="font-semibold">Spider-Man: Homecoming</p>
              <Link
                to="/movies"
                className="text-primary font-bold py-2 px-4 rounded-xl text-sm  bg-slate-200"
              >
                Change Movie
              </Link>
            </div>
            <h2 className="pt-5 font-bold">Choose your seat</h2>
            <div className="bg-white rounded-2xl px-2 py-2 pt-20 mt-5 shadow-lg">
              <p className="text-center text-sm font-bold">Screen</p>
              <div className="w-[70%] h-3 bg-primary rounded-full mx-auto"></div>
              <div id="seat" className="px-5">
                <ul className="grid grid-cols-2 gap-x-10 pt-10">
                  <li className="grid grid-cols-8">
                    <p>A</p>
                    <input
                      onClick={collectSeat}
                      id="1"
                      className="rounded-2xl seat"
                      type="checkbox"
                    />
                    <input onClick={collectSeat} id="2" type="checkbox" />
                    <input onClick={collectSeat} id="3" type="checkbox" />
                    <input onClick={collectSeat} id="3" type="checkbox" />
                    <input onClick={collectSeat} id="5" type="checkbox" />
                    <input onClick={collectSeat} id="6" type="checkbox" />
                    <input onClick={collectSeat} id="7" type="checkbox" />
                  </li>
                  <li className="grid grid-cols-8">
                    <input onClick={collectSeat} id="8" type="checkbox" />
                    <input onClick={collectSeat} id="9" type="checkbox" />
                    <input onClick={collectSeat} id="10" type="checkbox" />
                    <input onClick={collectSeat} id="11" type="checkbox" />
                    <input onClick={collectSeat} id="12" type="checkbox" />
                    <input onClick={collectSeat} id="13" type="checkbox" />
                    <input onClick={collectSeat} id="14" type="checkbox" />
                  </li>
                </ul>
                <ul className="grid grid-cols-2 gap-x-10 pt-2">
                  <li className="grid grid-cols-8">
                    <p>B</p>
                    <input
                      onClick={collectSeat}
                      id="15"
                      className="rounded-2xl"
                      type="checkbox"
                    />
                    <input onClick={collectSeat} id="16" type="checkbox" />
                    <input onClick={collectSeat} id="17" type="checkbox" />
                    <input onClick={collectSeat} id="18" type="checkbox" />
                    <input onClick={collectSeat} id="19" type="checkbox" />
                    <input onClick={collectSeat} id="20" type="checkbox" />
                    <input onClick={collectSeat} id="21" type="checkbox" />
                  </li>
                  <li className="grid grid-cols-8">
                    <input onClick={collectSeat} id="22" type="checkbox" />
                    <input onClick={collectSeat} id="23" type="checkbox" />
                    <input onClick={collectSeat} id="24" type="checkbox" />
                    <input onClick={collectSeat} id="25" type="checkbox" />
                    <input onClick={collectSeat} id="26" type="checkbox" />
                    <input onClick={collectSeat} id="27" type="checkbox" />
                    <input onClick={collectSeat} id="28" type="checkbox" />
                  </li>
                </ul>
                <ul className="grid grid-cols-2 gap-x-10 pt-2">
                  <li className="grid grid-cols-8">
                    <p>C</p>
                    <input
                      onClick={collectSeat}
                      id="29"
                      className="rounded-2xl"
                      type="checkbox"
                    />
                    <input onClick={collectSeat} id="C2" type="checkbox" />
                    <input onClick={collectSeat} id="C3" type="checkbox" />
                    <input onClick={collectSeat} id="C4" type="checkbox" />
                    <input onClick={collectSeat} id="C5" type="checkbox" />
                    <input onClick={collectSeat} id="C6" type="checkbox" />
                    <input onClick={collectSeat} id="C7" type="checkbox" />
                  </li>
                  <li className="grid grid-cols-8">
                    <input onClick={collectSeat} id="C8" type="checkbox" />
                    <input onClick={collectSeat} id="C9" type="checkbox" />
                    <input onClick={collectSeat} id="C10" type="checkbox" />
                    <input onClick={collectSeat} id="C11" type="checkbox" />
                    <input onClick={collectSeat} id="C12" type="checkbox" />
                    <input onClick={collectSeat} id="C13" type="checkbox" />
                    <input onClick={collectSeat} id="C14" type="checkbox" />
                  </li>
                </ul>
                <ul className="grid grid-cols-2 gap-x-10 pt-2">
                  <li className="grid grid-cols-8">
                    <p>D</p>
                    <input
                      onClick={collectSeat}
                      id="D1"
                      className="rounded-2xl"
                      type="checkbox"
                    />
                    <input onClick={collectSeat} id="D2" type="checkbox" />
                    <input onClick={collectSeat} id="D3" type="checkbox" />
                    <input onClick={collectSeat} id="D4" type="checkbox" />
                    <input onClick={collectSeat} id="D5" type="checkbox" />
                    <input onClick={collectSeat} id="D6" type="checkbox" />
                    <input onClick={collectSeat} id="D7" type="checkbox" />
                  </li>
                  <li className="grid grid-cols-8">
                    <input onClick={collectSeat} id="D8" type="checkbox" />
                    <input onClick={collectSeat} id="D9" type="checkbox" />
                    <input onClick={collectSeat} id="D10" type="checkbox" />
                    <input onClick={collectSeat} id="D11" type="checkbox" />
                    <input onClick={collectSeat} id="D12" type="checkbox" />
                    <input onClick={collectSeat} id="D13" type="checkbox" />
                    <input onClick={collectSeat} id="D14" type="checkbox" />
                  </li>
                </ul>
                <ul className="grid grid-cols-2 gap-x-10 pt-2">
                  <li className="grid grid-cols-8">
                    <p>E</p>
                    <input
                      onClick={collectSeat}
                      id="E1"
                      className="rounded-2xl"
                      type="checkbox"
                    />
                    <input onClick={collectSeat} id="E2" type="checkbox" />
                    <input onClick={collectSeat} id="E3" type="checkbox" />
                    <input onClick={collectSeat} id="E4" type="checkbox" />
                    <input onClick={collectSeat} id="E5" type="checkbox" />
                    <input onClick={collectSeat} id="E6" type="checkbox" />
                    <input onClick={collectSeat} id="E7" type="checkbox" />
                  </li>
                  <li className="grid grid-cols-8">
                    <input onClick={collectSeat} id="E8" type="checkbox" />
                    <input onClick={collectSeat} id="E9" type="checkbox" />
                    <input onClick={collectSeat} id="E10" type="checkbox" />
                    <input onClick={collectSeat} id="E11" type="checkbox" />
                    <input onClick={collectSeat} id="E12" type="checkbox" />
                    <input onClick={collectSeat} id="E13" type="checkbox" />
                    <input onClick={collectSeat} id="E14" type="checkbox" />
                  </li>
                </ul>
                <ul className="grid grid-cols-2 gap-x-10 pt-2">
                  <li className="grid grid-cols-8">
                    <p>F</p>
                    <input
                      onClick={collectSeat}
                      id="F1"
                      className="rounded-2xl"
                      type="checkbox"
                    />
                    <input onClick={collectSeat} id="F2" type="checkbox" />
                    <input onClick={collectSeat} id="F3" type="checkbox" />
                    <input onClick={collectSeat} id="F4" type="checkbox" />
                    <input onClick={collectSeat} id="F5" type="checkbox" />
                    <input onClick={collectSeat} id="F6" type="checkbox" />
                    <input onClick={collectSeat} id="F7" type="checkbox" />
                  </li>
                  <li className="grid grid-cols-8">
                    <input onClick={collectSeat} id="F8" type="checkbox" />
                    <input onClick={collectSeat} id="F9" type="checkbox" />
                    <input onClick={collectSeat} id="F10" type="checkbox" />
                    <input onClick={collectSeat} id="F11" type="checkbox" />
                    <input onClick={collectSeat} id="F12" type="checkbox" />
                    <input onClick={collectSeat} id="F13" type="checkbox" />
                    <input onClick={collectSeat} id="F14" type="checkbox" />
                  </li>
                </ul>
                <ul className="grid grid-cols-2 gap-x-10 pt-2">
                  <li className="grid grid-cols-8">
                    <p>G</p>
                    <input
                      onClick={collectSeat}
                      id="G1"
                      className="rounded-2xl"
                      type="checkbox"
                    />
                    <input onClick={collectSeat} id="G2" type="checkbox" />
                    <input onClick={collectSeat} id="G3" type="checkbox" />
                    <input onClick={collectSeat} id="G4" type="checkbox" />
                    <input onClick={collectSeat} id="G5" type="checkbox" />
                    <input onClick={collectSeat} id="G6" type="checkbox" />
                    <input onClick={collectSeat} id="G7" type="checkbox" />
                  </li>
                  <li className="grid grid-cols-8">
                    <input onClick={collectSeat} id="G8" type="checkbox" />
                    <input onClick={collectSeat} id="G9" type="checkbox" />
                    <input onClick={collectSeat} id="G10" type="checkbox" />
                    <input onClick={collectSeat} id="G11" type="checkbox" />
                    <input onClick={collectSeat} id="G12" type="checkbox" />
                    <input onClick={collectSeat} id="G13" type="checkbox" />
                    <input onClick={collectSeat} id="G14" type="checkbox" />
                  </li>
                </ul>
                <ul className="grid grid-cols-2 gap-x-10 pt-2 pl-4">
                  <li className="grid grid-cols-8">
                    <p className="none"></p>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                  </li>
                  <li className="grid grid-cols-8">
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>
                    <p>12</p>
                    <p>13</p>
                    <p>14</p>
                  </li>
                </ul>
              </div>

              <p className="mt-10 font-bold px-5">Seating key</p>
              <div className="flex justify-evenly pt-5 pb-10 text-slate-700 font-semibold">
                <p>
                  <span className="px-2 text-[#D6D8E7] mr-3 rounded-md py-1 bg-[#D6D8E7]">
                    A
                  </span>
                  Available
                </p>
                <p>
                  <span className="px-2 text-primary mr-3 rounded-md py-1 bg-primary">
                    A
                  </span>
                  Selected
                </p>
                <p>
                  <span className="px-2 text-[#F589D7] mr-3 rounded-md py-1 bg-[#F589D7]">
                    A
                  </span>
                  Love nest
                </p>
                <p>
                  <span className="px-2 text-[#6E7191] mr-3 rounded-md py-1 bg-[#6E7191]">
                    A
                  </span>
                  Sold
                </p>
              </div>
            </div>
            <div className="flex justify-around mt-10">
              <button className="btn-outline-primary">Change your movie</button>
              <button onClick={handleCheckout} className="btn-primary">
                Checkout now
              </button>
            </div>
          </div>
        </section>
        <section id="right" className="w-[40vw] text-center pl-10">
          <h2 className="font-bold">Order info</h2>
          <div className="px-10 mt-5 pt-5 pb-10 rounded-2xl shadow-lg bg-white">
            <h2 className="font-bold">
              {localStorage.getItem("paymentInfo") &&
                JSON.parse(localStorage.getItem("paymentInfo")).cinema_room}
            </h2>
            <div className="flex justify-between pt-10 items-center">
              <p className="text-xs text-slate-400">Movie selected</p>
              <p>
                {localStorage.getItem("paymentInfo") &&
                  JSON.parse(localStorage.getItem("paymentInfo")).movie_name}
              </p>
            </div>
            <div className="flex justify-between pt-3 items-center">
              <p className="text-xs text-slate-400">
                {localStorage.getItem("paymentInfo") &&
                  JSON.parse(localStorage.getItem("paymentInfo")).date}
              </p>
              <p>
                {localStorage.getItem("paymentInfo") &&
                  JSON.parse(localStorage.getItem("paymentInfo")).hour}
              </p>
            </div>
            <div className="flex justify-between pt-3 items-center">
              <p className="text-xs text-slate-400">One ticket price</p>
              <p>
                $
                {localStorage.getItem("paymentInfo") &&
                  JSON.parse(localStorage.getItem("paymentInfo")).price}
              </p>
            </div>
            <div className="flex justify-between pt-3 items-center">
              <p className="text-xs text-slate-400">Seat choosed</p>
              <p className="flex">
                {localStorage.getItem("paymentInfo") &&
                  JSON.parse(localStorage.getItem("paymentInfo")).seat.map(
                    (item) => {
                      return <p key={item}>{item},</p>;
                    }
                  )}
              </p>
            </div>
            <div className="flex justify-between pt-10 items-center">
              <p className=" text-slate-800 font-bold">Total Payment</p>
              <p className="text-xl font-bold text-primary">$30</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OrderPage;
