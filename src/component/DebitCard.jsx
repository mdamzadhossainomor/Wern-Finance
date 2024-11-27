import React from 'react'
import { Button } from "@nextui-org/react";
function DebitCard() {
  return (
    <>
      <section className="flex flex-col-reverse sm:flex-row md:flex-row xl:flex-row gap-6 sm:gap-10 md:gap-12 w-[90%] mx-auto  sm:mt-28 md:mt-28 lg:mt-28 mt-10">
        <div className="flex justify-center flex-col space-y-10 w-[40%">
          <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold
          ">
            Wern Debit Card
          </h3>
          <div className="w-[100%] sm:w-[80%] md:w-[80%] lg:w-[80%] ">
            <p className="text-xl text-[#adb2b1] ">
              More than just a card, it's a bridge to a new financial
              experience. Embrace the simplicity and security of spending your
              Cardano with the Wern Card.
            </p>
          </div>

          <span>
            <Button color="primary" variant="solid" radius="full">
              Create New Card <img src="arow.svg" alt="" className="w-5" />
            </Button>
            <p>Will be available soon</p>
          </span>
        </div>
        <div className="max-w-[695px] max-h-[545px]">
          <figure>
            <img src="DebitCard.svg" alt="" className="w-[1000px] " />
          </figure>
        </div>
      </section>
    </>
  );
}

export default DebitCard