import React, { useContext } from 'react'
import { formatearPrecio } from '../utils/formato' // ajustar precio en CLP
import { Link, NavLink } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const { total } = useContext(CartContext) //obtener total de CartContext
  const { token, logout } = useContext(UserContext) //obtener token de UserContext
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined)
  const navigate = useNavigate()

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Pizzería Mamma Mia!</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100">
            <li className="nav-item me-2 mb-2">
              <NavLink to="/" className="btn btn-dark border border-white" type="button"><i className="fa-solid fa-pizza-slice"></i> Home</NavLink>
            </li>
          
          { token ? (
            <>
              <li className="nav-item me-2 mb-2">
                <NavLink to="/ProfilePage" className={({ isActive }) => `btn btn-dark border border-white ${isActive ? 'active' : ''}`}><i className="fa-solid fa-user-lock"></i> Profile</NavLink>
              </li>
              <li className="nav-item me-2 mb-2">
                <button className="btn btn-dark border border-white" type="button" onClick={() => {
                  logout()      // cambia token a false
                  navigate('/') // redirige automáticamente al home
                  }}  ><i className="fa-solid fa-lock"></i> Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item me-2 mb-2">
               <NavLink to="/LoginPage" className={({ isActive }) => `btn btn-dark border border-white ${isActive ? 'active' : ''}`}><i className="fa-solid fa-lock-open"></i> Login</NavLink>
              </li>
              <li className="nav-item me-2 mb-2">
               <NavLink to="/RegisterPage" className={({ isActive }) => `btn btn-dark border border-white ${isActive ? 'active' : ''}`}><i className="fa-solid fa-user-lock"></i> Register</NavLink>
              </li>
            </>
          )}
      
            <li className="nav-item ms-auto">
            <NavLink to="/Cart" className="btn btn-dark border border-primary text-primary" type="button">
              <i className="fa-solid fa-cart-shopping"></i> Total: ${formatearPrecio(total)}
            </NavLink>
            </li>
          </ul>  
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
