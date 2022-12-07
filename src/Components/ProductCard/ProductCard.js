import {
    AddToCard, BrandHeader,
    ImageSection,
    InfoSection, Price,
    PriceSection,
    ProductCardContainer,
    ProductImage, ProductLink
} from "./ProductCardStyles";

import {useProfileContext} from '../../Hooks/Profile';

const ProductCard = (props) => {
    // console.log("PRODUCT CARD");
    const {cart, addToCart} = useProfileContext();
    const {id, api_featured_image, brand, description, image_link, name, price, rating} = props;
    const cartObject = {
        id: id,
        api_featured_image: api_featured_image,
        brand: brand,
        name: name,
        price: price,
        qty: 1
    }
    return (
        <ProductCardContainer>
            <ImageSection>
                <ProductImage src={api_featured_image} alt=""/>
            </ImageSection>
            <InfoSection>
                <BrandHeader>{brand}</BrandHeader>
                <ProductLink to={`/product/detail/${id}`}>{name}</ProductLink>
            </InfoSection>
            <PriceSection>
                <Price>${price}</Price>
                <AddToCard onClick={() => addToCart(cartObject)}>Add to Cart</AddToCard>
            </PriceSection>
        </ProductCardContainer>
    )
}

export default ProductCard;