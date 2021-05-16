import React, { useState, useEffect } from "react";
import axios from "axios";

import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

useEffect(() => {
    setLoaded(false);
}, [props.coordinates]);


    function handleResponse(response){
setForecast(response.data.daily);
setLoaded(true);
    }

    function load ()
    {
let apiKey = "58cc6c63d0f7c842945d23a36b9209e4";
let lon = props.coordinates.lon;
let lat = props.coordinates.lat;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    
axios.get(apiUrl).then(handleResponse);
    }

 if (loaded){
return (
     <div className="WeatherForecast">
        <div className="row">
            
            {forecast.map(function (dailyForecast, index) {
                if (index < 5) {
                    return (
   <div className="col" key={index}>
                <WeatherForecastDay data={dailyForecast}/>
            </div>
         );
                    } else{
                        return null;
                    }
                    
                })}
         
   </div></div>
);

 } else {
 
load()

 return null;
    }
}

