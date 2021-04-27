import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weather, setWeather] = useState({loaded: false});

  function handleResponse(response){

setWeather({
  loaded: true,
  city: response.data.name,
  date: "Today, 6:00 PM",
  icon: response.data.weather[0].icon,
  description: response.data.weather[0].description,
  temp: response.data.main.temp,
  realfeel: response.data.main.feels_like,
  wind: response.data.wind.speed
  
});
  }
if(weather.loaded){
  return (
    <div className="Wrapper">
      <div className="Weather">
        <form className="mb-2">
          <div className="row">
            <div className="col-7">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>

            <div class="col-2">
              <button type="button" class="btn btn-info">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
              </button>
            </div>
          </div>
        </form>

        <div className="row">
          <div className="col-4">
            <h1>{weather.city}</h1>
            <h2>
              Last Updated:
              <br />
              <span>{weather.date}</span>
            </h2>
          </div>
          <div className="col-3">
            <div className="today">
              <img
                src={weather.icon}
                alt={weather.description}
                className="float-right"
              />
              <br />

              <ul>
                <div className="text-capitalize"><li className="float-right"> {weather.description}</li></div>
              </ul>
            </div>
          </div>
          <div className="col-5">
            <div className="temperature">
              <ul>
                <li>
                  {" "}
                <strong>{Math.round(weather.temp)}</strong>
                </li>
                <li>
                  <span className="units">
                    <a href="/">°C </a>| <a href="/">°F</a>
                  </span>
                </li>

                <li>
                  Feels like: <span>{Math.round(weather.realfeel)}</span>°C{" "}
                </li>
                <li>
                  Wind: <span>{weather.wind}</span> km/h{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="days">
          <div className="row weather-forecast"></div>
        </div>
      </div>
    </div>
  );

  } else 
  {

  const apiKey = "2a93853098f7d48795c997915462e083";
  let city = "London";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return     "Loading";
  
  }
}