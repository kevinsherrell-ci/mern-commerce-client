import styled from 'styled-components';

export const ProductDetailContainer = styled.div`
  margin-top: 20%;
  display: flex;
  flex-direction: row;
  padding-left: 10%;
  width: 100%;
`

export const DetailLeft = styled.section`
  display: flex;
  flex-direction: column;
  width: 40%;
`
export const HeaderWrapper = styled.div``
export const Name = styled.h1`
  color: hotpink;
`
export const Brand = styled.h3``
export const WebsiteLink = styled.sub``
export const ImageWrapper = styled.div`
  justify-self: baseline;
  max-width: 300px;
`
export const ProductImage = styled.img`
  width: 100%;
`
export const DescriptionHeader = styled.h4`
`
export const Description = styled.p`
  max-height: 70%;
  overflow: hidden;
  //padding-right: 10%;
`

export const DetailRight = styled.section`
  display: flex;
  flex-direction: column;
  padding-left: 7%;
  width: 60%;
`
export const Price = styled.p`
  margin-top: 40px;
  font-size: 1.5em;
`
export const AddToCart = styled.button`
  margin-top: 15px;
  border: none;
  border-radius: 10px;
  padding: 10px;
  width: 120px;
  &:hover{
    cursor: pointer;
    background-color: grey;
    color: white;
  }
`
