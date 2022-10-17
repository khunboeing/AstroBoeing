import { useEffect, useState } from "react";
import "./App.css";
import Astrology_page from "./Astrology_page/Astrology_page";
import Start_page from "./Start_page/Start_page";
import axios from "axios";

function App() {
  const [today, setToday] = useState();
  const [tomorrow, setTomorrow] = useState();
  const [yesterday, setYesterday] = useState();
  const [showStartPage, setShowStartPage] = useState(true);
  const [zodiac, setZodiac] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const getAstrology = async function (sign, day) {
    return await axios.post(
      `https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`
    );
  };

  useEffect(() => {
    (async () => {
      if (zodiac !== "") {
        setIsloading(true);
        const today = await getAstrology(zodiac, "today");
        const tomorrow = await getAstrology(zodiac, "tomorrow");
        const yesterday = await getAstrology(zodiac, "yesterday");

        setIsloading(false);
        setToday(today.data);
        setTomorrow(tomorrow.data);
        setYesterday(yesterday.data);
        setShowStartPage(false);
      }
    })();
  }, [zodiac]);

  // console.log(getAstrology());

  // showAstrology(getAstrology());

  // switch case (condition to create date,month for show zodiac)
  function getZodiac(date) {
    const month = new Date(date).getMonth() + 1;
    const numDate = new Date(date).getDate();

    switch (month) {
      case 1:
        setZodiac(numDate >= 20 ? "aquarius" : "capricorn");
        break;
      case 2:
        setZodiac(numDate >= 19 ? "pisces" : "aquarius");
        break;
      case 3:
        setZodiac(numDate >= 21 ? "aries" : "pisces");
        break;
      case 4:
        setZodiac(numDate >= 21 ? "taurus" : "aries");
        break;
      case 5:
        setZodiac(numDate >= 21 ? "gemini" : "taurus");
        break;
      case 6:
        setZodiac(numDate >= 22 ? "cancer" : "gemini");
      case 7:
        setZodiac(numDate >= 23 ? "leo" : "cancer");
        break;
      case 8:
        setZodiac(numDate >= 23 ? "virgo" : "leo");
        break;
      case 9:
        setZodiac(numDate >= 23 ? "libra" : "virgo");
        break;
      case 10:
        setZodiac(numDate >= 23 ? "scorpio" : "libra");
        break;
      case 11:
        setZodiac(numDate >= 23 ? "sagittarius" : "scorpio");
        break;
      case 12:
        setZodiac(numDate >= 22 ? "capricorn" : "sagittarius");
        break;
      default:
        setZodiac("");
    }
  }
  function onBack() {
    setShowStartPage(true);
    setZodiac("");
  }
  return (
    <div className="bg-black overflow-auto w-[100vw] h-[100vh]">
      {showStartPage ? (
        isLoading ? (
          <h1 className="text-white flex justify-center items-center h-[100%]">
            Loading...
          </h1>
        ) : (
          <Start_page getZodiac={getZodiac} />
        )
      ) : (
        <Astrology_page
          onBack={onBack}
          today={today}
          tomorrow={tomorrow}
          yesterday={yesterday}
          zodiac={zodiac}
        />
      )}
      <footer className="text-white flex gap-3 justify-center mb-[30px]">
        <span>Create by Boeing </span>
        <a
          className="text-[#D98FDF]"
          href="https://www.linkedin.com/in/napatpimon-ponpathanapaisarn-162420243/"
          target="_blank"
        >
          {" "}
          ( My Linkedin )
        </a>{" "}
        <a
          className="text-[#D98FDF]"
          href="https://boeingportfirst.vercel.app/"
          target="_blank"
        >
          ( My portfolio )
        </a>
      </footer>
    </div>
  );
}

export default App;
