import { NavLink } from "react-router-dom";
import './Blocks.scss'


export default function Blocks() {

  return (
      <div className="blocks">
        <ul className='blocks__list'>
          <li>
          <NavLink to="/разработка-моделей" className='blocks__block'>
            <div className='blocks__container'>
              <h4>ML | DL</h4>
              <p>Разработка моделей</p>
            </div>
            </NavLink>
          </li>
          <li>
          <NavLink to="/исследования" className='blocks__block'>
          <div className='blocks__container'>
              <h4>ИССЛЕДОВАНИЯ</h4>
              <p>Поиск закономерностей</p>
              </div>
            </NavLink>
          </li>
          
          <li>
          <NavLink to="/проекты" className='blocks__block'>
          <div className='blocks__container'>
              <h4>ПРОЕКТЫ</h4>
              <p>Реализация</p>
            </div>
            </NavLink>
        </li>
        <li>
          <NavLink to="/продукция-2" className='blocks__block'>
          <div className='blocks__container'>
              <h4>ПРОДУКЦИЯ</h4>
              <p>Готовые решения</p>
            </div>
            </NavLink>
          </li>
          <li>
          <NavLink to="/" className='blocks__block'>
          <div className='blocks__container'>
              <h4>СЕРВИС | API</h4>
              <p>Данные ваших проектов</p>
            </div>
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }