import React from "react";
import { RaceData } from "../App";

interface TvPageProps {
  raceData: RaceData;
}

const TvPage: React.FC<TvPageProps> = ({ raceData }) => {
  
  const flagColors: Record<RaceData["flag_1"], string> = {
    none: "none-flag",
    unsportsmanlike: "unsportsmanlike",
    disqualified: "disqualified",
    checker: "flag flag-checker",
    carDamage: "carDamage orange-circle-flag",
    sessionSuspended: "sessionSuspended"
  };

  return (
    <div className="flex flex-col h-full w-full overflow-hidden bg-gray-300 text-black">
      
      {/* Layout för flaggor och antal varv */}
      <div className="flex flex-1 flex-col md:flex-row">
        
        {/* Flagga 1 */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div
            className={`
              flex items-center justify-center 
              h-48 w-60 
              md:h-64 md:w-70 
              lg:h-72 lg:w-120 
              ${flagColors[raceData.flag_1]}
            `}
          ></div>
          <div className="text-7xl md:text-8xl lg:text-9xl font-bold mt-4">
            {raceData.number_1}
          </div>
        </div>

        {/* Flagga 2 */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div
            className={`
              flex items-center justify-center 
               h-48 w-60 
              md:h-64 md:w-70 
              lg:h-72 lg:w-120 
              ${flagColors[raceData.flag_2]}
            `}
          ></div>
          <div className="text-7xl md:text-8xl lg:text-9xl font-bold mt-4">
            {raceData.number_2}
          </div>
        </div>

        {/* Antal varv */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold">
            Varv kvar
          </div>
          <div className="lapsFont font-bold text-red-500">
            {raceData.lapsLeft}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvPage;
