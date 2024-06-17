import React from "react";

const Taxi = () => {
  return (
    <div class="taxi">
      <div class="taxi__block">
        <div class="taxi__top">
          <div class="taxi__img">
            <img src="/assets/images/bac.png" alt />
          </div>
          <div class="taxi__head">$TAXI</div>
          <div class="taxi__img">
            <img src="/assets/images/bur.png" alt />
          </div>
        </div>
        <div class="taxi__gif">
          <img src="/assets/images/gif.gif" alt />
        </div>
        <div class="taxi__btn">
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
