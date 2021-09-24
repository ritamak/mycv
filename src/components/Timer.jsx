import React from "react";
import "./Timer.css";
import countdown from "countdown";

const Timer = () => {
  return (
    <div className="timmerWrapper">
      <p>
        it has passed {countdown(new Date(2021, 7, 30)).toString()} from the
        project's presentation date
      </p>
    </div>
  );
};

export default Timer;
