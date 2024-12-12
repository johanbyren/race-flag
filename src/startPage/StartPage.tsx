import React from "react";

const StartPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white p-6 relative overflow-hidden">
      {/* Förbättrade rörliga linjer i bakgrunden */}
      <div className="absolute inset-0">
        <div className="w-full h-1 bg-yellow-400 absolute top-1/3 opacity-70"></div>
        <div className="w-full h-1 bg-yellow-400 absolute top-2/3 opacity-70"></div>

        <div className="w-full h-1 bg-yellow-400 absolute top-1/3 opacity-0 animate-pulse-line"></div>
        <div className="w-full h-1 bg-yellow-400 absolute top-2/3 opacity-0 animate-pulse-line"></div>
      </div>

      <div className="text-center max-w-2xl relative z-10">
        <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg animate-fade-in">
          Välkommen till<br></br>Race Flags
        </h1>
        <p className="text-2xl leading-relaxed mb-6">
          Detta projekt hjälper dig att hantera tävlingar på ett enkelt och smidigt sätt.
          Här kan du välja flaggor, ange bilnummer och hålla koll på hur många varv som är kvar.
          Syftet är att göra det enkelt för arrangörer att hantera tävlingar och tydligt
          för publiken och förare att förstå vad som händer under loppet.
        </p>
        <p className="text-xl leading-relaxed mb-8">
          För bästa upplevelse, öppna presentationen i en ny flik och visa den på en TV-skärm så att alla kan se informationen i realtid. Under tiden kan du använda Admin-sidan för att uppdatera flaggor, bilnummer och antal varv.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => window.open('/admin', '_self')}
            className="bg-gray-800 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-gray-600 hover:text-yellow-400 transition drop-shadow-md"
          >
            Gå till Admin-sidan
          </button>
          <button
            onClick={() => window.open('/race', '_blank')}
            className="bg-gray-800 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-gray-600 hover:text-red-400 transition drop-shadow-md"
          >
            Öppna Presentation
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartPage;