import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './component/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './component/Home'
import Explore from './component/Explore'
import About from './component/About'
import Contact from './component/Contact'
import StoreContextProvider from './StoreContext'
import Footer from './component/Footer'
import FoodContextProvider from '../context/FoodContext'
import { Card } from 'react-bootstrap'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'

const App = () => {
  return (
    <>
    
    <FoodContextProvider>

    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/explore' element={<Explore/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/placeorder' element={<PlaceOrder/>}></Route>
        </Routes>

       <Footer/>
      </BrowserRouter>
      </FoodContextProvider>
    </>
  )
}

export default App