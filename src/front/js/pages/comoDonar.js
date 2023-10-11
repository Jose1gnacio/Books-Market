import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/comoDonar.css";

import { Context } from "../store/appContext";

export const ComoDonar = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid justify-content-center ">
      <div className="row m-3">
        <div className="about col-10">
          {/* <div className="containerImg col-12"></div> */}
          <div className="textDonation col-12 text-center p-5">
            <h2 className="mb-3">
              ¡Bienvenidos a nuestra iniciativa de Donación Mensual de Libros!
            </h2>
            <p className="mb-5 fs-6">
              En Books Market, creemos en el poder de los libros para
              transformar vidas y en la importancia de compartir el
              conocimiento. Cada mes, seleccionamos cuidadosamente una
              institución educativa de bajos recursos que necesita
              desesperadamente acceso a materiales de lectura de calidad. Y aquí
              es donde tú, nuestros queridos usuarios, entran en acción.
              Queremos invitarte a unirte a nosotros en esta noble causa y
              marcar la diferencia en la vida de quienes más lo necesitan. Tu
              participación es fundamental para llevar la magia de la lectura a
              aquellos que tienen menos recursos para acceder a libros.
            </p>
            <h4 className="mb-3">¿Cómo puedes contribuir?</h4>
            <p className="mb-3 fs-6">
              Es sencillo. Cada mes seleccionamos una institución que necesita
              nuestra ayuda, te la presentamos y proporcionamos sus datos para
              que puedas colaborar con tu donativo de libros directamente. Tú
              decides la cantidad de libros que deseas donar, ¡cada libro
              cuenta!
            </p>
          </div>
          <div className="containerInstitucion col-12 row p-5 mb-5">
            <div className="containerImgMes col-12 text-center p-3">
              <h1 className="mes">OCTUBRE</h1>
            </div>
            <div className="col-6  py-3 pe-5">
              <h3 className="mb-3">Nombre de la institucion</h3>
              <p className="mb-3 fs-6">
                Descripcion Cada mes seleccionamos una institución que necesita
                nuestra ayuda, te la presentamos y proporcionamos sus datos para
                que puedas colaborar con tu donativo de libros directamente.
              </p>
              <p className="mb-3 fs-6">
                Motivacion Cada mes seleccionamos una institución que necesita
                nuestra ayuda, te la presentamos y proporcionamos sus datos para
                que puedas colaborar con tu donativo de libros directamente. Tú
                decides la cantidad de libros que deseas donar, ¡cada libro
                cuenta!
              </p>
              <ul>
                <li>
                  <h5>Direccion</h5>
                </li>
                <li>
                  <h5>Mmail</h5>
                </li>
                <li>
                  <h5>Telefono</h5>
                </li>
                <li>
                  <h5>Instagram</h5>
                </li>
              </ul>
              <p className="mb-3">
                Recomendaciones Cada mes seleccionamos una institución que
                necesita nuestra ayuda, te la presentamos y proporcionamos sus
                datos para que puedas colaborar con tu donativo de libros
                directamente.
              </p>
              <p className="mb-3 fs-6">
                <strong>
                  ¡Gracias por considerar donar libros a nuestra página web! Sus
                  donaciones ayudarán a fomentar la lectura y el acceso a la
                  literatura para otros usuarios de nuestra comunidad.
                </strong>
              </p>
            </div>
            <div className="fotoInstitution1 col-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
