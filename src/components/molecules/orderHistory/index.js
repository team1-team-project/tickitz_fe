import { React, useState, useEffect } from "react";
import axios from "axios";

const OrderHistory = () => {
  const [dataHistory, setDataHistory] = useState([]);

  console.log(dataHistory);
  useEffect(() => {
    axios
      .get(`https://tickitz.herokuapp.com/api/booking`)
      .then((res) => {
        console.log(res.data.data, "Ini dari axios");
        setDataHistory(res.data.data);
      })

      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <section className="w-[40rem] shadow-xl p-7 border-t-4">
        <div className="p-5 border-2">
          <div className="flex justify-between ">
            <div className="">
              <p className="text-[.8rem] pb-5">Tuesday, 07 July 2023 05.30pm</p>
              <h1 className="text-[1.5rem] font-bold">Spider-Man</h1>
            </div>
            <h1 className="place-self-center">Cinema 21</h1>
          </div>
          <div className="flex justify-between mt-5 border-t-2">
            <button className="btn btn-pinky  mt-8 w-[50%]">
              Ticket in active
            </button>
            <button>Show Details</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderHistory;
