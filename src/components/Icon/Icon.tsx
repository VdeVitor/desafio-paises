import React from 'react';
import { IconElement } from './styles';

type IconTypes =
  | 'search'
  | 'check'
  | 'plane'
  | 'user'
  | 'close'
  | 'close-input';

interface Position {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export interface IconProps {
  size: string;
  absolute?: boolean;
  position?: Position;
  media?: boolean;
}

interface Props extends IconProps {
  type: IconTypes;
}

const Icon = ({ type, size, position, absolute, media }: Props) => {
  return (
    <IconElement
      media
      className={type}
      size={size}
      absolute={absolute}
      position={position}
    />
  );
};

export default Icon;
