import React from 'react'
import { formatearPrecio } from '../utils/formato' // ajustar precio en CLP

const CardPizza = (props) => {
  return (
    <div className="card p-0">
            <img src={props.imagen} className="card-img-top" alt={props.nombre} />
            <div className="card-body p-0">
                <h5 className="card-title fw-bold mb-3 text-start mt-3 ms-3">
                    Pizza {props.nombre}
                </h5>
                <p className="card-text h6 fw-light">{props.descripcion}</p>
                <hr/>
                
                <p className="card-text h6 fw-light">Ingredientes:</p>
                
                <ul className="list-unstyled ms-3">
                  {props.ingredientes.map((ing, i) => (
                    <li key={i}>
                      <i className="fa-solid fa-pizza-slice"></i> &nbsp; {ing}
                    </li>
                  ))}
                </ul>

                <hr/>
                <ul className="list-group list-group-flush text-center">
                    <li className="list-group-item py-0">
                        <p className="h3 fw-bold green ms-3 mb-4">Precio: ${formatearPrecio(props.precio)}</p>
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

export default CardPizza
