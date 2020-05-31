import React from 'react';
import { StyledButton, ButtonText } from './styles';
import { Small } from '../Typography/Typography';
import { symbols } from '../../themes/symbols';
import Icon from '../Icon/Icon';

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactChild;
  marginStyle?: React.CSSProperties;
  active: boolean;
  filterButton?: boolean;
  removeFilter?: () => void;
}

const Button = ({
  onClick,
  children,
  marginStyle,
  active,
  filterButton,
  removeFilter,
}: Props) => {
  return (
    <StyledButton
      active={active}
      onClick={onClick}
      style={marginStyle && marginStyle}
    >
      <ButtonText active={active}>{children}</ButtonText>
      {filterButton && active && (
        <div onClick={removeFilter}>
          <Icon type="close" size={symbols.size.iconSmall} />
        </div>
      )}
    </StyledButton>
  );
};

export default Button;
