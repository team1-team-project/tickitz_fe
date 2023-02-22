/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PaymentMethod = () => {
  const [payment, setPayment] = useState();
  // console.log(payment);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("paymentInfo"));
    const addPayment = new URLSearchParams(data);
    //editProfile.append("email", editFormProfile.email);
    addPayment.append(
      "total_payment",
      JSON.parse(localStorage.getItem("paymentInfo")).price *
        JSON.parse(localStorage.getItem("paymentInfo")).seat.length
    );
    addPayment.append("id_payment", payment);

    axios({
      method: "POST",
      url: `https://tickitz.herokuapp.com/api/booking`,
      // headers: {
      //   "content-type": "multipart/form-data",
      // },
      data: addPayment,
    })
      .then((res) => {
        // console.log(res.data.data);
        navigate(`/order/${res.data.data[0].id_booking}`);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <section className="flex-1 bg-base-100 shadow-xl mt-10 w-[50%]">
        <h1 className="text-[1.8rem] font-medium mt-5">
          Choose Payment Method
        </h1>
        <div className="card">
          <div className="p-5 flex gap-6 flex-wrap">
            <form onSubmit={onSubmit}>
              <section className="grid grid-cols-3 gap-2 w-full mb-10 max-w-screen-sm">
                <div>
                  <input
                    onChange={() => setPayment("1")}
                    className="hidden payment-method"
                    id="radio_1"
                    type="radio"
                    name="payment-method-input"
                    // checked
                  />
                  <label
                    className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer rounded-md items-center justify-center"
                    htmlFor="radio_1"
                  >
                    <span className="text-xs font-semibold uppercase">
                      Google Pay
                    </span>
                  </label>
                </div>
                <div>
                  <input
                    onChange={() => setPayment("2")}
                    className="hidden payment-method"
                    id="radio_2"
                    type="radio"
                    name="payment-method-input"
                  />
                  <label
                    className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer rounded-md items-center justify-center"
                    htmlFor="radio_2"
                  >
                    <span className="text-xs font-semibold uppercase">
                      Gopay
                    </span>
                  </label>
                </div>
                <div>
                  <input
                    onChange={() => setPayment("3")}
                    className="hidden payment-method"
                    id="radio_3"
                    type="radio"
                    name="payment-method-input"
                  />
                  <label
                    className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer rounded-md items-center justify-center"
                    htmlFor="radio_3"
                  >
                    <span className="text-xs font-semibold uppercase">
                      Visa
                    </span>
                  </label>
                </div>
                <div>
                  <input
                    onChange={() => setPayment("4")}
                    className="hidden payment-method"
                    id="radio_4"
                    type="radio"
                    name="payment-method-input"
                  />
                  <label
                    className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer rounded-md items-center justify-center"
                    htmlFor="radio_4"
                  >
                    <span className="text-xs font-semibold uppercase">
                      Paypal
                    </span>
                  </label>
                </div>
                <div>
                  <input
                    onChange={() => setPayment("5")}
                    className="hidden payment-method"
                    id="radio_5"
                    type="radio"
                    name="payment-method-input"
                  />
                  <label
                    className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer rounded-md items-center justify-center"
                    htmlFor="radio_5"
                  >
                    <span className="text-xs font-semibold uppercase">
                      Dana
                    </span>
                  </label>
                </div>
                <div>
                  <input
                    onChange={() => setPayment("6")}
                    className="hidden payment-method"
                    id="radio_6"
                    type="radio"
                    name="payment-method-input"
                  />
                  <label
                    className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer rounded-md items-center justify-center"
                    htmlFor="radio_6"
                  >
                    <span className="text-xs font-semibold uppercase">BCA</span>
                  </label>
                </div>
                <div>
                  <input
                    onChange={() => setPayment("7")}
                    className="hidden payment-method"
                    id="radio_7"
                    type="radio"
                    name="payment-method-input"
                  />
                  <label
                    className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer rounded-md items-center justify-center"
                    htmlFor="radio_7"
                  >
                    <span className="text-xs font-semibold uppercase">BRI</span>
                  </label>
                </div>
                <div>
                  <input
                    onChange={() => setPayment("8")}
                    className="hidden payment-method"
                    id="radio_8"
                    type="radio"
                    name="payment-method-input"
                  />
                  <label
                    className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer rounded-md items-center justify-center"
                    htmlFor="radio_8"
                  >
                    <span className="text-xs font-semibold uppercase">OVO</span>
                  </label>
                </div>
              </section>
              <div className="text-center">or</div>
              <div className="text-center pt-5 pb-10">
                <p>
                  Pay via cash.
                  <span className="text-primary">See how it works</span>
                </p>
              </div>
              <section className="mt-10 flex justify-between flex-1 mb-10">
                <button className="btn btn-outline p-3">Previous step</button>
                <button type="submit" className="btn btn-primary p-3">
                  Pay your order
                </button>
              </section>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentMethod;
