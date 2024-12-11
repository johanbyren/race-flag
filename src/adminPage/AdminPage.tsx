import React from "react";
import { RaceData } from "../App";

interface AdminPageProps {
  raceData: RaceData;
  setRaceData: React.Dispatch<React.SetStateAction<RaceData>>;
}

const flagColors: Record<RaceData["flag"], string> = {
  none: "none-flag",
  unsportsmanlike: "unsportsmanlike",
  disqualified: "disqualified",
  checker: "flag flag-checker",
  carDamage: "carDamage orange-circle-flag",
  sessionSuspended: "sessionSuspended"
};

const AdminPage: React.FC<AdminPageProps> = ({ raceData, setRaceData }) => {
  const handleFlagChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRaceData({ ...raceData, flag: e.target.value as RaceData["flag"] });
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRaceData({ ...raceData, number: e.target.value });
  };

  const handleLapsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRaceData({ ...raceData, lapsLeft: parseInt(e.target.value, 10) || 0 });
  };

  return (
    <div className="flex flex-col md:flex-row h-full w-full overflow-hidden">
      {/* Vänster: Formulär */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 bg-black text-white">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold mb-6 text-center">Admin Panel</h1>

          {/* Flagga */}
          <div className="mb-6">
            <label className="block text-2xl font-semibold mb-2">
              Select Flag
            </label>
            <select
              value={raceData.flag}
              onChange={handleFlagChange}
              className="w-full p-4 text-xl border rounded-md bg-gray-700 text-white"
            >
              <option value="none">None</option>
              <option value="unsportsmanlike">Unsportsmanlike Behaviour</option>
              <option value="disqualified">Disqualified</option>
              <option value="checker">Checker</option>
              <option value="carDamage">Car Damage</option>
              <option value="sessionSuspended">Session Suspended</option>
            </select>
          </div>

          {/* Nummer */}
          <div className="mb-6">
            <label className="block text-2xl font-semibold mb-2">
              Enter Number
            </label>
            <input
              type="text"
              value={raceData.number}
              onChange={handleNumberChange}
              maxLength={3}
              className="w-full p-4 text-xl border rounded-md bg-gray-700 text-white"
            />
          </div>

          {/* Antal Varv */}
          <div className="mb-6">
            <label className="block text-2xl font-semibold mb-2">
              Laps Left
            </label>
            <input
              type="number"
              value={raceData.lapsLeft}
              onChange={handleLapsChange}
              className="w-full p-4 text-xl border rounded-md bg-gray-700 text-white"
            />
          </div>
        </div>
      </div>

      {/* Höger: Förhandsvisning */}
      <div className="flex-1 flex flex-col items-center justify-center bg-black text-white">
        {/* Flagga */}
        <div
          className={`h-64 w-64 rounded-full border-8 border-white mb-8 ${
            flagColors[raceData.flag]
          }`}
        ></div>

        {/* Nummer */}
        <div className="text-9xl font-extrabold tracking-widest">
          {raceData.number}
        </div>

        {/* Antal varv */}
        <div className="text-6xl mt-8 font-semibold">
          Laps Left: {raceData.lapsLeft}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
