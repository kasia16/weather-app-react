import React from "react";


export default function WeatherIcon(props) {

  const codeMapping = {
    "01d": "rain",
    "01n": "rain",
    "02d": "rain",
    "02n": "rain",
    "03d": "rain",
    "03n": "rain",
    "04d": "rain",
    "04n": "rain",
    "09d": "rain",
    "09n": "rain",
    "10d": "rain",
    "10n": "rain",
    "11d": "rain",
    "11n": "rain",
    "13d": "rain",
    "13n": "rain",
    "50d": "rain",
    "50n": "rain",
  };

  return (
    <img
      src={require(`./img/${codeMapping[props.code]}.svg`)}
      alt="Current weather"
      width="50" 
      height="50"
      
    />
  );
}


