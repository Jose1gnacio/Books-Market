import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../styles/allBooks.css";

import { Context } from "../store/appContext";

export const PurchasedBooks = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const displayedBookIds = new Set();

  useEffect(() => {
    actions.getMySaleBooks(store.currentUser?.user?.id);
    actions.getMyExchangeBooks(store.currentUser?.user?.id);
    actions.getAllMyPurchasedBooks(store.currentUser?.user?.id);
    actions.getAllMySoldBooks(store.currentUser?.user?.id);
  }, [store.currentUser?.user?.id]);

  return (
    <div>
      <div className="container-fluid">
        <div className="text-center m-3 mt-5 mb-5">
          <h1>Tus Compras e Intercambios</h1>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          {store.myBooksPurchased.map((compra, i) => (
            <div
              className="contenedor-card p-0"
              style={{ width: "220px", height: "300" }}
              key={i}
            >
              <div className="d-flex justify-content-center">
                <img
                  className="card-img-top allbooks-img mb-0"
                  style={{ width: "220px", height: "300px" }}
                  src={compra.book.photo}
                  alt={`Portada de ${compra.book.title}`}
                />
              </div>
              <div className="card-body pt-0 mt-0 d-block justify-content-center">
                <div style={{ height: "110px" }}>
                  <p className="text-center m-1">
                    <b>{compra.book.title}</b>
                  </p>
                  <p className="text-center text-capitalize mb-1">
                    {compra.book.author}
                  </p>
                  <p className="text-center  mb-3">{compra.book.price}</p>
                  <p className="text-center  mb-3">{compra.seller.name}</p>
                </div>
                <div className="d-flex justify-content-center">
                  <Link
                    to={`/myBuyDetails/${compra.book.id}`}
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
    </div>
  );
};
