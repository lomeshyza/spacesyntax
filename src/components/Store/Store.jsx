import "./Store.scss";
import React, { useState } from "react";
import ProductList from "../ProductList/ProductList";
import Cart from "../Cart/Cart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function Store() {
    const [products] = useState([
        { id: 1, category:'modeling',img:'../spacesyntax/src/images/products/track.jpg', title: "Макетирование, «Грузовик»", description: "Грузовик для макетов в масштабе 1 : 2000. Цвет: белый Материал: пластик", price: 100 },
        { id: 2, category:'modeling',img:'../spacesyntax/src/images/products/default.png', title: "Товар 2", description: "Описание товара 2", price: 200 },
        { id: 3, category:'po',img:'../spacesyntax/src/images/products/default.png', title: "Товар 3", description: "Описание товара 3", price: 300 },
    ]);
   
    const [cart, setCart] = useState([]);
    const [customerInfo, setCustomerInfo] = useState(null);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const checkout = async ({ name, address, email, phone }) => {
    const totalAmount = cart.reduce((total, item) => total + item.price, 0);

    try {
        const response = await fetch('https://api.tinkoff.ru/v2/init', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                TerminalKey: 'Ваш_терминал',
                Amount: totalAmount * 100, // сумма в копейках
                OrderId: 'unique_order_id', // уникальный идентификатор заказа
                Description: 'Оплата заказа',
                DATA: {
                    Email: email//'customer@example.com' email покупателя
                }
            }),
        });

        const data = await response.json();
        console.log(data)
        if (data.Success) {
            window.location.href = data.PaymentURL; // Перенаправление на страницу оплаты
            handleCheckoutSubmit({ name, address, email, phone })
        } else {
            console.error('Ошибка инициализации платежа:', data.Message);
        }
    } catch (error) {
        console.log(name, address, email, phone )
        
        console.error('Ошибка при выполнении запроса:', error);
    }
    };
    

    const handleCheckoutSubmit = async (customerData) => {
        setCustomerInfo(customerData);

        // Здесь вы можете добавить логику для расчета доставки через СДЭК

        // Отправка уведомления на почту
        try {
            await fetch("http://localhost:3001/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: customerData.name,
                    email: customerData.email,
                    orderDetails: cart.map((item) => `${item.title} - ${item.price}`).join(", "),
                }),
            });
            alert("Заказ оформлен! Проверьте вашу почту.");
        } catch (error) {
            console.error("Ошибка при отправке email:", error);
        }
    };

    return (
        <div className="store">
            <h1>Интернет-магазин</h1>
            <div className="store-content">
                <ProductList products={products} addToCart={addToCart} />
                <Cart cartItems={cart} removeFromCart={removeFromCart} />
                {cart.length > 0 && !customerInfo && <CheckoutForm onSubmit={checkout} />}
            </div>
        </div>
    );
}
