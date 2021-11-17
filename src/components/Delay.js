import { useState, useRef } from "react";
import PopUpWindow from "./PopUpWindow";
import NewWindow from "react-new-window";
function Delay() {
  const openNewWindow = () => {
    if (delay.current.value !== "" && height.current.value !== "") {
      window.open(
        `graphs/delay=${delay.current.value} height=${height.current.value} type=delay`,
        "",
        "",
        "width=800, height=800, left=100, top=100"
      );
    }
  };
  const delay = useRef();
  const height = useRef();

  return (
    <>
      <form className="Delay">
        Opóźnienie otwarcia spadochronu [s]
        <input type="number" className="Input" maxLength="3" ref={delay} />
        <br />
        <br />
        Wysokość skoku [m]
        <input type="number" className="Input" maxLength="3" ref={height} />
        <br />
        <button
          type="button"
          className="CalculateButton"
          onClick={openNewWindow}
        >
          Oblicz
        </button>
      </form>
    </>
  );
}

export default Delay;
