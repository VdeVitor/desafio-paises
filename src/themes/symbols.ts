import { rem } from '../utils';

export const symbols = {
  colors: {
    brand: 'rgba(0, 43, 85, 1)',
    accent1: 'rgba(0, 90, 173, 1)',
    accent2: 'rgba(3, 160, 240, 1)',
    neutral: 'rgba(240, 242, 245, 1)',
    shade: 'rgba(190, 202, 220, 1)',
    positive: 'rgba(0, 139, 0, 1)',
    currency: 'rgb(255, 193, 7, 1)',
    black: 'rgba(0, 0, 0, 1)',
    white: 'rgba(255, 255, 255, 1)',
  },
  font: {
    colors: {
      primary: 'rgba(0, 0, 0, 1)',
      secondary: 'rgba(0, 0, 0, 0.7)',
      tertiary: 'rgba(0, 0, 0, 0.38)',
    },
    family: {
      lato: 'Lato, sans-serif',
    },
    lineHeight: {
      _32: rem(32),
    },
    size: {
      _10: rem(10),
      _12: rem(12),
      _20: rem(20),
    },
    weight: {
      regular: 400,
      bold: 700,
    },
  },
};
