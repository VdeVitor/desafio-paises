import React from 'react';
import { InputField, InputContainer } from './styles';

const Input = () => {
  return (
    <InputContainer>
      <InputField
        fullWidth
        disableUnderline
        placeholder="Search by country..."
      />
    </InputContainer>
  );
};

export default Input;
