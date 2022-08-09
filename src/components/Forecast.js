import axios from "axios";
import React, { useState } from "react";
import "../css/Forecast.css";
import ForecastDay from "./ForecastDay";

function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);
  function getForecast(response) {
    const list = response.data.list;
    setLoaded(true);
    setForecastData(list);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <ForecastDay dataList={forecastData} />
      </div>
    );
  } else {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let units = "metric";
    let url = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(getForecast);

    return null;
  }
}

export default Forecast;
