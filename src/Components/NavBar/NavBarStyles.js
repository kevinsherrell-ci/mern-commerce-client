import styled from 'styled-components';
import {Link} from "react-router-dom";
import {device} from '../../Utilities/media-queries';
export const NavBarContainer = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  width: 100%;
  background-color: white;
`
export const InnerContainer = styled.div`
  position: relative;
  max-width: 900px;
  width: 60%;
  margin: 0 auto;
  @media ${device.laptop}{
    width: 80%;
  }
`
export const AccountSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`
export const HomeLink = styled(Link)`
  //background-color: green;
  //position: absolute;
  //left: 0;
  flex-basis: 50%;

  display: block;
  font-size: 2.5em;
  width: 35%;
  height: 100%;
`
export const HomeLinkRight = styled.span`
  color: hotpink;
  font-style: italic;

`
export const NavContainer = styled.nav`
  //position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  min-height: 55px;
`
export const CartWrapper = styled.p`
  position: relative;
  flex-basis: 10%;
  align-self: center;
  display: flex;
  justify-content: flex-end;
`
export const CartIcon = styled.img`
  width: 40%;
  &:hover{
    cursor: pointer;
    width: 43%;
  }
`
export const CartCounter = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  background-color: pink;
  border-radius: 50%;
  font-size: .7em;
  font-weight: bold;
  padding: 3px;
`
export const SearchContainer = styled.div`
  flex-basis: 40%;
  position: relative;
  margin: 15px 0 0 30px;
  //width: 250px;
  min-height: 25px;
`
export const SearchInput = styled.input`
  position: absolute;
  left: 0;
  border: none;
  border: 1px solid hotpink;
  border-radius: 8px 0 0 8px;
  padding-left: 10px;
  height: 100%;
`
export const SearchButton = styled.button`
  position: absolute;
  left: 150px;
  height: 100%;
  border: 1px solid hotpink;
  border-radius: 0 10px 10px 0;
  padding: 0 5px;
  font-size: .7em;
  color: white;
  background-color: hotpink;
  vertical-align: middle;

  &:hover {
    cursor: pointer;
    background-color: unset;
    color: hotpink;
  }
`
export const CartContainer = styled.div.attrs(props => ({
    height: props.height || '0px'
}))`
  position: absolute;
  right: 0;
  height: ${props => props.height};
  width: 500px;
  border: 1px solid hotpink;
  border-radius: 10px;
  padding: 20px;
  background-color: white;
`
export const SignInLink = styled(Link)`
    color: hotpink;
    &:hover{
      border-bottom: 1px solid black;

    }
`
export const RegisterLink = styled(Link)`
    color: hotpink;
    &:hover{
      border-bottom: 1px solid black;
    }
`
export const Greeting = styled.p`

`
export const LogOut = styled.button`
  border: 1px solid hotpink;
  padding: 3px;
  background-color: white;
  color: hotpink;
  width: 100px;
  margin-left: auto;
  &:hover{
    cursor: pointer;
    color: white;
    background-color: hotpink;
    width: 110px;
  }
`