import React from "react";
import Wrapper from "../layout/Wrapper";

const Hero = () => {
	return (
		<Wrapper>
			<section className="relative flex flex-wrap justify-center items-center mx-auto gap-8 sm:gap-0 md:h-[50vh] pt-10 mt-10">
				<div className="md:basis-1/2 basis-full ">
					<div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-sm p-2 rounded-lg">
						<h1>Health Network</h1>
						<h2>Mostly healthy food & training network</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Aenean semper lectus odio, ut dapibus quam
							fermentum in.
						</p>
					</div>
				</div>
				<div className="md:basis-1/2 basis-full"></div>
			</section>
		</Wrapper>
	);
};

export default Hero;
