import { Link } from "react-router-dom";
import './nav.css';


function Navbar() {
  return (
        <nav>
    <ul>
    <li>
        <Link to="/">Home</Link>
    </li>
    <li>
        <Link to="/shop">shop</Link>
    </li>
    <li>
        <Link to="/contact">Contact</Link>
    </li>
    </ul>
    </nav>

  );
}

export default Navbar;

