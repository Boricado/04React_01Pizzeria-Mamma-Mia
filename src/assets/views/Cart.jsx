import React, { useContext } from 'react'
import CartElement from '../components/CartElement'
import { formatearPrecio } from '../utils/formato'
import { CartContext } from '../context/CartContext'

const Cart = () => {
  const { carrito, eliminarPizza, actualizarCantidad, total } = useContext(CartContext)

  return (
    <main className="container mt-4 text-start">
      <h2>Detalles del pedido:</h2>
      <br />
      {carrito.length === 0 ? (
        <p>No hay pizzas en el carrito.</p>
      ) : (
        carrito.map((pizza) => (
          <CartElement
            key={pizza.id}
            id={pizza.id}
            nombre={pizza.name}
            precio={pizza.price}
            cantidadInicial={pizza.count}
            img={pizza.img}
            eliminarPizza={eliminarPizza}
            actualizarCantidad={actualizarCantidad}
          />
        ))
      )}
      <br />
      <h1>Total: ${formatearPrecio(total)}</h1>
      <br />
      <button className="btn btn-dark btn-lg mb-4" type="button">Pagar</button>
    </main>
  );
};

export default Cart;
