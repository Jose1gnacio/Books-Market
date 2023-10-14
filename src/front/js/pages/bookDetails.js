// import React, { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// import { Context } from "../store/appContext";

// export const BookDetails = () => {
//   const { store, actions } = useContext(Context);
//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     actions.getOneBook(id);
//   }, [id]);

//   return (
//     <div>
//       <div className="container-fluid d-flex">
//         <div
//           className="card shadow-sm m-3"
//           style={{ width: "300px", height: "100%" }}
//         >
//           <img
//             src={store.oneBook?.photo}
//             className="card-img-top"
//             alt="Hollywood Sign on The Hill"
//             style={{ width: "100%", height: "400px" }}
//           />
//         </div>
//         <div className="m-3 mt-5 mb-5">
//           <h1>{store.oneBook?.title}</h1>
//           <hr className="dropdown-divider" />
//           <br></br>
//           <div className="d-flex  ">
//             <div className="p-0 ">
//               <p className="text-dark mb-3">Autor</p>
//               <p className="text-dark mb-3">Descripción</p>
//               <p className="text-dark mb-3">Categoria</p>
//               <p className="text-dark mb-3">Páginas</p>
//               <p className="text-dark mb-3">Precio</p>
//               <p className="text-dark mb-3">Vendedor</p>
//             </div>
//             <div className=" ms-3 ">
//               <p className="text-dark mb-3">:{store.oneBook?.author}</p>
//               <p className="text-dark mb-3">:{store.oneBook?.description}</p>
//               <p className="text-dark mb-3">:{store.oneBook?.cathegory}</p>
//               <p className="text-dark mb-3">
//                 :{store.oneBook?.number_of_pages}
//               </p>
//               <p className="text-dark mb-3">:{store.oneBook?.price}</p>
//               <p className="text-dark mb-3">:{store.oneBook?.user_name}</p>
//             </div>
//           </div>
//           <div className="mt-4">
//             <button
//               type="button"
//               className="btn btn-success"
//               onClick={() => {
//                 actions.putAvailableBook(store.oneBook?.id, navigate);
//                 actions.inputMessage1(
//                   store.currentUser?.user?.id,
//                   store.oneBook?.user_id,
//                   store.oneBook?.id,
//                   "Hola quisiera comprar tu libro"
//                 );
//               }}
//             >
//               Confirmar
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../styles/bookDetails.css";

import { Context } from "../store/appContext";

export const BookDetails = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const { id } = useParams();
  const currentDate = new Date();
  const realTime = { timeZone: "America/santiago" };
  const formattedDate = currentDate.toLocaleString("en-US", realTime);

  useEffect(() => {
    actions.getOneBook(id);
  }, [id]);

  return (
    <div className="background-target container-fluid d-flex justify-content-center pb-3">
      <div className="target d-flex ms-1 mt-3  px-5 py-3 ">
        <div className="mb-0 pb-0 " style={{ width: "100%", height: "100%" }}>
          <img
            src={store.oneBook?.photo}
            className="imagen-libro-confirmar-compra"
            alt="image-seller"
            // style={{ width: "100%", height: "400px" }}
          />
          <Link
            to={`/otherProfile/${store.oneBook?.user_id}`}
            className=""
            onClick={(e) => {
              actions.getOtherBooks(store.oneBook?.user_id);
            }}
          >
            <div className="d-flex mt-1 ms-0   seller-grad">
              <img
                src={store.oneBook?.user?.userImage}
                className="img-seller "
                alt="img-seller"
                // style={{ width: "70px", height: "70px" }} // Asegura que el ancho y el alto sean iguales
              />

              <p className="text-white mb-0 ">
                {store.oneBook?.user?.name} {store.oneBook?.user?.lastname}{" "}
              </p>
              <p className="text-white mb-3">Vendido por</p>
            </div>
          </Link>
        </div>
        <div className="mt-5 ms-5 mb-5" style={{ width: "500px" }}>
          <h1 className="fs-1 text-dark text-center mb-1">
            {store.oneBook?.title}
          </h1>
          <hr className="my-1 border border-black" />
          <p className="text-dark mb-3 fs-5 text-dark text-center fw-medium">
            — {store.oneBook?.author} —
          </p>
          <p className="text-dark mb-3 fst-italic text-center">
            "{store.oneBook?.description}"
          </p>

          <div className="d-flex justify-content-center mt-5">
            <div className="me-3">
              <p className="text-dark mx-5 text-center fw-medium">
                {store.oneBook?.cathegory}
              </p>
              <p className="text-dark mx-5 text-center ">Categoria</p>
            </div>
            <div className="me-3">
              <p className="text-dark mx-5 text-center fw-medium">
                {store.oneBook?.number_of_pages}
              </p>
              <p className="text-dark mx-5 text-center">Páginas</p>
            </div>
            {store.oneBook?.type === "Intercambio" ? (
              <div className="me-3">
                <p className="mx-5 text-center text-danger fw-medium">
                  Intercambio
                </p>
                <p className="text-dark mx-5 text-center">Precio</p>
              </div>
            ) : (
              <div className="me-3">
                <p className="mx-5 text-center text-danger fw-medium">
                  ${store.oneBook?.price}
                </p>
                <p className="text-dark mx-5 text-center">Precio</p>
              </div>
            )}
          </div>

          <div className="mt-2 d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-sm btn-grad "
              onClick={() => {
                actions.putAvailableBook(store.oneBook?.id, navigate);
                actions.inputShopping(
                  store.oneBook?.user_id,
                  store.currentUser?.user?.id,
                  store.oneBook?.id,
                  formattedDate
                );
                actions.getLibros();
                actions.getExchangeBooks();
                actions.getSaleBooks();
              }}
            >
              Confirmar compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
