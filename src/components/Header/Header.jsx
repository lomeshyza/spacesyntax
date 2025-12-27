import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Navigation from "../Navigation/Navigation";

export default function Header() {
    const [isClicked, setIsClicked] = useState(false);

    //const activeLinkClass = ({ isActive }) => `link header__link ${isActive ? "header__link_active" : ""}`;

    /*   const interval = useEffect(() => {
    setInterval(() => setNow(new Date()), 1000)
    return () => {
      clearInterval(interval)
    }
  },[]) */

    return (
        <header className="header">
            <NavLink to="/spacesyntax/">
                <div className="header__logo">|&nbsp;МОДУЛЬ&nbsp;|</div>
            </NavLink>

            <nav className="header__links-container">
                <Navigation />
            </nav>
            <button className="header__burger-menu button" onClick={() => setIsClicked(true)}></button>
            {/* <span>Time: {now.toLocaleTimeString()}</span> */}
            {isClicked ? <BurgerMenu handleClose={() => setIsClicked(false)} /> : ""}
        </header>
    );
}
