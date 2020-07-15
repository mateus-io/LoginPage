import styled from 'styled-components';

export const ContainerInput = styled.input `
  width : 348px;
  height : 71px;
  border: 1px solid #868686;
  text-transform: uppercase;
  color: #FFFFFF;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 22px;
  margin-bottom : 37px;
  padding : 24px;
  background : transparent;
  ::-webkit-input-placeholder {
    text-transform: uppercase;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 22px;
    color: #868686;
  }
  &.active {
    border: 1px solid #FFFFFF;
  }
  &:focus {
    color: #DA7F15;
    outline : 1px solid #DA7F15;
  }
`;
