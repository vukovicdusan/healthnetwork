import React from "react";
import useLoginRegisterInput from "@/hooks/useLoginRegisterInput";
import { registerUser } from "@/helpers/registerUser";
import { labelHolder } from "@/helpers/labelHolder";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
  const [inputValue, valueHandler, usernameError, emailError, passwordError] =
    useLoginRegisterInput();

  const submitHandler = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isAnyError)
      registerUser(inputValue.username, inputValue.email, inputValue.password);
    router.push("/");
  };

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
        <label
          className={
            "absolute top-[25px] text-textLighter peer-focus:-top-0 peer-focus:text-sm peer-focus:text-secondaryAccent transition-all duration-200 ease-linear" +
            labelHolder(inputValue.username)
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
          autoCapitalize="off"
          autoCorrect="off"
          required
        />
        {emailError.error ? (
          <span className="absolute -bottom-5 right-0 text-red-500 text-xs">
            {emailError.message}
          </span>
        ) : null}
        <label
          className={
            "absolute top-[25px] text-textLighter peer-focus:-top-0 peer-focus:text-sm peer-focus:text-secondaryAccent transition-all duration-200 ease-linear" +
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
        <label
          className={
            "absolute top-[25px] text-textLighter peer-focus:-top-0 peer-focus:text-sm peer-focus:text-secondaryAccent transition-all duration-200 ease-linear" +
            labelHolder(inputValue.passwordRepeat)
          }
          htmlFor="passwordRepeat"
        >
          Repeat Password
        </label>
      </div>
      <button
        className={
          "bg-primaryAccent rounded-xl px-6 py-[6px] mt-4 hover:bg-secondaryAccent transition-all duration-100 ease-linear" +
          `${isAnyError ? " !pointer-events-none opacity-35" : null}`
        }
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
