import React from "react";
import "../../styles/intercambio.css";
import BannerIntercambio from "../component/intercambio/BannerIntercambio";

const Intercambio = () => {
  return (
    <div className="contenedor container-fluid p-0">
      <div className="colorFondo row-md-6 m-0">
        <div className="img-intercambio col-md-4"></div>
        <div className="baner-intercambio">
          <BannerIntercambio />
        </div>
      </div>
          <div className="containerButton container">
            <a href="exchangeBooks" className="button">
              Intercambiar
            </a>
          </div>
    </div>
  );
};

export default Intercambio;
