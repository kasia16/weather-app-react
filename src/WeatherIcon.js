import React from "react";

export default function WeatherIcon(props) {
  let icon = "";
  if (props.code === "03d" || props.code === "03n") {
    icon = "/img/021-cloudy.svg"; //scattered clouds day/night
  } else if (props.code === "04d") {
    icon = "/img/021-cloudy.svg"; //broken clouds day
  } else if (props.code === "04n") {
    icon = "/img/021-cloudy.svg"; //broken clouds night
  } else if (props.code === "01d") {
    icon = "/img/021-sun.svg"; //clear day
  } else if (props.code === "01n") {
    icon = "/img/021-night.svg"; //clear night
  } else if (props.code === "02d") {
    icon = "/img/021-cloudy-1.svg"; //partly cloudy day
  } else if (props.code === "02n") {
    icon = "/img/021-night-1.svg"; //partly cloudy night
  } else if (props.code === "09d") {
    icon = "/img/021-rain-2.svg"; //showers day
  } else if (props.code === "09n") {
    icon = "/img/021-rain-2.svg"; //showers night
  } else if (props.code === "10d") {
    icon = "/img/021-rain-1.svg"; //mod-heavy rain day
  } else if (props.code === "10n") {
    icon = "/img/021-rain-1.svg"; //rain night
  } else if (props.code === "11d") {
    icon = "/img/021-storm.svg"; //thunderstorm day
  } else if (props.code === "11n") {
    icon = "/img/021-storm.svg"; //thunderstorm night
  } else if (props.code === "13d") {
    icon = "/img/021-snowing-3.svg"; //snow day
  } else if (props.code === "13n") {
    icon = "/img/021-snowing-3.svg"; //snow night
  } else if (props.code === "50d") {
    icon = "/img/021-tornado.svg"; //mist day
  } else if (props.code === "50n") {
    icon = "/img/021-tornado.svg"; //mist night
  }

  return <img src={icon} alt="weather-icon" />;
}