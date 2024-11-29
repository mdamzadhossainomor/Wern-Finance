import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      qus: "How can I create a personal budget?",
      ans: "To create a personal budget, list your income and expenses. Prioritize essential expenses like rent, food, and loan repayments, and reduce non-essential spending. Focus on saving or investing any surplus funds.",
    },
    {
      qus: "What is the best way to invest money?",
      ans: "The best way to invest depends on your financial goals and risk tolerance. Options include the stock market, mutual funds, fixed deposits, or real estate. Always research thoroughly before investing.",
    },
    {
      qus: "What should I consider before taking a loan?",
      ans: " Before taking a loan, evaluate the interest rate, repayment terms, hidden charges, and your ability to repay on time. Compare different lenders to find the most favorable terms.",
    },
    {
      qus: "Why is it important to have an emergency fund?",
      ans: "An emergency fund provides financial security during unexpected events like job loss, medical emergencies, or urgent repairs. It helps you avoid debt and maintain financial stability.",
    },
  ];

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-[90%] mx-auto p-4  mt-6">
      <h1 className="text-2xl font-bold text-center mb-6">FAQs</h1>
      {questions.map((item, index) => (
        <div
          key={index}
          className="border 
                    text-white border-none rounded-lg mb-4 overflow-hidden"
        >
          <hr />
          <div
            onClick={() => toggleQuestion(index)}
            className="cursor-pointer  text-white text-2xl p-4 font-medium "
          >
            {item.qus}
          </div>
          <div
            className={`transition-all duration-500 ease-in-out ${activeIndex === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
          >
            
            <div className="p-4 text-[#ADB2B1]">{item.ans}</div>
          </div>
        </div>
      ))}
      <hr />
    </div>
  );
};

export default FAQ;
