import React from 'react';
import { StyledButton } from './styles';
import { Small } from '../Typography/Typography';

const Button = ({
  onClick,
  children,
  marginStyle,
}: {
  onClick: () => void;
  children: React.ReactChild;
  marginStyle?: React.CSSProperties;
}) => {
  return (
    <StyledButton onClick={onClick} style={marginStyle && marginStyle}>
      <Small>{children}</Small>
    </StyledButton>
  );
};

export default Button;
