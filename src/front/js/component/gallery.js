import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Gallery = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <p className="heading text-dark">Categorías Sugeridas</p>
      <div className="gallery-image mb-5 ">
        <div className="img-box">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKDxO5oa6Hg0wnkfGH5l7UT6uHJcd6n92qcS7eyX1YgHFOPOO64Rd691aeQH-ShVmtJuc&usqp=CAU"
            alt=""
          />
          <div className="transparent-box">
            <div className="caption">
              <p>Literatura Oriental</p>
              <p className="opacity-low">Categoría</p>
            </div>
          </div>
        </div>
        <div className="img-box">
          <img
            src="https://cdn.pixabay.com/photo/2017/12/10/17/00/robot-3010309_640.jpg"
            alt=""
          />
          <div className="transparent-box">
            <div className="caption">
              <p>Ciencia Ficción</p>
              <p className="opacity-low">Categoría</p>
            </div>
          </div>
        </div>
        <div className="img-box">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHuzkNcZO1yYO17Ht0laBN00kdrgRURJEl4MeZzQvyLK6s60Q69HgFS-M0-K4gIt4mr88&usqp=CAU"
            alt=""
          />
          <div className="transparent-box">
            <div className="caption">
              <p>Literatura Clasica</p>
              <p className="opacity-low">Categoría</p>
            </div>
          </div>
        </div>
        <div className="img-box">
          <img
            src="https://indiehoy.com/wp-content/uploads/2020/09/studio-ghibli.jpg"
            alt=""
          />
          <div className="transparent-box">
            <div className="caption">
              <p>Literatura infantil y juvenil</p>
              <p className="opacity-low">Categoría</p>
            </div>
          </div>
        </div>
        <div className="img-box">
          <img
            src="https://cdn.pixabay.com/photo/2020/11/06/15/33/woman-5718089_1280.jpg"
            alt=""
          />
          <div className="transparent-box">
            <div className="caption">
              <p>Misterio y suspenso</p>
              <p className="opacity-low">Categoría</p>
            </div>
          </div>
        </div>
        <div className="img-box">
          <img
            src="https://revistavelvet.cl/wp-content/uploads/2022/04/Conversations-With-Friends-Sets-Hulu-Premiere-Date.jpeg"
            alt=""
          />
          <div className="transparent-box">
            <div className="caption">
              <p>Novelas contemporáneas</p>
              <p className="opacity-low">Categoría</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
