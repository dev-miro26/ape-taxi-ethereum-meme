import React from "react";

const Taxi = () => {
  return (
    <div className="taxi">
      <div className="taxi__block">
        <div className="taxi__top">
          <div className="taxi__img">
            <img src="/assets/images/bac.png" alt="image" />
          </div>
          <div className="taxi__head">$TAXI</div>
          <div className="taxi__img">
            <img src="/assets/images/bur.png" alt="image" />
          </div>
        </div>
        <div className="taxi__gif">
          <img src="/assets/images/gif.gif" alt="image" />
        </div>
        <div className="taxi__btn">
          <a
            href="https://raydium.io/swap/?inputMint=sol&outputMint=5tFqyPHb6yf6CEzWFCfJzrLYgHW4f4VMT3bLyznXo8Kn"
            target="_blank"
          >
            APE TAXI
          </a>
          <a href="#" target="_blank">
            FAKE TAXI 50 SOL
          </a>
        </div>
      </div>
    </div>
  );
};

export default Taxi;
