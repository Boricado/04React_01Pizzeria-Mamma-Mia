import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
import pizzas from '../utils/pizzas'

const Home = () => {
  return (
    <>
    <div className="home">
      <Header/>
    </div>
    
    <main className="container">
      <section className="row">
          {pizzas.map((pizza) => (
            <article key={pizza.id} className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-4">
              <CardPizza
                nombre={pizza.name}
                ingredientes={pizza.ingredients}
                precio={pizza.price}
                imagen={pizza.img}
                descripcion={pizza.desc}
              />
            </article>
          ))}
        
      </section>
    </main>
    </>
  )
}

export default Home
