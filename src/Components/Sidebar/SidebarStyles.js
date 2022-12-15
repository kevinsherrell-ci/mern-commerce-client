import styled from 'styled-components';
import {device} from '../../Utilities/media-queries';

export const Container = styled.div.attrs(props => ({
    width: props.width
}))`
  position: sticky;
  top: 80px;
  //background-color: pink;
  width: 20%;
  height: 500px;
  //width: 50px;
  @media ${device.mobileL}{
    width: 100%;
    height: auto;
  }
`

