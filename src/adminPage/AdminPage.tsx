import React from "react";
import { RaceData } from "../App";

interface AdminPageProps {
  raceData: RaceData;
  setRaceData: React.Dispatch<React.SetStateAction<RaceData>>;
}

const flagColors: Record<RaceData["flag_1"], string> = {
  none: "none-flag",
  unsportsmanlike: "unsportsmanlike",
  disqualified: "disqualified",
  checker: "flag flag-checker",
  carDamage: "carDamage orange-circle-flag",
  sessionSuspended: "sessionSuspended"
};

const AdminPage: React.FC<AdminPageProps> = ({ raceData, setRaceData }) => {
  const handleFlagChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRaceData({ ...raceData, flag_1: e.target.value as RaceData["flag_1"] });
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRaceData({ ...raceData, number_1: e.target.value });
  };

  const handleFlagChange2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRaceData({ ...raceData, flag_2: e.target.value as RaceData["flag_2"] });
  };

  const handleNumberChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRaceData({ ...raceData, number_2: e.target.value });
  };

  const handleLapsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRaceData({ ...raceData, lapsLeft: parseInt(e.target.value, 10) || 0 });
  };

  const resetRaceData = () => {
    setRaceData({
      flag_1: "none",
      flag_2: "none",
      number_1: "",
      number_2: "",
      lapsLeft: 0,
    });
  };

  return (
    <div className="flex flex-col h-full w-full overflow-hidden">
      {/* Header */}
      <header className="w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-black py-6">
        <h1 className="text-5xl font-bold text-center">Information och inställningar</h1>
      </header>

      {/* Sektioner */}
      <div className="flex flex-1 flex-row items-stretch bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400">
        
        {/* Bil 1 */}
        <div className="flex-1 flex flex-col items-center justify-center text-white p-4">
          <h2 className="text-3xl font-bold mb-6 text-black">Bil 1</h2>
          <div className="w-full max-w-md">
            {/* Flagga */}
            <div className="mb-6">
              <label className="block text-xl font-semibold mb-2 text-black">Välj flagga</label>
              <select
                value={raceData.flag_1}
                onChange={handleFlagChange}
                className="w-full p-4 text-lg border rounded-md bg-gray-700 text-white"
              >
                <option value="none">Ingen flagga</option>
                <option value="unsportsmanlike">Observation</option>
                <option value="disqualified">Tävlingsbestraffning</option>
                <option value="checker">Målflagga</option>
                <option value="carDamage">Teknisk info</option>
                <option value="sessionSuspended">Stoppa heat</option>
              </select>
            </div>

            {/* Nummer */}
            <div className="mb-6">
              <label className="block text-xl font-semibold mb-2 text-black">Bilnummer</label>
              <input
                type="text"
                value={raceData.number_1}
                onChange={handleNumberChange}
                maxLength={3}
                className="w-full p-4 text-lg border rounded-md bg-gray-700 text-white"
              />
            </div>
          </div>

          {/* Flagga & Nummer Preview */}
          <div className={`h-32 w-32 mb-4 ${flagColors[raceData.flag_1]}`}></div>
          <div className="text-5xl font-bold text-black">{raceData.number_1}</div>
        </div>


        {/* Bil 2 */}
        <div className="flex-1 flex flex-col items-center justify-center text-white p-4">
          <h2 className="text-3xl font-bold mb-6 text-black">Bil 2</h2>
          <div className="w-full max-w-md">
            {/* Flagga */}
            <div className="mb-6">
              <label className="block text-xl font-semibold mb-2 text-black">Välj flagga</label>
              <select
                value={raceData.flag_2}
                onChange={handleFlagChange2}
                className="w-full p-4 text-lg border rounded-md bg-gray-700 text-white"
              >
                <option value="none">Ingen flagga</option>
                <option value="unsportsmanlike">Observation</option>
                <option value="disqualified">Tävlingsbestraffning</option>
                <option value="checker">Målflagga</option>
                <option value="carDamage">Teknisk info</option>
                <option value="sessionSuspended">Stoppa heat</option>
              </select>
            </div>

            {/* Nummer */}
            <div className="mb-6">
              <label className="block text-xl font-semibold mb-2 text-black">Bilnummer</label>
              <input
                type="text"
                value={raceData.number_2}
                onChange={handleNumberChange2}
                maxLength={3}
                className="w-full p-4 text-lg border rounded-md bg-gray-700 text-white"
              />
            </div>
          </div>

          {/* Flagga & Nummer Preview */}
          <div className={`h-32 w-32 mb-4 ${flagColors[raceData.flag_2]}`}></div>
          <div className="text-5xl font-bold text-black">{raceData.number_2}</div>
        </div>


        {/* Antal Varv */}
        <div className="flex-1 flex flex-col items-center justify-center text-black p-4">
          <h2 className="text-3xl font-bold mb-6">Antal varv</h2>
          <div className="w-full max-w-md">
            {/* Antal Varv */}
            <div className="mb-6">
              <input
                type="number"
                value={raceData.lapsLeft}
                onChange={handleLapsChange}
                className="w-full p-4 text-lg border rounded-md bg-gray-700 text-white"
              />
            </div>
          </div>

          {/* Preview Antal Varv */}
          <div className="text-5xl font-bold">Antal varv kvar: {raceData.lapsLeft}</div>

          <div className="flex flex-col items-center justify-center pt-20">
            <button
              onClick={() => window.open('/race', '_blank')}
              className="bg-gray-700 text-white px-6 py-3 rounded-lg text-xl hover:bg-gray-500 transition">
              Öppna Presentationen i ny flik.
            </button>
          </div>

          <div className="flex flex-col items-center justify-center pt-6">
            <button
              onClick={resetRaceData}
              className="bg-gray-700 text-white px-6 py-3 rounded-lg text-xl hover:bg-gray-500 transition">
              Återställ data
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default AdminPage;
