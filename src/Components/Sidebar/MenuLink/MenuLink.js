import {HeaderContainer, LinkContainer, MenuHeader, MenuIcon, SubMenu, SubMenuItem} from "../MenuLink/MenuLinkStyles";
import {useState} from "react";

const icon = require('../../../Assets/upload.png');
const MenuLink = (props) => {
    const [subOpened, setSubOpened] = useState(false);
    const {type, categories} = props;

    const mapCategories = categories.map(category => {
        return <SubMenuItem height={subOpened && "300px"} visibility={subOpened && 'visible'}
                            to={`product/${type}?product_type=${type}&product_category=${category}`}>{category}</SubMenuItem>
    })

    return (
        <LinkContainer text={"this is a text prop"}>
            <HeaderContainer>
                <MenuHeader onClick={() => {
                    setSubOpened(!subOpened);
                }}>{type}</MenuHeader>
                <MenuIcon src={icon} transform={subOpened && "rotate(180deg)"}/>
            </HeaderContainer>

            <SubMenu height={subOpened === false ? "0px" : "300px"}>
                {mapCategories}
            </SubMenu>
        </LinkContainer>
    )
}

export default MenuLink;