import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/Navbar'
import Home from './assets/components/Home'
import Footer from './assets/components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
// import RegisterPage from './assets/components/RegisterPage'
// import LoginPage from './assets/components/LoginPage'
import Cart from './assets/components/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home />
      {/* <RegisterPage/>*/}
      {/* <LoginPage/>*/}
      <Cart />
      <Footer/>
    </>
  )
}

export default App
