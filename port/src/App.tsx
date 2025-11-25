import MyNavbar from "./components/navbar";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectPage from "./components/projects";

function App() {
  return (
    <div>
      <MyNavbar></MyNavbar>
      <ProjectPage></ProjectPage>
    </div>
  );
}
export default App;
