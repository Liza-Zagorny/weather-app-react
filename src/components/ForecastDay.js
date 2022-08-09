import React from "react";

function ForecastDay(props) {
  console.log(props.dataList[7]);
  return (
    <div className="ForecastDay">
      <ul>
        <li>Tue</li>
        <li>icon</li>
        <li>
          19°C <span>10°C</span>
        </li>
      </ul>
    </div>
  );
}

export default ForecastDay;
