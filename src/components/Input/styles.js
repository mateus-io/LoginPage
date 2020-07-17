import styled from 'styled-components';

export const ContainerInput = styled.input `
  width : 348px;
  height : 71px;
  border: 1px solid #868686;

  color: #FFFFFF;
  font-family: Montserrat;
  font-weight: 800;

  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;

  margin-bottom : 37px;
  padding : 24px;
  background : transparent;

  outline : transparent;


  ::-webkit-input-placeholder {
    color: #868686;
  }


  &.active {
    border: 1px solid #FFFFFF;
  }


  &:focus {
    color: #DA7F15;
    border : 1px solid #DA7F15;
  }

`;
