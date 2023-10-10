import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/allBooks.css";

import { Context } from "../store/appContext";

export const AllBooks = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getLibros();
    actions.getExchangeBooks();
    actions.getSaleBooks();
  }, []);

  return (
    <div className="container-fluid mt-4">
      <div className="text-center ">
        <h1 className="tituloAll">LIBROS EN VENTA</h1>
      </div>
      <div className="d-flex flex-wrap justify-content-center  ">
        {store.showBooks.map((libro, i) => (
          <div
            className="contenedor-card p-0"
            style={{ width: "220px", height: "300" }}
            key={i}
          >
            <div className="d-flex justify-content-center">
              <img
                className="card-img-top allbooks-img mb-0"
                style={{ width: "220px", height: "300px" }}
                src={libro.photo}
                alt={`Portada de ${libro.title}`}
              />
            </div>
            <div className="card-body pt-0 mt-0 d-block justify-content-center">
              <div style={{ height: "110px" }}>
                <p className="text-center m-1">
                  <b>{libro.title}</b>
                </p>
                <p className="text-center text-capitalize mb-1">
                  {libro.author}
                </p>
                <p className="text-center  mb-3">{libro.price}</p>
                <p className="text-center  mb-3">{store.oneBook?.user_name}</p>
              </div>
              <div className="d-flex justify-content-center">
                <Link
                  to={`/allBooks/bookDetails/${libro.id}`}
                  className="btn btn-dark mb-3 boton-ver-detalles"
                >
                  Ver detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
