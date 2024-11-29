import pix from "../assets/playstoe logo.webp";
import pix1 from "../assets/applelogo.png";
import pix2 from "../assets/logs.png";
import { MdLock } from "react-icons/md";
import { BsArrowReturnRight } from "react-icons/bs";
const Home = () => {
  return (
    <div>
      <div className="w-full h-[95vh] bg-slate-100 flex justify-center">
        <div className="w-[80%] h-full  pt-24 flex justify-between">
          <div className="w-[40%] h-full  ">
            <button className="w-[300px] bg-blue-600 h-[40px] text-white rounded-3xl font-semibold hover:bg-slate-950 transition-all duration-300 mt-28">
              The 2024 LockBox Savings Report
            </button>
            <h1 className="font-bold text-[40px] mb-5">
              The Better Way to
              <br />
              Save & Invest
            </h1>
            <p className="text-[20px] mb-5">
              LockBox helps over 5 million customers <br />
              achieve their financial goals by helping <br />
              them save and invest with ease.
            </p>
            <div className="flex gap-5">
              <div className="w-[35%] h-[40px] text-white rounded-lg bg-slate-900 flex gap-1 items-center font-semibold hover:bg-black cursor-pointer">
                <img src={pix1} alt="img" className="w-[20%] h-[80%]" />
                <p>Get it on iphone</p>
              </div>
              <div className="w-[35%] h-[40px] text-white rounded-lg bg-slate-900 flex gap-1 items-center font-semibold hover:bg-black cursor-pointer ">
                <img src={pix} alt="img" className="w-[20%] h-[70 %] ml-1" />
                <p>Get on Android</p>
              </div>
            </div>
          </div>
          <div className="w-[50%] h-full pt-10">
            <img src={pix2} alt="img" />
          </div>
        </div>
      </div>
      <div className="w-full h-[50vh] bg-slate-100 flex justify-center">
        <div className="w-[80%] h-full flex gap-5 items-center ">
          <div className="w-[8%] h-[25%] rounded-3xl bg-white flex items-center justify-center mt-5">
            <MdLock className="w-[60%] h-[40%]" />
          </div>
          <div>
            <h1 className="font-semibold text-[25px] mb-3">
              Your Security is our priority
            </h1>
            <p className="mb-3">
              LockBox uses the highest level of Internet Security and it is
              secured by 256 bits SSL <br /> security encryption to ensure that
              your information is comepletely protected from fraud.
            </p>
            <p className="flex gap-2 items-center">
              <span>
                <BsArrowReturnRight />
              </span>
              more on our security measures
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[20vh] bg-slate-100">
        <h1 className="font-bold text-[45px] text-center">
          Many Ways to build your savings
        </h1>
        <p className="text-center text-[25px]">
          Earn 12%-20% when you save with any of these LockBox plans.
        </p>
      </div>
      <div className="w-full h-[60vh] bg-[#003399] flex justify-center">
        <div className="w-[75%] h-full bg-slate-200 ">
          <div className="w-[40%] h-full rounded-lg bg-white p-7">
            <p className="text-[#003399] text-[30px] font-bold mb-3">
              Automated Savings
            </p>
            <p>
              Build a dedicated savings faster
              <br /> on your terms, automatically or
              <br /> manually.
            </p>
            <p className="flex gap-2 items-center mt-44 text-[#003399]">
              <span>
                <BsArrowReturnRight />
              </span>
              more on our security measures
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
