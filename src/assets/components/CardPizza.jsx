import React from 'react'
import { formatearPrecio } from '../utils/formato' // ajustar precio en CLP

const CardPizza = (props) => {
  return (
    <div class="card p-0">
            <img src={props.imagen} class="card-img-top" alt={props.nombre} />
            <div class="card-body p-0">
                <h5 class="card-title fw-bold mb-3 text-start mt-3 ms-3">
                    Pizza {props.nombre}
                </h5>
                <hr/>
                <p class="card-text h6 fw-light">Ingredientes:</p>
                <p class="fw-light">
                    <i class="fa-solid fa-pizza-slice"></i> &nbsp;  
                    {props.ingredientes}
                </p>
                <hr/>
                <ul class="list-group list-group-flush text-center">
                    <li class="list-group-item py-0">
                        <p class="h3 fw-bold green ms-3 mb-4">Precio: ${formatearPrecio(props.precio)}</p>
                    </li>
                </ul>
                <div class="d-flex justify-content-center">
                  <button class="btn btn-outline-dark me-5 mb-3" type="button">Ver más <i class="fa-regular fa-eye"></i></button>
                  <button class="btn btn-dark mb-3" type="button">Añadir <i class="fa-solid fa-cart-shopping"></i></button>
                </div>

            </div>
    </div>
  )
}

export default CardPizza
