import React from "react";
import Wrapper from "../layout/Wrapper";
import paprike from "../../public/paprike.png";
import Image from "next/image";

const Hero = () => {
  return (
    <Wrapper>
      <section className="relative flex flex-wrap justify-center items-center mx-auto gap-8 sm:gap-0 md:h-[50vh] pt-10 mt-10">
        <div className="md:basis-1/2 basis-full flex flex-col gap-2">
          <h1 className="font-bold leading-none">
            Health<br></br>
            <span className="text-primaryAccent">Network</span>
          </h1>
          <p className="text-2xl text-textLighter">
            Mostly healthy food & training <br></br>colaboration between people
          </p>
          <p className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            semper lectus odio, ut dapibus quam fermentum in.
          </p>
        </div>
        <div className="flex justify-end md:basis-1/2 basis-full relative">
          <Image src={paprike} alt="hero image" priority width={450}></Image>
          <div className="absolute bottom-0 left-0 bg-primaryBg blur-3xl border border-solid border-red-600 w-full h-1/3"></div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Hero;
