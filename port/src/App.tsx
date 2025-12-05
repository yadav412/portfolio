import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import ProjectPage from "./components/projects";
import Footer from "./components/Footer";
import Githubstats from "./components/Githubstats";

function Home() {
  return (
    <>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="" element={} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
