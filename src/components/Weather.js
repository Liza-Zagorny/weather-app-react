import "../css/Weather.css";

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
          <div className="row search-row">
            <div className="col-10 search-from ">
              <form>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search another city"
                  autoComplete="off"
                />
              </form>
            </div>
            <div className="col-2 d-grid gap-2 d-flex justify-content-evenly">
              <button type="button" className="btn btn-primary">
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
