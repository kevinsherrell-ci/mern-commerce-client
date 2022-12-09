import styled from 'styled-components';
import {Container, SubMenu, LinkContainer, SubMenuItem, MenuHeader} from "./SidebarStyles";

import {useState} from "react";
import MenuLink from "./MenuLink/MenuLink";
import {uuid} from 'uuidv4';

const linkFormat = [
    {"blush": ["powder", "cream"]},
    {"bronzer": ["powder"]},
    {"eyebrow": ["Pencil"]},
    {"eyeliner": ["liquid", "pencil", "gel", "cream"]},
    {"eyeshadow": ["palette", "pencil", "cream"]},
    {"foundation": ["concealer", "liquid", "contour", "cream", "mineral", "powder", "highlighter"]},
    {"lip_liner": ["pencil"]},
    {"lipstick": ["lipstick", "lip_gloss", "liquid", "lip_stain"]},
    {"mascara": []},
    {"nail_polish": []}
]

const Sidebar = ({width}) => {
    const mapLinks = linkFormat.map((productType, index)=>{
        const type = Object.keys(productType)[0];
        const categories = Object.values(productType);

        return <MenuLink type={type} categories={categories[0]} key={type + index}/>
    })
    return (
        <Container width={width}>
            {mapLinks}
        </Container>
    )
}

export default Sidebar;