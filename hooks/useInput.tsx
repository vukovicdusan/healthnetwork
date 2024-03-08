import { emailChecker } from "@/helpers/emailChecker";
import { usernameChecker } from "@/helpers/usernameChecker";
import { InputErrorStateType } from "@/types/InputErrorState";
import React, { useState } from "react";

type FormState = {
  [key: string]: string;
};

const useInput = () => {
  const [inputValue, setInputValue] = useState<FormState>({});
  const [usernameError, setUsernameError] = useState<InputErrorStateType>({});
  const [emailError, setEmailError] = useState<InputErrorStateType>({});
  const [passwordError, setPasswordError] = useState<InputErrorStateType>({});

  const valueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    /* Extracted input value*/
    const { name, value } = e.target;

    /** Set extracted value state and check for password repeat value */
    setInputValue((prevInputValue) => {
      const updatedValue = {
        ...prevInputValue,
        [name]: value,
      };

      if (updatedValue.passwordRepeat) {
        if (updatedValue.password && updatedValue.passwordRepeat) {
          updatedValue.password !== updatedValue.passwordRepeat
            ? setPasswordError({
                error: true,
                message: "Passwords don't match",
              })
            : setPasswordError({ error: false, message: "" });
        }
      }
      return updatedValue;
    });

    /* Check for fieldname and use checker functions*/
    switch (name) {
      case "username":
        const { usernameError, usernameErrorMessage } = usernameChecker(value);
        setUsernameError({
          error: usernameError,
          message: usernameErrorMessage,
        });
        break;
      case "email":
        const { emailError, emailErrorMessage } = emailChecker(value);
        setEmailError({ error: emailError, message: emailErrorMessage });
        break;
      default:
        "";
    }
  };

  return [
    inputValue,
    valueHandler,
    usernameError,
    emailError,
    passwordError,
  ] as const;
};

export default useInput;
