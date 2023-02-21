/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Authorized from "./Authorized";
import Unauthorized from "./Unauthorized";

const Features = ({ active }) => {
  const [isLogin, setIsLogin] = useState();

  useEffect(() => {
    if (localStorage.getItem("@userLogin")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);

  if (isLogin) {
    return (
      <>
        <Authorized active={active} logout={setIsLogin} />
      </>
    );
  } else {
    return (
      <>
        <Unauthorized active={active} />
      </>
    );
  }
};

export default Features;
