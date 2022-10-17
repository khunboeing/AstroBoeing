import React, { useEffect, useState } from "react";
import * as zodiac from "../assets/zodiac/index";

function Start_page(props) {
  const { getZodiac } = props;
  const [date, setDate] = useState("");
  //   Aries = Mar 21 - Apr 20
  // aquarius = jan 20 - Feb 18
  //   cancer = Jun 22 - Jul 22
  //     "capricorn = Dec 22 - Jan 19
  //     "gemini = May 21 - Jun 21
  //     "leo = Jul 23 - Aug 22
  //     "libra = Sep 23 - Oct 22
  //     "pisces =  Sep 23 - Oct 22
  //     "sagittarius = Nov 23 - Dec 21
  //     "scorpio = Oct 23 - Nov 22
  //     "taurus = Apr 21 - May 20
  //     "virgo = Aug 23 - Sep 22
  const imgAstro = [
    { sign: "aquarius", date: "jan 20 - Feb 18" },
    //jan >= 20 = aquarius
    //else capricorn
    { sign: "pisces", date: "Feb 19 - Mar 20" },
    //feb >= 19 = pisces
    //else aquarius
    { sign: "aries", date: "Mar 21 - Apr 20" },
    // mar >= 21 = aries
    //else pisces
    { sign: "taurus", date: "Apr 21 - May 20" },
    // apr >= 21 = taurus
    //else aries
    { sign: "gemini", date: "May 21 - Jun 21" },
    // may >= 21 = gemini
    //else taurus
    { sign: "cancer", date: "Jun 22 - Jul 22" },
    // jun >= 22 = cancer
    //else gemni
    { sign: "leo", date: "Jul 23 - Aug 22" },
    // jul >= 23 = leo
    //else cancer
    { sign: "virgo", date: "Aug 23 - Sep 22" },
    // aug >= 23 = virgo
    //else leo
    { sign: "libra", date: "Sep 23 - Oct 22" },
    // sep >= 23 = libra
    //else virgo
    { sign: "scorpio", date: "Oct 23 - Nov 22" },
    // oct >= 23 = scorpio
    //else libra
    { sign: "sagittarius", date: "Nov 23 - Dec 21" },
    // nov >= 23 = sagittarius
    //else scorpio
    { sign: "capricorn", date: "Dec 22 - Jan 19" },
    // dec >= 22 = capricorn
    //else sagittarius
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalID = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * imgAstro.length);
      setIndex(randomIndex);
    }, 1500);
    // console.count("render :");
    return () => {
      clearInterval(intervalID);
    };
  }, [index]);
  // console.log("date:", date);
  return (
    <div className="h-[100vh]">
      <div className="flex justify-center flex-col items-center ">
        <h1 className="text-[#D98FDF] mt-[60px] text-4xl font-bold">
          Your Birthday
        </h1>
        <div className="flex flex-row align-middle mt-[25px]">
          <input
            type="date"
            className="px-[17px] py-[7px] border rounded-[15px] flex mr-[15px] text-[18px]"
            onChange={(value) => setDate(value.target.value)}
          />
          <button
            className="text-white bg-[#D98FDF] px-[14px] py-[7px] rounded-[30px] font-bold text-[20px]"
            onClick={() => getZodiac(date)}
          >
            OK
          </button>
        </div>
        <div className="  w-[300px] h-[300px] my-[70px]">
          <img
            src={zodiac[imgAstro[index]?.sign]}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Start_page;
