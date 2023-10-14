import React from "react";
import { Link } from "react-router-dom";

export const Carta = (props) => {
  return (
    <div class="col">
      <div class="card shadow-sm p-3 mb-5 bg-white rounded">
        <img src={props.img} className="card-img-top rounded-circle" alt="" />
        <div class="card-body">
          <h5 class="card-title">{props.titulo}</h5>
          <p class="card-text">{props.descripcion}</p>

          <a class="btn btn-dark">Ver categoría</a>
        </div>
      </div>
    </div>
  );
};
