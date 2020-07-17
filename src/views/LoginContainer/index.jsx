import {
  Container,
  BottomContent,
  MainContent,
  TopContent,
  InvalidCredentialsAlert,
  TextAlert,
  CutBottom,
  OrangeBar,
  OrangeBarTop,
  CutTopLeft,
  CutTopRight
} from './styles'

import React from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

export default () => (
  <Container>
    <TopContent>
      <CutTopLeft/>
      <CutTopRight/>
      <OrangeBarTop/>
    </TopContent>
    <MainContent>
      <Input textInput="Email"/>
      <Input textInput="Senha"/>
      <Button textButton="Fazer login"/>
      <InvalidCredentialsAlert>
        <TextAlert>
          Email ou senha inválidos
        </TextAlert>
      </InvalidCredentialsAlert>
    </MainContent>
    <BottomContent>
      <OrangeBar/>
      <CutBottom/>
    </BottomContent>
  </Container>
);
