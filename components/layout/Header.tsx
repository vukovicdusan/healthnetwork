import React from "react";
import logo from "../../public/logo.svg";
import Image from "next/image";
import Wrapper from "../layout/Wrapper";
import TopNavigation from "../TopNavigation";
import Link from "next/link";

const Header = () => {
  return (
    <header className="relative top-0 left-0 right-0 mx-auto py-4 z-30">
      <Wrapper>
        <div className="flex justify-between items-center relative">
          <Link href={"/"}>
            <Image src={logo} alt="logo" width={150}></Image>
          </Link>
          <TopNavigation></TopNavigation>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
