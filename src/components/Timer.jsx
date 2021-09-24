import React, { useEffect, useState } from "react";
import moment from "moment";

const Timer = (props) => {
  const { date } = props;
  const targetTime = moment(date);

  const [currentTime, setCurrentTime] = useState(moment());
  const timeBetween = moment.duration(targetTime.diff(currentTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  let months = timeBetween.months().toString().substring(1);
  let days = timeBetween.days().toString().substring(1);
  let hours = timeBetween.hours().toString().substring(1);
  let minutes = timeBetween.minutes().toString().substring(1);
  let seconds = timeBetween.seconds().toString().substring(1);
  return (
    <>
      <p className="counter">
        <span>{months}m </span>
        <span>{days}d </span>
        <span>{hours}h </span>
        <span>{minutes}min </span>
        <span>{seconds}s ago</span>
      </p>
    </>
  );
};
export default Timer;

/*
import React from "react";
import "./Timer.css";
import countdown from "countdown";

const Timer = () => {
  let time = countdown(new Date(2021, 7, 30)).toString();
  const tick = () => {
    setTimeout(time, 1000);
  };
  console.log(tick());
  return (
    <div className="timmerWrapper">
      <p>it has passed {time} from the project's presentation date</p>
    </div>
  );
};

export default Timer;

*/
