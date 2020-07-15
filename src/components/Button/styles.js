import styled from 'styled-components';

export const ContainerButton = styled.button `
  display : flex;
  justify-content : center;
  align-items : center;
  cursor : pointer;
  border: 1px solid #FFFFFF;
  width : 348px;
  height : 71px;
  background : transparent;
  &:hover {
    background: #731A65;
    transition-duration :.4s;
  }
  position : relative;
`;

export const TextButton = styled.p `
  font-family: Montserrat;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  line-height: 27px;
  color : #FFFFFF;
`;

export const Cut = styled.div `
  position: absolute;
  bottom: 0;
  right: 0;
  border-bottom: 69px solid #3A3A3A;
  border-left: 60px solid transparent;
  width: 0;
`;

