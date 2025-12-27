import { NavLink } from "react-router-dom";
import './Products.scss'


export default function Products() {

  return (
    <div className="products">
      <h4>ПРОДУКЦИЯ</h4>
      <p>Готовые решения</p>
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