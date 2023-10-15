import React, { useState } from "react";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import info from "../info";
import { Link } from "react-router-dom";
const Main2 = () => {
  const [search, setSearch] = useState("");
  const [sugg, setsugg] = useState([]);
  const handlesearch = (e) => {
    const query = e.target.value;
    console.log(query);
    setSearch(query);
    const matchedSuggestions = info.filter((person) => {
      console.log(person);
      return person.name.toLowerCase().includes(query.toLowerCase());
    });
    setsugg(matchedSuggestions);
  };

  return (
    <>
      <div className="main flex  md:flex-col md:place-items-center sm:flex-col sm:items-center xs:flex-col xs:items-center ">
        <div className="left mt-[225px]  md:mt-40 sm:mt-24 xs:mt-16 ">
          <h1 className="font-bold text-[65px] w-[670px] leading-[123.077%]  xs:w-[300px] xs:text-[30px] translate-x-10 ">
            Find <span className="text-[#0076CE]">Partners</span> (CAs)
            <br /> available online
          </h1>
          <p className="w-[676px] h-[55px] xs:w-[300px] translate-x-10">
            <span className="text-[#616161] font-sans font-bold text-[20px]">
              CONNECT
            </span>{" "}
            with us where your services are listed and visible to a myriad
            <br /> of businesses seeking CA’s for compliance support
          </p>
          <input
            placeholder="Search by name"
            className="bg-[#FFF] h-[20p] w-[384px] p-[20px] border-[1px] border-[#BFBFBF] border-solid
            md:[300px] md:p-[14px] xs:w-[250px] xs:mt-20
            
            "
            value={search}
            onChange={handlesearch}
          />

          <button
            className="text-[#FFF] bg-[#0076CE] font-bold h-[73px] w-[186px]   md:h-[50px]"
            onClick={handlesearch}
          >
            Search
          </button>
          {sugg.map((person) => {
            return (
              <li id={person.id} className="list-none  ml-16">
                <Link to={`/details/${person.id}`}> {person.name}</Link>
              </li>
            );
          })}
        </div>
        <div className="right flex w-[629px] mt-[210px] gap-[10px]  md:mt-10 sm:mt-5 xs:mt-3 xs:translate-x-[27%]   ">
          <div className="pt-[83px] ">
            <img src={pic1} className="xs:w-20" />
          </div>
          <div>
            <img src={pic2} className="xs:w-20" />
          </div>
          <div className="pt-[41.83px] xs:w-20 ">
            <img src={pic3} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main2;
