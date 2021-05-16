import React from "react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "021-sun",
    "01n": "021-sun",
    "02d": "021-sun",
    "02n": "021-sun",
    "03d": "021-cloud",
    "03n": "021-sun",
    "04d": "021-cloud",
    "04n": "021-cloud",
    "09d": "021-cloud",
    "09n": "021-cloud",
    "10d": "021-cloud",
    "10n": "021-cloud",
    "11d": "021-cloud",
    "11n": "021-cloud",
    "13d": "021-cloud",
    "13n": "021-cloud",
    "50d": "021-cloud",
    "50n": "021-cloud",
  };

  return (
    <img
      src={require(`./img/${codeMapping[props.code]}.svg`)}
      alt="Current weather"
      width="150"
      height="150"
    />
  );
}