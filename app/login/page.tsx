import paprike from "../../public/paprike.png";
import Image from "next/image";
import Wrapper from "@/components/layout/Wrapper";

import LoginRegisterSection from "@/components/sections/LoginRegisterSection";

export default function Login() {
  return (
    <Wrapper>
      <main className="p-2">
        <div className="relative flex flex-wrap justify-center items-start mx-auto gap-8 sm:gap-0 mt-10 bg-secondaryBg rounded-lg border border-textLighter">
          <div className="flex justify-center md:basis-1/2 basis-full relative">
            <Image src={paprike} alt="hero image" priority width={450}></Image>
            <div className="absolute bottom-0 left-0 bg-secondaryBg blur-3xl border border-solid border-red-600 w-full h-1/3"></div>
          </div>
          <div className="flex justify-center md:basis-1/2 basis-full">
            <LoginRegisterSection></LoginRegisterSection>
          </div>
        </div>
      </main>
    </Wrapper>
  );
}
