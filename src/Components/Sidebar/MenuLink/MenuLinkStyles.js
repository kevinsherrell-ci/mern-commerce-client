import styled from 'styled-components';
import {Link} from 'react-router-dom';
export const SubMenu = styled.div.attrs(props => ({
    height: props.height || "0px",
}))`
  transition: all .2s;
  display: flex;
  flex-direction: column;
  //background-color: orange;
  max-height: ${props => props.height}
`
export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  &:hover{
    background-color: lightgray;
  }
  //background-color: mediumpurple;
`
export const MenuHeader = styled.div`
  margin-bottom: 5px;

  &:hover {
    cursor: pointer;
  }
`
export const MenuIcon = styled.img.attrs(props => ({
        transform: props.transform || "rotate(90deg)"
    }
))`
  position: absolute;
  left: 100px;
  width: 10px;
  height: 10px;
  transform: ${props=>props.transform}

`
export const SubMenuItem = styled(Link).attrs(props => ({
    visibility: props.visibility || 'hidden',
    height: props.height || "0"
}))`
  margin-bottom: 5px;
  max-height: ${props => props.height};
  overflow: hidden;
  padding-left: 15px;
  &:hover {
    cursor: pointer;
    background-color: #EFEFEF;
  }
`
export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  //background-color: lightgray;
  //width: 150px;
`
// height: ${props => props.height};
// overflow: hidden;
// visibility: ${props => props.visibility};