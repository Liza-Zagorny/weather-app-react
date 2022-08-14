import axios from "axios";
import React, { useEffect, useState } from "react";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

import "../css/SearchCurrentWeather.css";

function SearchCurrentWeather(props) {
  const [cityName, setCityName] = React.useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function updateCityName(event) {
    setCityName(event.target.value);
  }

  function showData(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      coordinates: response.data.coord,
      country: response.data.sys.country,
      celsiusTemp: Math.round(response.data.main.temp),
      imgSrc: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      dateUpdated: new Date(response.data.dt * 1000),
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      windKmPH: Math.round(response.data.wind.speed),
    });
  }

  function search() {
    let city = cityName;
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(showData);
  }

  useEffect(() => {
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  if (weatherData.ready)
    return (
      <div className="SearchCurrentWeather">
        <div className="card card-main">
          <div className="card-body">
            <div className="row search-row">
              <div className="col-10 search-from ">
                <form onSubmit={handleSubmit}>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search another city"
                    autoComplete="off"
                    onChange={updateCityName}
                  />
                </form>
              </div>
              <div className="col-2 d-grid gap-2 d-flex justify-content-evenly">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Search
                </button>
              </div>
            </div>
            <WeatherInfo data={weatherData} />
            <Forecast coordinates={weatherData.coordinates} />
          </div>
        </div>
      </div>
    );
  else {
    return "Loading...";
  }
}

export default SearchCurrentWeather;
