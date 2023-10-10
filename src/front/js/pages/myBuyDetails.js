import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../styles/bookDetails.css";

import { Context } from "../store/appContext";

export const MyBuyDetails = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    actions.getMyOnePurchasedBook(id);
    actions.getMyMessageForBook(store.myOneBook[0]?.id);
  }, [id, store.myOneBook[0]?.id]);

  return (
    <div>
      <div className="container-fluid d-flex justify-content-evenly">
        <div
          className="card shadow-sm m-3"
          style={{ width: "300px", height: "100%" }}
        >
          <img
            src={store.myOneBook[0]?.book?.photo}
            className="card-img-top"
            alt="Hollywood Sign on The Hill"
            style={{ width: "100%", height: "400px" }}
          />
        </div>
        <div className="m-3 mt-5 mb-5">
          <h1 className="fs-1 text-dark text-center mb-1">
            {store.myOneBook[0]?.book?.title}
          </h1>
          <hr className="my-1 border border-black" />
          <p className="text-dark mb-3 fs-5 text-dark text-center fw-medium">
            — {store.myOneBook[0]?.book?.author} —
          </p>
          <div className=" mt-5 d-flex justify-content-center">
            <div className="p-0 text-center ">
              <p>Chatea con el vendedor</p>
              <div className="d-flex mt-2 rounded-5 shadow seller-grad">
                <div>
                  <img
                    src={store.myOneBook[0]?.seller?.userImage}
                    className="card-img-top shadow rounded-circle mt-1 ms-2"
                    alt="Hollywood Sign on The Hill"
                    style={{ width: "70px", height: "70px" }} // Asegura que el ancho y el alto sean iguales
                  />
                </div>
                <div className="mt-3 ms-3 ">
                  <p className="text-white mt-2 mb-0 fw-medium">
                    {store.myOneBook[0]?.seller?.name}{" "}
                    {store.myOneBook[0]?.seller?.lastname}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 ms-2  ">
          <div className="border target rounded mb-0">
            <div
              className="border rounded m-2 d-flex flex-column bg-white "
              style={{ width: "500px", maxHeight: "280px", overflowY: "auto" }}
            >
              {store.myChat.map((message, index) => (
                <div className="d-flex flex-column" key={index}>
                  {message.sender_id === store.currentUser.user.id ? (
                    <div className="align-self-start text-primary m-2">
                      <p>
                        <strong>Tú:</strong> {message.message_text}
                      </p>
                    </div>
                  ) : (
                    <div className="align-self-end text-success m-2">
                      <p>{message.message_text}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-0 pt-0">
            <form
              className="rounded-top form-control chat p-3 mb-3 mt-0 pt-0"
              onSubmit={(e) => {
                actions.inputMessage1(
                  store.currentUser?.user?.id,
                  store.myOneBook[0]?.seller_id,
                  store.myOneBook[0]?.book_id,
                  store.message_text,
                  store.myOneBook[0]?.id,
                  id,
                  store.myOneBook[0]?.id,
                  e
                );
              }}
            >
              <div className="mb-3 mt-0 pt-0 mb-0">
                <label
                  htmlFor="message_text"
                  className="form-label mt-0 pt-0"
                ></label>
                <input
                  type="text"
                  className="form-control border mb-0 mt-0"
                  id="message_text"
                  aria-describedby="emailHelp"
                  placeholder="Ingresa el mensaje"
                  required
                  name="message_text"
                  value={store.message_text}
                  onChange={actions.inputTextArea}
                />
              </div>
              <button type="" className="btn btn-sm btn-success mb-3 mt-0 ">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
