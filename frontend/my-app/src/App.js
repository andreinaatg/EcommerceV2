import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/home';
import Shop from './pages/shop';
import Contact from './pages/contact';
import Navbar from "./components/nav/Nav";
import NoPage from "./pages/noPage";

function App() {
  return (
    <div className="App">
    <header className='App-header'>
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
     </header>
  </div>
    );
}

export default App;
