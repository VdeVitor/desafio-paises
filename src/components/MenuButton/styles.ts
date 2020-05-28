import styled from 'styled-components';
import { MenuItem, Menu as MuiMenu } from '@material-ui/core';
import { symbols } from '../../themes/symbols';

// NB: This could be a breaking change if Material UI were to change the class name.
export const Menu = styled(MuiMenu)`
  .MuiPaper-root {
    border-radius: ${symbols.borders.radius._4};
    box-shadow: 0 4px 20px 4px ${symbols.colors.black01};
  }
`;
