import React from "react";
import "../../../styles/intercambio.css";

const BannerIntercambio = () => {
  return (
    <div className=" mt-2 componente-texto">
      <h4 className="card-title mt-4 componente-texto">
        ¡Cambia tus lecturas sin gastar un peso!
        <br /> Únete al Intercambio de Libros
      </h4>
      <p className="card-text componente-texto">
        Estamos emocionados de invitarte a unirse a nuestra creciente comunidad
        de amantes de la lectura y entusiastas del intercambio de libros.
        <br /> <br />
        ¿Alguna vez has deseado ampliar tu colección de libros sin tener que
        gastar una fortuna? Nuestra plataforma está diseñada para hacer
        precisamente eso. Aquí, puedes cargar los libros que ya has leído y
        explorar una amplia galería de títulos disponibles para el intercambio.
        Es una manera sencilla y efectiva de obtener nuevos libros para leer sin
        gastar dinero adicional.
      </p>
    </div>
  );
};

export default BannerIntercambio;
