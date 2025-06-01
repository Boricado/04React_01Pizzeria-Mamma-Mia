import React from 'react'
import { formatearPrecio } from '../utils/formato' // ajustar precio en CLP

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Pizzería Mamma Mia!</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100">
            <li className="nav-item me-2 mb-2">
              <button className="btn btn-dark border border-white" type="button"><i className="fa-solid fa-pizza-slice"></i> Home</button>
            </li>
          
          {token ? (   // condición ? valorSiVerdadero : valorSiFalso
            <>
              <li className="nav-item me-2 mb-2">
                <button className="btn btn-dark border border-white" type="button"><i className="fa-solid fa-user-lock"></i> Profile</button>
              </li>
              <li className="nav-item me-2 mb-2">
                <button className="btn btn-dark border border-white" type="button"><i className="fa-solid fa-lock"></i> Logout</button>
              </li>
            </>
          ) : (

            <>
              <li className="nav-item me-2 mb-2">
                <button className="btn btn-dark border border-white" type="button"><i className="fa-solid fa-lock-open"></i> Login</button>
              </li>
              <li className="nav-item me-2 mb-2">
                <button className="btn btn-dark border border-white" type="button"><i className="fa-solid fa-user-lock"></i> Register</button>
              </li>
            </>
          )
          }
            <li className="nav-item ms-auto">
            <button className="btn btn-dark border border-primary text-primary" type="button">
              <i className="fa-solid fa-cart-shopping"></i> Total: ${formatearPrecio(total)}
            </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
