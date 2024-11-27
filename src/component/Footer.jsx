import React from "react";
const link1 = ["Investors", "Features", "Book a demo", "Security "];
const link2 = ["Credits Cards", "Gift Cards", "Savings accounts", "NFT"];
const link3 = ["Free rewards", "Documentation", "Affiliate program"];
const link4 = ["Changelog", "License", "Site Maps", "News"];

const aboutData = (title, link) => (
  <div>
    <h4 className="mb-4 text-xl font-bold">{title}</h4>
    <ul className="space-y-1 text-[#ADB2B1]">
      {link.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
);
function Footer() {
  return (
    <>
      <footer className="w-[100%] bg-[#2928343D] py-8 mt-20 pb-16">
        <div className="grid ps-8 sm:ps-0 md:ps-0 lg:ps-0 xl:ps-0 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mx-auto w-[90%] gap-4">
          <div className="col-span-2 space-y-2">
            <img src="footerlogo.svg" alt="" />
            <p className="text-[#ADB2B1]">
              Discover the power of our secure and rewarding credit cards
            </p>
          </div>
          {aboutData("About us", link1)}
          {aboutData("Products", link2)}
          {aboutData("Useful Links", link3)}
          {aboutData("Social", link4)}
        </div>
      </footer>
    </>
  );
}

export default Footer;
