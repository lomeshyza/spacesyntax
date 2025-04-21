import { NavLink } from "react-router-dom";
import './News.scss'


export default function News() {

  return (
    <div className="news">
      <h2>Новости</h2>
        <ul className='news__list'>
          <li>
            <NavLink to="/2025/03/16/ml/" className='news__link'>
              <p>Разработка моделей машинного обучения для городского планирования</p>
            </NavLink>
          </li>
          
        </ul>
      </div>
    )
  }