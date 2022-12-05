import {Link} from "react-router-dom";
import {useState} from "react";
import {
    AccountSection,
    CartIcon,
    HomeLink,
    HomeLinkRight, InnerContainer,
    NavBarContainer,
    NavContainer, SearchButton,
    SearchContainer, SearchInput
} from "./NavBarStyles";

const NavBar = () => {
    const [loggedIn, setLoggedin] = useState(false);
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
                    <CartIcon>Cart Icon</CartIcon>
                </NavContainer>
            </InnerContainer>


        </NavBarContainer>

    )
}
export default NavBar;