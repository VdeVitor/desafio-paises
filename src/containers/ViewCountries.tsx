import React, { useEffect } from 'react';
import { symbols } from '../themes/symbols';
import {
  Title,
  SmallBold,
  Small,
  Caption,
} from '../components/typography/Typography';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const COUNTRIES = gql`
  {
    countries {
      name
      capital
      emoji
      currency
      languages {
        name
      }
    }
  }
`;

const ViewCountries = () => {
  const { loading, error, data } = useQuery(COUNTRIES);

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
