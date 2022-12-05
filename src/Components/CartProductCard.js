import {CartProductCardContainer} from "./CartProductCardStyles";
import {useProfileContext} from "../Hooks/Profile";
import {useEffect, useState} from "react";

const CartProductCard = ({id, api_featured_image, brand, name, price, qty}) => {
    const {updateQty} = useProfileContext();
    const [_qty, _setQty] = useState(qty);
    console.log(_qty);
    const adjustQty = (e) => {
        let quantity = _qty;

        switch (e.target.name) {
            case "decrease":
                quantity--
                (_qty > 0) && _setQty(quantity);
                break;
            case "increase":
                quantity++
                _setQty(quantity);
                break;
        }
    }
    useEffect(() => {
        updateQty(id, _qty);
    }, [_qty])
    return (
        <CartProductCardContainer>
            <div className="imageSection">
                <img src={api_featured_image} alt=""/>
            </div>
            <div className="infoSection">
                <div className="nameBrand">
                    <p>{brand}</p>
                    <p>{name}</p>
                </div>
                <div className="quantity">
                    <input type={"number"} value={_qty} onChange={(e) => _setQty(e.target.value)}/>
                    <button name={'decrease'} onClick={(e) => adjustQty(e)}>-</button>
                    <button name={'increase'} onClick={(e) => adjustQty(e)}>+</button>
                </div>
            </div>
            <div className="priceSection">
                <p>${price}</p>
            </div>
        </CartProductCardContainer>
    )
}

export default CartProductCard;