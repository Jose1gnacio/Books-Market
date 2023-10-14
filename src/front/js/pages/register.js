import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/register.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  <ToastContainer />;

  return (
    <div className=" row md-12 contenedor-register ">
      <img
        src="https://cdn.pixabay.com/photo/2021/01/21/15/54/books-5937716_1280.jpg"
        className="img-register shadow"
        alt="imagen"
      />

      <div className="col-md-9 contenedor-form  ">
        <form
          className="form-card shadow"
          onSubmit={(e) => {
            toast.success("Registro exitoso!, por favor inicia sesión");
            actions.submitUserImage(e, navigate);
          }}
        >
          <label htmlFor="form" className="form-label mt-4">
            Nombre
          </label>
          <input
            type="text"
            className="form-control mb-2"
            id="nombre"
            aria-describedby="emailHelp"
            placeholder="Ingresa tu nombre"
            maxLength="12"
            minLength="3"
            required
            name={"name"}
            value={store.name}
            onChange={actions.inputUserValue}
          />
          <label htmlFor="exampleInputEmail1" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            className="form-control mb-2"
            id="apellido"
            aria-describedby="emailHelp"
            placeholder="Ingresa tu apellido"
            maxLength="12"
            minLength="3"
            required
            name="lastname"
            value={store.lastname}
            onChange={actions.inputUserValue}
          />
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control mb-2"
            id="inputEmail1"
            aria-describedby="emailHelp"
            placeholder="Ingresa tu email"
            required
            name="email"
            value={store.email}
            onChange={actions.inputUserValue}
            //validacion email
          />
          <div className="row mb-6">
            <div className="col-md-6">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control mb-2"
                id="password"
                placeholder="Contraseña"
                required
                name="password"
                value={store.password}
                onChange={actions.inputUserValue}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Repetir Contraseña
              </label>
              <input
                type="password"
                className="form-control mb-2"
                id="re_password"
                placeholder="Repita contraseña"
                required
                name="rep_password"
                value={store.rep_password}
                onChange={actions.inputUserValue}
              />
            </div>
          </div>
          <div className="col-md-12">
            <label className="pb-2">Región</label>
            <select
              className="form-select seleccion-region mb-2"
              id="region"
              required
              name="region"
              value={store.region.toString()}
              onChange={actions.inputUserValue}
              multiple={false}
            >
              <option value="">Selecciona tu región</option>
              <option value="Arica y Parinacota">Arica y Parinacota</option>
              <option value="Tarapacá">Tarapacá</option>
              <option value="Antofagasta">Antofagasta</option>
              <option value="Atacama">Atacama</option>
              <option value="Coquimbo">Coquimbo</option>
              <option value="Valparaíso">Valparaíso</option>
              <option value="O'Higgins">O'Higgins</option>
              <option value="Maule">Maule</option>
              <option value="Ñuble">Ñuble</option>
              <option value="Biobío">Biobío</option>
              <option value="La Araucanía">La Araucanía</option>
              <option value="Los Ríos">Los Ríos</option>
              <option value="Los Lagos">Los Lagos</option>
              <option value="Aysén">Aysén</option>
              <option value="Magallanes">Magallanes</option>
              <option value="Metropolitana">Metropolitana</option>
            </select>
          </div>
          <div className="mb-3 ">
            <label htmlFor="photo" className="form-label ">
              Foto de perfil
            </label>
            <input
              type="file"
              className="form-control"
              id="userImage"
              required
              placeholder="Sube foto"
              name="userImage"
              onChange={(e) => actions.inputUserImage(e.target.files[0])}
            />
          </div>
          <div className="row form-check ms-1">
            <input
              type="checkbox"
              className="form-check-input"
              id="Check1"
              required
            />
            <p className="form-check-label ms-3 " htmlFor="exampleCheck1">
              Acepto términos y condiciones
            </p>
          </div>
          <button
            type="submit"
            className="buttonRegister btn btn-dark  m-2 p-2 px-4"
          >
            Registrarse
          </button>
        </form>
      </div>
      {/* </div> */}
    </div>
  );
};
export default Register;
