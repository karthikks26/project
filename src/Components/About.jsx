import React from "react";

const About = (props) => {
  const { title, info, date, penalty, number, fees, fees2, penalty2, limit } =
    props;
  return (
    <>
      <div className="w-[405px] rounded-[20px] shadow shadow-[rgba(133,133,167)] p-[32px] relative lg:w-auto  ">
        <h2 className="text-[20px] font-bold text-center">{title}</h2>
        <p className="text-[16px] font-normal text-center"> {info}</p>
        <div className="rounded-[18px] bg-[#F4F4F4]  flex gap-2 p-2 mt-1 h-[113px] justify-between">
          <div>
            <p className="font-bold text-[#0076CE] text-[18px]">Due date</p>
            <p className="text-[16px]">{date}</p>
          </div>
          <div>
            <p className="text-[18px] text-[#F66] font-bold">Penalty fees</p>
            <p>
              <span className="font-bold">{fees}</span>
              {penalty}
            </p>
            <span>{limit}</span>
            <p>
              <span className="font-bold">{fees2}</span>
              {penalty2}
            </p>
          </div>
        </div>
        <div className="font-bold text-[24px] bg-[#0076CE] text-[#FFF] w-[46px] h-[46px] rounded-[10px] text-center absolute top-0 left-0">
          {number}
        </div>
      </div>
    </>
  );
};

export default About;
