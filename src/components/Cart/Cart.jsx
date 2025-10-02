import { NavLink } from "react-router-dom";
import "./Cart.scss";


export default function Cart({ cartItems, removeFromCart }) {
     const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div className="cart">
            <h2>Корзина</h2>
            {cartItems.length === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                {item.title} - {item.price} руб.
                                <button className="" onClick={() => removeFromCart(item.id)}>&#128465;</button>
                            </li>
                        ))}
                    </ul>
                    <h3>Итого: {totalAmount} руб.</h3>
                    {/* <button className="button" onClick={checkout}>Оплатить</button> */}
                </>
            )}
        </div>
    );
}
