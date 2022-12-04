import {
    AddToCard,
    ImageSection,
    InfoSection, Price,
    PriceSection,
    ProductCardContainer,
    ProductImage
} from "./ProductCardStyles";

const ProductCard = (props)=>{
    const {api_featured_image, brand, description, image_link, name, price, rating} = props;
    return (
        <ProductCardContainer>
            <ImageSection>
                <ProductImage src={api_featured_image}  alt=""/>
            </ImageSection>
            <InfoSection>
                <h3>{brand}</h3>
                <h2>{name}</h2>
            </InfoSection>
            <PriceSection>
                <Price>${price}</Price>
                <AddToCard>Add to Cart</AddToCard>
            </PriceSection>
        </ProductCardContainer>
    )
}

export default ProductCard;