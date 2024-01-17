import { registerUser } from "@/helpers/registerUser";
import useLoginRegisterInput from "@/hooks/useLoginRegisterInput";
import React from "react";

const LoginForm = () => {
  const [value, valueHandler] = useLoginRegisterInput();

  const submitHandler = () => {
    registerUser(value.name, value.email, value.password);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-col justify-end relative h-12 mb-2">
        <input
          onChange={valueHandler}
          className="bg-transparent border-0 border-b border-textLighter focus:border-secondaryAccent focus-visible:outline-none peer"
          name="email"
          type="text"
        />
        <label
          className={
            "absolute top-[25px] text-textLighter peer-focus:-top-0 peer-focus:text-sm peer-focus:text-secondaryAccent transition-all duration-200 ease-linear " +
            `${
              value.email && value.email.length > 0
                ? "-top-0 text-sm !text-secondaryAccent"
                : null
            }`
          }
          htmlFor="email"
        >
          Email
        </label>
      </div>
      <div className="flex flex-col justify-end relative h-12 mb-2">
        <input
          onChange={valueHandler}
          className="bg-transparent border-0 border-b border-textLighter focus:border-secondaryAccent focus-visible:outline-none peer"
          name="password"
          type="password"
        />
        <label
          className={
            "absolute top-[25px] text-textLighter peer-focus:-top-0 peer-focus:text-sm peer-focus:text-secondaryAccent transition-all duration-200 ease-linear " +
            `${
              value.password && value.password.length > 0
                ? "-top-0 text-sm !text-secondaryAccent"
                : null
            }`
          }
          htmlFor="password"
        >
          Password
        </label>
      </div>
      <button className="bg-primaryAccent rounded-xl px-6 py-[6px] mt-4 hover:bg-secondaryAccent transition-all duration-100 ease-linear">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
