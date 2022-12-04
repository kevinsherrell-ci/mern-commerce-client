import styled from 'styled-components';
import {Link} from "react-router-dom";

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`
export const AccountSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`
export const HomeLink = styled(Link)`
  font-size: 1.5em;
  width: 90%;
`
export const HomeLinkRight = styled.span`
  color: hotpink;
  font-style: italic;

`
export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
`
export const CartIcon = styled.p`
  width: 10%;
  align-self: flex-end;
  display: flex;
  justify-content: flex-end;
`
export const SearchContainer = styled.div`
  position: relative;
  margin: 15px 0;
  width: 250px;
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
  &:hover{
    cursor: pointer;
    background-color: unset;
    color: hotpink;
  }
`