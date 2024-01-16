"use client";
import React, { useState } from "react";
import LoginForm from "../forms/LoginForm";
import RegisterForm from "../forms/RegisterForm";

const LoginRegisterSection = () => {
  const [navState, setNavState] = useState("login");

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
    <div className="flex flex-col justify-center gap-5 w-full p-5">
      <nav className="flex gap-2 border-b border-textLighter">
        <button
          className={
            navState === "login" ? "text-secondaryAccent" : "text-textLighter"
          }
          onClick={loginRegisterNavHandler}
          value="login"
        >
          Login
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
          Register
        </button>
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
