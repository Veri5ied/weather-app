import React from "react";
import WeatherContextProvider from "./contexts/WeatherContext";

function App() {
  return (
    <div className="App">
      <WeatherContextProvider>
        <WeatherDisplay />
      </WeatherContextProvider>
    </div>
  );
}

export default App;
