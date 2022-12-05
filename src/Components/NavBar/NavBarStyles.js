import styled from 'styled-components';
import {Link} from "react-router-dom";

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`
export const InnerContainer = styled.div`
  max-width: 900px;
  min-width: 60%;
  margin: 0 auto;
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
`
export const CartCounter = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  background-color: pink;
  border-radius: 50%;
  font-size: .6em;
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