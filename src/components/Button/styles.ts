import styled from 'styled-components';
import { Button as MuiButton } from '@material-ui/core';
import { symbols } from '../../themes/symbols';
import { Small } from '../Typography/Typography';

export const StyledButton = styled(MuiButton)<{ active: number }>`
  background-color: ${(props) =>
    props.active ? symbols.colors.accent2 : symbols.colors.neutral};
  text-transform: none;
  padding: ${symbols.spacing._4} ${symbols.spacing._12};
  border-radius: ${symbols.borders.radius._50};

  &:hover {
    background-color: ${(props) =>
      props.active ? symbols.colors.accent2 : symbols.colors.neutral};
    opacity: 0.8;
  }

  .MuiTouchRipple-root {
    display: none;
  }
`;

export const ButtonText = styled(Small)<{ active: number }>`
  color: ${(props) =>
    props.active ? symbols.colors.white : symbols.font.colors.secondary};
  margin-right: ${(props) => (props.active ? symbols.spacing._12 : null)};
`;
