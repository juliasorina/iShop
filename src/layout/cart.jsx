function Cart (props) {
    const {quantity = 0, handleBasketShow=Function.prototype} = props;

    return (
        <div onClick={handleBasketShow}>
            <img className="basket-btn" src="Group 1.png"></img>
            {quantity? <span className="cart-quantity">{quantity}</span> : null}
        </div>
    );
}

export {Cart};