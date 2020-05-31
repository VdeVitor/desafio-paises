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
  DetailsBottom,
  DetailsBottomInner,
  DetailsBottomText,
} from './styles';
import { Small, Caption, SmallBold } from '../Typography/Typography';
import Icon from '../Icon/Icon';
import { symbols } from '../../themes/symbols';
import { Distance } from '../../containers/ViewCountries';

interface Props {
  name: string;
  capital: string;
  flag: string;
  currency: string[];
  languages: string;
  distance: number | null | undefined;
  population: string | number;
}

const CountryCard = ({
  name,
  capital,
  flag,
  currency,
  languages,
  distance,
  population,
}: Props) => {
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
            <>
              {capital && <Caption>Capital: {capital}</Caption>}
              {languages && <Caption>Languages: {languages}</Caption>}
            </>
            <DetailsBottom className="1">
              {population && (
                <DetailsBottomInner className="2">
                  <Icon type="user" size={symbols.size.iconSmall} />
                  <DetailsBottomText>{population}</DetailsBottomText>
                </DetailsBottomInner>
              )}
              {distance && (
                <DetailsBottomInner>
                  <Icon type="plane" size={symbols.size.iconSmall} />
                  <DetailsBottomText>{distance}km</DetailsBottomText>
                </DetailsBottomInner>
              )}
            </DetailsBottom>
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
