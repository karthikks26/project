import React, { useState } from "react";
import img from "../assets/logo.png";
import icon from "../assets/icon.svg";
import Main2 from "./Main2";
import vector1 from "../assets/vector1.svg";
import menu from "../assets/menu.svg";
import Navbar from "./Navbar";

const Main = () => {
  const bg = {
    background:
      "linear-gradient(75deg, #FEDDEE 0%, #FCF6FC 31.77%, #C5EAED 64.58%, #FDDDFE 100%)",
    zIndex: -1,
  };

  return (
    <div style={bg} className="px-[128px] lg:px-[90px] md:px-6 sm:px-1 xs:px-2">
      <Navbar />
      <Main2 />
    </div>
  );
};

export default Main;
