import React from "react";
import pix1 from "../assets/tclogo@2x.png";
import pix2 from "../assets/output.png";
import pix3 from "../assets/brand1.png";
import pix4 from "../assets/pym-removebg-preview.svg";
import pix5 from "../assets/fast.svg";
import pix6 from "../assets/cio.svg";
const Featured = () => {
  const image = [
    { id: 1, img: <img src={pix1} alt="img" className="ww-[30%] h-[30%]" /> },
    { id: 2, img: <img src={pix2} alt="img" className="" /> },
    { id: 3, img: <img src={pix3} alt="img" className="w-[30%] h-[30%]" /> },
    { id: 4, img: <img src={pix4} alt="img" className="w-[70%]" /> },
    { id: 5, img: <img src={pix5} alt="img" /> },
    { id: 6, img: <img src={pix6} alt="img" /> },
  ];
  return (
    <div>
      <div className="w-full h-[30vh]   flex justify-center mb-10">
        <div className="w-[80%] h-full">
          <h1 className="text-[40px] font-semibold text-center">
            As featured in
          </h1>
          <div className="flex gap-3 items-center">
            {image.map((el) => (
              <div key={el.id}>{el.img}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
