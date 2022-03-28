// import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Product } from "./components/Product";
import { Details } from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" elements={<Home />}></Route>
        <Route path="/about" elements={<About />}></Route>
        <Route path="/products" elements={<Product />}></Route>
        <Routes path="/products/:id" elements={<Details />}></Routes>
      </Routes>
    </div>
  );
}

export default App;
