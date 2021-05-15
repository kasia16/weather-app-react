import React, { useState } from "react";
import axios from "axios";

import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

    function handleResponse(response){
setForecast(response.data.daily);
setLoaded(true);
    }

 if (loaded){
return (
     <div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <WeatherForecastDay data={forecast[0]}/>
            </div>
            </div>
            </div>
    );

 } else {

  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let lon = props.coordinates.lon;
let lat = props.coordinates.lat;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    
 axios.get(apiUrl).then(handleResponse);

 return null;
    }
}
