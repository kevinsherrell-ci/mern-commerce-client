import styled from 'styled-components';
import {Link} from "react-router-dom";

export const LoginContainer = styled.div`
  //padding: 0 25%
  width: 50%;
  margin: 0 auto;
`
export const FormRow = styled.div.attrs((props) => ({
    direction: props.direction || "row"
}))`
  display: flex;
  flex-direction: ${props => props.direction};
  align-self: ${props => props.alignSelf};
  margin-top: 20px;
`
export const FormInput = styled.input`
  border: 1px solid hotpink;
  border-radius: 10px;
  padding-left: 15px;
  height: 30px;
  width: 100%;
`
export const Submit = styled.button`
  align-self: flex-end;
  border: none;
  border-radius: 10px;
  background-color: hotpink;
  color: white;
  width: 80px;
  padding: 5px;
  margin-bottom: 5px;

  &:hover {
    border: 1px solid hotpink;
    background-color: white;
    color: hotpink;
    cursor: pointer;
  }
`
export const CreateAccountText = styled.p`
  align-self: flex-end;
  color: pink;
`
export const CreateAccountLink = styled(Link)`
  color: white;
  text-decoration: underline;

  &:hover {
    color: hotpink;
  }
`
export const GuestText = styled.p`
  color: pink;
  font-size: 1.2em;
  margin: 0 auto;
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