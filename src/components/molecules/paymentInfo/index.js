import React from "react";

const PaymentInfo = () => {
  return (
    <section className="w-full flex-1">
      <h1 className="text-[1.8rem] font-medium mt-5">Payment Info</h1>
      <div className="card  bg-base-100 shadow-xl">
        <div className="flex p-8 justify-between border-b-2">
          <p className="text-[1.2rem]">Date & Time</p>
          <p className="text-[1.2rem] font-medium ">
            {localStorage.getItem("paymentInfo") &&
              JSON.parse(localStorage.getItem("paymentInfo")).date}{" "}
            at{" "}
            {localStorage.getItem("paymentInfo") &&
              JSON.parse(localStorage.getItem("paymentInfo")).hour}
            pm
          </p>
        </div>
        <div className="flex p-8 justify-between border-b-2">
          <p className="text-[1.2rem]">Movie title</p>
          <p className="text-[1.2rem] font-medium">
            {localStorage.getItem("paymentInfo") &&
              JSON.parse(localStorage.getItem("paymentInfo")).movie_name}
          </p>
        </div>
        <div className="flex p-8 justify-between border-b-2">
          <p className="text-[1.2rem]">Cinema Name</p>
          <p className="text-[1.2rem] font-medium">
            {localStorage.getItem("paymentInfo") &&
              JSON.parse(localStorage.getItem("paymentInfo")).cinema_room}
          </p>
        </div>
        <div className="flex p-8 justify-between border-b-2">
          <p className="text-[1.2rem]">Number of tickets</p>
          <p className="text-[1.2rem] font-medium">
            {localStorage.getItem("paymentInfo") &&
              JSON.parse(localStorage.getItem("paymentInfo")).seat.length}{" "}
            pieces
          </p>
        </div>
        <div className="flex p-8 justify-between border-b-2">
          <p className="text-[1.2rem]">Total payment</p>
          <p className="text-[1.2rem] font-medium">
            $
            {localStorage.getItem("paymentInfo") &&
              JSON.parse(localStorage.getItem("paymentInfo")).price *
                JSON.parse(localStorage.getItem("paymentInfo")).seat.length}
            ,00
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentInfo;
