const CartProductCard = ({id, api_featured_image, brand, name, price, qty})=>{
    return (
        <div>
            <p>{id}</p>
            <p>{name}</p>
            <p>{brand}</p>
            <p>{qty}</p>
        </div>
    )
}

export default CartProductCard;