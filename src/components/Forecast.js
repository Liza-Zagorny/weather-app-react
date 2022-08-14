import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/Forecast.css";
import ForecastDay from "./ForecastDay";

function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastRawData, setforecastRawData] = useState(null);
  const [dataByDay, setDataByDay] = useState(null);
  const [fdProcessed, setfdProcessed] = useState(null);
  function getForecast(response) {
    const list = response.data.list;
    setLoaded(true);
    setforecastRawData(list);
  }

  useEffect(() => {
    // Rearrange forecastRawData to have different array for each forecast day.
    const getDataByDay = (rawData) => {
      let result = [];
      let prevDay = null;
      if (rawData) {
        for (let i = 0; i <= rawData.length - 1; i++) {
          const date = new Date(rawData[i].dt * 1000);
          const day = date.getDay();
          if (day !== prevDay) {
            const dataArray = rawData.filter(
              (e) => new Date(e.dt * 1000).getDay() === day
            );
            result.push(dataArray);
            prevDay = day;
          }
        }
      }
      setDataByDay(result);
    };
    getDataByDay(forecastRawData);
  }, [forecastRawData]);

  useEffect(() => {
    // Data for each day is processed: min and max temp for the day is taken and the other info is for forecast of 12:00 PM for that day
    const getDailyData = (dailyData) => {
      if (dailyData) {
        let resultsArray = [];
        for (const day of dailyData) {
          let result = {
            minForDay: 1000000,
            maxForDay: null,
            description: null,
            iconCode: null,
            dt: null,
          };

          for (const obj of day) {
            const hours = new Date(obj.dt * 1000).getHours();
            if (obj.main.temp_min < result.minForDay)
              result.minForDay = obj.main.temp_min;
            if (obj.main.temp_max > result.maxForDay)
              result.maxForDay = obj.main.temp_max;
            if (hours === 15) {
              result.description = obj.weather[0].description;
              result.iconCode = obj.weather[0].icon;
              result.dt = obj.dt;
            }
          }
          resultsArray.push(result);
        }
        return resultsArray;
      }
    };
    setfdProcessed(getDailyData(dataByDay));
  }, [dataByDay]);

  useEffect(() => console.log(fdProcessed), [fdProcessed]);

  useEffect(() => {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let units = "metric";
    let url = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(getForecast);
  }, [props.coordinates]);

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          {fdProcessed.map((dailyForecast, index) => {
            if (index > 0) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            } else return null;
          })}
        </div>
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
