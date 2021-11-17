import { useState, useRef } from "react";
import PopUpWindow from "./PopUpWindow";
import NewWindow from "react-new-window";
function Height() {
  const openNewWindow = () => {
    if (heightOpened.current.value !== "" && height.current.value !== "") {
      window.open(
        `graphs/heightOpened=${heightOpened.current.value} height=${height.current.value} type=height`,
        "",
        "",
        "width=600, height=800, left=200, top=200"
      );
    }
  };
  const heightOpened = useRef();
  const height = useRef();

  return (
    <>
      <form className="Delay">
        Wysokość otwarcia spadochronu [m]
        <input type="number" className="Input" maxLength="3" ref={heightOpened} />
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

export default Height;
