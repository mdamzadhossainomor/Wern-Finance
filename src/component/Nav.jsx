import React from "react";
import { Button } from "@nextui-org/react";
const Nav = () => {
  return (
    <>
      <div className=" w-[100%]h-[20px]">
        <div className="flex items-center justify-between w-[90%] mx-auto">
          <div>
            <figure>
              <img src="logo.svg" alt="" className="w-52" />
            </figure>
          </div>

          <div>
            
            <Button color="primary" variant="bordered" radius="full">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
