import axios from "axios";
import React from "react";
import "../css/Forecast.css";

function Forecast(props) {
  function showForecast(response) {
    const list = response.data.list;
    //list.forEach((e) => console.log(new Date(e.dt * 1000)));
  }

  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let units = "metric";
  let url = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(url).then(showForecast);

  return (
    <div className="Forecast">
      <div>
        <ul>
          <li>Tue</li>
          <li>icon</li>
          <li>
            19°C <span>10°C</span>
          </li>
        </ul>
      </div>
      <div>{`Lon:${props.coordinates.lon}`}</div>
      <div>{`Lat:${props.coordinates.lat}`}</div>
    </div>
  );
}

export default Forecast;
