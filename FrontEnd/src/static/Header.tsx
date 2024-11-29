import React from "react";
import { Link } from "react-router-dom";

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
      <div className="w-full h-[80px] bg-inherit flex justify-center fixed">
        <div className="w-[80%] h-full  bg-slate-100 flex justify-between">
          <div className="w-[60%] h-full flex justify-between">
            <div className="w-[20%] h-full">logo</div>
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
