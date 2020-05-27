import { Input as MuiInput } from '@material-ui/core';
import styled from 'styled-components';
import { symbols } from '../../themes/symbols';

export const InputContainer = styled.div`
  margin: ${symbols.spacing._32} 0 ${symbols.spacing._12};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputField = styled(MuiInput)`
  background: ${symbols.colors.neutral};
  min-height: ${symbols.size.inputHeight};
  padding-left: ${symbols.spacing._52};
  font-size: ${symbols.font.size._16};
  font-family: ${symbols.font.family.lato};
  line-height: ${symbols.font.lineHeight._24};
`;
