import Clock from "./components/Clock";
import Settings from "./components/Settings";
import Logo from "./components/Logo";
import { useState } from "react";
import ChooseFeature from "./components/ChooseFeature";
import DaylieMessage from "./components/DaylieMessage";

function App() {
  return (
    <div className="App">
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

export default App;
