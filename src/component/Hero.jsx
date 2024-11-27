import React from "react";
import { Button } from "@nextui-org/react";
function Hero() {
  return (
    <>
      <section className="flex flex-col-reverse sm:flex-row md:flex-row xl:flex-row gap-6 sm:gap-10 md:gap-12 w-[90%] mx-auto mt-0 sm:mt-28 md:mt-28 lg:mt-28">
        <div className="flex justify-center flex-col space-y-10 w-[40%">
          <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Spend your Cardano anywhere, anytime.
          </h3>
          <div className="w-[100%] sm:w-[80%] md:w-[80%] lg:w-[80%] ">
            <p className="text-xl text-[#adb2b1] ">
              Our user-friendly platform enables businesses and individuals to
              seamlessly convert and spend their crypto for everyday purchases.
            </p>
          </div>

          <span>
            <Button color="primary" variant="solid" radius="full">
              Get Started <img src="arow.svg" alt="" className="w-5" />
            </Button>
          </span>
        </div>
        <div className="">
          <figure>
            <img src="hero-card.png" alt="" className="w-[1000px] " />
          </figure>
        </div>
      </section>
    </>
  );
}

export default Hero;
