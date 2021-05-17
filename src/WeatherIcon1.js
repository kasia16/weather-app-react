import React from "react";


export default function WeatherIcon(props) {

  const codeMapping = {
    "01d": "021-sun",
    "01n": "021-night",
    "02d": "021-cloudy-1",
    "02n": "021-night-1",
    "03d": "021-cloud",
    "03n": "021-cloud",
    "04d": "021-cloud",
    "04n": "021-cloud",
    "09d": "021-rain-2",
    "09n": "021-rain-2",
    "10d": "021-rain-1",
    "10n": "021-rain-1",
    "11d": "021-storm",
    "11n": "021-storm",
    "13d": "021-snowing-3",
    "13n": "021-snowing-3",
    "50d": "021-tornado",
    "50n": "021-tornado",
  };

  return (
    <img
      src=
      {`/img/${codeMapping[props.code]}.svg`}
      alt="Current weather"
      width="55"
      
      
    
    />
  );
}


