import React from 'react';
import { InputField, InputContainer } from './styles';
import Icon from '../Icon/Icon';
import { symbols } from '../../themes/symbols';

const Input = ({ onTextChange }: { onTextChange: (value: string) => void }) => {
  return (
    <InputContainer>
      <InputField
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onTextChange(event.target.value)
        }
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
