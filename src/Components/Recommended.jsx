import React from "react";
import ig from "../assets/ig.png";
import star from "../assets/star.svg";

const Recommended = () => {
  return (
    <>
      <h1 className=" text-[35px] font-bold my-3 px-[127px] ">
        Recommended for you
      </h1>

      <div className="px-[127px] flex gap-6 ">
        <div className="w-[405px] h-[477px] shadow-md">
          <div className="h-[244px]">
            <img src={ig} />
          </div>
          <div className="px-[23px] my-2">
            <div className="text-[20px] font-bold  flex  justify-between">
              <p>Michael Jackson</p>
              <p>₹4,370</p>
            </div>
            <p className=" font-normal text-[16px] my-2">
              I will do business evaluation and corporate services
            </p>
            <p className="flex my-2">
              <img src={star} />
              <span>4.8 (89)</span>
            </p>
            <button className=" text-[#FFF] font-bold px-[20px] py-[10px] rounded-[10px] bg-[#0076CE]">
              View services
            </button>
          </div>
        </div>
        {/* box2 */}

        <div className="w-[405px] h-[477px] shadow-md">
          <div className="h-[244px]">
            <img src={ig} />
          </div>
          <div className="px-[23px] my-2">
            <div className="text-[20px] font-bold  flex  justify-between">
              <p>Stevie Wonder</p>
              <p>₹4,263</p>
            </div>
            <p className=" font-normal text-[16px] my-2">
              I will do business evaluation and corporate services
            </p>
            <p className="flex my-2">
              <img src={star} />
              <span>5.0 (62)</span>
            </p>
            <button className=" text-[#FFF] font-bold px-[20px] py-[10px] rounded-[10px] bg-[#0076CE]">
              View services
            </button>
          </div>
        </div>

        {/* box3 */}

        <div className="w-[405px] h-[477px] shadow-md">
          <div className="h-[244px]">
            <img src={ig} />
          </div>
          <div className="px-[23px] my-2">
            <div className="text-[20px] font-bold  flex  justify-between">
              <p>Ray Charles</p>
              <p>₹2,586</p>
            </div>
            <p className=" font-normal text-[16px] my-2">
              I will do business evaluation and corporate services
            </p>
            <p className="flex my-2">
              <img src={star} />
              <span>4.3 (189)</span>
            </p>
            <button className=" text-[#FFF] font-bold px-[20px] py-[10px] rounded-[10px] bg-[#0076CE]">
              View services
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommended;
