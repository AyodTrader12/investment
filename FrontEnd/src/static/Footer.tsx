import React from "react";
import logo from "../assets/lockedbox-removebg-preview.png";
import pic from "../assets/compliance-27923b9c92565dcd4d9750070c39f3a3.avif";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="w-full h-[80vh]  flex justify-center">
        <div className="w-[80%] h-full ">
          <div className="w-full h-[60%]  flex justify-between">
            <div className="w-[80%] h-full flex gap-7">
              <div>
                <img src={logo} alt="logo" className="w-[60%] mb-3" />
                <img src={pic} alt="pic" className="w-[30%] h-[30%] ml-10" />
              </div>
              <div className="flex gap-14">
                <div>
                  <h1 className="mb-4">Prodcuts</h1>
                  <nav className="text-[15px] cursor-pointer hover:text-blue-700 transition-all duration-300 mb-1">
                    LockBank
                  </nav>
                  <nav className="text-[15px] cursor-pointer hover:text-blue-700 transition-all duration-300 mb-1">
                    invest
                  </nav>
                  <nav className="text-[15px] cursor-pointer hover:text-blue-700 transition-all duration-300 mb-1">
                    safelock
                  </nav>
                  <nav className="text-[15px] cursor-pointer hover:text-blue-700 transition-all duration-300 mb-1">
                    Target Savings
                  </nav>
                  <nav className="text-[15px] cursor-pointer hover:text-blue-700 transition-all duration-300 mb-1">
                    Flex Naira
                  </nav>
                  <nav className="text-[15px] cursor-pointer hover:text-blue-700 transition-all duration-300 mb-1">
                    Flex Dollar
                  </nav>
                </div>
                <div>
                  <h1 className="mb-4">Company</h1>
                  <nav className="text-[15px] cursor-pointer hover:text-blue-700 transition-all duration-300 mb-1">
                    About
                  </nav>
                  <nav className="text-[15px] cursor-pointer hover:text-blue-700 transition-all duration-300 mb-1">
                    FAQS
                  </nav>
                  <nav className="text-[15px] cursor-pointer hover:text-blue-700 transition-all duration-300 mb-1">
                    Blog
                  </nav>
                </div>
                <div>
                  <h1 className="mb-4">Legal</h1>
                  <nav className="text-[15px] cursor-pointer hover:text-blue-700 transition-all duration-300 mb-1">
                    Terms
                  </nav>
                  <nav className="text-[15px] cursor-pointer hover:text-blue-700 transition-all duration-300 mb-1">
                    Privacy
                  </nav>
                  <nav className="text-[15px] cursor-pointer hover:text-blue-700 transition-all duration-300 mb-1">
                    Security
                  </nav>
                </div>
              </div>
            </div>
            <div className="w-[20%] h-full">
              <div className="flex gap-3 mb-2">
                <span>
                  <FaFacebookF />
                </span>
                <span>
                  <FaInstagram />
                </span>
                <span>
                  <FaTwitter />
                </span>
                <span>
                  <FaTiktok />
                </span>
                <span>
                  <FaYoutube />
                </span>
              </div>
              <p className="mb-2 text-[12px]">
                Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos,
                Nigeria.
              </p>
              <p className="text-blue-700 mb-3 text-[12px]">
                contact@piggyvest.com
              </p>
              <p className="text-blue-700 text-[12px]">+234 700 933 9339</p>
            </div>
          </div>
          <hr className="bg-black" />
          <div>
            <p className="mt-10 text-[12px] mb-10">
              Piggyvest (formerly piggybank.ng) is the leading online savings &
              investing platform in Nigeria. For over 8 years, our customers
              have <br />
              saved and invested billions of Naira that they would normally be
              tempted to spend.
            </p>
            <p className="text-[12px] mb-4">
              PV Capital Limited is a fund manager duly licensed by the
              Securities and Exchange
              <br /> Commission (SEC) of Nigeria.
            </p>
            <p className="text-[12px] text-blue-700">
              2016 - 2024 PiggyTech Global Limited - RC 1405222
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
