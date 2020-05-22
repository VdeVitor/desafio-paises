import React from 'react';
import { symbols } from '../themes/symbols';
import {
  Title,
  SmallBold,
  Small,
  Caption,
} from '../components/typography/Typography';

const ViewCountries = () => {
  return (
    <>
      <div>
        <p style={{ color: symbols.font.colors.primary }}>Hello</p>
        <p style={{ color: symbols.font.colors.secondary }}>Hello</p>
        <p style={{ color: symbols.font.colors.tertiary }}>Hello</p>
        <p style={{ color: symbols.colors.brand }}>Hello</p>
        <p style={{ color: symbols.colors.accent1 }}>Hello</p>
        <p style={{ color: symbols.colors.accent2 }}>Hello</p>
        <p style={{ color: symbols.colors.neutral }}>Hello</p>
        <p style={{ color: symbols.colors.shade }}>Hello</p>
        <p style={{ color: symbols.colors.positive }}>Hello</p>
        <p style={{ color: symbols.colors.currency }}>Hello</p>
        <p style={{ color: symbols.colors.black }}>Hello</p>
        <p style={{ color: symbols.colors.white }}>Hello</p>
      </div>
      <div>
        <Title>Hello</Title>
        <Caption>Hello</Caption>
        <Small>Hello</Small>
        <SmallBold>Hello</SmallBold>
      </div>
    </>
  );
};

export default ViewCountries;
