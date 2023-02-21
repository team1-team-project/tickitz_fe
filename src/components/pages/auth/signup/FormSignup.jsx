import React, { useState } from "react";
import fbIcon from "../../../../assets/images/fb-icon.png";
import googleIcon from "../../../../assets/images/google-icon.png";
import illuminati from "../../../../assets/images/illuminati.png";
import { Link, useNavigate } from "react-router-dom";
import tickitzLogoMobile from "../../../../assets/images/tickitz-logo-mobile.png";
import axios from "axios";

export const FormSignup = () => {
  const navigate = useNavigate();
  const showPw = () => {
    let x = document.getElementById("pwInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });
  const handleSignup = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: `https://63a3f9ae9704d18da09a463d.mockapi.io/login`,
      data: signupForm,
    })
      .then((result) => {
        console.log(result.data);
        setSignupForm(result.data);
        alert("Signup success !");
        navigate("/sign-in");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const enable = () => {
    const agreeCheckbox = document.getElementById("agreement");
    const submitBtn = document.getElementById("btn");

    if (agreeCheckbox.checked) {
      submitBtn.removeAttribute("disabled");
    } else {
      // submitBtn.classList.add("active-btn-signup");
      // submitBtn.disabled = "true";
      submitBtn.disabled = true;
    }
  };
  return (
    <section className="form-signup sm:w-5/12 w-full px-3 h-full sm:px-10 font-mulish">
      <form
        onSubmit={handleSignup}
        action=""
        className="w-full h-full flex flex-col justify-center items-center"
      >
        <div className=" w-full pb-10 flex flex-col gap-2">
          <img
            src={tickitzLogoMobile}
            alt=""
            className="sm:hidden self-start pb-6"
          />
          <h3 className="w-full text-4xl font-bold text-black">Sign Up</h3>
        </div>
        <h3 className="w-full text-2xl font-semibold pb-10 max-sm:hidden">
          Fill your additional details
        </h3>
        <div className="fill-signup w-full flex flex-col gap-5 pb-8">
          <div className="username flex flex-col gap-3">
            <label htmlFor="" className="text-[#4E4B66]">
              Username
            </label>
            <input
              onChange={(e) => {
                setSignupForm({
                  ...signupForm,
                  name: e.target.value,
                });
              }}
              type="text"
              placeholder="Write your username"
              className="border-[1px] border-[#DEDEDE] rounded-xl py-5 w-full px-5 placeholder:text-[#A0A3BD] focus:outline-[#5F2EEA]"
            />
          </div>
          <div className="email flex flex-col gap-3">
            <label htmlFor="" className="text-[#4E4B66]">
              Email
            </label>
            <input
              onChange={(e) => {
                setSignupForm({
                  ...signupForm,
                  email: e.target.value,
                });
              }}
              type="email"
              placeholder="Write your email"
              className="border-[1px] border-[#DEDEDE] rounded-xl py-5 w-full px-5 placeholder:text-[#A0A3BD] focus:outline-[#5F2EEA]"
            />
          </div>
          <div className="password flex flex-col gap-3">
            <label htmlFor="" className="text-[#4E4B66]">
              Password
            </label>
            <div className="flex items-center justify-between border-[1px] border-[#DEDEDE] rounded-xl py-5 w-full px-5 placeholder:text-[#A0A3BD] focus:outline-[#5F2EEA]">
              <input
                onChange={(e) => {
                  setSignupForm({
                    ...signupForm,
                    password: e.target.value,
                  });
                }}
                type="password"
                placeholder="Write your password"
                className="w-full h-full focus:outline-none"
                id="pwInput"
                // className="border-[1px] border-[#DEDEDE] rounded-xl py-5 w-full px-5 placeholder:text-[#A0A3BD] focus:outline-[#5F2EEA]"
              ></input>
              <img
                src={illuminati}
                alt="illuminati-eye"
                onClick={showPw}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="agreement flex items-center gap-3 text-lg pb-5">
            <input
              onClick={enable}
              type="checkbox"
              name="agreement"
              id="agreement"
              value="Agree"
              className="checked:bg-[#5F2EEA] w-5 h-5 rounded-md"
            />
            <label htmlFor="agreement text-[#696F79]">
              I agree to terms & conditions
            </label>
          </div>
          <button
            id="btn"
            type="submit"
            className="btn-primary py-5 text-lg"
            // disabled="true"
            disabled={true}
          >
            Join for free now
          </button>
          <p className="text-center">
            Do you already have an account?{" "}
            <Link to="/sign-in">
              <span className="text-[#5F2EEA] cursor-pointer underline font-semibold">
                Log in
              </span>
            </Link>
          </p>
        </div>
        <p className="pb-8 text-[#AAAAAA]">OR</p>
        <div className="login-direct flex justify-center gap-6">
          <button className="flex items-center justify-center gap-3 bg-white w-40 py-5 shadow-xl rounded-xl hover:bg-[#e9e9e9]">
            <img src={googleIcon} alt="google" />
            <p className="text-[#A0A3BD] text-lg">Google</p>
          </button>
          <button className="flex items-center justify-center gap-3 bg-white w-40 py-5 shadow-xl rounded-xl hover:bg-[#e9e9e9]">
            <img src={fbIcon} alt="facebook" />
            <p className="text-[#A0A3BD] text-lg">Facebook</p>
          </button>
        </div>
      </form>
    </section>
  );
};
