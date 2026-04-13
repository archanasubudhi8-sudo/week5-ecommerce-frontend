import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;