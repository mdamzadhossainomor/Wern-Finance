import React from 'react'
import { Button } from "@nextui-org/react";
function PerfectCard() {
  return (
    <>
      <section>
        <div className="grid grid-cols-2 w-[90%] mx-auto mt-14 gap-8">
         
          <div className="col-span-2 md:col-span-1 flex justify-center">
            <div className='flex md:h-600px justify-center items-center'>
              <figure className="w-full md:w-auto">
                <img
                  src="PerfectCard.svg"
                  alt="Perfect Card"
                  className="w-full h-auto max-w-[604px] object-contain"
                />
              </figure>
            </div>
          </div>

       
          <div className="col-span-2 md:col-span-1 space-y-8 flex flex-col justify-center">
            <h3 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-bold">
              Find the Perfect Card for You
            </h3>
            <div>
              <p className="text-base sm:text-lg md:text-xl text-[#adb2b1] leading-relaxed">
                Unlocking the Power of Crypto, Both Virtually and Physically.
                Manage your crypto effortlessly and spend it seamlessly with
                Wern. Our virtual card allows for instant and secure online
                transactions, while the physical Wern Card empowers you to
                convert and spend your crypto at millions of merchants
                worldwide. Experience the flexibility and convenience of both
                options, all within the secure and user-friendly Wern ecosystem.
              </p>
            </div>
            <div>
              <Button
                color="primary"
                variant="solid"
                radius="full"
                className="flex items-center space-x-2"
              >
                Learn More 
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PerfectCard