import React from "react";
import search from "../pictures/search.png";
import { useState } from "react";

function Search({ handleSearchNote }) {
  const [inputData, setInputData] = useState("");

  function inputHandler(event) {
    setInputData(event.target.value);
  }
  return (
    <div className="searchbarContainer">
      <textarea
        onChange={(event) => handleSearchNote(event.target.value)}
        placeholder="Search here"
        name=""
        id=""
        cols="25"
        rows="1"
      ></textarea>
      <img src={search} alt="" />
    </div>
  );
}

export default Search;
