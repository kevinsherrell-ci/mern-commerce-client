import styled from 'styled-components';

export const CartProductCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  //background-color: lightgray;
  margin-bottom: 15px;
  border-bottom: 1px solid lightgray;
  font-size: .9em;
`
export const ImageSection = styled.div`
  min-width: 10%;
  height: 100%;
`
export const ProductImage = styled.img`
  max-width: 40px;
  height: 100%;
`
export const InfoSection = styled.div`
  width: 70%;
  //overflow: hidden;
  display: flex;
  flex-direction: row;
  //justify-content: center;
  
`
export const NameBrand = styled.div`
  min-width: 50%;
`
export const Brand = styled.p``
export const Name = styled.p``
export const Quantity = styled.div`
margin-left: 50px
`
export const QuantityLabel = styled.label`
    display: block;
`
export const QuantityInput = styled.input`
  border: 1px solid lightgray;

  border-radius: 5px 0 0 5px;
  text-align: center;
  width: 50px;

  &[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`
export const IncreaseButton = styled.button`
  border: 1px solid lightgray;

  border: none;
  margin-left: 2px;
  width: 20px;
  &:hover{
    cursor:pointer;
    background-color: gray;
    color: white;
  }
`
export const DecreaseButton = styled.button`
  border: 1px solid lightgray;

  border: none;
  width: 20px;
  &:hover{
    cursor:pointer;
    background-color: gray;
    color: white;
  }
`
export const PriceSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 20%;
`
export const Price = styled.p`
  
`