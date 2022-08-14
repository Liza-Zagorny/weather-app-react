import React, { useState } from "react";
import "../css/CurrentTemp.css";

function CurrentTemp(props) {
  const [tempValue, setTempValue] = useState(props.celsius);
  const [unit, setUnit] = useState("celsius");

  if (props.celsius !== tempValue && unit === "celsius") {
    setTempValue(props.celsius);
  }
  // function showFahrenheit(event) {
  //   event.preventDefault();
  //   setUnit("fahrenheit");
  //   setTempValue(Math.round((tempValue * 9) / 5 + 32));
  // }

  // function showCelsius(event) {
  //   event.preventDefault();
  //   setUnit("celsius");
  //   setTempValue(tempValue);
  // }

  if (unit === "celsius")
    return (
      <span className="CurrentTemp">
        <span className="temp">{tempValue}</span>
        <span className="units">°C</span>
      </span>
    );
}

export default CurrentTemp;
