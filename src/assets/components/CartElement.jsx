import React, { useState, useEffect } from 'react'
import { formatearPrecio } from '../utils/formato' // ajustar precio en CLP
import { Link } from 'react-router-dom'

const CartElement = ({ id, nombre, precio, img, cantidadInicial, eliminarPizza, actualizarCantidad }) => {
  const [contador, setContador] = useState(cantidadInicial)

useEffect(() => {
if (contador === 0) {
eliminarPizza(id)
} else {
actualizarCantidad(id, contador);
}
}, [contador])

const restarClick = () => {
if (contador > 0) {
    setContador(contador - 1)
}
}

const sumarClick = () => {
    setContador(contador + 1)
}

return (
    <div className="card mb-3 p-3">
        <div className="d-flex flex-row align-items-center justify-content-between gap-3">
        <Link to={`/pizza/${id}`} className="d-flex align-items-center ms-4">
            <img src={img} alt={nombre} width="100" />
            <h5 className='ms-5'>{nombre}</h5>
        </Link>
        <div className="d-flex align-items-center me-4">
            <p className='fw-bold me-4 mb-0'>${formatearPrecio(precio)}</p>
            <div className="d-flex gap-2 align-items-center">
            <button className="btn btn-outline-danger me-2" onClick={restarClick}>-</button>
            <span>{contador}</span>
            <button className="btn btn-outline-primary ms-2" onClick={sumarClick}>+</button>
        </div>
        </div>
        </div>
    </div>
    );
};

export default CartElement;