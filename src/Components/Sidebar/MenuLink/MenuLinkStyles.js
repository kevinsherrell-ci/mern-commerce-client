import styled from 'styled-components';

export const SubMenu = styled.div.attrs(props => ({
    height: props.height || "0px",
}))`
  transition: all .1s;
  display: flex;
  flex-direction: column;
  background-color: orange;
  max-height: ${props => props.height}
`
export const MenuHeader = styled.div`
  margin: 0px;
  &:hover{
    cursor: pointer
  }
`
export const SubMenuItem = styled.p.attrs(props => ({
    visibility: props.visibility || 'hidden'
}))`
  margin: 0;
  visibility: ${props => props.visibility};
  &:hover{
    cursor: pointer
  }
`
export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  background-color: green;
  width: 150px;
`