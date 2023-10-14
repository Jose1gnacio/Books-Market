import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/registerBook.css";

const RegisterBook = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="container contenedor-bookRegister d-flex my-5  p-0">
      <img
        className="imagenRegistroLibro"
        src="https://cdn.pixabay.com/photo/2016/10/22/02/34/bookshop-1759619_1280.jpg"
        alt=""
      />
      <form
        className="form-control-sm shadow form-register-book p-3"
        onSubmit={(e) => {
          actions.submitBookImage(e, navigate);
        }}
      >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Titulo
          </label>
          <input
            type="text"
            className="form-control input-register-book mb-3"
            id="title"
            aria-describedby="emailHelp"
            placeholder="Ingresa el titulo"
            required
            name="title"
            value={store.title}
            onChange={actions.inputBookValue}
          />
          <label htmlFor="author" className="form-label">
            Autor
          </label>
          <input
            type="text"
            className="form-control mb-3"
            id="author"
            aria-describedby="emailHelp"
            placeholder="Ingresa el autor"
            required
            name="author"
            value={store.author}
            onChange={actions.inputBookValue}
          />
          <label htmlFor="cathegory" className="form-label">
            Categoria
          </label>
          <input
            type="text"
            className="form-control  mb-3"
            id="cathegory"
            aria-describedby="emailHelp"
            placeholder="Ingresa la categoria"
            required
            name="cathegory"
            value={store.cathegory}
            onChange={actions.inputBookValue}
          />
          <label htmlFor="number_of_pages" className="form-label">
            Numero de páginas
          </label>
          <input
            type="number"
            className="form-control mb-3"
            id="number_of_pages"
            placeholder="Numero de páginas"
            required
            name="number_of_pages"
            value={store.number_of_pages}
            onChange={actions.inputBookValue}
          />
          <label htmlFor="description" className="form-label">
            Descripción
          </label>
          <input
            type="text"
            className="form-control  mb-3"
            id="description"
            placeholder="Descripción"
            required
            name="description"
            value={store.description}
            onChange={actions.inputBookValue}
          />
          <label htmlFor="photo" className="form-label">
            Foto
          </label>
          <input
            type="file"
            className="form-control mb-3"
            id="photo"
            placeholder="Ingresa foto"
            name="photo"
            onChange={(e) => actions.inputBookImage(e.target.files[0])}
          />
          <label htmlFor="type" className="form-label">
            Tipo
          </label>
          <select
            className="form-select"
            id="type"
            required
            name="type"
            value={store.type.toString()}
            onChange={actions.inputBookValue}
            multiple={false}
          >
            <option value="">Seleccionar tipo de transacción</option>
            <option value="Venta">Venta</option>
            <option value="Intercambio">Intercambio</option>
            <option value="Donación">Donación</option>
          </select>
        </div>
        <label htmlFor="price" className="form-label">
          Precio
        </label>
        <input
          type="number"
          className="form-control mb-2"
          id="price"
          placeholder="Ingresa precio"
          required
          name="price"
          value={store.price}
          onChange={actions.inputBookValue}
        />
        <button type="" className="btn boton my-3">
          Publicar
        </button>
      </form>
    </div>
  );
};
export default RegisterBook;
