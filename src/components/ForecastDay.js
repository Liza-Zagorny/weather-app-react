import React, { useEffect, useState } from "react";
import FormattedDate from "./FormattedDate";
import "../css/ForecastDay.css";

function ForecastDay(props) {
  const [dt, setDt] = useState(new Date(props.data.dt * 1000));
  const [iconCode, setIconCode] = useState(props.data.iconCode);
  const [imgSrc, setImgSrc] = useState(
    `https://openweathermap.org/img/wn/${iconCode}@2x.png`
  );
  const [description, setDescription] = useState(props.data.description);
  const [maxTemp, setMaxTemp] = useState();
  const [minTemp, setMinTemp] = useState();

  useEffect(() => {
    setDt(new Date(props.data.dt * 1000));
    setIconCode(props.data.iconCode);
    setImgSrc(`https://openweathermap.org/img/wn/${iconCode}@2x.png`);
    setDescription(props.data.description);
    setMaxTemp(Math.round(props.data.maxForDay));
    setMinTemp(Math.round(props.data.minForDay));
  }, [props, iconCode]);

  return (
    <div className="ForecastDay">
      <ul>
        <li>
          <FormattedDate date={dt} format={"short"} />
        </li>
        <li>
          <img src={imgSrc} alt={description} />
        </li>
        <li>
          {maxTemp}°C <span className="min-tmp">{minTemp}°C</span>
        </li>
      </ul>
    </div>
  );
}

export default ForecastDay;
