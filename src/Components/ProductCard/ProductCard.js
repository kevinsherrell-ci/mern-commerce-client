import {
    AddToCard, BrandHeader,
    ImageSection,
    InfoSection, Price,
    PriceSection,
    ProductCardContainer,
    ProductImage, ProductLink
} from "./ProductCardStyles";

const ProductCard = (props)=>{
    const {id,api_featured_image, brand, description, image_link, name, price, rating} = props;
    return (
        <ProductCardContainer>
            <ImageSection>
                <ProductImage src={api_featured_image}  alt=""/>
            </ImageSection>
            <InfoSection>
                <BrandHeader>{brand}</BrandHeader>
                <ProductLink to={`/product/detail/${id}`}>{name}</ProductLink>
            </InfoSection>
            <PriceSection>
                <Price>${price}</Price>
                <AddToCard>Add to Cart</AddToCard>
            </PriceSection>
        </ProductCardContainer>
    )
}

export default ProductCard;