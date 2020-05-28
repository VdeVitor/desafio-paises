import React from 'react';
import { StyledButton } from './styles';
import { Small } from '../Typography/Typography';

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactChild;
  marginStyle?: React.CSSProperties;
  active: boolean;
}

const Button = ({ onClick, children, marginStyle, active }: Props) => {
  return (
    <StyledButton onClick={onClick} style={marginStyle && marginStyle}>
      <Small>{children}</Small>
    </StyledButton>
  );
};

export default Button;
