import {LinkContainer, MenuHeader, SubMenu, SubMenuItem} from "../MenuLink/MenuLinkStyles";
import {useState} from "react";

const MenuLink = (props) => {
    console.log(props);
    const [subOpened, setSubOpened] = useState(false);
    const {type, categories} = props;

    const mapCategories = categories.map(category => {
        return <SubMenuItem visibility={subOpened && 'visible'}>{category}</SubMenuItem>
    })

    return (
        <LinkContainer text={"this is a text prop"} >
            <MenuHeader onClick={() => {
                setSubOpened(!subOpened);
                console.log(subOpened);
            }}>{type}</MenuHeader>
            <SubMenu height={subOpened === false ? "0px" : "300px"}>
                {mapCategories}
            </SubMenu>
        </LinkContainer>
    )
}

export default MenuLink;