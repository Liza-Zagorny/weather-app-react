import React from "react";
import FormattedDate from "./FormattedDate";
import "../css/WeatherInfo.css";

function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row current-weather-row mt-3">
        <div className="col-6">
          <h1>
            <ul>
              <li>
                <span>
                  {props.data.city}, {props.data.country}
                </span>
              </li>
              <li className="current-temp clearfix">
                <img src={props.data.imgSrc} alt={props.data.description} />
                <span className="temp">{props.data.celsiusTemp}</span>
                <span className="units">
                  <a href="/">°C</a> | <a href="/">°F</a>
                </span>
              </li>
            </ul>
          </h1>
        </div>
        <div className="col-6">
          <h2>
            <ul className="current-location-description">
              <li>Last updated at:</li>
              <li>
                <FormattedDate date={props.data.dateUpdated} />
              </li>
              <li>
                <span>{props.data.description}</span>
              </li>
              <li>
                Humidity: <span>{props.data.humidity}</span>%
              </li>
              <li>
                Wind: <span>{props.data.windKmPH}</span> km/h
              </li>
            </ul>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
