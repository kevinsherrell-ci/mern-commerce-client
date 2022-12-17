import styled from 'styled-components';
import background from '../Assets/skin-care.jpeg';
import {Link} from "react-router-dom";

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background}) no-repeat center center fixed;

`
export const InnerContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 20px;
  width: 60%;
  margin: 0 auto;
  height: 100%;
`
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  //align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
`
export const AuthSub = styled.p`
  font-style: italic;
  color: pink;
  width: 100%;
`
export const APILink = styled.a`
  color: white;
  text-decoration: underline;

  &:hover {
    color: hotpink;
  }
`
export const Logo = styled.h1`
  //text-align: center;
  font-size: 2.5em;
  color: white;
`
export const LogoRight = styled.span`
  color: hotpink;
  font-style: italic;
`
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  //margin-bottom: 5px;
`
export const GuestText = styled.p`
  position: absolute;
  top: 40%;
  color: pink;
  font-size: 1.2em;

`
export const GuestLink = styled(Link)`
  color: white;
  //font-size: 1.1em;
  text-decoration: underline;
  margin: 0 auto;

  &:hover {
    color: hotPink;
  }

`
export const FormHeader = styled.h1`
  color: pink;
  margin-left: auto;
`