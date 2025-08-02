import React, { useContext, useState } from 'react'
import CartElement from '../components/CartElement'
import { formatearPrecio } from '../utils/formato'
import { CartContext } from '../context/CartContext'
import { UserContext } from '../context/UserContext'

const Cart = () => {
  const { carrito, eliminarPizza, actualizarCantidad, total } = useContext(CartContext)
  const { token } = useContext(UserContext)
  const [mensaje, setMensaje] = useState("null")

  const realizarPago = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart: carrito }),
      })

      const data = await res.json();

      if (res.ok) {
        setMensaje({ tipo: "success", texto: "Compra realizada con éxito" })
      } else {
        throw new Error(data.message || "Error al procesar el pago")
      }
    } catch (error) {
      console.error("Error al realizar el pago:", error.message)
      setMensaje({ tipo: "danger", texto: "Error al procesar la compra" })
    }
  }

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
        <button className="btn btn-dark btn-lg mb-4" type="button" 
          disabled={!token || carrito.length === 0}
          onClick={realizarPago}
        >
        Pagar
      </button>

      {mensaje && (
        <div className={`alert alert-${mensaje.tipo} mt-4 text-center`} role="alert">
          {mensaje.texto}
        </div>
      )}

    </main>
  );
};

export default Cart;
