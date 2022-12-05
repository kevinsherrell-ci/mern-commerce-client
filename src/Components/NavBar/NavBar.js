import {Link} from "react-router-dom";
import {useState} from "react";
import {
    AccountSection, CartContainer, CartCounter,
    CartIcon, CartWrapper,
    HomeLink,
    HomeLinkRight, InnerContainer,
    NavBarContainer,
    NavContainer, SearchButton,
    SearchContainer, SearchInput
} from "./NavBarStyles";

import CartImage from '../../Assets/shopping-cart.png'
import CartProductCard from "../CartProductCard";
import {useProfileContext} from "../../Hooks/Profile";

const NavBar = () => {
    const {cart} = useProfileContext();
    const [loggedIn, setLoggedin] = useState(false); // todo: make logged-in state global
    const [cartCount, setCartCount] = useState(100); // todo: make cart state global
    console.log(cart.length);
    const [cartOpened, setCartOpened] = useState(false);

    const cartArray = [
        {
            productId: '12345',
            item: "Item"
        }, {
            productId: '12345',
            item: "Item"
        }, {
            productId: '12345',
            item: "Item"
        }, {
            productId: '12345',
            item: "Item"
        }, {
            productId: '12345',
            item: "Item"
        }, {
            productId: '12345',
            item: "Item"
        }, {
            productId: '12345',
            item: "Item"
        }, {
            productId: '12345',
            item: "Item"
        }, {
            productId: '12345',
            item: "Item"
        }, {
            productId: '12345',
            item: "Item"
        }, {
            productId: '12345',
            item: "Item"
        },
    ]
    const mapCart = cartArray.map(item => {
        return <CartProductCard {...item}/>
    })
    return (
        <NavBarContainer>
            <InnerContainer>
                <AccountSection>
                    <p>Hi! <span>Sign In</span>/ <span>Register</span></p>
                    {loggedIn && <button>Logout</button>}
                </AccountSection>
                <NavContainer>
                    <HomeLink to={'/'}>MERN<HomeLinkRight>commerce</HomeLinkRight> </HomeLink>
                    <SearchContainer>
                        <SearchInput type="text" placeholder={'search for prduct'}/>
                        <SearchButton>Search</SearchButton>
                    </SearchContainer>
                    <CartWrapper>
                        <CartIcon src={CartImage}/>
                        {(cart !== null && cart.length > 0) && <CartCounter>{cart.length}</CartCounter>}
                    </CartWrapper>
                </NavContainer>
                {cartOpened && (
                    <CartContainer height={"500px"}>
                        {mapCart}
                    </CartContainer>
                )}
            </InnerContainer>


        </NavBarContainer>

    )
}
export default NavBar;