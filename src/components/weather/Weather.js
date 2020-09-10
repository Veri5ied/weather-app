import React from "react";

const Weather = ({temp, city, country, humidity, desc, error}) => {
  return (
    <div className="weather__info">
      {city &&
        (
          <p className="weather__key">
            Location:
            <span className="weather__value">
              {" "}
              {city}, {country}
            </span>
          </p>
        )}

      {temp && (
        <p className="weather__key">
          Temperature:
          <span className="weather__value"> {(temp * 9) / 5 + 32} F</span>
        </p>
      )}

      {humidity && (
        <p className="weather__key">
          Humidity:
          <span className="weather__value"> {humidity}</span>
        </p>
      )}

      {desc && (
        <p className="weather__key">
          Description:
          <span className="weather__value"> {desc}</span>
        </p>
      )}

      {error && <p className="weather__error"> {error} </p>}
    </div>
  );
};

export default Weather;
