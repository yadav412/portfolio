import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import ProjectPage from "./components/projects";
import Footer from "./components/Footer";
import Githubstats from "./components/Githubstats";
import Chatbot from "./components/Chatbot";
import Hackathons from "./components/Hackathons";

function Home() {
  return (
    <div className="home">
      <div className="opening">
        <h1 className="callingcard">Yadav Singh</h1>
        <p className="callingcard">The South African Med Tech Guy</p>
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
        <Route path="/hackathons" element={<Hackathons></Hackathons>} />
        <Route path="/experience" element={<Hackathons></Hackathons>} />
        <Route path="/SFU" element={<Hackathons></Hackathons>} />
        <Route path="/hackathons" element={<Hackathons></Hackathons>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
