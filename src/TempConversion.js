import React, { useState } from "react";

export default function TempConversion (props){
const [unit, setUnit] = useState("metric");

 function convertToF(event) {
    event.preventDefault();
    setUnit("imperial");
   
  }
  function convertToC(event) {
    event.preventDefault();
    setUnit("metric");

  }



if (unit === 'metric'){


    return(
      <div className="TempConversion">
                <span className="tempC"> 
<strong>{Math.round(props.tempC)} </strong></span>
                  <span className="units"><ul><li>
                    °C {""}| {""}<a href="/" onClick={convertToF}>°F</a>
                    </li></ul>
                  </span>
                </div>
                );
  } else {
let tempF = (props.tempC * 9)/5+32;
  return (
  
      <div className="TempConversion">
                <span className="tempC"> 
<strong>{Math.round(tempF)} </strong></span>
                  <span className="units"><ul><li>
                    <a href="/" onClick={convertToC}>°C </a>{""}|{""} °F
                    </li></ul>
                  </span>
                </div>
                );
  }
}