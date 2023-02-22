import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BgSignin } from "./BgSignin";
import { FormSignin } from "./FormSignin";

export const Signin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isLogged = JSON.parse(localStorage.getItem("@login"));
    if (isLogged !== null) {
      // navigate("/cinema");
      // go to previous page
      navigate(-1);
    }
  }, []);

  return (
    <main className="w-full sm:h-[130vh] h-[120vh] flex">
      <BgSignin />
      <FormSignin />
    </main>
  );
};
