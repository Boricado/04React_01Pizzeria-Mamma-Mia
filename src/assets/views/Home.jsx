import { useState, useEffect, useContext } from 'react';
import Header from '../components/Header'
import CardPizza from '../components/CardPizza'
//import pizzas from '../utils/pizzas'
import { PizzaContext } from '../context/PizzaContext';


const Home = () => {
  const { pizzas } = useContext(PizzaContext) //usar pizza del contexto

  return (
    <>
    <div className="home">
      <Header/>
    </div>
    
    <main className="container">
      <section className="row">
          {pizzas.map((pizza) => (
            <article key={pizza.id} className="col-12 col-sm-10 col-md-6 col-lg-4 col-xl-4 my-4 d-flex justify-content-center">
            <CardPizza pizza={pizza} />
            </article>
          ))}
        
      </section>
    </main>
    </>
  )
}

export default Home
