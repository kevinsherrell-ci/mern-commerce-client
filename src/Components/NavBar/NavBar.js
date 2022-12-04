import {Link} from "react-router-dom";
import {useState} from "react";
import {
    AccountSection,
    CartIcon,
    HomeLink,
    HomeLinkRight,
    NavBarContainer,
    NavContainer, SearchButton,
    SearchContainer, SearchInput
} from "./NavBarStyles";

const NavBar = () => {
    const [loggedIn, setLoggedin] = useState(false);
    return (
        <NavBarContainer>
            <AccountSection>
                <p>Hi! <span>Sign In</span>/ <span>Register</span></p>
                {loggedIn && <button>Logout</button>}

            </AccountSection>
            <NavContainer>
                <HomeLink to={'/'}>MERN<HomeLinkRight>commerce</HomeLinkRight> </HomeLink>
                <CartIcon>Cart Icon</CartIcon>
            </NavContainer>
            <SearchContainer>
                <SearchInput type="text" placeholder={'search for prduct'}/>
                <SearchButton>Search</SearchButton>
            </SearchContainer>
        </NavBarContainer>

    )
}
export default NavBar;