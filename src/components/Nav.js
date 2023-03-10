import { Link } from "react-router-dom";
import "../css/Nav.css"

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Cart">Cart</Link>
      <Link to="/Login">Login</Link>
    </nav>
  );
};

export default Nav;
