import React, { createContext, useState } from "react";

export const WeatherContext = createContext();

const API_KEY = "8abfe44428c274d36f87c9cb6f7ac285";

const WeatherContextProvider = (props) => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [temp, setTemp] = useState("");
  const [error, setError] = useState("");
  const [humidity, setHumidity] = useState("");
  const [desc, setDesc] = useState("");

  const fetchWeather = async (e, city, country) => {
    e.preventDefault();
    try {
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
      );

      const data = await api_call.json();
      console.log(data);
      setCity(data.name);
      setCountry(data.sys.country);
      setTemp(data.main.temp);
      setHumidity(data.main.humidity);
      setDesc(data.weather[0].description);
      setError("");
    } catch (err) {
      console.log(err);
      setError("Please enter a city and country");
      setCity("");
      setCountry("");
      setTemp("");
      setHumidity("");
      setDesc("");
    }
  };
  return (
    <WeatherContext.Provider
      value={{ city, country, temp, error, humidity, desc, fetchWeather }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
