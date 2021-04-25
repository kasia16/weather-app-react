import React from "react";
import axios from 'axios';
import Loader from "react-loader-spinner";

export default function Weather(props) {
    function handleResponse(response){        
        alert(`The temperature in ${response.data.name} is ${response.data.main.temp}C`)    }    
        let apiKey = "2a93853098f7d48795c997915462e083";    
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;    
    axios.get(url).then(handleResponse);
      return (
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />);
}