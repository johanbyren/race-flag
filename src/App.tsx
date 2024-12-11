import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AdminPage from "./adminPage/AdminPage";
import TvPage from "./tvPage/TvPage"
import CollapsibleNav from "./leftMeny/CollapsibleNav";;

export interface RaceData {
  flag: "none" | "unsportsmanlike" | "disqualified" | "checker" | "carDamage" | "sessionSuspended";
  number: string;
  lapsLeft: number;
}

const LOCAL_STORAGE_KEY = "raceData";

const App: React.FC = () => {
  const [raceData, setRaceData] = useState<RaceData>(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedData
      ? JSON.parse(savedData)
      : { flag: "none", number: "000", lapsLeft: 0 };
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false); // Håller koll på menyens tillstånd


  // Uppdatera localStorage när raceData ändras
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(raceData));
  }, [raceData]);

  // Lyssna på storage-eventet för att uppdatera state när andra flikar ändrar data
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === LOCAL_STORAGE_KEY && event.newValue) {
        setRaceData(JSON.parse(event.newValue));
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflowX = "auto";
    }
  }, [isMenuOpen]);

  return (
    <Router>
      <div
        className="grid h-screen bg-black text-white"
        style={{
          gridTemplateColumns: isMenuOpen ? "14rem 1fr" : "0 1fr",
        }}
      >
        <CollapsibleNav onToggle={setIsMenuOpen} />
        <main>
          <Routes>
            <Route
              path="/admin"
              element={<AdminPage raceData={raceData} setRaceData={setRaceData} />}
            />
            <Route path="/race" element={<TvPage raceData={raceData} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
