import "../css/Weather.css";
import Search from "./Search";

function Weather() {
  let weatherData = {
    city: "Tel Aviv",
    contry: "IL",
    celsiusTemp: "30",
    imgSrc: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    dateUpdated: "Saturday 12:26",
    description: "Party cloudy",
    humidity: "57",
    windKmPH: "10",
  };
  return (
    <div className="Weather">
      <div className="card card-main">
        <div className="card-body">
          <Search />
          <div className="row current-weather-row">
            <div className="col-8">
              <h1>
                <ul>
                  <li>
                    <span>
                      {weatherData.city}, {weatherData.contry}
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

export default Weather;
