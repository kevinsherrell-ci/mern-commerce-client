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
    const {_id, user_id, firstName, middleName, lastName, shippingAddress, billingAddress, cart, favorites, active, updateQty,dateCreated, dateModified, removeItem ,updateProfile, updateCart} = useProfileContext();
    const [_qty, _setQty] = useState(1);
    console.log(_qty);
    const cartTemp = cart;
    const found = cart.find((item) => item.id === id);
    const index = cart.indexOf(found);
    const adjustQty = (e) => {
        let quantity = _qty;


        console.log(found.qty);


        switch (e.target.name) {

            case "decrease":
                console.log("decrease qty");
                console.log(cartTemp[index].qty)
                cartTemp[index].qty -= 1;
                console.log(cartTemp[index].qty === 0)

                if (cartTemp[index].qty === 0) {
                    console.log("deleting cart item");
                    removeItem(_id,cartTemp[index]);
                    break;
                }
                updateProfile(_id, {cart: [...cartTemp]})
                break;
            case "increase":
                console.log("increase qty");
                console.log(cartTemp[index].qty)
                cartTemp[index].qty += 1;
                console.log(cartTemp[index].qty)

                updateProfile(_id, {cart: [...cartTemp]})
                // quantity++
                // _setQty(quantity);
                // updateQty(id, _qty)

                break;
        }
    }

    // const removeFromCart = ()=>{
    //     if(authenticated){
    //         const newCart = cart.filter(item=>!item.id === id);
    //         updateProfile
    //     }
    // }
    useEffect(() => {
        if (_qty === 0) {
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
                    <QuantityInput type={"number"} value={cartTemp[index].qty}
                                   onChange={(e) => _setQty(e.target.value)}/>
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