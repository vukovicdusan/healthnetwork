import { loginRegisterChecker } from "@/helpers/loginRegisterChecker";
import React, { useState } from "react";

type FormState = {
  [key: string]: string;
};

type ErrorState = {
  error?: boolean;
  message?: string;
};

const useLoginRegisterInput = () => {
  const [inputValue, setInputValue] = useState<FormState>({});
  const [usernameError, setUsernameError] = useState<ErrorState>({});
  const [emailError, setEmailError] = useState<ErrorState>({});
  const [passwordError, setPasswordError] = useState<ErrorState>({});

  const valueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const { error, message } = loginRegisterChecker(name, value);

    setInputValue((prevInputValue) => {
      const updatedValue = {
        ...prevInputValue,
        [name]: value,
      };

      if (updatedValue.password && updatedValue.passwordRepeat) {
        updatedValue.password !== updatedValue.passwordRepeat
          ? setPasswordError({ error: true, message: "Passwords don't match" })
          : setPasswordError({ error: false, message: "" });
      }

      return updatedValue;
    });

    if (error) {
      switch (name) {
        case "username":
          setUsernameError({ error: error, message: message });
          break;
        case "email":
          setEmailError({ error: error, message: message });
          break;
        default:
          setEmailError({ error: false, message: "" });
          setUsernameError({ error: false, message: "" });
      }
    }
    // else {
    //   setEmailError({ error: false, message: "" });
    //   setUsernameError({ error: false, message: "" });
    // }
  };

  return [
    inputValue,
    valueHandler,
    usernameError,
    emailError,
    passwordError,
  ] as const;
};

export default useLoginRegisterInput;
