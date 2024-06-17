import FlowBand from "./components/flowBand";
import Footer from "./components/footer";
import Home from "./pages/home";
import Landing from "./pages/landing";
import Meme from "./pages/meme";
import Taxi from "./pages/taxi";

function App() {
  return (
    <>
      <div class="wrapper">
        <header class="header">
          <div class="header__container"></div>
        </header>
        <main class="page">
          <audio loop src="/assets/images/Taxi.mp3"></audio>
          <Landing />
          <Home />
          <FlowBand />
          <Taxi />
          <Meme />
        </main>
        <Footer />
      </div>
      <div class="popup popup_popup">
        <div class="popup__content">
          <div class="popup__body">
            <div class="popup__close"></div>
          </div>
        </div>
      </div>
      <div class="popup popup_massagename-message">
        <div class="popup__content">
          <div class="popup__body">
            <div class="popup__close"></div>
          </div>
        </div>
      </div>
      <div class="popup popup_video">
        <div class="popup__content">
          <div class="popup__body">
            <div class="popup__close popup__close_video"></div>
            <div class="popup__video _video"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
