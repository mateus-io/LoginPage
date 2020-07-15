import styled from 'styled-components';
//TP Top content
//MC Main Content
//BT Bottom content

export const Container = styled.div `
  height : 411px;
  width : 444px;
  display : grid;
  grid-template-columns : auto;
  grid-template-rows : 17px auto 11px;
  grid-template-areas :
    'TP'
    'MC'
    'BT';
`;

export const TopContent = styled.div `
  width : 100%;
  height : 100%;
  display : flex;
  background : #3A3A3A;
  justify-content : center;
  grid-area : TP;
  position : relative;
`;

export const OrangeBarTop = styled.div `
  height : 100%;
  width : 100px;
  background : #DA7F15;
`;

export const BottomContent = styled.div `
  width : 100%;
  height : 100%;
  display : flex;
  background : transparent;
  grid-area : BT;
  position : relative;
`;
export const OrangeBar = styled.div `
  height : 100%;
  width : 93%;
  background : #DA7F15;
`;
export const CutBottom = styled.div `
  position : absolute;
  right : 11px;
  bottom : 0;
  border-bottom: 11px solid transparent;
  border-left: 20px solid #DA7F15;
  width: 0;

`;
export const CutTopRight = styled.div `
  position : absolute;
  right : 154px;
  top : 0;
  border-bottom: 19px solid transparent;
  border-left: 20px solid #DA7F15;
  width: 0;
`;

export const CutTopLeft = styled.div `
  position : absolute;
  left : 154px;
  bottom : 0;
  transform : rotate(90deg);
  border-bottom: 15px solid transparent;
  border-left: 20px solid #DA7F15;
  width: 0;
`;

export const MainContent = styled.div `
  display : flex;
  width : 100%;
  height : 100%;
  flex-direction : column;
  align-items : center;
  justify-content : center;
  position : relative;
  grid-area : MC;
  background: #3A3A3A;
`;

export const InvalidCredentialsAlert = styled.div `
  width : 100%;
  display : flex;
  justify-content : center;
  align-items : center;
  position : absolute;
  bottom : 13px;
`;

export const TextAlert  = styled.p `
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #8A3434;
`;
