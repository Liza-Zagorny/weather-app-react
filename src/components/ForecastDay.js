import React from "react";

function ForecastDay(props) {
  console.log(props);
  const dt = props.dataList[0].dt;
  const iconCode = props.dataList[0].weather[0].icon;
  const imgSrc = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  const description = props.dataList[0].weather[0].description;
  const maxTemp = props.dataList[0].main.temp_max;
  const minTemp = props.dataList[0].main.temp_min;

  return (
    <div className="ForecastDay">
      <ul>
        <li>{dt}</li>
        <li>
          <img src={imgSrc} alt={description} />
        </li>
        <li>
          {maxTemp}°C <span>{minTemp}°C</span>
        </li>
      </ul>
    </div>
  );
}

export default ForecastDay;
