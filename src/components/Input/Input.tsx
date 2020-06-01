import React from 'react';
import { InputField, InputContainer } from './styles';
import Icon from '../Icon/Icon';
import { symbols } from '../../themes/symbols';

const Input = ({
  onTextChange,
  clearSearch,
  text,
}: {
  onTextChange: (value: string) => void;
  clearSearch: () => void;
  text: string;
}) => {
  return (
    <InputContainer>
      <InputField
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onTextChange(event.target.value)
        }
        fullWidth
        value={text}
        disableUnderline
        placeholder="Search by country..."
      />
      <Icon
        type="search"
        size={symbols.size.icon}
        absolute
        position={{ left: 24, top: 12 }}
      />
      <div onClick={clearSearch}>
        <Icon
          media
          type="close-input"
          size={symbols.size.icon}
          absolute
          position={{ right: 16, top: 14 }}
        />
      </div>
    </InputContainer>
  );
};

export default Input;
