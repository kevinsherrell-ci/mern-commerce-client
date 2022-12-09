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
    const {loggedIn, currentUser, logout} = useAuthContext();
    const [cartOpened, setCartOpened] = useState(false);

    const mapCart = cart.map(item => {
        return (item.qty > 0) && <CartProductCard {...item} key={item.id}/>
    })
    useEffect(() => {
    }, [cart, loggedIn, currentUser])
    const displayGreeting = ()=>{
        if(loggedIn){
            return (
                <Greeting>Hi! {currentUser && currentUser.email}
                </Greeting>
            )
        }
        return (
            <Greeting>Hi!<SignInLink to={'/auth/login'}>Sign In</SignInLink> / <RegisterLink to={'/auth/register'}>Register</RegisterLink>
            </Greeting>
        )
    }
    return (
        <NavBarContainer>
            <InnerContainer>
                <AccountSection>
                    {displayGreeting()}
                    {loggedIn && <LogOut onClick={()=>logout(()=>clearProfile())}>Logout</LogOut>}
                </AccountSection>
                <NavContainer>
                    <HomeLink to={'/'}>MERN<HomeLinkRight>commerce</HomeLinkRight> </HomeLink>
                    <SearchContainer>
                        <SearchInput type="text" placeholder={'search for product'}/>
                        <SearchButton>Search</SearchButton>
                    </SearchContainer>
                    <CartWrapper>
                        <CartIcon src={CartImage} onClick={() => setCartOpened(!cartOpened)}/>
                        {(cart !== null && cart.length > 0) && <CartCounter>{cart.length}</CartCounter>}
                    </CartWrapper>
                </NavContainer>
                {cartOpened && (
                    <CartContainer height={"500px"}>
                        {mapCart}
                        <p>Total Price: ${total}</p>
                    </CartContainer>
                )}
            </InnerContainer>


        </NavBarContainer>

    )
}
export default NavBar;