import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Screens/Home';
import Cart from './Screens/Cart';
import Product from './Components/Product';
import Navbar from './Components/Navbar';
import BackDrop from './Components/BackDrop';
import SideDrawer from './Components/SideDrawer';
 import ProductScreen from './Screens/productScreen';     
import { useState } from 'react';

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <BackDrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductScreen />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
