import axios from "axios";
// import { backgroundImage } from 'html2canvas/dist/types/css/property-descriptors/background-image'
import React, { useState } from "react";
import "./index.css";
import { TbNumber1 } from "react-icons/tb";
// const nodemailer = require('nodemailer')
// import { useNavigate } from 'react-router-dom'
// import auth from '../../../../assets/images/forgotpassword.png'
import logo from "../../../../assets/images/Vector.png";
// import { json } from 'stream/consumers'

const ForgotPassword = () => {
  const [userEmail, setUserEmail] = useState({
    email: "",
    id_profile: "",
  });

  const idByEmail = async (e) => {
    setUserEmail({
      email: e.target.value,
    });
    await axios
      .get(
        `https://tickitz.herokuapp.com/api/auth/forgotpassword/${userEmail.email}`
      )
      .then((res) => {
        console.log(res.data.data.id_profile);
        setUserEmail({
          ...userEmail,
          id_profile: res.data.data.id_profile,
        });

        console.log(userEmail.id_profile);
      });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    axios({
      url: "https://tickitz.herokuapp.com/api/sendmail",
      method: "POST",
      data: {
        email: userEmail.email,
        message: `<a href="https://tickitz-apps.vercel.app/resetpassword/${userEmail.id_profile}" className='bg-primary px-10 py-4 text-center font-bold text-white'>reset your password</a>`,
      },
    })
      .then((res) => res.data.data)
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <div className="lg:flex max-h-screen font-mulish overflow-hidden">
        <div id="auth-img" className="mx-auto lg:block lg:flex-1">
          <div id="auth-bg-overlay" className="w-[56vw] h-full text-center">
            <div className="flex p-10">
              <img src={logo} />
            </div>
            {console.log(userEmail.id_profile)}
            <h1
              className="font-bold text-4xl leading-normal text-white px-20"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,.3)" }}
            >
              Lets reset your password
            </h1>
            <p className="text-slate-500 font-bold">
              To be able to use your account again, <br /> please complete the
              following steps.
            </p>
            <p className="font-bold">
              <span className="h-10 w-10 bg-white">
                <TbNumber1 />
              </span>{" "}
              Fill your complete email
            </p>
          </div>
        </div>

        <div
          id="auth-form"
          className=" text-white w-[44vw] pt-40 lg:text-black px-20 h-screen lg:text-start lg:mt-10"
        >
          <h2 className="text-lg font-bold md:text-center lg:text-header lg:text-xl lg:text-start">
            Fill your Complete Email
          </h2>
          <p className="mb-5 mt-3 md:text-center lg:text-slate-500 lg:text-start">
            we`ll send a link to your email shortly
          </p>

          <form
            onSubmit={sendEmail}
            className="md:flex md:flex-col md:w-3/4 md:mx-auto lg:w-full"
          >
            <label htmlFor="email" className="lg:text-slate-600 lg:text-sm">
              Email
            </label>
            <input
              onChange={idByEmail}
              className="block w-full h-10 mt-2 rounded-2xl py-7 px-3 mb-4 lg:border lg:border-placeholder text-header"
              type="email"
              placeholder="Masukan alamat email"
            />

            <button
              type="submit"
              className="mb-4 mt-5 w-full px-4 py-4 text-white rounded-2xl block bg-primary font-semibold"
            >
              Send Mail
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
