import styled from 'styled-components';
import {device} from '../Utilities/media-queries';


export const GlobalContainer = styled.div`
  //background-color: pink;
  display: flex;
  flex-direction: column;
  width: 100vw;
  //padding-left: 2%;
  margin: 0 auto;

`
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 900px;
  width: 60%;
  margin: 0 auto;
  @media ${device.laptop}{
    width: 80%;
    //flex-direction: column;
}
  @media ${device.mobileL}{
    flex-direction: column;
  }
`
export const MainContainer = styled.div`
  display: flex;
  width: 100%;
`
export const ContentContainer = styled.div`
  width: 80%;
`