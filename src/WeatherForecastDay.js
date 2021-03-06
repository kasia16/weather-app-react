import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){
    function maxTemp(){
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }
     function minTemp(){
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
    }
    function day(){
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        return days[day];
    }
    return (
    <div>
<div className="WeatherForecast-day">{day()}</div>
<div className="icon-small">
                <WeatherIcon code={props.data.weather[0].icon} size={40}/></div>
                <div className="WeatherForecast-temp">
                    <span className="WeatherForecast-temp-high"><strong>{maxTemp()}</strong></span>
                    <span className="WeatherForecast-temp-low"> {minTemp()}</span>
                    </div>
                    </div>
                    );

    }
       