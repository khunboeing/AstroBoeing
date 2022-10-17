import React from "react";
import * as imgZodiac from "../assets/zodiac/index";

function Astrology_page(props) {
  const { onBack, today, yesterday, tomorrow, zodiac } = props;
  return (
    <div className="flex justify-center flex-col items-center px-[60px]">
      <div className="">
        <div className="border-2 w-[150px] h-[150px] rounded-[50px] bg-[#C9C9C9] mt-[40px]">
          <img src={imgZodiac[zodiac]} alt={zodiac} />
        </div>
        <h1 className="flex justify-center text-[#D98FDF] text-[25px] font-bold">
          {zodiac}
        </h1>
        <p className="flex justify-center text-white">{today.date_range}</p>
      </div>
      <div className="flex flex-col">
        <div className="border rounded-[20px] border-[#D98FDF] relative z-[0] py-[20px] px-[20px] mt-[40px] mb-[20px]">
          <h2 className="underline underline-offset-4 text-white pl-[20px]">
            Today
          </h2>
          <p className="text-white z-[10]">{today.description}</p>
        </div>
        <div className="border rounded-[20px] border-[#D98FDF] relative z-[0] py-[20px] px-[20px] my-[20px]">
          <h2 className="underline underline-offset-4 text-white pl-[20px]">
            Yesterday
          </h2>
          <p className="text-white z-[10]">{yesterday.description}</p>
        </div>
        <div className="border rounded-[20px] border-[#D98FDF] relative z-[0] py-[20px] px-[20px] my-[20px]">
          <h2 className="underline underline-offset-4 text-white pl-[20px]">
            Tomorrow
          </h2>
          <p className="text-white z-[10]">{tomorrow.description}</p>
        </div>
      </div>
      <div>
        <button
          className="border border-white rounded-[10px] my-[30px] px-[15px] py-[5px] text-[#D98FDF] hover:bg-[#D98FDF] hover:text-white"
          onClick={onBack}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default Astrology_page;
