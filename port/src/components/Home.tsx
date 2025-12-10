import Chatbot from "./Chatbot";
import Footer from "./Footer";

function Home() {
  return (
    <div className="head">
      <div className="home">
        <div className="opening">
          <h1 className="callingcard">Yadav Singh</h1>
          <p className="callingcard">The South African Med Tech Guy</p>
        </div>
      </div>
      <div className="bod">
        <h1 className="about"></h1>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
