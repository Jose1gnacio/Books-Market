import React from "react";
import { Link } from "react-router-dom";

//import { Carta } from "./carta"

export const Categorias = () => {
  return (
    <div className="container">
      <div className="mt-5 mb-5">
        <h1>
          <b>Categorías</b>
        </h1>
      </div>
      <div className="row row-cols-3 g-4">
        <div className="col">
          <div className="card shadow-sm p-3 mb-5 bg-dark rounded">
            <img
              src="https://placeholder.pics/svg/500x350/DEDEDE/555555/novelas"
              className="card-img-top rounded-circle"
              alt="Hollywood Sign on The Hill"
            />
            <div className="card-body">
              <h5 className="card-title">Novelas</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
                nemo.
              </p>
              <a href="#" className="btn btn-dark">
                Ver categoría
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm p-3 mb-5 bg-dark rounded">
            <img
              src="https://placeholder.pics/svg/500x350/DEDEDE/555555/biograficos"
              className="card-img-top rounded-circle"
              alt="Palm Springs Road"
            />
            <div className="card-body">
              <h5 className="card-title">Biograficos</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, voluptatem.
              </p>
              <a href="#" className="btn btn-dark">
                Ver categoría
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm p-3 mb-5 bg-dark rounded">
            <img
              src="https://placeholder.pics/svg/500x350/DEDEDE/555555/educativos"
              className="card-img-top rounded-circle"
              alt="Los Angeles Skyscrapers"
            />
            <div className="card-body">
              <h5 className="card-title">Educativos</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates, sint.
              </p>
              <a href="#" className="btn btn-dark">
                Ver categoría
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
