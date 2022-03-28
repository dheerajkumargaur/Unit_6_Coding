// import logo from './logo.svg';
import { Routes ,Route} from 'react-router-dom';
import './App.css';
import { About } from './components/About';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Product } from './components/Product';
import { Details } from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path = "/" element={<Home/>}></Route>
        <Route path = "/about" element={<About/>}></Route>
        <Route path = "/products" element={<Product/>}></Route>
        <Route path = "/products/:id" element={<Details/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
