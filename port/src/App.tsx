import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import ProjectPage from "./components/projects";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import Hackathons from "./components/Hackathons";
import Esports from "./components/Esports";
import Research from "./components/Research";
import SFU from "./components/SFU";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/Hackathons" element={<Hackathons />} />
        <Route path="/experience" element={<Hackathons />} />
        <Route path="/SFU" element={<SFU />} />
        <Route path="/Esports" element={<Esports />} />
        <Route path="/Research" element={<Research />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
