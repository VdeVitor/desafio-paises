import styled from 'styled-components';
import search from '../../assets/icons/search.svg';
import plane from '../../assets/icons/plane.svg';
import user from '../../assets/icons/user.svg';
import close from '../../assets/icons/close.svg';
import check from '../../assets/icons/check.svg';
import { IconProps } from './Icon';

export const IconElement = styled.i<IconProps>`
  &::before {
    content: ' ';
    background-size: cover;
    height: ${(props) => props.size};
    width: ${(props) => props.size};
    position: ${(props) => (props.absolute ? 'absolute' : null)};
    top: ${(props) => (props.position ? `${props.position.top}px` : null)};
    right: ${(props) => (props.position ? `${props.position.right}px` : null)};
    bottom: ${(props) =>
      props.position ? `${props.position.bottom}px` : null};
    left: ${(props) => (props.position ? `${props.position.left}px` : null)};
    display: block;
  }

  &.check::before {
    background-image: url('${check}');
  }


  &.search::before {
    background-image: url('${search}');
  }

  &.plane:before {
    background-image: url('${plane}');
  }

  &.user:before {
    background-image: url('${user}');
  }

  &.close:before {
    background-image: url('${close}');
  }
`;
