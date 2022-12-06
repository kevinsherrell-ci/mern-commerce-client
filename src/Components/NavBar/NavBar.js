import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
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
    console.log("NAVBAR");
    const {cart, total} = useProfileContext();
    const [loggedIn, setLoggedin] = useState(false); // todo: make logged-in state global
    const [cartCount, setCartCount] = useState(100); // todo: make cart state global
    const [cartOpened, setCartOpened] = useState(false);

    const mapCart = cart.map(item => {
        return (item.qty > 0) && <CartProductCard {...item} key={item.id}/>
    })
    useEffect(()=>{
    }, [cart])
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