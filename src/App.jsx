import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart/Cart";
import Home2 from "./pages/Home2";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToastContainer position="top-center" autoClose={500} />
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
