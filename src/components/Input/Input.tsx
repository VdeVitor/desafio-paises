import React from 'react';
import { InputField, InputContainer } from './styles';
import Icon from '../Icon/Icon';
import { symbols } from '../../themes/symbols';

const Input = () => {
  return (
    <InputContainer>
      <InputField
        fullWidth
        disableUnderline
        placeholder="Search by country..."
      />
      <Icon
        type="search"
        size={symbols.size.icon}
        absolute
        position={{ left: 24, top: 12 }}
      />
    </InputContainer>
  );
};

export default Input;
