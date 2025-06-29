import { useState, useEffect } from 'react';
import Header from '../components/Header'
import CardPizza from '../components/CardPizza'
//import pizzas from '../utils/pizzas'


const Home = () => {
  const [users, setUsers] = useState([]);
  
  const url = "http://localhost:5000/api/pizzas";
  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
  };
  useEffect(() => {
  getData();
  }, [])

  return (
    <>
    <div className="home">
      <Header/>
    </div>
    
    <main className="container">
      <section className="row">
          {users.map((pizza) => (
            <article key={pizza.id} className="col-12 col-sm-10 col-md-6 col-lg-4 col-xl-4 my-4 d-flex justify-content-center">
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
