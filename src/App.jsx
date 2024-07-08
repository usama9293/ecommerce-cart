
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import Cart from './Screens/Cart'
import Product from './Screens/Product'
import Navbar from './Components/Navbar'
function App() {
  return (


    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/product/:id' component={Product} />
        </Routes>
      </main>
    </Router>


  )
}

export default App
