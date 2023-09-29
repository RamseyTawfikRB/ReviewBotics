import "@stripe/stripe-js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>ReviewBotics</h1>
      <Router>
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
