import React from "react";
import "./Navigation.scss";
/* import accountIcon from "../../images/account_icon.svg"; */

import { NavLink } from "react-router-dom";

function Navigation({ handleClose }) {
  const activeLinkClass = ({ isActive }) =>
    `link navigation__link ${isActive ? "navigation__link_active" : ""}`;
  return (
    <>
      <nav className="navigation__links-container">
        <button className="navigation__close-button" onClick={handleClose} />
        <NavLink to="/разработка-моделей" className={activeLinkClass}>
          ML
        </NavLink>
        <NavLink to="/" replace className={activeLinkClass}>
          API
        </NavLink>
        <NavLink to="/исследования" className={activeLinkClass}>
          ИССЛЕДОВАНИЯ
        </NavLink>
        <NavLink to="/проекты" className={activeLinkClass}>
          ПРОЕКТЫ
        </NavLink>
        <NavLink to="/продукция-2" className={activeLinkClass}>
          ПРОДУКЦИЯ
        </NavLink>
        <NavLink to="/api" className={activeLinkClass}>
          ТАРИФЫ
        </NavLink>
      </nav>
      {/* <Link to="/profile" className="navigation__link link">
        <nav className="navigation__button-container">
          <p className="navigation__button">Аккаунт</p>
          <img
            className="navigation__account-icon"
            src={accountIcon}
            alt="иконка аккаунта"
          ></img>
        </nav>
      </Link> */}
    </>
  );
}

export default Navigation;
