import React from "react";
import { BgSignin } from "./BgSignin";
import { FormSignin } from "./FormSignin";

export const Signin = () => {
  return (
    <main className="w-full sm:h-[130vh] h-[120vh] flex">
      <BgSignin />
      <FormSignin />
    </main>
  );
};
