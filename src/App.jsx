import Home from "./pages/home";

function App() {
  return (
    <div class="wrapper">
      <header class="header">
        <div class="header__container"></div>
      </header>

      <main class="page">
      <audio loop src="/assets/images/Taxi.mp3"></audio>
        <Home />
      </main>
    </div>
  );
}

export default App;
