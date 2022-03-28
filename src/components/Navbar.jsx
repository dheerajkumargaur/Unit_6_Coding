import { Link } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div>
      <Link to="/" className="Home">
        Home
      </Link>
      <Link to="/about" className="About">
        About
      </Link>
      <Link to="/products" className="Product">
        Product
      </Link>
    </div>
  );
};
