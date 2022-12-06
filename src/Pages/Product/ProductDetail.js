import {useLocation, useParams} from "react-router-dom";
import {useContext, useEffect} from "react";
import {MakeupContext, useMakeupContext} from "../../Hooks/MakeupAPI";
import {
    AddToCart, Brand,
    Description, DescriptionHeader,
    DetailLeft,
    DetailRight,
    HeaderWrapper,
    ImageWrapper, Name, Price,
    ProductDetailContainer, ProductImage, WebsiteLink
} from "./ProductDetailStyles";
import {useProfileContext} from "../../Hooks/Profile";

const ProductDetail = (props) => {
    console.log("product detail has rendered");
    console.log(props);
    const id = useParams().id;
    console.log(id);
    const {getDataById, selectedProduct} = useMakeupContext();
    const {addToCart} = useProfileContext();
    const {api_featured_image, brand, category, description, name, price, product_type, website_link} = selectedProduct;

    const cartObject = {
        id: id,
        api_featured_image: api_featured_image,
        brand: brand,
        name: name,
        price: price,
        qty: 1
    }
    useEffect(() => {
        getDataById(id);
    }, [id])
    return (
        <ProductDetailContainer>
            <DetailLeft>
                <HeaderWrapper>
                    <Name>{name}</Name>
                    <Brand>{brand}</Brand>
                    <WebsiteLink>{website_link}</WebsiteLink>
                </HeaderWrapper>
                <ImageWrapper>
                    <ProductImage src={api_featured_image} width={"200px"} alt=""/>
                </ImageWrapper>
            </DetailLeft>
            <DetailRight>
                <DescriptionHeader>Description</DescriptionHeader>
                <Description>{description}</Description>
                <Price>${price}</Price>
                <AddToCart onClick={()=>addToCart(cartObject)}>Add to Cart</AddToCart>
            </DetailRight>
        </ProductDetailContainer>
    )
}
export default ProductDetail;