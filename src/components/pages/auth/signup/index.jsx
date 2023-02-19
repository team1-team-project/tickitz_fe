import React from "react";
import { BgSignup } from "./BgSignup";
import { FormSignup } from "./FormSignup";

export const Signup = () => {
  return (
    <main className="w-full sm:h-[150vh] h-[120vh] flex">
      <BgSignup />
      <FormSignup />
    </main>
  );
};
