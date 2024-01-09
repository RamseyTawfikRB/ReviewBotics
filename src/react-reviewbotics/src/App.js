import "@stripe/stripe-js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import About from "./components/About";
import Pricing from "./components/Pricing";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    // add header here
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </Router>
    </div>
    // add footer here
  );
}

export default App;
