import React, { createContext, useState } from 'react'
import pizzaCart from '../utils/pizzaCart'

//Creamos el contexto
export const CartContext = createContext()

//Creamos el provider o el proveedor
export const CartProvider = ({children}) => {
  const [carrito, setCarrito] = useState(pizzaCart)

  //Creamos la funcion que va a modificar el estado
  const eliminarPizza = (id) => {
    setCarrito(carrito.filter(pizza => pizza.id !== id))
  }

  const actualizarCantidad = (id, nuevaCantidad) => {
    setCarrito(carrito.map(pizza =>
      pizza.id === id ? { ...pizza, count: nuevaCantidad } : pizza
    ))
  }

  const total = carrito.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0)

  const agregarAlCarrito = (pizza) => {
  const existe = carrito.find(p => p.id === pizza.id);
  if (existe) {
    setCarrito(carrito.map(p =>
      p.id === pizza.id ? { ...p, count: p.count + 1 } : p
    ));
  } else {
    setCarrito([...carrito, { ...pizza, count: 1 }]);
  }
};

  return (
    <CartContext.Provider 
      value={{
        carrito,
        setCarrito,
        eliminarPizza,
        actualizarCantidad,
        agregarAlCarrito,
        total
      }} >
      {children}
    </CartContext.Provider>
  )
}


