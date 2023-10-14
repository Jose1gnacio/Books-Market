import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/profile.css";
import { Context } from "../store/appContext";

export const Profile = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getMySaleBooks(store.currentUser?.user?.id);
    actions.getMyExchangeBooks(store.currentUser?.user?.id);
    actions.getAllMyPurchasedBooks(store.currentUser?.user?.id);
    actions.getAllMySoldBooks(store.currentUser?.user?.id);
  }, [store.currentUser?.user?.id]);

  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row containerProfile ">
        <div className="col-md-5 ">
          <div className="card cardDatos border-0">
            <div className="d-flex  overflow-profile justify-content-center containerFoto border-0">
              <img
                className="card-img-top card-img-top-profile cardImage"
                style={{ width: "300px", height: "300px" }}
                src={store.currentUser?.user?.userImage}
                alt={"{`Portada de ${libro.title}`}"}
              />
            </div>
          </div>
        </div>
        <div className="col-md-7 text-center">
          <div className="row">
            <p className="bienvenida">
              Nos alegra que estés aquí, {store.currentUser?.user?.name}!{" "}
            </p>
          </div>
          <div className="row card-body containerDatosPersonales">
            <h5 className="card-title nombre text-capitalize">
              {store.currentUser?.user?.name}{" "}
              {store.currentUser?.user?.lastname}{" "}
            </h5>
            <h6 className="card-text">{store.currentUser?.user?.email}</h6>
            <h6 className="card-text">
              Región de {store.currentUser?.user?.region}
            </h6>
            <Link
              className="btn btn-dark btn buttonPerfil p-1 mt-2"
              to="/myInformation"
            >
              Editar Perfil
            </Link>
          </div>
          <div className="row justify-content-center ">
            <div className="col d-flex justify-content-center ">
              <Link to="/mySaleBooks" className="btn btn-dark w-100 itemPerfil">
                Libros en venta
              </Link>
            </div>
            <div className="col d-flex justify-content-center ">
              <Link
                to="/myExchangeBooks"
                className="btn btn-dark w-100 itemPerfil"
              >
                Libros en Intercambio
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col d-flex justify-content-center r">
              <Link
                to="/purchasedBooks"
                className="btn btn-dark w-100 itemPerfil"
              >
                Compras realizadas
              </Link>
            </div>
            <div className="col d-flex justify-content-center ">
              <Link to="/soldBooks" className="btn btn-dark w-100 itemPerfil">
                Ventas realizadas
              </Link>
            </div>
          </div>
          <div className="row ">
            <div className="col d-flex justify-content-center ">
              <Link
                to="/registerBook"
                className="btn btn-dark w-100 itemPerfil"
              >
                Publicar Libros
              </Link>
            </div>
            <div className="col d-flex justify-content-center">
              <button className="btn btn-dark w-100 itemPerfil">
                Editar Libros
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
