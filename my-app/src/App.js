import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/home/home';
import Shop from './pages/shop/shop';
import Contact from './pages/contact/contact';
import Navbar from "./components/nav/Nav";
import NoPage from "./pages/noPage";
import Footer from "./components/footer/footer";
import Cart from "./pages/cart/cart";
import './media.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar/>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/shop" element={<Shop />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/cart" element={<Cart />} />
           <Route path="*" element={<NoPage />} />
         </Routes>
       </div>
     </Router>
     <Footer/>
  </div>
    );
}

export default App;
