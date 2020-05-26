import React from 'react';
import {
  Card,
  Flag,
  Content,
  DetailsMobile,
  Row,
  Details,
  CurrencyIcon,
  Name,
} from './styles';
import { Small } from '../Typography/Typography';

const CountryCard = ({
  name,
  capital,
  emoji,
  currency,
  languages,
}: {
  name: number;
  capital: string;
  emoji: string;
  currency: number;
  languages: string;
}) => {
  return (
    <Card>
      <Row>
        {emoji && <Flag>{emoji}</Flag>}
        <Content>
          <div>
            {name && <Name>{name}</Name>}
            {currency && (
              <CurrencyIcon>
                <Small>{currency}</Small>
              </CurrencyIcon>
            )}
          </div>
          <Details>
            {capital && <Small>Capital: {capital}</Small>}
            {languages && <Small>Languages: {languages}</Small>}
          </Details>
        </Content>
      </Row>
      <DetailsMobile>
        {capital && <Small>Capital: {capital}</Small>}
        {languages && <Small>Languages: {languages}</Small>}
      </DetailsMobile>
    </Card>
  );
};

export default CountryCard;
