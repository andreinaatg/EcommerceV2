import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/home/home';
import Shop from './pages/shop/shop';
import Contact from './pages/contact';
import Navbar from "./components/nav/Nav";
import NoPage from "./pages/noPage";
import Footer from "./components/footer/footer";

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
           <Route path="*" element={<NoPage />} />
         </Routes>
       </div>
     </Router>
     <Footer/>
  </div>
    );
}

export default App;
