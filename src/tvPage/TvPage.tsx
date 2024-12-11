import React from "react";
import { RaceData } from "../App";

interface TvPageProps {
  raceData: RaceData;
}

const TvPage: React.FC<TvPageProps> = ({ raceData }) => {
  
  const flagColors: Record<RaceData["flag"], string> = {
    none: "none-flag",
    unsportsmanlike: "unsportsmanlike",
    disqualified: "disqualified",
    checker: "flag flag-checker",
    carDamage: "carDamage orange-circle-flag",
    sessionSuspended: "sessionSuspended"
  };

  console.log("Current flag:", raceData.flag);
  console.log("Applied class:", flagColors[raceData.flag]);  

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-black text-white">
          {/* Flagga */}
      <div className={`
        flex items-center justify-center 
        h-48 w-48 
        md:h-64 md:w-64 
        lg:h-72 lg:w-72 
        rounded-full 
        border-8 border-white 
        mb-8 ${
        flagColors[raceData.flag]
      }`}>
    </div>

    <div className="text-6xl md:text-7xl lg:text-9xl font-extrabold tracking-widest">
      {raceData.number}
    </div>

    <div className="text-4xl md:text-5xl lg:text-6xl mt-8 font-semibold">
      Laps Left: {raceData.lapsLeft}
    </div>

    </div>
  );
};

export default TvPage;
