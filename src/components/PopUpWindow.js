import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const PopUpWindow = (props) => {
  const [container, setContainer] = useState(null);
  const newWindow = useRef(window);

  useEffect(() => {
    const div = document.createElement("div");
    setContainer(div);
  }, []);

  useEffect(() => {
    if (container) {
      newWindow.current = window.open(
        "",
        "",
        "width=600,height=400,left=200,top=200"
      );
      newWindow.current.document.body.appendChild(container);
      const curWindow = newWindow.current;
      return () => curWindow.close();
    }
  }, [container]);

  return container && createPortal(props.children, container);
};
export default PopUpWindow;









// import React from "react";
// import ReactDOM, {createPortal} from 'react-dom'
// import Chart from "chart.js/auto";

// import Graph from "./Graph";
// import { useEffect } from "react";
// import "../functions/calculations";
// import { calculateByDelay, calculateSpeedByDelay } from "../functions/calculations";

// class MyWindowPortal extends React.PureComponent {
//   constructor(props) {
//     super(props);
//     // STEP 1: create a container <div>
//     this.containerEl = document.createElement('div');
//     this.externalWindow = null;
//     this.containerEl.style.width="600px";
//     this.containerEl.style.height="600px";


//   }

//   render() {
//     // STEP 2: append props.children to the container <div> that isn't mounted anywhere yet
//     return ReactDOM.createPortal(<Graph data={calculateByDelay(33, 3000)} title="zmiana wysokosci w czasie" titleX="wysokosc [m]" titleY="czas [s]" />, this.containerEl);
//   }

//   componentDidMount() {
//     // STEP 3: open a new browser window and store a reference to it
//     this.externalWindow = window.open('', '', 'width=1100,height=800,left=200,top=200');

//     // STEP 4: append the container <div> (that has props.children appended to it) to the body of the new window
//     this.externalWindow.document.body.appendChild(this.containerEl);
//   }

//   componentWillUnmount() {
//     // STEP 5: This will fire when this.state.showWindowPortal in the parent component becomes false
//     // So we tidy up by closing the window
//     //this.externalWindow.close();
//   }
// }

// export default MyWindowPortal;