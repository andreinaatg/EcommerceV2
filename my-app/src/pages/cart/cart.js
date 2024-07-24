import { Link } from "react-router-dom";
import './cart.css';
function Cart () {
    return ( 
    <div>
        <h1>Your Bag is empty</h1>
        <div class="button-container">
        <Link to='/'>
        <button id="continue-btn">Continue Shopping</button>
        </Link>        
    </div>
    </div>
     );
}

export default Cart;
