import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

const SearchView = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const { id } = useParams();
  const { query } = useParams();

  const filteredBooks = store.showBooks.filter(
    (libro) =>
      libro.title.toLowerCase().includes(query.toLowerCase()) ||
      libro.author.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {}, []);

  return (
    <div className="container-fluid mt-4">
      <div className="text-center">
        <h1 className="tituloAll">Coincidencias Encontradas para {query}</h1>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {filteredBooks.map((libro, i) => (
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
              <div style={{ height: "45px" }}>
                <p className="text-center m-1 fw-bold">{libro.title}</p>
              </div>
              <div>
                <p className="text-center text-capitalize mb-1 fw-medium">
                  {libro.author}
                </p>
              </div>
              <div>
                <p className="text-center mb-0 p-0 fw-normal">{libro.type}</p>
              </div>
              <div className="d-flex justify-content-center mt-1">
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
export default SearchView;
