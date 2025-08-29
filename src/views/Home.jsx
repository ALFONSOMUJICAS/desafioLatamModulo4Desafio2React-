/**
 * Fecha: 2025-08-18 20:30:23
 * Descripción: Vista principal (Home).
 * Funcionalidad: Renderiza <Header /> (hero con imagen) y una grilla de <CardPizza />.
 * Conecta: Importa Header y CardPizza; se invoca desde <App />.
 * Notas: Solo comentarios añadidos.
 */
import React from 'react'
import Header from '../components/Header.jsx'
import CardPizza from '../components/CardPizza.jsx'
function Home() {
  return (
    <section id="home" className="py-3">
      <Header />
      <div className="container">
        <div className="row g-3 justify-content-center">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
            <CardPizza
              name="Napolitana"
              price={5950}
              ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
              img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
            <CardPizza
              name="Española"
              price={6950}
              ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
              img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
            <CardPizza
              name="Pepperoni"
              price={6950}
              ingredients={["mozzarella", "pepperoni", "orégano"]}
              img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
