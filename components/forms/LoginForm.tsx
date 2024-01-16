import React from "react";

const LoginForm = () => {
  return (
    <form>
      <div className="flex flex-col justify-end relative h-12 mb-2">
        <input
          className="bg-transparent border-0 border-b border-textLighter focus:border-secondaryAccent focus-visible:outline-none peer"
          name="email"
          type="text"
        />
        <label
          className="absolute top-[25px] text-textLighter peer-focus:-top-0 peer-focus:text-sm peer-focus:text-secondaryAccent transition-all duration-200 ease-linear"
          htmlFor="email"
        >
          Email
        </label>
      </div>
      <div className="flex flex-col justify-end relative h-12 mb-2">
        <input
          className="bg-transparent border-0 border-b border-textLighter focus:border-secondaryAccent focus-visible:outline-none peer"
          name="password"
          type="text"
        />
        <label
          className="absolute top-[25px] text-textLighter peer-focus:-top-0 peer-focus:text-sm peer-focus:text-secondaryAccent transition-all duration-200 ease-linear"
          htmlFor="password"
        >
          Password
        </label>
      </div>
      <button className="bg-primaryAccent rounded-xl px-4 py-2 mt-4">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
