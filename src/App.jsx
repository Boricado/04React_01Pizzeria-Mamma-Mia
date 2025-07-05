import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/Navbar'
import Home from './assets/views/Home'
import Footer from './assets/components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import RegisterPage from './assets/views/RegisterPage'
import LoginPage from './assets/views/LoginPage'
import Cart from './assets/views/Cart'
import Pizza from "./assets/views/Pizza"
import { Routes, Route } from 'react-router-dom'
import NotFound from './assets/views/NotFound'
//import pizzaCart from './assets/utils/pizzaCart'
import ProfilePage from './assets/views/ProfilePage'
import { PizzaProvider } from './assets/context/PizzaContext' 
import { CartProvider } from './assets/context/CartContext'

function App() {

  return (
    <>
    <PizzaProvider>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/RegisterPage' element={<RegisterPage/>} />
          <Route path='/LoginPage' element={<LoginPage/>} />
          <Route path='/ProfilePage' element={<ProfilePage/>} />
          <Route path='/Cart' element={<Cart />} /> 
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path='*' element={<NotFound />} /> 
        </Routes>
        <Footer/>
      </CartProvider>
    </PizzaProvider>
    </>
  )
}



export default App
