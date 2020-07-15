import React from 'react';

import {
  ContainerButton,
  TextButton,
  Cut
} from './styles';

export default (props) => (
  <ContainerButton>
    <TextButton>
      {
        props.textButton
      }
    </TextButton>
    <Cut/>
  </ContainerButton>
)
