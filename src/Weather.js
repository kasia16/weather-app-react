import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  const [weather, setWeather] = useState({loaded: false});
  const [city, setCity] = useState(props.defaultCity);
  
  

  function handleResponse(response){
setWeather({
  loaded: true,
  coord: response.data.coord,
  city: response.data.name,
  date: new Date(response.data.dt*1000),
  icon: response.data.weather[0].icon,
  description: response.data.weather[0].description,
  temp: response.data.main.temp,
  realfeel: response.data.main.feels_like,
  wind: response.data.wind.speed,
  humidity: response.data.main.humidity
  
});
  }

  function search() {
  const apiKey = "58cc6c63d0f7c842945d23a36b9209e4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
 
}

function handleSubmit(event) {
 event.preventDefault(); 
 if (city.length > 0){
 search();
   }else{
            alert("Please type a city...");
        }}
 


function changeCity(event){
setCity(event.target.value);
}


if (weather.loaded) {
return (
    <div className="Wrapper">
      <div className="Weather">
        <form onSubmit={handleSubmit} className="mb-2">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control"
                autoComplete="off"
                onChange={changeCity}
              />
            </div>
            <div className="col-3">
              <div className="button-submit">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
                
              />
            </div></div>

            
          </div>
        </form>
        
        <WeatherInfo data={weather} />
        <WeatherForecast coordinates={weather.coord} />

      </div>
      </div>
    );
  } else {
    search();
    return      (
      <Loader
        type="ThreeDots"
        color="black"
        height={50}
        width={50}
        timeout={3000} //3 secs
      />
    );
  }
}