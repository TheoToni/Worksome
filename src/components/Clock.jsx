import React from "react";
import { useState, useEffect } from "react";

function Clock() {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);
  const [hours, setHours] = useState(getHours());

  function getHours() {
    let hour = new Date().getHours();
  }

  useEffect(() => {
    const theTime = new Date();
    let hour = theTime.getHours();
    console.log(hour);
  }, []);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };

  setInterval(updateTime, 1000);
  return <div className="clock">{currentTime}</div>;
}

export default Clock;
