import { BrowserRouter, Route, Routes } from "react-router-dom";
import Views from "./components/Views";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <BrowserRouter>
          <Views></Views>
        </BrowserRouter>
      </div>
    </DndProvider>
  );
}

export default App;
