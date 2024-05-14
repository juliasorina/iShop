import { BasketItem } from "./basketItem";

function BasketList(props) {
    const {
        order = [], 
        handleBasketShow=Function.prototype,
        removeFromBasket=Function.prototype,
        incQuantity=Function.prototype,
        decQuantity=Function.prototype,
    } = props;
    const totalPrice = order.reduce((sum, el)=>{
        return sum+el.price*el.quantity;
    }, 0);
    return (
        <ul className="basket-list">
            <li>Корзина</li>
            <div className="collection-list">
                {order.length ? (
                    order.map((item)=>(
                    <BasketItem 
                        key={item.id} 
                        removeFromBasket={removeFromBasket}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
                        {...item}
                    />))
                ):(
                    <li>Корзина пуста</li>
                )}
            </div>
            <li>Стоимость заказа:
                <span className="price"> {totalPrice} V</span>
            </li>
            <img className="basket-clear" onClick={handleBasketShow} src="Krestik.png"></img>
        </ul>
    );
}

export {BasketList};