import {
    Brand,
    CartProductCardContainer, DecreaseButton,
    ImageSection, IncreaseButton,
    InfoSection, Name,
    NameBrand, Price, PriceSection,
    ProductImage, Quantity, QuantityInput, QuantityLabel
} from "./CartProductCardStyles";
import {useProfileContext} from "../Hooks/Profile";
import {useEffect, useState} from "react";

const CartProductCard = ({id, api_featured_image, brand, name, price, qty}) => {
    console.log("CART PRODUCT CARD")
    const {updateQty, removeItem} = useProfileContext();
    const [_qty, _setQty] = useState(1);
    console.log(_qty);

    const adjustQty = (e) => {
        let quantity = _qty;
        switch (e.target.name) {

            case "decrease":
                console.log("decrease qty");
                (_qty > 0) && quantity--;
                _setQty(quantity);
                updateQty(id, _qty)

                break;
            case "increase":
                console.log("increase qty");
                quantity++
                _setQty(quantity);
                updateQty(id, _qty)

                break;
        }
    }
    useEffect(() => {
            if(_qty === 0){
                removeItem(id);
            }
    }, [_qty])
    return (
        <CartProductCardContainer>
            <ImageSection>
                <ProductImage src={api_featured_image} alt=""/>
            </ImageSection>
            <InfoSection>
                <NameBrand>
                    <Brand>{brand}</Brand>
                    <Name>{name.substring(0, 20)}{(name.length > 20) && "..."}</Name>
                </NameBrand>
                <Quantity>
                    <QuantityLabel>Quantity: </QuantityLabel>
                    <QuantityInput type={"number"} value={_qty} onChange={(e) => _setQty(e.target.value)}/>
                    <DecreaseButton name={'decrease'} onClick={(e) => adjustQty(e)}>-</DecreaseButton>
                    <IncreaseButton name={'increase'} onClick={(e) => adjustQty(e)}>+</IncreaseButton>
                </Quantity>
            </InfoSection>
            <PriceSection>
                <Price>${price}</Price>
            </PriceSection>
        </CartProductCardContainer>
    )
}

export default CartProductCard;