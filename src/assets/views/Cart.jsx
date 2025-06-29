import React, { useState } from 'react';
import pizzaCart from '../utils/pizzaCart';
import CartElement from '../components/CartElement';
import { formatearPrecio } from '../utils/formato' // ajustar precio en CLP

const Cart = ({ carrito, eliminarPizza, actualizarCantidad }) => {
  const total = carrito.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);

return (
    <main className="container mt-4 text-start">
        <h2>Detalles del pedido:</h2>
        <br />
        {carrito.map((pizza) => (
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
        ))}
      <br />
      <h1>Total: ${formatearPrecio(total)}</h1>
      <br />
      <button className="btn btn-dark btn-lg mb-4" type="button">Pagar</button>
    </main>
);
};

export default Cart;