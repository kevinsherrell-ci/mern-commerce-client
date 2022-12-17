import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {
    AccountSection, CartContainer, CartCounter,
    CartIcon, CartWrapper, Greeting,
    HomeLink,
    HomeLinkRight, InnerContainer, LogOut,
    NavBarContainer,
    NavContainer, RegisterLink, SearchButton,
    SearchContainer, SearchInput, SignInLink
} from "./NavBarStyles";

import CartImage from '../../Assets/shopping-cart.png'
import CartProductCard from "../CartProductCard";
import {useProfileContext} from "../../Hooks/Profile";
import {useAuthContext} from "../../Hooks/Auth";


const NavBar = () => {
    const {cart, total, getProfile, profile, clearProfile} = useProfileContext();
    const {loggedIn, user, authenticated, logout} = useAuthContext();
    const [cartOpened, setCartOpened] = useState(false);

    const mapCart = cart && cart.map((item, index) => {
        return (item.qty > 0) && <CartProductCard {...item} key={item.name + item.id + index}/>
    })
    const calculateTotal = () => {
        let totalPrice = 0;
        if (cart.length > 0) {
            cart.forEach(item => {
                // some prices on the data are null, if so replace with 15
                const itemPrice = (item.price === null && parseInt(item.price) < 1) ? 15 : item.price;
                totalPrice += (itemPrice * item.qty);
            })
        }
        return totalPrice;
    }

    useEffect(() => {
    }, [cart, loggedIn, user])
    const displayGreeting = () => {
        if (authenticated) {
            return (
                <Greeting>Hi! {user && user.email}
                </Greeting>
            )
        }
        return (
            <Greeting>Hi!<SignInLink to={'/auth/login'}>Sign In</SignInLink> / <RegisterLink
                to={'/auth/register'}>Register</RegisterLink>
            </Greeting>
        )
    }
    return (
        <NavBarContainer>
            <InnerContainer>
                <AccountSection>
                    {displayGreeting()}
                    {authenticated && <LogOut onClick={() => {
                        logout();
                        clearProfile();
                    }}>Logout</LogOut>}
                </AccountSection>
                <NavContainer>
                    <HomeLink to={'/'}>MERN<HomeLinkRight>commerce</HomeLinkRight> </HomeLink>
                    <SearchContainer>
                        <SearchInput type="text" placeholder={'search for product'}/>
                        <SearchButton>Search</SearchButton>
                    </SearchContainer>
                    <CartWrapper>
                        <CartIcon src={CartImage} onClick={() => setCartOpened(!cartOpened)}/>
                        {(cart && cart.length > 0) && <CartCounter>{cart.length}</CartCounter>}
                    </CartWrapper>
                </NavContainer>
                {cartOpened && (
                    <CartContainer height={"500px"}>

                        {mapCart}
                        <p>Total Price: ${calculateTotal()}</p>
                    </CartContainer>
                )}
            </InnerContainer>
        </NavBarContainer>
    )
}
export default NavBar;