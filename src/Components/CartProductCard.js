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
            <ImageSection >
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