import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "../../styles/saleBooks.css";
import "../../styles/bookDetails.css";
import { Context } from "../store/appContext";

export const OtherProfile = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getOtherBooks(store.oneBook?.user?.userImage);
  }, []);

  return (
    <div className="container d-flex justify-content-center">
      <div
        className="border mt-5 mx-3 rounded-5 target shadow-lg"
        style={{ width: "500px", height: "450px" }}
      >
        <div className="d-flex mt-2 justify-content-center border-0">
          <img
            className="cardImage border border-black"
            style={{ width: "280px", height: "280px" }}
            src={store.otherBooks[0]?.user?.userImage}
            alt={"{`Portada de ${libro.title}`}"}
          />
        </div>
        <div className="">
          <h1 className="mt-4 mb-0 fs-2 text-center text-dark fw-medium">
            {store.otherBooks[0]?.user?.name}{" "}
            {store.otherBooks[0]?.user?.lastname}!
          </h1>
          <h6 className="text-center mt-0">Libros de</h6>
        </div>
        <div className="mt-4 text-center">
          <h6 className="card-text">
            Región de {store.otherBooks[0]?.user?.region}
          </h6>
        </div>
      </div>
      <div className="container mt-4">
        <div className="text-center">
          <h1 className="titulo-exchange">LIBROS DISPONIBLES</h1>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          {store.otherBooks.map((libro, i) => (
            <div
              className="contenedor-card p-0"
              style={{ width: "auto", height: "300" }}
              key={i}
            >
              <div className="d-flex justify-content-center">
                <img
                  className="card-img-top mas-vendidos-img"
                  style={{ maxWidth: "100%", maxHeight: "300px" }}
                  src={libro.photo}
                  alt={`Portada de ${libro.title}`}
                />
              </div>
              <div className="card-body">
                <h6 className="card-title">{libro.title}</h6>
                <p className="card-text  mb-2">{libro.author}</p>
                <p className="card-text  mb-2">{libro.price}</p>
                <Link
                  to={`/allBooks/bookDetails/${libro.id}`}
                  className="btn btn-dark mb-3 boton-ver-detalles"
                >
                  Ver detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
