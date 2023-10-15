import React from "react";
import img from "../assets/image 1.png";
import fb from "../assets/fb.svg";
import insta from "../assets/insta.svg";
import whatsapp from "../assets/whatsapp.svg";
import link from "../assets/link.svg";

const Footer = () => {
  return (
    //background: var(--gradient-footer, linear-gradient(96deg, #0076CE -7.82%, #9400D3 143.96%));
    <>
      <div className="h-[341px] bg-gradient-to-b from-[#0076CE] to-[#9400D3] px-[128px] pt-6 text-[14px] text-[#FFF] font-sans md:px-[60px]   xs:px-1 xs:h-auto sm:w-auto">
        <div className="flex justify-between sm:grid sm:grid-cols-3 sm:place-content-center xs:grid xs:grid-cols-2 xs:place-items-center ">
          <div>
            <img src={img} className=" m-auto" />
            <p
              className="font-normal w-[272px] text-[14px] sm:w-auto xs:w-auto
            "
            >
              India's first platform dedicated to simplifying partner search
            </p>
          </div>

          <div>
            <h3 className="font-bold mr-4">COMPANY</h3>
            <ul className="list-none text-[16px] mt-4">
              <li>About </li>
              <li className="my-3">Pricing</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mr-4">SOLUTIONS</h3>
            <ul className="list-none text-[16px] mt-4">
              <li>Search </li>
              <li className="my-3">Connect</li>
              <li>Research</li>
              <li className="my-3">Academy</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mr-4">RESOURCES</h3>
            <ul className="list-none text-[16px] mt-4">
              <li>Blogs</li>
              <li className="my-3">Forms</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mr-4">SUPPORT</h3>
            <ul className="list-none text-[16px] mt-4">
              <li>Help</li>
              <li className="my-3 ">
                Contact
                <br /> Us
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mr-4">LEGAL</h3>
            <ul className="list-none text-[16px] mt-4">
              <li>Privacy</li>
              <li className="my-3">Terms</li>
              <li>Accessibility</li>
            </ul>
          </div>
        </div>
        <hr className="mt-7 sm:hidden" />
        <div className="flex justify-between items-center ">
          <div className="mt-10 xs:w-[200px]  xs:px-2 ">
            Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
            Maharashtra
          </div>
          <div className=" flex gap-2 sm:flex-col sm:translate-y-[-200%] ">
            <img src={fb} />
            <img src={insta} />
            <img src={whatsapp} />
            <img src={link} />
          </div>
        </div>
      </div>
      <footer className="bg-black text-[#FFF]  font-normal h-[57px] my-auto flex items-center justify-center">
        Registered trademark of India Private Limited © 2023 loerumipsum Inc.
        All Rights Reserved
      </footer>
    </>
  );
};

export default Footer;
