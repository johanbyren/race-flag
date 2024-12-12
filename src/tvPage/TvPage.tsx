import React from "react";
import { RaceData } from "../App";

interface TvPageProps {
  raceData: RaceData;
}

const TvPage: React.FC<TvPageProps> = ({ raceData }) => {
  const flagColors: Record<RaceData["flag_1"], string> = {
    none: "none-flag",
    unsportsmanlike: "unsportsmanlike_big",
    disqualified: "disqualified",
    checker: "flag flag-checker",
    carDamage: "carDamage orange-circle-flag-large",
    sessionSuspended: "sessionSuspended",
  };

  return (
    <div className="flex h-screen w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-black overflow-hidden">
      <div className="flex-1 flex h-full pl-16 md:pl-20">
        {/* Vänster sektion: Flaggor och nummer */}
        <div className="flex flex-col justify-center items-start w-2/3 gap-16 p-8">
          {/* Flagga 1 och Nummer */}
          <div className="flex items-center gap-8">
            <div className={`xl:h-[400px] xl:w-[800px] ${flagColors[raceData.flag_1]}`}></div>
            <div className="text-7xl lg:text-9xl font-bold">{raceData.number_1}</div>
          </div>
          {/* Flagga 2 och Nummer */}
          <div className="flex items-center gap-8">
            <div className={`xl:h-[400px] xl:w-[800px] ${flagColors[raceData.flag_2]}`}></div>
            <div className="text-7xl lg:text-9xl font-bold">{raceData.number_2}</div>
          </div>
        </div>

        {/* Höger sektion: Antal varv */}
        <div className="flex flex-col justify-center items-center w-1/3">
          <div className="text-6xl lg:text-7xl font-extrabold">Varv kvar</div>
          <div className="text-9xl lg:text-[400px] font-bold text-red-600 mt-4">
            {raceData.lapsLeft}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvPage;
