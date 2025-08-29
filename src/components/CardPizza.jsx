/**
 * Fecha: 2025-08-18 20:30:23
 * Descripción: Tarjeta de pizza (componente presentacional).
 * Funcionalidad: Muestra imagen, nombre, precio formateado (es-CL) e ingredientes; incluye botones de acción.
 * Props: name, price, ingredients, img.
 * Conecta: Usado por la vista <Home />.
 * Notas: Solo comentarios añadidos.
 */
import React from "react";
function CardPizza({ name, price, ingredients = [], img }) {
  return (
    <article className="card h-100 shadow-sm">
      <img className="card-img-top" src={img} alt={name} />
      <div className="card-body d-flex flex-column gap-2">
        <h3 className="card-title h5 mb-0">{name}</h3>
        <ul className="list-group list-group-flush">
          {ingredients.map((ing, i) => (
            <li className="list-group-item py-2" key={i}>
              • {ing}
            </li>
          ))}
        </ul>
        <div className="mt-auto d-flex justify-content-between align-items-center flex-wrap gap-2">
          <span className="fw-bold mb-0">${price.toLocaleString("es-CL")}</span>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-dark btn-sm">Ver más</button>
            <button className="btn btn-dark btn-sm">Añadir</button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CardPizza
