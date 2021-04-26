import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [te]


  function handleResponse(response){

  }
  let apiKey = "2a93853098f7d48795c997915462e083";
  let city = "London";
  apiUrl ="api.openweathermap.org/data/2.5/weather?q=&{city}&appid=${apiKey}&units=metric";
  axios.het(apiUrl).then(handleResponse);

  
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
            <h1>{weatherData.city}</h1>
            <h2>
              Last Updated:
              <br />
              <span>{weatherData.date}</span>
            </h2>
          </div>
          <div className="col-3">
            <div className="today">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.conditions}
                className="float-right"
              />
              <br />

              <ul>
                <li className="float-right"> {weatherData.conditions}</li>
              </ul>
            </div>
          </div>
          <div className="col-5">
            <div className="weather-temperature">
              <ul>
                <li>
                  {" "}
                  <strong>{weatherData.temp}</strong>
                </li>
                <li>
                  <span className="units">
                    <a href="/">°C </a>| <a href="/">°F</a>
                  </span>
                </li>

                <li>
                  Feels like: <span>{weatherData.realFeel}</span>°C{" "}
                </li>
                <li>
                  Wind: <span>{weatherData.wind}</span> km/h{" "}
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
}
