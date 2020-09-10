import React, { useState } from "react";

const Form = ({ fetchWeather }) => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(e, city, country);
    setCity("");
    setCountry("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="city"
        placeholder="Enter city..."
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="text"
        name="country"
        placeholder="Enter country..."
        onChange={(e) => setCountry(e.target.value)}
      />
      <button>Get Weather</button>
    </form>
  );
};

export default Form;
