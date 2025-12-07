import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import ProjectPage from "./components/projects";
import Footer from "./components/Footer";
import Githubstats from "./components/Githubstats";
import Chatbot from "./components/Chatbot";

function Home() {
  return (
    <div className="home">
      <div className="opening">
        <p className="UX"></p>
      </div>
      <Chatbot></Chatbot>
      <Footer></Footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
