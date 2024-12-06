import pix from "../assets/playstoe logo.webp";
import pix1 from "../assets/applelogo-removebg-preview.png";
import pix2 from "../assets/logs.png";
import { MdLock } from "react-icons/md";
import { BsArrowReturnRight } from "react-icons/bs";
import pix3 from "../assets/iphoneInvest.avif";
import pic1 from "../assets/pic1.jpeg";
import pic2 from "../assets/pic2.jpeg";
import pic3 from "../assets/pic3.jpeg";
import vid from "../assets/dribbleVideo2.mp4";
import pix7 from "../assets/applellogblack.png";
import Featured from "../component/Featured";
const Home = () => {
  const card = [
    {
      id: 1,
      title: (
        <p className="text-[30px] font-bold text-[#003399]">
          Automated Savings
        </p>
      ),
      description:
        "Build a dedicated savings faster on your terms, automatically or manually.",
      decor: (
        <p className="flex gap-2 items-center text-[#003399]">
          <span>
            <BsArrowReturnRight />
          </span>
          LockBank
        </p>
      ),
    },
    {
      id: 2,
      title: (
        <p className="text-[#3296FF] font-bold text-[30px]">Fixed Savings</p>
      ),
      description:
        "Lock money away for a fixed duration without having access to it until maturity. It's like having a custom fixed deposit.",
      decor: (
        <p className="flex gap-2 items-center text-[#3296FF]">
          <span>
            <BsArrowReturnRight />
          </span>
          Safelock
        </p>
      ),
    },
    {
      id: 3,
      title: (
        <p className="text-[#39C277] font-bold text-[30px]">
          Goal-oriented Savings
        </p>
      ),
      description:
        "Reach all your savings goals faster. Save towards multiple goals on your own or with a group.",
      decor: (
        <p className="flex gap-2 items-center text-[#39C277]">
          <span>
            <BsArrowReturnRight />
          </span>
          Target Savings
        </p>
      ),
    },
    {
      id: 4,
      title: <p className="text-[#E5288E] font-bold text-[30px]">Flex Naira</p>,
      description:
        "Save, transfer, manage, organise, and withdraw your money at any time.",
      decor: (
        <p className="flex gap-2 items-center text-[#E5288E]">
          <span>
            <BsArrowReturnRight />
          </span>
          Flex Naira
        </p>
      ),
    },
    {
      id: 5,
      title: <p className=" font-bold text-[30px]">Flex Naira</p>,
      description:
        "Flex DSave and grow your money in foreign currencies such as Dollars.",
      decor: (
        <p className="flex gap-2 items-center">
          <span>
            <BsArrowReturnRight />
          </span>
          Flex Dollar
        </p>
      ),
    },

    {
      id: 6,
      title: <p className="text-[#FF783C] font-bold text-[30px]">HouseMoney</p>,
      description: "Plan for your rent and household expenses",
      decor: (
        <p className="flex gap-2 items-center text-[#FF783C]">
          <span>
            <BsArrowReturnRight />
          </span>
          HouseMoney
        </p>
      ),
    },
  ];
  return (
    <div>
      <div className="w-full h-[95vh] bg-slate-100 flex justify-center">
        <div className="w-[80%] h-full  pt-24 flex justify-between">
          <div className="w-[40%] h-full  ">
            <button className="w-[300px] bg-blue-600 h-[45px] text-white rounded-3xl font-semibold hover:bg-slate-950 transition-all duration-300 mt-28">
              The 2024 LockBox Savings Report
            </button>
            <h1 className="font-bold text-[50px] mb-5">
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
                <img src={pix1} alt="img" className="w-[20%] h-[50%]" />
                <p>Get it on iphone</p>
              </div>
              <div className="w-[35%] h-[40px] text-white rounded-lg bg-slate-900 flex gap-1 items-center font-semibold hover:bg-black cursor-pointer ">
                <img src={pix} alt="img" className="w-[20%] h-[50 %] ml-1" />
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
      <div className="w-full h-[20vh] bg-slate-100 ">
        <h1 className="font-bold text-[45px] text-center">
          Many Ways to build your savings
        </h1>
        <p className="text-center text-[25px]">
          Earn 12%-20% when you save with any of these LockBox plans.
        </p>
      </div>
      <div className="w-full h-[1100px] flex justify-center bg-slate-100 mb-32">
        <div className="w-[75%] h-full  grid grid-cols-2">
          {card.map((el) => (
            <div
              className="w-[85%] h-[97%] rounded-xl bg-white p-7"
              key={el.id}
            >
              <div className=" mb-3">{el.title}</div>
              <div>{el.description}</div>
              <div className="mt-44">{el.decor}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-16">
        <h1 className="text-[40px] font-bold text-center">
          Diverse ways to Invest
        </h1>
        <p className="text-[23px] text-center">
          Grow your money and invest for your future confidently.
        </p>
      </div>
      <div className="w-full h-[70vh]  flex items-center justify-center mb-32  ">
        <div className="w-[75%] h-[88%] bg-[#7913E5] rounded-2xl flex justify-between">
          <div className="w-[49%] h-full  p-10">
            <h1 className="font-bold text-[31px] text-white mb-3">
              Earn Up to 35% returns
            </h1>
            <p className="text-white">
              Invest securely and confidently <br /> on the go. Grow your money
              <br />
              confidently by investing in pre-vetted
              <br /> investment opportunities.
            </p>
            <p className="flex gap-2 items-center mt-44 text-white hover:underline cursor-pointer transition-all duration-500">
              <span>
                <BsArrowReturnRight />
              </span>
              Learn about investment
            </p>
          </div>
          <div>
            <img src={pix3} alt="img" className="w-full h-[90%] mt-10 pr-14 " />
          </div>
        </div>
      </div>
      <div className="w-full h-[35vh] bg-slate-100 flex flex-col justify-end">
        <h1 className="font-bold text-[40px] text-center mt-10">
          Meet Our Saver of the Month
        </h1>
        <p className="text-center text-[25px]">
          Every month, we shine a spotlight on one saver, asking them about
          their <br />
          savings culture and how Piggyvest has helped them.
        </p>
      </div>
      <div className="w-full h-[85vh] bg-slate-100 flex items-center justify-center">
        <div className="w-[60%] h-[70%]  flex items-center justify-center">
          {/* <iframe width:String="560" height="315" src="https://www.youtube.com/embed/9KUFcATNEtk?si=C7dPtyibiMt05Xuv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
          <video
            src={vid}
            playsInline
            loop
            autoPlay
            controls
            className="w-[90%] h-[90%]"
          />
        </div>
      </div>
      <div className="w-full h-[70vh] bg-slate-100 flex justify-center mb-10">
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
                <img src={pix7} alt="img" className="w-[25%] h-[60%]" />
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

export default Home;
