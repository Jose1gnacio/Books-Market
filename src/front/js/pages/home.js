import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { Banner } from "../component/banner";
import { Categorias } from "../component/categorias";
import { Reviews } from "../component/reviews";
import { Gallery } from "../component/gallery";
import { Bienvenida } from "../component/bienvenida";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <Bienvenida />
      <Gallery />
    </>
  );
};
