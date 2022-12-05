import {Link} from "react-router-dom";
import {useState} from "react";
import {
    AccountSection, CartCounter,
    CartIcon, CartWrapper,
    HomeLink,
    HomeLinkRight, InnerContainer,
    NavBarContainer,
    NavContainer, SearchButton,
    SearchContainer, SearchInput
} from "./NavBarStyles";

import CartImage from '../../Assets/shopping-cart.png'
const NavBar = () => {
    const [loggedIn, setLoggedin] = useState(false); // todo: make logged-in state global
    const [cartCount, setCartCount] = useState(45); // todo: make cart state global
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
                        {cartCount > 0 && <CartCounter>{cartCount}</CartCounter>}
                    </CartWrapper>
                </NavContainer>
            </InnerContainer>


        </NavBarContainer>

    )
}
export default NavBar;