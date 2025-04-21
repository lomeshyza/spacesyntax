import { useState } from 'react'
import { NavLink } from "react-router-dom";
import './Header.scss'
import BurgerMenu from '../BurgerMenu/BurgerMenu'

export default function Header() {
  
  const [isClicked, setIsClicked] = useState(false);

  const activeLinkClass = ({ isActive }) =>
    `link header__link ${isActive ? "header__link_active" : ""}`;

/*   const interval = useEffect(() => {
    setInterval(() => setNow(new Date()), 1000)
    return () => {
      clearInterval(interval)
    }
  },[]) */

  
    return(
      <header className='header'>
        
        <div className='header__logo'>|&nbsp;МОДУЛЬ&nbsp;|</div>
        <nav className="header__links-container">
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
                      <NavLink to="/стоимость" className={activeLinkClass}>
                        ТАРИФЫ
                      </NavLink>
            </nav>
        <button
              className="header__burger-menu button"
              onClick={()=>setIsClicked(true)}
            ></button>
        {/* <span>Time: {now.toLocaleTimeString()}</span> */}
        {isClicked ? <BurgerMenu handleClose={()=>setIsClicked(false)} /> : ""}
      </header>
    )
  }