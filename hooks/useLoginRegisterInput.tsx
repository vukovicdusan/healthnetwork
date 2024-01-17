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
  const [value, setValue] = useState<FormState>({});
  const [usernameError, setUsernameError] = useState<ErrorState>({});
  const [emailError, setEmailError] = useState<ErrorState>({});
  const [passwordError, setPasswordError] = useState<ErrorState>({});

  const valueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const { error, message } = loginRegisterChecker(name, value);

    setValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
    } else {
      setEmailError({ error: false, message: "" });
      setUsernameError({ error: false, message: "" });
    }

    // error
    //   ? setInputError({ error: error, message: message })
    //   : setInputError({ error: false, message: "" });
    // value.length < 1 &&
    //   setInputError({ error: true, message: "You have to input something." });
  };

  return [
    value,
    valueHandler,
    usernameError,
    emailError,
    passwordError,
  ] as const;
};

export default useLoginRegisterInput;
