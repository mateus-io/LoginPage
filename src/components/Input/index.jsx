import React, { useState } from 'react';
import {
  ContainerInput
} from './styles';

export default (props) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <ContainerInput
      autoCorrect={false}
      placeholder={props.textInput}
      value={inputValue}
      className={inputValue === '' ? '' : 'active'}
      onChange={(e) => { setInputValue(e.target.value) }}
    />
  )

};
