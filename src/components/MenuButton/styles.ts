import styled from 'styled-components';
import { MenuItem as MuiMenuItem, Menu as MuiMenu } from '@material-ui/core';
import { symbols } from '../../themes/symbols';

// NB: This could be a breaking change if Material UI were to change the class name.
export const Menu = styled(MuiMenu)`
  .MuiPaper-root {
    border-radius: ${symbols.borders.radius._4};
    box-shadow: 0 4px 20px 4px ${symbols.colors.black01};
  }
`;

export const MenuItem = styled(MuiMenuItem)`
  font-size: ${symbols.font.size._14};
  background-color: ${symbols.colors.white05};
`;

export const MenuItemSeparator = styled.span`
  width: calc(100% - ${symbols.spacing._32});
  height: 1px;
  background-color: ${symbols.colors.neutral};
  display: block;
  margin: 0 auto;

  &:last-of-type {
    display: none;
  }
`;
