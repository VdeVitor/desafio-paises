import styled from 'styled-components';
import { Button as MuiButton } from '@material-ui/core';
import { symbols } from '../../themes/symbols';

export const StyledButton = styled(MuiButton)`
  background-color: ${symbols.colors.neutral};
  text-transform: none;
  padding: ${symbols.spacing._4} ${symbols.spacing._12};
  border-radius: ${symbols.borders.radius._50};
`;
