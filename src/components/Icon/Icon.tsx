import React from 'react';
import { IconElement } from './styles';

type IconTypes = 'search' | 'check';

interface Position {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export interface IconProps {
  size: string;
  absolute: boolean;
  position: Position;
}

interface Props extends IconProps {
  type: IconTypes;
}

const Icon = ({ type, size, position }: Props) => {
  return (
    <IconElement className={type} size={size} absolute position={position} />
  );
};

export default Icon;
