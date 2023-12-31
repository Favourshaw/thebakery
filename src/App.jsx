import "./App.css";
import Home from "../src/components/Home";

import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import How from "./components/How";
import Contact from "./components/Contact";
import Unsubscribe from "./components/Unsubscribe";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/how" element={<How />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Unsubscribe" element={<Unsubscribe />} />
    </Routes>
  );
}

export default App;
