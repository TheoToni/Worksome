import React from "react";
import { useState, useEffect } from "react";
import spotify from "../pictures/spotify.png";

function Clock() {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);
  //this is for later to render depending on day or night
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
  return (
    <div className="clock">
      {currentTime}{" "}
      <a href="https://spotify.com" target="_blank">
        <img src={spotify} alt="" />
      </a>
    </div>
  );
}

export default Clock;
