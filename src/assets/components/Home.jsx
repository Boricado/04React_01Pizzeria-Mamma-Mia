import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza'

const Home = () => {
  return (
    <>
    <div className="home">
      <Header/>
    </div>
    
    <main className="container">
      <section className="row">
        <article className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-4">
          <CardPizza imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c" nombre="Napolitana" precio="5950" ingredientes="mozzarella, tomates, jamón, orégano"/>
        </article>
        <article className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-4">
          <CardPizza imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab" nombre="Española" precio="6950" ingredientes="mozzarella, gorgonzola, parmesano, provolone"/>
        </article>
        <article className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-4">
        <CardPizza imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3" nombre="Pepperoni" precio="6950" ingredientes="mozzarella, pepperoni, orégano"/>
        </article>
      </section>
    </main>
    </>
  )
}

export default Home
