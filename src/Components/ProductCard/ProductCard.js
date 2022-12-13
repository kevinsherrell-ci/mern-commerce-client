import {
    AddToCard, BrandHeader,
    ImageSection,
    InfoSection, Price,
    PriceSection,
    ProductCardContainer,
    ProductImage, ProductLink
} from "./ProductCardStyles";

import {useProfileContext} from '../../Hooks/Profile';
import {useAuthContext} from "../../Hooks/Auth";

const ProductCard = (props) => {
    // console.log("PRODUCT CARD");
    const {authenticated} = useAuthContext();
    const {cart, updateProfile, _id} = useProfileContext();
    const {id, api_featured_image, brand, description, image_link, name, price, rating, product} = props;
    const cartObject = {
        ...product,
        qty: 1
    }
    const addToCart = () => {
        if (authenticated) {
            console.log(_id);
            const findItem = cart.find(item => item.id === cartObject.id);
            console.log(findItem, cartObject);
            if (findItem === null || findItem === undefined) {
                console.log("item not found")
                return updateProfile(_id, {cart: [...cart, cartObject]});
            }else{
                console.log('item found');
                findItem.qty += 1;
                return updateProfile(_id, {cart: [...findItem]});
            }

        }
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
                <AddToCard onClick={() => addToCart()}>Add to Cart</AddToCard>
            </PriceSection>
        </ProductCardContainer>
    )
}

export default ProductCard;