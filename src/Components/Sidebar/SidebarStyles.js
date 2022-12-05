import styled from 'styled-components';

export const Container = styled.div.attrs(props => ({
    width: props.width
}))`
  position: sticky;
  top: 80px;
  //background-color: pink;
  width: ${props => props.width};
  height: 500px;
  //width: 50px;
`

