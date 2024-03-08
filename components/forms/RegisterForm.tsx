import React from "react";
import useInput from "@/hooks/useInput";
import InputLabel from "../InputLabel";
import useRegisterUser from "@/hooks/useRegisterUser";

const RegisterForm = () => {
  const [inputValue, valueHandler, usernameError, emailError, passwordError] =
    useInput();
  const [registerUser, registerEmailError, registerUsernameError] =
    useRegisterUser();

  const submitHandler = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isAnyError)
      registerUser(inputValue.username, inputValue.email, inputValue.password);
  };

  let formEmpty =
    !inputValue.username ||
    !inputValue.email ||
    !inputValue.password ||
    !inputValue.passwordRepeat;
  let isAnyError =
    usernameError.error || emailError.error || passwordError.error;

  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-col justify-end relative h-12 mb-2">
        <input
          onChange={valueHandler}
          className={
            `${
              usernameError.error ? "!border-red-600 " : "!border-textLighter "
            }` +
            "bg-transparent border-0 border-b focus:border-secondaryAccent focus-visible:outline-none peer"
          }
          name="username"
          type="text"
          autoCapitalize="off"
          autoCorrect="off"
          required
        />
        {usernameError.error ? (
          <span className="absolute -bottom-5 right-0 text-red-500 text-xs">
            {usernameError.message}
          </span>
        ) : null}
        <InputLabel
          labelName={"Name"}
          isEmpty={!inputValue.username}
          htmlFor={"username"}
        ></InputLabel>
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
          autoCapitalize="off"
          autoCorrect="off"
          required
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
          className={
            `${
              passwordError.error ? "!border-red-600 " : "!border-textLighter "
            }` +
            "bg-transparent border-0 border-b  focus:border-secondaryAccent focus-visible:outline-none peer"
          }
          name="password"
          type="password"
          autoCapitalize="off"
          autoCorrect="off"
          required
        />
        <InputLabel
          labelName={"Password"}
          isEmpty={!inputValue.password}
          htmlFor={"password"}
        ></InputLabel>
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
          autoCapitalize="off"
          autoCorrect="off"
          required
        />
        <InputLabel
          labelName={"Repeat Password"}
          isEmpty={!inputValue.passwordRepeat}
          htmlFor={"passwordRepeat"}
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
        Register
      </button>
      {registerEmailError.error ? (
        <span className="block mt-4 text-red-500 text-xs uppercase">
          {registerEmailError.message}
        </span>
      ) : null}
      {registerUsernameError.error ? (
        <span className="block mt-4 text-red-500 text-xs uppercase">
          {registerUsernameError.message}
        </span>
      ) : null}
    </form>
  );
};

export default RegisterForm;
