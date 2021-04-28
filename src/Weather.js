import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  const [weather, setWeather] = useState({loaded: false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response){
setWeather({
  loaded: true,
  city: response.data.name,
  date: new Date(response.data.dt*1000),
  icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
  description: response.data.weather[0].description,
  temp: response.data.main.temp,
  realfeel: response.data.main.feels_like,
  wind: response.data.wind.speed
  
});
  }

  function search() {
  const apiKey = "2a93853098f7d48795c997915462e083";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
 
}
function handleSubmit(event){
  event.preventDefault();
  search();

}

function changeCity(event){
setCity(event.target.value);
}
  


if (weather.loaded) {
return (
    <div className="Wrapper">
      <div className="Weather">
        <form onSubmit={handleSubmit} className="mb-2">
          <div className="row">
            <div className="col-7">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control"
                autoComplete="off"
                onChange={changeCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
                
              />
            </div>

            <div className="col-2">
              <button type="button" className="btn btn-info">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
              </button>
            </div>
          </div>
        </form>
        
        <WeatherInfo data={weather} />

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