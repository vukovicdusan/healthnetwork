import Wrapper from "@/components/layout/Wrapper";

import LoginRegisterSection from "@/components/sections/LoginRegisterSection";

export default function Login() {
  return (
    <Wrapper>
      <main className="p-2">
        <div className="relative flex flex-wrap justify-center items-start mx-auto gap-8 sm:gap-0 mt-10 bg-secondaryBg rounded-lg border border-textLighter">
          <div className="justify-center md:basis-1/2 basis-full relative bg-[url('../public/login-img.jpg')] hidden md:block md:h-[500px] bg-cover bg-center rounded-lg">
            <div className="absolute top-0 left-0 backdrop-blur-sm bg-[rgba(0,0,0,0.3)] w-full h-full rounded-lg"></div>
          </div>
          <div className="flex relative justify-center md:basis-1/2 basis-full py-8 md:py-0 bg-center bg-[url('../public/login-img.jpg')] md:bg-[url()] rounded-lg">
            <LoginRegisterSection></LoginRegisterSection>
            <div className="absolute top-0 left-0 backdrop-blur-sm bg-[rgba(0,0,0,0.3)] w-full h-full rounded-lg md:hidden"></div>
          </div>
        </div>
      </main>
    </Wrapper>
  );
}
