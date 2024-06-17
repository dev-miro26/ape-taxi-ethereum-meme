import React from "react";

const Home = ({ playPause }) => {
  return (
    <div className="home">
      <div className="home__gif">
        <img src="assets/images/3.gif" alt="3" />
      </div>
      <div className="home__sound" onClick={playPause}>
        <img src="assets/images/moff.png" alt="moff" />
      </div>
    </div>
  );
};

export default Home;
