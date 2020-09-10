import React, { useContext } from "react";
import Title from "../titles/Titles";
import Form from "../form/Form";
import Weather from "../weather/Weather";
import { WeatherContext } from "../../contexts/WeatherContext";

const WeatherDisplay = () => {
  const {
    city,
    country,
    temp,
    error,
    humidity,
    desc,
    fetchWeather,
  } = useContext(WeatherContext);
  return (
    <div className="wrapper">
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-xs-5 title-container">
              <Title />
            </div>
            <div className="col-xs-7 form-container">
              {}
              <Form fetchWeather={fetchWeather} />
              {}
              <Weather
                temp={temp}
                city={city}
                country={country}
                humidity={humidity}
                desc={desc}
                error={error}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
