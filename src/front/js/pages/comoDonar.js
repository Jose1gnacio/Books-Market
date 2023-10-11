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
            <h2 className="mb-4">
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
              <h3 className="mb-3">TAC: Taller de Acción Comunitaria</h3>
              <p className="mb-3 fs-6">
                El TAC es una organización comunitaria funcional que surge el
                año 1989 en el cerro Cordillera, Valparaíso. Su modelo de
                intervención parte de la base de la educación, capacitación
                formal o informal, y su trabajo está dirigido a niños, jóvenes,
                mujeres, adultos, tercera edad, vecinos, organizaciones,
                instituciones funcionales y/o territoriales.
              </p>
              <p className="mb-3 fs-6">
                Actualmente estan en proceso de establecer un nuevo espacio
                bibliotecario y estan buscando nuestra colaboración para
                enriquecerlo con una selección de libros destinados tanto a
                adultos como a niños.
              </p>
              <ul className="my-5">
                <li>
                  <h6>Dirección: Cam. Cintura 3049, 2361876 Valparaíso</h6>
                </li>
                <li>
                  <h6>Email: tac.cordillera@gmail.com</h6>
                </li>
                <li>
                  <h6>Teléfono: (32) 259 5552</h6>
                </li>
                <li>
                  <h6>https://www.instagram.com/tac.cordillera/</h6>
                </li>
              </ul>
              <p className="mb-3 fs-6">
                <strong>
                  Para respaldar esta noble causa, simplemente utiliza los datos
                  que se proporcionan arriba para enviar tus donaciones. Tus
                  donativos contribuirán al fomento de la lectura y al acceso a
                  la literatura para otros miembros de la comunidad. ¡Gracias
                  por considerar la donación de libros!
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
