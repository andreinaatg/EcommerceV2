import { Link } from "react-router-dom";
import './nav.css';


function Navbar() {
  return (
    <>
    <header className="header"> 
    <Link to="/">
          <img src='images/Logo.png' alt="Logo" className="logo" />
    </Link>
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

        <div className="user-row">
        <Link to="/signin">
            <img src='images/user.png' alt="sign-in" className="icon" />
          </Link>
        <Link to="/cart">
            <img src='images/bag.png' alt="cart" className="icon" />
        </Link>        
        </div>
    </header>

    </>
  );
}

export default Navbar;

