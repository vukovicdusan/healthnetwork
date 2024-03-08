import useLoginUser from "@/hooks/useLoginUser";
import useInput from "@/hooks/useInput";
import React from "react";
import InputLabel from "../InputLabel";

const LoginForm = () => {
  const [inputValue, valueHandler, , emailError] = useInput();
  const [loginUser] = useLoginUser();

  const submitHandler = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginUser(inputValue.email, inputValue.password);
  };

  let formEmpty = !inputValue.email || !inputValue.password;
  let isAnyError = emailError.error;

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
        <InputLabel
          labelName={"Email"}
          isEmpty={!inputValue.email}
          htmlFor={"email"}
        ></InputLabel>
      </div>
      <div className="flex flex-col justify-end relative h-12 mb-2">
        <input
          onChange={valueHandler}
          className="bg-transparent border-0 border-b border-textLighter focus:border-secondaryAccent focus-visible:outline-none peer"
          name="password"
          type="password"
        />
        <InputLabel
          labelName={"Password"}
          isEmpty={!inputValue.password}
          htmlFor={"password"}
        ></InputLabel>
      </div>
      <button
        className={
          "bg-primaryAccent rounded-xl px-6 py-[6px] mt-4 hover:bg-secondaryAccent transition-all duration-100 ease-linear" +
          `${
            isAnyError || formEmpty ? " !pointer-events-none opacity-35" : null
          }`
        }
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
