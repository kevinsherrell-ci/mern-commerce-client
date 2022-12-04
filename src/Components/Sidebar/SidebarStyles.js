import styled from 'styled-components';

export const Container = styled.div.attrs(props => ({
    width: props.width
}))`
  //background-color: pink;
  width: ${props => props.width};
  height: 500px;
  //width: 50px;
`

