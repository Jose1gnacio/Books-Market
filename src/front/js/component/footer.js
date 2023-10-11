import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar_footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container bottom_border">
          <div className="row">
            <div className="col-sm-8 col-md col-sm-8 col-2 col me-1">
              <h5 className="brandFooter headin5_amrc col_white_amrc pt2">
                Books Market
              </h5>
              <p className="mb10">
                ¡Descubre una nueva forma de enriquecer tu biblioteca personal!
                En Books Market, estamos emocionados de invitarte a unirse a
                nuestra creciente comunidad de amantes de la lectura
              </p>
              <p>
                <i className="fa fa-location-arrow"></i> Santiago, Chile
              </p>
              <p>
                <i className="fa fa-phone"></i> +56-9999878398
              </p>
              <p>
                <i className="fa fa fa-envelope"></i> info@booksmarket.com
              </p>
            </div>
            <div className="col-sm-2 col-md col-4 col  text-end">
              <form>
                <h5 className="tituloFooter headin5_amrc pt2">
                  Subscribe to our newsletter
                </h5>
                <form className="d-flex" role="search">
                  <input
                    id="newsletter1"
                    className="form-control"
                    style={{
                      borderTopLeftRadius: "20px",
                      borderBottomLeftRadius: "20px",
                      borderTopRightRadius: "0",
                      borderBottomRightRadius: "0",
                    }}
                    type="search"
                    placeholder="Email address"
                    aria-label="Search"
                  />
                  <button
                    className="buttonFooter btn pb-2 px-3"
                    type="submit"
                    style={{
                      borderTopLeftRadius: "0px",
                      borderBottomLeftRadius: "0px",
                      borderTopRightRadius: "20px",
                      borderBottomRightRadius: "20px",
                    }}
                  >
                    Subscribe
                  </button>
                </form>
              </form>
            </div>
            <div className="col-sm-2 col-md col-2 col text-end">
              <h5 className="headin5_amrc pt2 tituloFooter"></h5>
              <ul className="footer_ul_amrc">
                <li>
                  {/*                 <Link
                    to="/guiaCompra"
                    className="nav-link p-0 text-white"
                    aria-current="page"
                  ></Link> */}
                </li>
                <li>
                  <Link
                    to="/metodoPago"
                    className="nav-link p-0 text-white"
                    aria-current="page"
                  ></Link>
                </li>
                <li></li>
              </ul>
            </div>
            <div className="col-sm-2 col-md col-2 col text-end">
              <h5 className="headin5_amrc pt2 tituloFooter">
                ¿Cómo intercambiar?
              </h5>
              <ul className="footer_ul_amrc">
                <li className="nav-item mb-2">
                  <Link
                    to="/intercambio"
                    className="nav-link p-0 text-white"
                    aria-current="page"
                  >
                    Guía intercambio de libros
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    to="/comoDonar"
                    className="nav-link p-0 text-white"
                    aria-current="page"
                  >
                    Guía donaciones
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    to="#"
                    className="nav-link p-0 text-white"
                    aria-current="page"
                  >
                    Guía libros gratis
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md col-2 col text-end">
              <h5 className="headin5_amrc  pt2 tituloFooter">
                Servicio al cliente
              </h5>
              <ul className="footer_ul_amrc">
                <li className="nav-item mb-2">
                  <Link
                    to="/nuestraHistoria"
                    className="nav-link p-0 text-white"
                    aria-current="page"
                  >
                    Nuestra Historia
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    to="/sobreNosotros"
                    className="nav-link p-0 text-white"
                    aria-current="page"
                  >
                    Nuestro Team
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  {/* <Link
                    to="#"
                    className="nav-link p-0 text-white"
                    aria-current="page"
                  >
                    Contactanos
                  </Link> */}
                </li>
                <li className="nav-item mb-2">
                  {/* <Link
                    to="#"
                    className="nav-link p-0 text-white"
                    aria-current="page"
                  >
                    Preguntas frecuentes
                  </Link> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <p className="text-end">
            Copyright @2023 | Designed With by Books Market
          </p>
          <ul className="social_footer_ul">
            <li>
              <a className="circulo" href="http://facebook.com">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a className="circulo" href="http://twitter.com">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a className="circulo" href="http://linkedin.com">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a className="circulo" href="http://instagram.com">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
