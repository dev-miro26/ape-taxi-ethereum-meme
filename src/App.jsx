import FlowBand from "./components/flowBand";
import Footer from "./components/footer";
import Ape from "./pages/ape";
import Home from "./pages/home";
import Landing from "./pages/landing";
import Meme from "./pages/meme";
import Taxi from "./pages/taxi";

function App() {
  return (
    <>
      <div className="wrapper">
        <header className="header">
          <div className="header__container"></div>
        </header>
        <main className="page">
          <audio loop src="/assets/images/Taxi.mp3"></audio>
          <Landing />
          <Home />
          <FlowBand />
          <Taxi />
          <Meme />
          <Ape />
        </main>
        <Footer />
      </div>
      <div className="popup popup_popup">
        <div className="popup__content">
          <div className="popup__body">
            <div className="popup__close"></div>
          </div>
        </div>
      </div>
      <div className="popup popup_massagename-message">
        <div className="popup__content">
          <div className="popup__body">
            <div className="popup__close"></div>
          </div>
        </div>
      </div>
      <div className="popup popup_video">
        <div className="popup__content">
          <div className="popup__body">
            <div className="popup__close popup__close_video"></div>
            <div className="popup__video _video"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
