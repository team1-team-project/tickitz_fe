import React from "react";

const PaymentInfo = () => {
  return (
    <section className="w-full flex-1">
      <h1 className="text-[1.8rem] font-medium mt-5">Payment Info</h1>
      <div className="card  bg-base-100 shadow-xl">
        <div className="flex p-8 justify-between border-b-2">
          <p className="text-[1.2rem]">Date & Time</p>
          <p className="text-[1.2rem] font-medium ">
            Tuesday, 07 July 2020 at 02:00pm
          </p>
        </div>
        <div className="flex p-8 justify-between border-b-2">
          <p className="text-[1.2rem]">Movie title</p>
          <p className="text-[1.2rem] font-medium">Spider-Man: Homecoming</p>
        </div>
        <div className="flex p-8 justify-between border-b-2">
          <p className="text-[1.2rem]">Cinema Name</p>
          <p className="text-[1.2rem] font-medium">Cinema 21</p>
        </div>
        <div className="flex p-8 justify-between border-b-2">
          <p className="text-[1.2rem]">Number of tickets</p>
          <p className="text-[1.2rem] font-medium">3 pieces</p>
        </div>
        <div className="flex p-8 justify-between border-b-2">
          <p className="text-[1.2rem]">Total payment</p>
          <p className="text-[1.2rem] font-medium">$30,00</p>
        </div>
      </div>
    </section>
  );
};

export default PaymentInfo;
