import React from "react";

const WeatherDisplay = () => {
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
