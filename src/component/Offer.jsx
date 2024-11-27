import React from "react";

function Offer() {
  const offerData = [
    {
      title: "Cardano Debit-Cards",
      description:
        "Cardano, simplified. The debit card that makes crypto spending easy.",
      icon: "offerImg1.svg",
    },
    {
      title: "On & Off Ramp",
      description: "Fiat meets crypto, effortlessly buy, sell, and manage.",
      icon: "offerImg2.svg",
    },
    {
      title: "Solutions for business",
      description:
        "Empowering businesses with effortless crypto payments and seamless fiat solutions.",
      icon: "offerImg3.svg",
    },
  ];
  return (
    <>
      <section
        className="space-y-12 w-[100%]
         "
      >
        <div className="w-[90%] mx-auto mt-20">
          <h2
            className="font-bold leading-tight mt-8
            
           text-center text-2xl lg:text-3xl"
          >
            What do we offer?
          </h2>
        </div>

        <div className="grid grid-cols-1   md:grid-cols-3 gap-8 w-[90%] mx-auto">
          {offerData.map((item, i) => (
            <div key={i} className="flex gap-4 items-center">
              <div className="max-w-12 max-h-12 w-4/5">
                <figure>
                  <img src={item.icon} className="w-30 h-30" />
                </figure>
              </div>
              <div>
                <h3 className="font-bold text-lg  ">{item.title}</h3>
                <p className=" text-[#ADB2B1] text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Offer;
