import React from "react";
import Header from "../static/Header";
import pix1 from "../assets/applelogo-removebg-preview.png";
import pix from "../assets/playstoe logo.webp";
import pix2 from "../assets/iphoneInvest.avif";
import pix4 from "../assets/invest1.png";
import pix5 from "../assets/invest2.png";
import pix6 from "../assets/invest3.png";
import pix7 from "../assets/t shop 7.webp";
import pix3 from "../assets/iphoneInvest.avif";
import pic1 from "../assets/pic1.jpeg";
import pic2 from "../assets/pic2.jpeg";
import pic3 from "../assets/pic3.jpeg";
import pix8 from "../assets/applellogblack.png";
import Featured from "../component/Featured";

const Invest = () => {
  const card = [
    {
      id: 1,
      title: "Investments Simplified",
      description:
        "With minimum investments starting as low as N5,000, investment is no longer out of reach. Everyone is welcome.",
      img: <img src={pix4} alt="img" />,
    },
    {
      id: 2,
      title: "Invest confidently",
      description:
        "We work with leading licensed investment houses such as ARM, AIICO and Stanbic.",
      img: <img src={pix5} alt="img" />,
    },
    {
      id: 3,
      title: "Diversify your portfolio",
      description:
        "Invest in various industries such as fixed income instruments, agriculture, transportation, etc.",
      img: <img src={pix6} alt="img" />,
    },
  ];
  return (
    <div className="">
      {/* <div className="">
        <Header />
      </div> */}
      <div className="w-full h-[90vh] bg-[#7913E5] flex justify-center">
        <div className="w-[80%] h-full  pt-24 flex justify-between">
          <div className="w-[40%] h-full  ">
            <h1 className="font-bold text-[40px] mb-5 pt-24 text-white">
              Invest on the go
            </h1>
            <div className="w-[170px] h-[45px] bg-slate-50 rounded-3xl flex items-center justify-center mb-5">
              up to 35% returns
            </div>
            <p className="text-white text-[18px] mb-5">
              Invest securely and confidently on the go.
              <br /> Up to 35% returns, 6-12 month duration.
            </p>
            <div className="flex gap-5">
              <div className="w-[40%] h-[45px] text-white rounded-lg bg-slate-900 flex gap-1 items-center font-semibold hover:bg-black cursor-pointer">
                <img src={pix1} alt="img" className="w-[20%] h-[70%]" />
                <p>Get it on iphone</p>
              </div>
              <div className="w-[38%] h-[45px] text-white rounded-lg bg-slate-900 flex gap-1 items-center font-semibold hover:bg-black cursor-pointer ">
                <img src={pix} alt="img" className="w-[20%] h-[70%] ml-1" />
                <p>Get on Android</p>
              </div>
            </div>
          </div>
          <div className="w-[50%] h-full ">
            <img src={pix2} alt="img" className="w-[80%] h-[100%]" />
          </div>
        </div>
      </div>
      <div className="w-full h-[25vh] bg-slate-50 flex items-center justify-center flex-col">
        <h1 className="text-[50px] font-bold text-center">
          Simple investments with great returns
        </h1>
        <p>Investments are made readily accessible to everyone</p>
      </div>
      <div className="w-full h-[85vh] bg-slate-50 flex justify-center">
        <div className="w-[80%] h-[90%]  flex gap-7">
          {/*          
            <div className="w-[30%] h-f"> */}
          {card.map((ib) => (
            <div key={ib.id} className="w-[30%] h-full bg-white rounded-lg p-7">
              <div className="font-bold text-[35px] mb-3 text-[#8A13E5]">
                {ib.title}
              </div>
              <div className="mb-16">{ib.description}</div>
              <div>{ib.img}</div>
            </div>
          ))}
          {/* </div> */}
        </div>
      </div>
      <div className="w-full h-[60vh] bg-slate-50 flex justify-center items-center ">
        <div className="w-full h-[90%] flex justify-between">
          <div className="w-[60%] h-full bg-[#8A13E5]">
            <h1 className="text-[45px] font-bold mb-2 text-white mt-20 text-center">
              We’ve made it easier for <br />
              anyone to get started.
            </h1>
            <p className="text-white text-center">
              Finally, you can access pre-vetted low-medium risk primary and
              secondary
              <br /> investment opportunities easily with any amount <br />
              you have. No hidden fees/charges. Thorough due diligence and{" "}
              <br />
              pre-vetting on all investments are carried out for maximum safety.
            </p>
          </div>
          <div className="w-[50%] h-full">
            <img src={pix7} className="w-full h-full" />
          </div>
        </div>
      </div>
      <div className="bg-slate-50 w-full h-[20vh] flex items-center justify-center">
        <h1 className="text-[45px] font-bold ">
          Recent Opportunities on Investify
        </h1>
      </div>
      <div className="w-full h-[85vh] bg-slate-50"></div>

      <div className="w-full h-[70vh] bg-slate-50 flex justify-center mb-10">
        <div className="w-[80%] h-full  flex gap-10">
          <div className="w-[40%] h-full">
            <img src={pix3} alt="img" />
          </div>

          <div className="w-[40%] h-full">
            <div className="flex gap-y-16 mb-5 mt-24">
              <img
                src={pic1}
                alt="img"
                className="rounded-full w-[20%] h-[10%]"
              />
              <img
                src={pic2}
                alt="img"
                className="rounded-full w-[20%] h-[10%]"
              />
              <img
                src={pic3}
                alt="img"
                className="rounded-full w-[20%] h-[10%]"
              />
              <img
                src={pic1}
                alt="img"
                className="rounded-full w-[20%] h-[10%]"
              />
            </div>
            <div>
              {" "}
              <h1 className=" text-[30px] font-semibold mb-5">
                Join 5+ million people who save <br />
                and invest with us
              </h1>
            </div>
            <div className="flex gap-5">
              <div className="w-[39%] h-[40px]  rounded-lg border-2 flex gap-1 items-center font-medium  cursor-pointer">
                <img src={pix8} alt="img" className="w-[25%] h-[60%]" />
                <p>Get it on iphone</p>
              </div>
              <div className="w-[38%] h-[40px]  rounded-lg border-2 flex gap-2 items-center font-medium cursor-pointer ">
                <img src={pix} alt="img" className="w-[15%] h-[60%] ml-1" />
                <p>Get on Android</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Featured />
      </div>
    </div>
  );
};

export default Invest;
