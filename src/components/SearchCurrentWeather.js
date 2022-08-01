import axios from "axios";
import React, { useState } from "react";
import "../css/SearchCurrentWeather.css";

function SearchCurrentWeather() {
  const [cityName, setCityName] = React.useState(null);
  const [weatherData, setWeatherData] = useState({
    city: "Tel Aviv",
    country: "IL",
    celsiusTemp: "30",
    imgSrc: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    dateUpdated: "Saturday 12:26",
    description: "Party cloudy",
    humidity: "57",
    windKmPH: "10",
  });
  function updateCityName(event) {
    setCityName(event.target.value);
  }

  function showData(response) {
    console.log(response.data);
    setWeatherData({
      city: "Tel Aviv",
      country: "IL",
      celsiusTemp: response.data.main.temp,
      imgSrc: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      dateUpdated: "Saturday 12:26",
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      windKmPH: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let city = cityName;
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    console.log(url);
    axios.get(url).then(showData);
  }

  return (
    <div className="SearchCurrentWeather">
      <div className="card card-main">
        <div className="card-body">
          <div className="row search-row">
            <div className="col-10 search-from ">
              <form>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search another city"
                  autoComplete="off"
                  onChange={updateCityName}
                  onSubmit={handleSubmit}
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
          <div className="row current-weather-row">
            <div className="col-8">
              <h1>
                <ul>
                  <li>
                    <span>
                      {weatherData.city}, {weatherData.country}
                    </span>
                  </li>
                  <li className="current-temp">
                    <img
                      src={weatherData.imgSrc}
                      alt={weatherData.description}
                    />
                    <span>{weatherData.celsiusTemp}</span>
                    <span className="units">
                      <a href="/">°C</a> | <a href="/">°F</a>
                    </span>
                  </li>
                </ul>
              </h1>
            </div>
            <div className="col-4">
              <h2>
                <ul className="current-location-description">
                  <li>Last updated at:</li>
                  <li>
                    <span>{weatherData.dateUpdated}</span>
                  </li>
                  <li>
                    <span>{weatherData.description}</span>
                  </li>
                  <li>
                    Humidity: <span>{weatherData.humidity}</span>%
                  </li>
                  <li>
                    Wind: <span>{weatherData.windKmPH}</span> km/h
                  </li>
                </ul>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchCurrentWeather;
