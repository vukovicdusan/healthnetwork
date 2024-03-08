"use client";
import useInput from "@/hooks/useInput";
import React from "react";
import InputLabel from "../InputLabel";
import Image from "next/image";
import useUser from "@/hooks/useUser";
import avatar from "../../public/avatar.jpg";

const EditProfileForm = () => {
  const [user] = useUser();
  const [inputValue, valueHandler, usernameError, emailError, passwordError] =
    useInput();

  const submitHandler = () => {};

  return (
    <form onSubmit={submitHandler} className="p-4 max-w-prose">
      <div className="flex gap-4 items-center">
        <Image
          width={100}
          height={100}
          className="rounded-full"
          src={user.photoUrl ? user.photoUrl : avatar}
          alt="profile image"
        ></Image>
        <input onChange={valueHandler} type="file" />
      </div>
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
              usernameError.error ? "!border-red-600 " : "!border-textLighter "
            }` +
            "bg-transparent border-0 border-b focus:border-secondaryAccent focus-visible:outline-none peer"
          }
          name="city"
          type="text"
          autoCapitalize="off"
          autoCorrect="off"
          required
        />
        {/* {usernameError.error ? (
          <span className="absolute -bottom-5 right-0 text-red-500 text-xs">
            {usernameError.message}
          </span>
        ) : null} */}
        <InputLabel
          labelName={"City"}
          isEmpty={!inputValue.city}
          htmlFor={"city"}
        ></InputLabel>
      </div>
      {/* Trener/Nutricionista
      Cena po treningu
      Consent */}
    </form>
  );
};

export default EditProfileForm;
