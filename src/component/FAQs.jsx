import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
function FAQs() {
  const faqsData = [
    {
      qus: "What credit score do I need to apply for a credit card?",
      ans: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
    },
    {
      qus: "What credit score do I need to apply for a credit card?",
      ans: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
    },
    {
      qus: "What credit score do I need to apply for a credit card?",
      ans: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
    },
    {
      qus: "What credit score do I need to apply for a credit card?",
      ans: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
    },
  ];
  return (
    <>
      <section>
        <>
          <h2 className="text-center text-2xl lg:text-3xl font-bold">FAQs</h2>

          <div className="w-[90%] mx-auto">
            <Accordion>
              {faqsData.map(({ qus, ans }, i) => (
                <AccordionItem
                  key={i}
                  className="text-white p-5 space-y-5"
                  title={<span className="text-white text-base sm:text-xl md:text-2xl lg:text-3xl ">{qus}</span>}
                  aria-label={qus}
                >
                  <span className="text-secondary-500">{ans}</span>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </>
      </section>
    </>
  );
}

export default FAQs;
