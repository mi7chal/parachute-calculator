import { useEffect, useState } from "react";
import Graph from "./components/Graph";
import PopUpWindow from "./components/PopUpWindow";
import {
  calculateByDelay,
  calculateSpeedByDelay,
  calculateByHeight,
  calculateSpeedByHeight,
} from "./functions/calculations";
import NewWindow from "react-new-window";
import { useParams } from "react-router-dom";

function Graphs() {
  const { variables } = useParams();
  console.log(variables);
  const varRegex = /\w+(?=(\s)*(\=))/g;
  const valueRegex = /(?<=(\=)[\s'"]*)\w+/g;

  const varArr = variables.match(varRegex);
  const valueArr = variables.match(valueRegex);

  let obj = {};
  for (let i in varArr) {
    obj[varArr[i]] = valueArr[i];
  }
  console.log(obj);
  if (obj.type == "delay") {
    return (
      <div className="Graphs">
        <Graph
          data={calculateByDelay(obj.delay, obj.height)}
          title="zmiana wysokosci w czasie"
          titleX="czas [s]"
          titleY="wysokosc [m]"
        />
        <Graph
          data={calculateSpeedByDelay(obj.delay, obj.height)}
          title="zmiana predkosci w czasie"
          titleX="czas [s]"
          titleY="predkosc [m/s]"
        />
      </div>
    );
  } else if (obj.type == "height") {
    return (
      <div className="Graphs">
        <Graph
          data={calculateByHeight(obj.heightOpened, obj.height)}
          title="zmiana wysokosci w czasie"
          titleX="czas [s]"
          titleY="wysokosc [m]"
        />
        <Graph
          data={calculateSpeedByHeight(obj.heightOpened, obj.height)}
          title="zmiana predkosci w czasie"
          titleX="czas [s]"
          titleY="predkosc [m/s]s"
        />
      </div>
    );
  } else {
    return "blad";
  }
}

export default Graphs;
