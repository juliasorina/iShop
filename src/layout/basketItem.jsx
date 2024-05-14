function BasketItem(props) {
    const {
        id, 
        name, 
        price, 
        quantity,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;
    return (
        <div className="collection-item">
            <div className="collection">
                {name} 
                <div className="collection-price">
                    <img className="basket-quantity" src="minus.png" onClick={()=>decQuantity(id)}/> 
                    {quantity} 
                    <img className="basket-quantity" src="plus.png" onClick={()=>incQuantity(id)}/>
                    = {price*quantity} {" "} V
                </div>
            </div>
            <span className="secondary-content" onClick={()=>removeFromBasket(id)}>
                <img className="clear" src="Krestik.png"/>
            </span>
        </div>
    );
}

export {BasketItem};