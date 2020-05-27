import styled from 'styled-components';
import search from '../../assets/icons/search.svg';
import { IconProps } from './Icon';

export const IconElement = styled.i<IconProps>`
  &::before {
    position: ${(props) => (props.absolute ? 'absolute' : null)};
    top: ${(props) => (props.position.top ? `${props.position.top}px` : null)};
    right: ${(props) =>
      props.position.right ? `${props.position.right}px` : null};
    bottom: ${(props) =>
      props.position.bottom ? `${props.position.bottom}px` : null};
    left: ${(props) =>
      props.position.left ? `${props.position.left}px` : null};
  }

  &.search::before {
    content: ' ';
    background-image: url('${search}');
    background-size: cover;
    height: ${(props) => props.size};
    width: ${(props) => props.size};
  }
`;
