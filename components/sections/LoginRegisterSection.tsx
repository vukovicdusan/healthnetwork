"use client";
import React, { useState } from "react";
import LoginForm from "../forms/LoginForm";
import RegisterForm from "../forms/RegisterForm";
import { useSession } from "next-auth/react";

const LoginRegisterSection = () => {
  const [navState, setNavState] = useState("login");
  const { data, status } = useSession();
  console.log("data: " + data, "status: " + status);

  const loginRegisterNavHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonValue = (e.target as HTMLButtonElement).value;
    switch (buttonValue) {
      case "login":
        setNavState("login");
        break;
      case "register":
        setNavState("register");
        break;
      default:
        setNavState("login");
    }
  };

  return (
    <div className="flex flex-col justify-center gap-5 w-3/4 p-5 md:mt-24 z-10">
      <nav className="flex gap-2 w-min px-1 relative before:absolute before:bg-textLighter before:bottom-0 before:left-0 before:w-full before:h-[3px]">
        <button
          className={
            "transition-all duration-200 ease-linear " +
            `${
              navState === "login" ? "text-secondaryAccent" : "text-textLighter"
            }`
          }
          onClick={loginRegisterNavHandler}
          value="login"
        >
          LOGIN
        </button>
        <button
          className={
            navState === "register"
              ? "text-secondaryAccent"
              : "text-textLighter"
          }
          onClick={loginRegisterNavHandler}
          value="register"
        >
          REGISTER
        </button>
        <span
          className={
            "absolute h-[3px] bg-secondaryAccent rounded-full bottom-0 transition-all duration-200 ease-linear " +
            `${
              navState === "login"
                ? " left-0 w-16"
                : " left-1/2 -translate-x-2 w-[81px]"
            }`
          }
        ></span>
      </nav>
      {navState === "login" ? (
        <LoginForm></LoginForm>
      ) : (
        <RegisterForm></RegisterForm>
      )}
    </div>
  );
};

export default LoginRegisterSection;
