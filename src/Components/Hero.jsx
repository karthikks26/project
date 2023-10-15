import React from "react";
import About from "./About";
import vector2 from "../assets/vector2.svg";

const Hero = () => {
  const heroContainerStyle = {
    // background: `url(${vector2}) center/cover no-repeat`, // Set the vector2 as a background image
    // backgroundAttachment: "fixed", // Optional: Use this for a fixed background
    // minHeight: "100vh", // Set the minimum height to cover the entire viewport
  };
  return (
    <>
      <div style={heroContainerStyle}>
        <h1 className="text-[65px] font-bold text-center  ">
          Want to <span className="text-[#0076CE]">Join</span> Us?
        </h1>
        <p className="text-center text-[24px] font-normal">
          To remain with us, it is essential that you diligently follow the
          steps provided
        </p>
        <div className="grid grid-cols-3 gap-y-5 mt-10 mx-[128px] lg:grid-cols-2 md:grid-cols-1 md:place-items-center md:mt-7 xl:mx-[30px]  sm:grid-cols-1 sm:place-items-center sm:mx-[30px] xs:grid-cols-1 xs:place-items-center xs:mx-[10px]   ">
          <About
            title="Commencement of business"
            info="Invested shareholders must confirm payment and office address"
            date="Within 180 days"
            fees="₹50,000"
            penalty="for the company"
            number="1st"
            fees2="₹1,000"
            penalty2="/day for directors"
          />
          <About
            title="Auditor Appointment"
            info="Company informs new auditor and submits ADT.1 form to ROC."
            date="Within 30 days"
            fees="₹300"
            penalty="₹ per month."
            number="2nd"
          />
          <About
            title="DIN eKYC"
            info="Directors share personal information for identification & verification"
            date="Every Year"
            fees="₹5000"
            penalty="one time"
            number="3rd"
          />
          <About
            title="DPT-3"
            info="Companies report money taken from people to ROC; auditors confirm details."
            date="Within 30 days"
            fees="₹300"
            penalty="per month."
            number="4th"
          />
          <About
            title="MCA Form AOC-4"
            info="It's like an official report card for a company's documents"
            date="On or Before 30th November"
            fees="₹200"
            penalty="per day"
            number="5th"
            limit="(No upper limit)*"
          />
          <About
            title="MCA Form MGT-7"
            info="Companies must annually report activities and finances to the registrar."
            date="On or Before 31st December"
            fees="₹200"
            penalty="per day"
            number="6th"
            limit="(No upper limit)*"
          />
        </div>
        <p className="mx-[128px]">
          * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200{" "}
          <span className="font-bold text-[17px]">every day</span> until you
          file the form. There is no maximum penalty amount. So, if you don't
          file the form for a year, you will owe ₹73,000 per form
        </p>
      </div>
    </>
  );
};

export default Hero;
