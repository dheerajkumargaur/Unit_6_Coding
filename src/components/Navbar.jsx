import { Link } from "react-router-dom";
import "./Home.css";

export const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/" className="Home">
        Home
      </Link>
      <Link to="/about" className="Home">
        About
      </Link>
      <Link to="/products" className="Home">
        Product
      </Link>
    </div>
  );
};
