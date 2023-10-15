import React, { useEffect, useState } from "react";
import info from "./info";
import { Link, useParams } from "react-router-dom"; // Import useParams
import Main from "./Components/Second";
import Navbar from "./Components/Navbar";
import cal from "./assets/calender.svg";
import star from "./assets/star.svg";
import ig from "./assets/ig.png";
import Recommended from "./Components/Recommended";
import Footer from "./Components/Footer";

const Details = () => {
  const [image, setImage] = useState("");

  const { id } = useParams(); // Use useParams to get the "id" parameter

  function getpersoninfo(id) {
    return info.find((person) => person.id === parseInt(id));
  }

  const person = getpersoninfo(id);
  if (!person) {
    return <div>User not found </div>;
  }
  useEffect(() => {
    setImage(person.image);
  }, []);
  console.log(person.image);
  return (
    <>
      <Navbar />
      <div className=" flex px-[127px] mt-[100px] gap-x-40">
        <div className="left   ">
          <h1 className=" text-[35px] font-bold ">{person.name}</h1>
          <p className="text-[20px] font-normal ">
            I am here to provide my expertise in accounting and finance, which
            includes financial statements, economics, and auditing, all to
            assist you effectively
          </p>
          <div className=" font-normal flex my-5">
            <img src={star} />
            {person.rating}({person.reviewCount})
          </div>
          <div className=" shadow-2xl rounded-[20px] w-[515px] p-3">
            <div className=" flex justify-between">
              <p className=" text-[20px] font-normal">Basic to complex tasks</p>
              <p className=" font-bold text-[24px]">{person.price}</p>
            </div>
            <p className=" text-[20px] flex">
              <img src={cal} />
              {person.deliveryTime}
            </p>
            <div className="flex justify-between mt-2">
              <button className=" text-[#FFF] font-bold px-[20px] py-[10px] rounded-[10px] bg-[#0076CE]">
                Request Proposal
              </button>
              <button className="text-[#0076CE] font-bold px-[20px] py-[10px] rounded-[10px] bg-[#FFF] border-[#0076CE] border-2">
                Chat with me
              </button>
            </div>
          </div>

          <div className=" shadow-md rounded-[20px] w-[515px] p-3 mt-3">
            <h1 className=" text-[35px] font-bold ">What people say?</h1>
            <p className="text-[20px] font-normal  ">
              I cannot express enough gratitude for the support Micheal has
              provided in managing my personal finances. Their attention to
              detail and deep understanding of financial markets has ensured
              that my investments are in safe hands. I highly recommend their
              services to anyone seeking financial guidance.
            </p>
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col items-start">
          <div className="w-[733px] h-[412px]">
            <img src={ig} />
          </div>
          <p className="text-[35px] font-bold">About {person.name}</p>
          <div className="flex gap-12 text-[16px] ">
            <div className=" flex flex-col ">
              <p className="text-[#999999]">From</p>
              <p>{person.about.from}</p>
            </div>
            <div className=" flex flex-col">
              <p className="text-[#999999]">PARTNER SINCE</p>
              <p>{person.about.partnerSince}</p>
            </div>
            <div className=" flex flex-col">
              <p className="text-[#999999]">AVERAGE RESPONSE TIME</p>
              <p>{person.about.averageResponseTime}</p>
            </div>
          </div>

          <p className="text-[#999999] text-[16px] mt-5">About</p>
          <p className="text-[16px]">{person.about.description}</p>
          <div className=" flex gap-12 justify-between">
            <div className="flex flex-col ">
              <p className="text-[#999999]">SERVICES I OFFER</p>
              {person.about.services.map((s) => {
                return <li>{s}</li>;
              })}
            </div>
            <div>
              <p className="text-[#999999]">WHY ME?</p>
              {person.about.benefits.map((s) => {
                return <li>{s}</li>;
              })}
            </div>
          </div>
        </div>
      </div>
      <Recommended />
      <Footer />
    </>
  );
};

export default Details;
