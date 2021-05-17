import React from "react";
import FormattedDate from "./FormattedDate";
import TempConversion from "./TempConversion";
import WeatherIcon from "./WeatherIcon";


export default function WeatherInfo(props){
return (
<div className="WeatherInfo">
<div className="row">
          <div className="col-5">
            <h1>{props.data.city}</h1>
            <h2>
              <FormattedDate date={props.data.date} />
            </h2>
          </div>
          
          <div className="col-4">
            <div className="temperature">
              <ul>
              <TempConversion tempC={props.data.temp} />
                <li>
                  Feels like: <span>{Math.round(props.data.realfeel)}</span>°C{" "}
                </li>
                <li>
                  Wind: <span>{Math.round(props.data.wind)}</span> km/h{" "}
                </li>
                <li>
                  Humidity: <span>{props.data.humidity}</span>%{" "}
                </li>
              </ul>
            </div>
          </div>
        <div className="col-3">
          <div className="clearfix">
              <div className= "float-left">
                <div className="icon-big">
              <WeatherIcon code={props.data.icon}/>
              </div>
              </div>
          </div>
          </div>
        <div className="days">
          <div className="row weather-forecast"></div>
        </div>
      </div>
      </div>);
}