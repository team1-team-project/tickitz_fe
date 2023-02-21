import { React, useEffect, useState } from "react";
import PaymentInfo from "../../molecules/paymentInfo";
import PaymentMethod from "../../molecules/paymentMethod";
import axios from "axios";

const PaymentPage = () => {
  const [dataProfileDetail, setDataProfileDetail] = useState([]);
  const login = JSON.parse(localStorage.getItem("@login"));
  const id = login.data.user.id_profile;
  console.log(id, "ini dari local storage");
  console.log(dataProfileDetail, "ini dari useState");
  useEffect(() => {
    axios
      .get(`https://tickitz.herokuapp.com/api/profile/${id}`)
      .then((res) => {
        console.log(res.data.data, "Ini dari axios");
        setDataProfileDetail(res.data.data);
      })

      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <body className="container">
        <section className="mt-10 flex gap-10">
          <PaymentInfo />
          <section className="flex-1 mt-5">
            <h1 className="text-[1.8rem] font-medium">Personal Info</h1>
            <div className="form-control card  bg-base-100 shadow-xl p-5">
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Full Name :</span>
                </label>
                <input
                  type="text"
                  placeholder={dataProfileDetail.first_name}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Email :</span>
                </label>
                <input
                  type="email"
                  placeholder={dataProfileDetail.email}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Phone Number :</span>
                </label>
                <input
                  type="number"
                  placeholder={dataProfileDetail.phone}
                  className="input input-bordered w-full"
                />
              </div>
            </div>
          </section>
        </section>
        <sevtion className="mt-10">
          <PaymentMethod />
        </sevtion>
        {/* <section className="mt-10 flex justify-between flex-1 w-[50%] mb-10">
          <button className="btn btn-outline p-3">Previous step</button>
          <button type="submit" className="btn btn-primary p-3">
            Pay your order
          </button>
        </section> */}
      </body>
    </>
  );
};

export default PaymentPage;
