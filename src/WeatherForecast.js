import React from "react";
import axios from "axios";

export default function WeatherForecast(props) {

    function handleResponse(response){
console.log(response.data);
    }
let apiKey = "2a93853098f7d48795c997915462e083";
let lon = props.coordinates.lon;
let lat = props.coordinates.lat;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    
 axios.get(apiUrl).then(handleResponse);



    return <div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <div className="WeatherForecast-day">Mon</div>
                <img src="https://image.flaticon.com/icons/png/128/4150/4150932.png" alt=""></img>
                <div className="WeatherForecast-temp">
                    <span className="WeatherForecast-temp-high"><strong>9°</strong></span>
                    <span className="WeatherForecast-temp-low"> 9°</span>
                    </div>
            </div>
          
    
          
             
        </div>

    </div>
}