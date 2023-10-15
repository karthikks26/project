import React from "react";
import lb1 from "../assets/lb1.svg";
import lb2 from "../assets/lb2.svg";
import lb3 from "../assets/lb3.svg";
import lb4 from "../assets/lb4.svg";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
const Section = () => {
  return (
    <>
      <div className="flex items-center justify-between px-[128px] lg:px-[90px] lg:mx-[90px] lg:flex-col lg:mt-8 md:flex-col md:px-5 sm:flex-col sm:px-5 xs:flex-col xs:px-2">
        <div className="left">
          <h1 className="font-bold text-6xl xs:text-3xl">
            <span className="text-[#0076CE]">All-in-One platform </span>
            <br /> that Makes Easier
          </h1>
          <p className="text-[24px] font-normal leading-normal w-[604px] xs:text-[15px]">
            We are more than a platform; We are your success partner. Discover
            our services to achieve your business and educational goals
          </p>

          <div className="grid grid-cols-2 xs:grid-cols-1 xs:place-items-center">
            <div className="flex gap-4">
              <img src={lb1} />
              <p className="w-[205px] text-[20px]">
                <span className="font-bold ">SEARCH</span> for vital company
                information{" "}
              </p>
            </div>

            <div className="flex gap-4">
              <img src={lb3} />
              <p className="w-[205px] text-[20px]">
                <span className="font-bold ">CONNECT</span> with the resources
                to meet your business needs
              </p>
            </div>
            <div className="flex gap-4">
              <img src={lb2} />
              <p className="w-[205px] text-[20px]">
                <span className="font-bold ">RESEARCH </span> and generate
                reports that drive growth
              </p>
            </div>
            <div className="flex gap-4">
              <img src={lb4} />
              <p className="w-[205px] text-[20px]">
                <span className="font-bold ">ACADEMY</span> to give you the
                skills for success in your career
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="flex flex-row-reverse items-center xs:w-[200px] xs:justify-center xs:mt-5 xs:translate-x-[10%]  ">
            <img src={p1} className="w-[200px]" />
            <div>
              <div className="bg-[#EFD9F9] py-2 px-16 rounded-[15px 15px 3px 15px] font-normal text-[14px] font-sans  flex-1 rounded-tl-lg rounded-tr-lg rounded-bl-lg lg:px-2 lg:py-1 ">
                Hey, check out loreumipsum services.{" "}
              </div>
              <div className="bg-[#EFD9F9] py-2 px-16 rounded-[15px 15px 3px 15px] font-normal text-[14px] font-sans mt-[10px] rounded-tl-lg rounded-tr-lg rounded-bl-lg lg:px-2 lg:py-1 ">
                Hey, check out loreumipsum services.{" "}
              </div>
              <div className="bg-[#EFD9F9] py-2 px-16 rounded-[15px 15px 3px 15px] font-normal text-[14px] font-sans  mt-[10px] rounded-tl-lg rounded-tr-lg rounded-bl-lg lg:px-2 lg:py-1 ">
                Hey, check out loreumipsum services.{" "}
              </div>
              <div className="bg-[#EFD9F9] py-2 px-16 rounded-[15px 15px 3px 15px] font-normal text-[14px] font-sans mt-7 rounded-tl-lg rounded-tr-lg rounded-bl-lg lg:px-2 lg:py-1 ">
                Hey, check out loreumipsum services.{" "}
              </div>
              <div className="bg-[#EFD9F9] py-2 px-16 rounded-[15px 15px 3px 15px] font-normal text-[14px] font-sans  mt-3 rounded-tl-lg rounded-tr-lg rounded-bl-lg lg:px-2 lg:py-1 ">
                Hey, check out loreumipsum services.{" "}
              </div>
            </div>
          </div>
          <img src={p2} />
        </div>
      </div>
    </>
  );
};

export default Section;
