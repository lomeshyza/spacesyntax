import React from "react";
//import { useEffect, useState } from "react";
import "./Navigation.scss";
/* import accountIcon from "../../images/account_icon.svg"; */
import useWindiwChange from "../../hooks/useWindiwChange";

import { NavLink } from "react-router-dom";

function Navigation({ handleClose }) {
const windowSize=useWindiwChange()
    
  const activeLinkClass = ({ isActive }) => `${windowSize.innerWidth<768 ? "link navigation__link" : "link header__link"} ${isActive ? windowSize.innerWidth<768 ? "navigation__link_active" : "header__link_active" : ""}`;
  console.log(windowSize.innerWidth)
    return (
        <>
            <nav className="navigation__links-container">
                <button className="navigation__close-button" onClick={handleClose} />
                <NavLink to="/develop/" className={activeLinkClass}>
                    ML | DL
                </NavLink>
                <NavLink to="/research/" className={activeLinkClass}>
                    ИССЛЕДОВАНИЯ
                </NavLink>
                <NavLink to="/progects/" className={activeLinkClass}>
                    ПРОЕКТЫ
                </NavLink>
                <NavLink to="/products/" className={activeLinkClass}>
                    ПРОДУКЦИЯ
                </NavLink>
                <NavLink to="/data/" replace className={activeLinkClass}>
                    ДАННЫЕ
                </NavLink>
                {/* <NavLink to="/tariff" className={activeLinkClass}>
          ТАРИФЫ
        </NavLink>
        <NavLink to="/store" className={activeLinkClass}>
          МАГАЗИН
        </NavLink> */}
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
