import React from "react";

function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let shortDay = day.slice(0, 3);
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (props.format === "long") {
    return (
      <span>
        {day} {hours}:{minutes}
      </span>
    );
  } else {
    return (
      <div>
        <div>{shortDay}</div>
        <div>
          {hours}:{minutes}
        </div>
      </div>
    );
  }
}

export default FormattedDate;
