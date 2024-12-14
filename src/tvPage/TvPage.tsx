/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
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

  const [isFullscreen, setIsFullscreen] = useState(false); // State för helskärmsläge

  const goFullscreen = () => {
    const element = document.documentElement; // Hela sidan (html)
    if (element.requestFullscreen) {
      element.requestFullscreen(); // Standard
    } else if ((element as any).webkitRequestFullscreen) {
      (element as any).webkitRequestFullscreen(); // Safari
    } else if ((element as any).msRequestFullscreen) {
      (element as any).msRequestFullscreen(); // Internet Explorer/Edge
    }
    setIsFullscreen(true); // Uppdatera state
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ((document as any).webkitExitFullscreen) {
      (document as any).webkitExitFullscreen();
    } else if ((document as any).msExitFullscreen) {
      (document as any).msExitFullscreen();
    }
    setIsFullscreen(false); // Uppdatera state
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      // Kolla om dokumentet är i helskärmsläge
      if (!document.fullscreenElement) {
        setIsFullscreen(false); // Sätt till false om inte i helskärm
      }
    };

    // Lägg till event listener för fullscreenchange
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    // Rensa event listener vid avmontering
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <div className="flex h-screen w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-black overflow-hidden">
      <div className="flex-1 flex h-full pl-16 md:pl-20">
        {/* Vänster sektion: Flaggor och nummer */}
        <div className="flex flex-col justify-center items-start w-2/3 gap-16 p-8">
          {/* Flagga 1 och Nummer */}
          <div className="flex items-center gap-8">
            <div className={`xl:h-[300px] xl:w-[600px] ${flagColors[raceData.flag_1]}`}></div>
            <div className="text-7xl lg:text-9xl font-bold">{raceData.number_1}</div>
          </div>
          {/* Flagga 2 och Nummer */}
          <div className="flex items-center gap-8">
            <div className={`xl:h-[300px] xl:w-[600px] ${flagColors[raceData.flag_2]}`}></div>
            <div className="text-7xl lg:text-9xl font-bold">{raceData.number_2}</div>
          </div>
        </div>

        {/* Höger sektion: Antal varv */}
        <div className="flex flex-col justify-center items-center w-1/3 flex-wrap">
          <div className="text-6xl lg:text-7xl font-extrabold">Varv kvar</div>
          <div className="text-9xl lg:text-[300px] font-bold text-red-600 mt-4">
            {raceData.lapsLeft}
          </div>
        </div>
      </div>

      <div>
        {isFullscreen ? (
          <div onClick={exitFullscreen} className="cursor-pointer">
            {/* SVG för att lämna helskärmsläge */}
            <svg 
              fill="#000000" 
              viewBox="0 0 1024 1024" 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-10 h-10 text-blue-500 hover:text-blue-700 transition opacity-40">
              <path d="M391 240.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L200 146.3a8.03 8.03 0 0 0-11.3 0l-42.4 42.3a8.03 8.03 0 0 0 0 11.3L280 333.6l-43.9 43.9a8.01 8.01 0 0 0 4.7 13.6L401 410c5.1.6 9.5-3.7 8.9-8.9L391 240.9zm10.1 373.2L240.8 633c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L146.3 824a8.03 8.03 0 0 0 0 11.3l42.4 42.3c3.1 3.1 8.2 3.1 11.3 0L333.7 744l43.7 43.7A8.01 8.01 0 0 0 391 783l18.9-160.1c.6-5.1-3.7-9.4-8.8-8.8zm221.8-204.2L783.2 391c6.6-.8 9.4-8.9 4.7-13.6L744 333.6 877.7 200c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.3a8.03 8.03 0 0 0-11.3 0L690.3 279.9l-43.7-43.7a8.01 8.01 0 0 0-13.6 4.7L614.1 401c-.6 5.2 3.7 9.5 8.8 8.9zM744 690.4l43.9-43.9a8.01 8.01 0 0 0-4.7-13.6L623 614c-5.1-.6-9.5 3.7-8.9 8.9L633 783.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L824 877.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L744 690.4z"/>
            </svg>
          </div>
          ) : (
          <div onClick={goFullscreen} className="cursor-pointer">
            {/* SVG för att gå till helskärmsläge */}
            <svg 
              fill="#000000"
              viewBox="0 0 1024 1024" 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-10 h-10 text-blue-500 hover:text-blue-700 transition opacity-40">
              <path d="M290 236.4l43.9-43.9a8.01 8.01 0 0 0-4.7-13.6L169 160c-5.1-.6-9.5 3.7-8.9 8.9L179 329.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zm352.7 187.3c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6 43.7 43.7a8.01 8.01 0 0 0 13.6-4.7L863.9 169c.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370a8.03 8.03 0 0 0 0 11.3l42.4 42.4zM845 694.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3a8.03 8.03 0 0 0-11.3 0l-42.4 42.3a8.03 8.03 0 0 0 0 11.3L734 787.6l-43.9 43.9a8.01 8.01 0 0 0 4.7 13.6L855 864c5.1.6 9.5-3.7 8.9-8.9L845 694.9zm-463.7-94.6a8.03 8.03 0 0 0-11.3 0L236.3 733.9l-43.7-43.7a8.01 8.01 0 0 0-13.6 4.7L160.1 855c-.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-.8 9.4-8.9 4.7-13.6L290 787.6 423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z"/>
            </svg>
          </div>
        )}
      </div>

    </div>
  );
};

export default TvPage;
