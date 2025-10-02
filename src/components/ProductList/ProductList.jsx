import { NavLink } from "react-router-dom";
import { useState } from "react";
import TabsSection from "../TabsSection";
import "./ProductList.scss";

export default function ProductList({ products, addToCart }) {
    const [tab, setTab] = useState("effect");
    return (
        <div>
            
            <TabsSection active={tab} onChange={(current) => setTab(current)} />

            {tab && 
            <div className="product-list">
                {products.map((product) => (
                    product.category===tab?
                    <div key={product.id} className="product">
                        <h2>{product.title}</h2>
                        <img src={product.img} alt={product.title} />
                        <p>{product.description}</p>
                        <p>Цена: {product.price} руб.</p>
                        <button className="button product-add-btn" onClick={() => addToCart(product)}>
                            Добавить в корзину
                        </button>
                    </div>:''
                ))}
                </div>
            }
                       
        </div>
    );
}
