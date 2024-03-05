import { labelHolder } from "@/helpers/labelHolder";
import useLoginUser from "@/hooks/useLoginUser";
import useLoginRegisterInput from "@/hooks/useLoginRegisterInput";
import React from "react";

const LoginForm = () => {
  const [inputValue, valueHandler, , emailError] = useLoginRegisterInput();
  const [loginUser] = useLoginUser();

  const submitHandler = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginUser(inputValue.email, inputValue.password);
  };

  console.log(emailError);

  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-col justify-end relative h-12 mb-2">
        <input
          onChange={valueHandler}
          className={
            `${
              emailError.error ? "!border-red-600 " : "!border-textLighter "
            }` +
            "bg-transparent border-0 border-b  focus:border-secondaryAccent focus-visible:outline-none peer"
          }
          name="email"
          type="text"
        />
        {emailError.error ? (
          <span className="absolute -bottom-5 right-0 text-red-500 text-xs">
            {emailError.message}
          </span>
        ) : null}
        <label
          className={
            "absolute top-[25px] text-textLighter peer-focus:top-0 peer-focus:text-sm peer-focus:text-secondaryAccent transition-all duration-200 ease-linear" +
            labelHolder(inputValue.email)
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
            "absolute top-[25px] text-textLighter peer-focus:-top-0 peer-focus:text-sm peer-focus:text-secondaryAccent transition-all duration-200 ease-linear" +
            labelHolder(inputValue.password)
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
