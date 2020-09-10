import React from "react";
import WeatherContextProvider from "./contexts/WeatherContext";
import WeatherDisplay from "./components/weather/WeatherDisplay"

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
