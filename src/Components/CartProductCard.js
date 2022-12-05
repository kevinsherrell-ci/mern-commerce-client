const CartProductCard = ({productId, item})=>{
    return (
        <div>
            <p>{productId}</p>
            <p>{item}</p>
        </div>
    )
}

export default CartProductCard;