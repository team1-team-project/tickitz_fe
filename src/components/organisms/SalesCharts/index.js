import React, { useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const SalesChart = () => {
  const [active, setActive] = useState("Weekly");
  const weeklyData = [
    {
      name: "Jan",
      Sale: 2000,
    },
    {
      name: "Feb",
      Sale: 3000,
    },
    {
      name: "Mar",
      Sale: 3500,
    },
    {
      name: "Apr",
      Sale: 2780,
    },
    {
      name: "May",
      Sale: 1890,
    },
    {
      name: "Jun",
      Sale: 2390,
    },
    {
      name: "Jul",
      Sale: 3490,
    },
    {
      name: "Aug",
      Sale: 4000,
    },
    {
      name: "Sep",
      Sale: 5000,
    },
    {
      name: "Oct",
      Sale: 4700,
    },
    {
      name: "Nov",
      Sale: 4490,
    },
    {
      name: "Dec",
      Sale: 5500,
    },
  ];

  const yearlyData = [
    {
      name: "2019",
      Sale: 18900,
    },
    {
      name: "2020",
      Sale: 20000,
    },
    {
      name: "2021",
      Sale: 30000,
    },
    {
      name: "2022",
      Sale: 35000,
    },
    {
      name: "2023",
      Sale: 27800,
    },
  ];

  return (
    <>
      <div className="py-10 bg-slate-200 w-screen font-mulish text-black">
        <div className="container">
          <h1 className="text-2xl font-bold">Sales Charts</h1>
          <div className="flex px-8 pt-6 rounded-2xl bg-white mt-5 space-x-8">
            <h3 className="pb-6 border-b-4 border-primary">Based on Movie</h3>
            <h3 className="pb-6 text-gray-400 cursor-pointer hover:text-black">
              Based on Location
            </h3>
          </div>
          <div className="grid grid-cols-12 gap-8 my-10">
            {[1, 2, 3, 4].map((item) => {
              return (
                <div
                  className="col-span-6 bg-white rounded-2xl py-4 pr-5"
                  key={item}
                >
                  <h3 className="mb-5 text-xl font-bold text-center">
                    Avengers: End Game
                  </h3>
                  <div className="flex mb-5 px-6 space-x-5">
                    <p
                      className={`text-x pb-2 ${
                        active === "Weekly"
                          ? "border-b-4 text-primary border-primary"
                          : "hover:text-primary cursor-pointer"
                      }`}
                      onClick={() => setActive("Weekly")}
                    >
                      Monthly
                    </p>
                    <p
                      className={`text-x pb-2 ${
                        active === "Yearly"
                          ? "border-b-4 text-primary border-primary"
                          : "hover:text-primary cursor-pointer"
                      }`}
                      onClick={() => setActive("Yearly")}
                    >
                      Yearly
                    </p>
                  </div>
                  <ResponsiveContainer width={"100%"} height={250}>
                    <LineChart
                      data={active === "Weekly" ? weeklyData : yearlyData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" padding={{ left: 20 }} />
                      <YAxis type="number" />
                      <Tooltip />
                      <Line type="monotone" dataKey="Sale" stroke="#8884d8" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              );
            })}
          </div>
          <div className="btn-group mx-auto flex justify-center">
            <button className="btn bg-primary text-white mr-3 border-none hover:bg-primary">
              1
            </button>
            <button className="btn bg-white text-black mr-3 border-none hover:bg-primary hover:text-white">
              2
            </button>
            <button className="btn bg-white text-black mr-3 border-none hover:bg-primary hover:text-white">
              3
            </button>
            <button className="btn bg-white text-black mr-3 border-none hover:bg-primary hover:text-white">
              4
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesChart;
