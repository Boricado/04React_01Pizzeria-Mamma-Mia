import { useState, useEffect } from 'react'
import { formatearPrecio } from '../utils/formato'

const Pizza = () => {

    const [pizza, setPizza] = useState(null);
    const [error, setError] = useState(null);

    const url = 'http://localhost:5000/api/pizzas/p001'

useEffect(() => {
    const getPizza = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('No se pudo obtener la pizza');
        const data = await response.json();
        setPizza(data);
      } catch (err) {
        setError(err.message);
      }
    };
    getPizza();
  }, []);

if (error) return <p className="text-danger">Error: {error}</p>;
if (!pizza) return <p>Cargando pizza...</p>;

  return (
    <div className="card p-0">
            <img src={pizza.img} className="card-img-top" alt={pizza.name} />
            <div className="card-body p-0">
                <h5 className="card-title fw-bold mb-3 text-start mt-3 ms-3">
                    Pizza {pizza.name}
                </h5>
                <p className="card-text h6 fw-light">{pizza.desc}</p>
                <hr/>
                
                <p className="card-text h6 fw-light">Ingredientes:</p>
                
                <ul className="list-unstyled ms-3">
                    {pizza.ingredients.map((ing, i) => (
                    <li key={i}>
                        <i className="fa-solid fa-pizza-slice"></i> &nbsp; {ing}
                    </li>
                    ))}
                </ul>

                <hr/>
                <ul className="list-group list-group-flush text-center">
                    <li className="list-group-item py-0">
                        <p className="h3 fw-bold green ms-3 mb-4">Precio: ${formatearPrecio(pizza.price)}</p>
                    </li>
                </ul>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-outline-dark me-5 mb-3" type="button">Ver más <i className="fa-regular fa-eye"></i></button>
                    <button className="btn btn-dark mb-3" type="button">Añadir <i className="fa-solid fa-cart-shopping"></i></button>
                </div>

            </div>
    </div>
  )
}

export default Pizza
