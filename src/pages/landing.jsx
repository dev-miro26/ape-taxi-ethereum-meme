import React from "react";

const Landing = ({ playPause }) => {
  const [disableCss, setDisableCss] = React.useState("null");
  const goToMain = () => {
    setDisableCss("_hide");
    playPause();
  };
  return (
    <div className={`prewiiew ${disableCss}`}>
      <div className="prewiiew__txt">
        <p>
          <span>Should I take you to 10M?</span>
        </p>
        <img src="/assets/images/tfot.png" alt="tfot" />
      </div>
      <div className="prewiiew__btn" onClick={goToMain}>
        <button>YES, APE $TAXI</button>
      </div>
      <div className="prewiiew__fon">
        <img src="/assets/images/fon.png" alt="fon" />
      </div>
      <div className="prewiiew__peni">
        <img src="/assets/images/peni.png" alt="peni" />
      </div>
      <div className="prewiiew__steklo">
        <img src="/assets/images/steklo.png" alt="steklo" />
      </div>
      <div className="prewiiew__car">
        <img src="/assets/images/car.png" alt="car" />
      </div>
    </div>
  );
};

export default Landing;
