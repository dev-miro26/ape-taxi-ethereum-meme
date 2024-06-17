import React from "react";

const Landing = () => {
  const [disableCss, setDisableCss] = React.useState("null");
  const goToMain = () => {
    setDisableCss("_hide");
  };
  return (
    <div class={`prewiiew ${disableCss}`}>
      <div class="prewiiew__txt">
        <p>
          <span>Should I take you to 10M?</span>
        </p>
        <img src="/assets/images/tfot.png" alt />
      </div>
      <div class="prewiiew__btn" onClick={goToMain}>
        <button>YES, APE $TAXI</button>
      </div>
      <div class="prewiiew__fon">
        <img src="/assets/images/fon.png" alt />
      </div>
      <div class="prewiiew__peni">
        <img src="/assets/images/peni.png" alt />
      </div>
      <div class="prewiiew__steklo">
        <img src="/assets/images/steklo.png" alt />
      </div>
      <div class="prewiiew__car">
        <img src="/assets/images/car.png" alt />
      </div>
    </div>
  );
};

export default Landing;
