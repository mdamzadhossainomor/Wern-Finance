import React from "react";

function Review() {
  const reviewData = [
    {
      quteImg: "qute.svg",
      description:
        "Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings.",

      userProfile: "user1.svg",
      userName: "Hadid Khan",
      prof: "UIUX Designer",
    },
    {
      quteImg: "qute.svg",
      description:
        "It's is both attractive and highly adaptable. It's exactly what I've been looking forefinitely wo lorem ipsum dolorth the investment.",

      userProfile: "user2.svg",
      userName: "Wade Warren",
      prof: "Web Designer",
    },
    {
      quteImg: "qute.svg",
      description:
        "I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. ",

      userProfile: "uesr3.svg",
      userName: "Jenny Wilson",
      prof: "Trust Administrator",
    },
  ];

  return (
    <>
      <section className="w-[100%] mt-8">
        <div className=" mx-auto grid grid-cols-3 w-[90%] gap-5">
          {reviewData.map((item, i) => (
            <div
              key={i}
              className=" col-span-3 sm:col-span-3 md:col-span-1 w-[100%] mx-auto  bg-[#27322f70] p-6 rounded-3xl "
            >
              <div className="space-y-8">
                <div>
                  <img src={item.quteImg} alt="" />
                </div>
                <p>{item.description}</p>
                <div className="flex gap-5 items-center">
                  <div>
                    <img src={item.userProfile} alt="" />
                  </div>
                  <div className="flex flex-col justify-center ">
                    <h4 className="text-xl">{item.userName}</h4>
                    <p className="text-[#ADB2B1]">{item.prof}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Review;
