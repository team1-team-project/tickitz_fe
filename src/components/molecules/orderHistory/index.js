import { React, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OrderHistory = () => {
  const [dataHistory, setDataHistory] = useState([]);
  const navigate = useNavigate();

  console.log(dataHistory);
  useEffect(() => {
    axios
      .get(
        `https://tickitz.herokuapp.com/api/history/${
          JSON.parse(localStorage.getItem("@login")).data.user.id_profile
        }`
      )
      .then((res) => {
        // console.log(res.data.data, "Ini dari axios");
        setDataHistory(res.data.data);
      })

      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <section className="w-[40rem] shadow-xl p-7 border-t-4">
        {dataHistory
          ? dataHistory.map((item) => {
              return (
                <>
                  <div className="p-5 border-2">
                    <div className="flex justify-between ">
                      <div className="">
                        <p className="text-[.8rem] pb-5">{item.date}</p>
                        <h1 className="text-[1.5rem] font-bold">
                          {item.movie_name}
                        </h1>
                      </div>
                      <h1 className="place-self-center">{item.cinema_name}</h1>
                    </div>
                    <div className="flex justify-between mt-5 border-t-2">
                      <button
                        className="btn btn-pinky  mt-8 w-[50%]"
                        onClick={() => navigate(`/order/${item.id_booking}`)}
                      >
                        Ticket in active
                      </button>
                      <button>Show Details</button>
                    </div>
                  </div>
                  ;
                </>
              );
            })
          : ""}
      </section>
    </>
  );
};

export default OrderHistory;
