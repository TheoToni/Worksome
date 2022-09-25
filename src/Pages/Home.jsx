import React from "react";
import Clock from "../components/Clock";
import Logo from "../components/Logo";
import ChooseFeature from "../components/ChooseFeature";
import DaylieMessage from "../components/DaylieMessage";

function Home() {
  return (
    <div>
      <h1>
        Work<span className="titlespan">some</span>
      </h1>

      <DaylieMessage></DaylieMessage>
      <ChooseFeature></ChooseFeature>
      <Clock></Clock>
      <Logo></Logo>
    </div>
  );
}

export default Home;
