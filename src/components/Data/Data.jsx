import { NavLink } from "react-router-dom";
import './Data.scss'


export default function Data() {

  return (
    <div className="data">
      <h4>ДАННЫЕ</h4>
      <p>Данные ваших проектов</p>
        {/* <ul className='news__list'>
          <li>
            <NavLink to="/2025/03/16/ml/" className='news__link'>
              <p>Разработка моделей машинного обучения для городского планирования</p>
            </NavLink>
          </li>
          
        </ul> */}
      </div>
    )
  }