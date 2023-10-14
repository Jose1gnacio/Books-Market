import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/SobreNosotros.css"; // Importa tu archivo CSS aquí

export const SobreNosotros = () => {
  const { store, actions } = useContext(Context);

  return (
    <section className="sobre-nosotros">
      <div className="container">
        <h1 className="text-center">NUESTRO TEAM</h1>
        <div className="team-members">
          <article className="team-member">
            <img
              src="https://cdn.icon-icons.com/icons2/2121/PNG/512/child_boy_man_people_avatar_icon_131265.png"
              alt="José"
              className="team-member-img"
            />
            <div className="team-member-info">
              <h5 className="team-member-name">José</h5>
              <p className="team-member-description">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </article>
          <article className="team-member">
            <img
              src="https://cdn.icon-icons.com/icons2/2121/PNG/512/child_boy_man_people_avatar_icon_131265.png"
              alt="José"
              className="team-member-img"
            />
            <div className="team-member-info">
              <h5 className="team-member-name">José</h5>
              <p className="team-member-description">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </article>
          <article className="team-member">
            <img
              src="https://cdn.icon-icons.com/icons2/2121/PNG/512/child_boy_man_people_avatar_icon_131265.png"
              alt="José"
              className="team-member-img"
            />
            <div className="team-member-info">
              <h5 className="team-member-name">José</h5>
              <p className="team-member-description">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </article>
          <article className="team-member">
            <img
              src="https://cdn.icon-icons.com/icons2/2121/PNG/512/child_boy_man_people_avatar_icon_131265.png"
              alt="José"
              className="team-member-img"
            />
            <div className="team-member-info">
              <h5 className="team-member-name">José</h5>
              <p className="team-member-description">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </article>
          <article className="team-member">
            <img
              src="https://cdn.icon-icons.com/icons2/2121/PNG/512/child_boy_man_people_avatar_icon_131265.png"
              alt="José"
              className="team-member-img"
            />
            <div className="team-member-info">
              <h5 className="team-member-name">José</h5>
              <p className="team-member-description">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </article>
          <article className="team-member">
            <img
              src="https://cdn.icon-icons.com/icons2/2121/PNG/512/child_boy_man_people_avatar_icon_131265.png"
              alt="José"
              className="team-member-img"
            />
            <div className="team-member-info">
              <h5 className="team-member-name">José</h5>
              <p className="team-member-description">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </article>
          <article className="team-member">
            <img
              src="https://cdn.icon-icons.com/icons2/2121/PNG/512/child_boy_man_people_avatar_icon_131265.png"
              alt="José"
              className="team-member-img"
            />
            <div className="team-member-info">
              <h5 className="team-member-name">José</h5>
              <p className="team-member-description">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </article>
          <article className="team-member">
            <img
              src="https://cdn.icon-icons.com/icons2/2121/PNG/512/child_boy_man_people_avatar_icon_131265.png"
              alt="José"
              className="team-member-img"
            />
            <div className="team-member-info">
              <h5 className="team-member-name">José</h5>
              <p className="team-member-description">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </article>
          {/* Repite esta estructura para otros miembros del equipo */}
        </div>
      </div>
    </section>
  );
};
