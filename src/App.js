import logo from "./logo.svg";
import "./App.css";
import reactDom from "react-dom";
import Delay from "./components/Delay.js";
import Height from "./components/Height.js";
import Graphs from "./Graphs";
import Graph from "./components/Graph";
import { calculateByDelay } from "./functions/calculations";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/graphs/:variables" element={<Graphs/>} />
      </Routes>
    </Router>
  );
}

export default App;
