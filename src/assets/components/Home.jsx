import { useState, useEffect } from 'react';
import Header from './Header'
import CardPizza from './CardPizza'
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
