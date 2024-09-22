import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home';
import Cart from "./pages/cart";
import Details from "./pages/details";
import Header from './components/header';

function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/details">Details</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </nav> */}
        <Header/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
