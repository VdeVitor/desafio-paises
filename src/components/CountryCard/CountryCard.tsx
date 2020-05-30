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
import { Small, Caption } from '../Typography/Typography';

interface Props {
  name: string;
  capital?: string;
  flag?: string;
  currency: string[];
  languages: string;
}

const CountryCard = ({ name, capital, flag, currency, languages }: Props) => {
  return (
    <Card>
      <Row>
        {flag && <Flag imageSource={flag} />}
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
            {capital && <Caption>Capital: {capital}</Caption>}
            {languages && <Caption>Languages: {languages}</Caption>}
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
