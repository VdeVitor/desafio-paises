import { rem } from '../utils';

export const symbols = {
  borders: {
    radius: {
      _2: '2px',
      _4: '4px',
      _6: '6px',
      _50: '50px',
    },
    shadows: {
      _2: '2px',
      _4: '4px',
    },
  },
  colors: {
    brand: 'rgba(0, 43, 85, 1)',
    accent1: 'rgba(0, 90, 173, 1)',
    accent2: 'rgba(3, 160, 240, 1)',
    neutral: 'rgba(240, 242, 245, 1)',
    shade: 'rgba(190, 202, 220, 1)',
    positive: 'rgba(0, 139, 0, 1)',
    currency: 'rgb(255, 193, 7, 1)',
    black: 'rgba(0, 0, 0, 1)',
    black01: 'rgba(0, 0, 0, 0.1)',
    white: 'rgba(255, 255, 255, 1)',
    white05: 'rgba(255, 255, 255, 0.5)',
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
      _24: rem(24),
      _32: rem(32),
      _40: rem(40),
      _100: rem(72),
    },
    size: {
      _10: rem(10),
      _12: rem(12),
      _14: rem(14),
      _16: rem(16),
      _20: rem(20),
    },
    weight: {
      regular: 400,
      semiBold: 600,
      bold: 700,
    },
  },
  media: {
    mobileDevice: '320px',
    tabletDevice: '768px',
  },
  size: {
    flagWidth: rem(140),
    flagHeight: rem(100),
    flagWidthSmall: rem(56),
    flagHeightSmall: rem(50),
    inputHeight: rem(50),
    maxMenuHeight: rem(260),
    iconSmall: rem(12),
    icon: rem(24),
  },
  spacing: {
    _2: rem(2),
    _4: rem(4),
    _6: rem(6),
    _8: rem(8),
    _10: rem(10),
    _12: rem(12),
    _14: rem(14),
    _16: rem(16),
    _18: rem(18),
    _20: rem(20),
    _24: rem(24),
    _26: rem(26),
    _32: rem(32),
    _34: rem(34),
    _48: rem(48),
    _52: rem(52),
  },
};
