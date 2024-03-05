"use client";
import { auth } from "@/firebase/firebase";
import useUser from "@/hooks/useUser";
import { signOut } from "firebase/auth";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const TopNavigation = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [user] = useUser();

  console.log(user);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (open) {
      if (screenWidth < 640) {
        document.body.style.position = "fixed";
        document.body.style.left = "50%";
        document.body.style.transform = "translateX(-50%)";
      }
    } else {
      document.body.style.position = "revert";
      document.body.style.left = "revert";
      document.body.style.transform = "revert";
    }

    return () => {
      document.body.style.position = "revert";
      document.body.style.left = "revert";
      document.body.style.transform = "revert";
    };
  }, [open]);

  function navHandler(
    e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>
  ) {
    open ? setOpen(false) : setOpen(true);
  }

  return (
    <>
      <nav
        id="mobile-navigation"
        className={`fixed sm:relative top-0 bottom-0 right-0 pl-10 pr-4 py-6 border-l border-l-primaryAccent sm:border-0 h-full w-max flex items-end z-30 backdrop-blur-lg bg-[rgba(46,104,208,.2)] sm:bg-transparent sm:backdrop-blur-0 sm:block transition-all duration-500 ease-in-out ${
          open ? "translate-x-0" : "translate-x-80 sm:translate-x-0"
        }`}
      >
        <ul className="flex gap-3 flex-wrap sm:flex-nowrap flex-col sm:flex-row">
          <li className="text-right">
            <a
              onClick={navHandler}
              className="hover:text-primaryAccent uppercase transition-colors duration-200 ease-linear"
              href={"#"}
            >
              Inpage LInk
            </a>
          </li>
          <li className="text-right">
            <Link
              className="hover:text-primaryAccent uppercase transition-colors duration-200 ease-linear"
              onClick={navHandler}
              href={"#"}
            >
              Blog
            </Link>
          </li>
          <li className="text-right">
            {!user.loggedIn ? (
              <Link
                className="hover:text-primaryAccent uppercase transition-colors duration-200 ease-linear"
                onClick={navHandler}
                href={"/login"}
              >
                Login/Register
              </Link>
            ) : (
              <button onClick={() => signOut(auth)}>Logout</button>
            )}
          </li>
        </ul>
      </nav>
      <button
        onClick={navHandler}
        className="sm:hidden flex flex-col gap-[6px] absolute top-2 right-0 w-max h-max z-30"
        aria-expanded={open}
        aria-controls="mobile-navigation"
      >
        <span
          className={`block h-[1px] w-6 bg-white transition-transform duration-200 ease-in-out ${
            open ? "translate-y-[7px] rotate-45" : ""
          }`}
        ></span>
        <span
          className={`block h-[1px] w-4 self-end bg-white transition-transform duration-200 ease-in-out ${
            open ? "translate-y-[3px] -translate-x-[1px] rotate-45" : ""
          }`}
        ></span>
        <span
          className={`block h-[1px] w-6 self-end bg-white transition-transform duration-200 ease-in-out ${
            open ? "-translate-y-[7px] -rotate-45" : ""
          }`}
        ></span>
      </button>
    </>
  );
};

export default TopNavigation;
