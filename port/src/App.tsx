import MyNavbar from "./components/navbar";

//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectPage from "./components/projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <MyNavbar></MyNavbar>
      <ProjectPage></ProjectPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
