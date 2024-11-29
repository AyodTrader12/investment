import React from "react";
import { Link } from "react-router-dom";
import pic from "../assets/lockedbox-removebg-preview.png";
const Header = () => {
  const navs = [
    { id: 1, path: "/save", title: "Save" },
    { id: 2, path: "/invest", title: "Invest" },
    { id: 1, path: "/stories", title: "Stories" },
    { id: 4, path: "/faqs", title: "FAQs" },
    { id: 5, path: "/resources", title: "Resources" },
  ];
  return (
    <div>
      <div className="w-full h-[80px]  flex justify-center fixed backdrop-blur z-10">
        <div className="w-[80%] h-full   flex justify-between">
          <div className="w-[60%] h-full flex justify-between">
            <Link to={"/"}>
              <div className="w-[50%] h-full flex items-center">
                <img src={pic} alt="img" className="" />
              </div>
            </Link>
            <div className="w-[60%] h-full flex gap-5 items-center">
              {navs.map((el) => (
                <Link to={el.path}>{el.title}</Link>
              ))}
            </div>
          </div>
          <div className="w-[30%] h-full flex gap-3 items-center">
            <button className="w-[100px] h-[50px] border border-black rounded-lg font-semibold">
              Sign in
            </button>
            <button className="bg-slate-900 rounded-lg w-[190px] h-[48px] text-white font-semibold ">
              Create free account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
