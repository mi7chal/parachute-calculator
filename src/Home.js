import logo from "./logo.svg";
import { useState, useRef, useEffect } from "react";
import "./App.css";
import reactDom from "react-dom";
import Delay from "./components/Delay.js";
import Height from "./components/Height.js";
import Graphs from "./Graphs";
import Graph from "./components/Graph";
import { calculateByDelay } from "./functions/calculations";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Home() {
  const [item, setItem] = useState(true);
  const sortByBackground = useRef();
  const sortByDate = useRef();
  const sortByPopular = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
    sortByBackground.current.style.width =
      sortByPopular.current.offsetWidth + "px";
    sortByBackground.current.style.left =
      sortByPopular.current.offsetLeft + "px";
  }, []);

  const changeSort = (e, changeTo) => {
    sortByBackground.current.style.left = e.target.offsetLeft + "px";
    sortByBackground.current.style.width = e.target.offsetWidth + "px";
    if (changeTo === 1) {
      setItem(false);
    } else if (changeTo === 0) {
      setItem(true);
    }
  };

  return (
    <div className="App">
      <div className="AppHeader"></div>
      <div className="AppWrapper">
        <ul className="listsortBy">
          <li
            ref={sortByPopular}
            onClick={(e) => changeSort(e, 0)}
            className="listItemToquerySelector"
          >
            Opóźnienie
          </li>
          <li
            ref={sortByDate}
            onClick={(e) => changeSort(e, 1)}
            className="listItemToquerySelector2"
          >
            Wysokosc
          </li>
          <div ref={sortByBackground} className="sortByBackground"></div>
        </ul>
        {item == false ? <Height /> : <Delay />}
      </div>
    </div>
  );
}

export default Home;
