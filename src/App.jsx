import Clock from "./components/Clock";
import Settings from "./components/Settings";
import Logo from "./components/Logo";
import { useState } from "react";

function App() {
  const [settings, setSettings] = useState(false);

  return (
    <div className="App">
      <h1>
        Work<span className="titlespan">some</span>
      </h1>
      <Clock></Clock>
      {settings && <Settings></Settings>}
      <Logo></Logo>
    </div>
  );
}

export default App;
