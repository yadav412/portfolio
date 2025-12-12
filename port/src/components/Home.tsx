import Chatbot from "./Chatbot";
import Footer from "./Footer";

function Home() {
  return (
    <div className="head">
      <div className="home">
        <div className="opening"></div>
      </div>
      <div className="bod">
        <div className="About">
          <h1 className="Name">Yadav Singh</h1>
          <p>
            Software Systems@ SFU | Technical Project Manager | Co-Founder@
            Medpack
          </p>
          <p>📍 Vancouver, BC</p>
          <button className="buton">Contact me</button>
          <p></p>
          <button className="buton">Resume</button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
