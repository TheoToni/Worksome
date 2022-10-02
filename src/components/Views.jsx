import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Games from "../Pages/Games";
import Note from "../Pages/NotePage";
import Todo from "../Pages/Todo";
import Home from "../Pages/Home";
function Views() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/games" element={<Games></Games>}></Route>
      <Route path="/notes" element={<Note></Note>}></Route>
      <Route path="/todos" element={<Todo></Todo>}></Route>
      <Route path="*" element={<div>404 Not Found</div>}></Route>
    </Routes>
  );
}

export default Views;
