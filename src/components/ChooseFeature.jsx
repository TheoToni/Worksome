import React from "react";
import { Link } from "react-router-dom";

function ChooseFeature() {
  return (
    <div className="chooseFeaturePanel">
      <Link to="/todos">
        <button className="featureButton_todos">Notes</button>
      </Link>

      <Link to="/notes">
        <button className="featureButton_notes">Todos</button>
      </Link>

      <Link to="/games">
        <button className="featureButton_games">Games</button>
      </Link>
    </div>
  );
}

export default ChooseFeature;
