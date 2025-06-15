import React, { useState } from 'react';
import pizzaCart from '../utils/pizzaCart';
import CartElement from './CartElement';
import { formatearPrecio } from '../utils/formato' // ajustar precio en CLP

const Cart = () => {

  const [carrito, setCarrito] = useState(pizzaCart) // Este es el estado del carrito, inicializado con los datos originales

//Función para eliminar una pizza según su ID
const eliminarPizza = (id) => {
setCarrito(carrito.filter(pizza => pizza.id !== id))
}

const actualizarCantidad = (id, nuevaCantidad) => {
  setCarrito(carrito.map(pizza =>
    pizza.id === id ? { ...pizza, count: nuevaCantidad } : pizza
  ))
}


 // Cálculo del total con la cantidad actualizada de cada pizza
const total = carrito.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);

return (
    <div className="container mt-4 text-start">
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
    </div>
);
};

export default Cart;