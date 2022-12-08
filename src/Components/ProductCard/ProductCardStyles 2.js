import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  height: 175px;
  margin-bottom: 20px;
  border-bottom: 1px solid pink;
  max-width: 800px;
`
export const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 100%;

`
export const InfoSection = styled.div`
  width: 60%;
  height: 100%;
  padding: 40px;
`
export const ProductImage = styled.img`
  display: block;
  width: 60%;
  //height: 100%;
`
export const PriceSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 20%;
  height: 100%;
  //padding: 40px;

`
export const Price = styled.p`
  margin-bottom: 20px;
  font-size: 1.5em;
`
export const AddToCard = styled.button`
  border: none;
  border-radius: 10px;
  padding: 10px;
  width: 100px;
`
export const BrandHeader = styled.h3`
  font-style: italic;
  margin-bottom: 5px;
  color: hotpink;

`
export const ProductLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 1.5em;
  &:hover{
    cursor: pointer;
  }
`