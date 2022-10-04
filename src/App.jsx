import { BrowserRouter, Route, Routes } from "react-router-dom";
import Views from "./components/Views";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Views></Views>
      </BrowserRouter>
    </div>
  );
}

export default App;
