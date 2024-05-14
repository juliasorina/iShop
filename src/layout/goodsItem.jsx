import { useState } from "react";

function GoodsItem(props) {
    const {id, name, description, price, full_background, addToBasket = Function.prototype} = props;

    const [background, setBackground] = useState();

    var img = new Image();
    img.src = full_background;
    img.onload = function () { setBackground(full_background) };
    img.onerror = function () { setBackground('./fortnite-icon.png') };

    return (
        <div className="card" id={id}>
            <img className="card-image" src={background} alt={name} />
            <div className="card-content">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <span className="price">{price} V</span>
                <button 
                    className="btn"
                    onClick={()=>
                        addToBasket({
                            id,
                            name,
                            price,
                        })
                    }
                >
                    Купить
                </button>
            </div>
        </div>
    );
}

export {GoodsItem};