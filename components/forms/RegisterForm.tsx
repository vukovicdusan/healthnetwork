import React from "react";
import useLoginRegisterInput from "@/hooks/useLoginRegisterInput";
import { registerUser } from "@/helpers/registerUser";

const RegisterForm = () => {
  const [value, valueHandler, usernameError, emailError, passwordError] =
    useLoginRegisterInput();

  const submitHandler = () => {
    registerUser(value.name, value.email, value.password);
  };

  console.log(usernameError, emailError, passwordError);

  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-col justify-end relative h-12 mb-2">
        <input
          onChange={valueHandler}
          className={
            `${
              usernameError.error ? "!border-red-600 " : "!border-textLighter "
            }` +
            "bg-transparent border-0 border-b  focus:border-secondaryAccent focus-visible:outline-none peer"
          }
          name="username"
          type="text"
        />
        {usernameError.error ? (
          <span className="absolute -bottom-5 right-0 text-red-500 text-xs">
            {usernameError.message}
          </span>
        ) : null}
        <label
          className={
            "absolute top-[25px] text-textLighter peer-focus:-top-0 peer-focus:text-sm peer-focus:text-secondaryAccent transition-all duration-200 ease-linear " +
            `${
              value.username && value.username.length > 0
                ? "-top-0 text-sm !text-secondaryAccent"
                : null
            }`
          }
          htmlFor="username"
        >
          Name
        </label>
      </div>
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
          className={
            `${
              passwordError.error ? "!border-red-600 " : "!border-textLighter "
            }` +
            "bg-transparent border-0 border-b  focus:border-secondaryAccent focus-visible:outline-none peer"
          }
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
      <div className="flex flex-col justify-end relative h-12 mb-2">
        <input
          onChange={valueHandler}
          className={
            `${
              passwordError.error ? "!border-red-600 " : "!border-textLighter "
            }` +
            "bg-transparent border-0 border-b  focus:border-secondaryAccent focus-visible:outline-none peer"
          }
          name="passwordRepeat"
          type="password"
        />
        <label
          className={
            "absolute top-[25px] text-textLighter peer-focus:-top-0 peer-focus:text-sm peer-focus:text-secondaryAccent transition-all duration-200 ease-linear " +
            `${
              value.passwordRepeat && value.passwordRepeat.length > 0
                ? "-top-0 text-sm !text-secondaryAccent"
                : null
            }`
          }
          htmlFor="passwordRepeat"
        >
          Repeat Password
        </label>
      </div>
      <button className="bg-primaryAccent rounded-xl px-6 py-[6px] mt-4 hover:bg-secondaryAccent transition-all duration-100 ease-linear">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
