import React from 'react';
import {
  Card,
  Flag,
  Content,
  DetailsMobile,
  Row,
  Details,
  CurrencyIcon,
  DetailsTitle,
  DetailsBottom,
  DetailsBottomInner,
  DetailsBottomText,
  DetailsTitleContainer,
  TimeContainer,
  Time,
} from './styles';
import { Small, Caption, SmallBold } from '../Typography/Typography';
import Icon from '../Icon/Icon';
import { symbols } from '../../themes/symbols';

interface Props {
  name: string;
  capital: string;
  flag: string;
  currency: string[];
  languages: string;
  distance: number | null | undefined;
  population: string | number;
  time: string[];
}

const CountryCard = ({
  name,
  capital,
  flag,
  currency,
  languages,
  distance,
  population,
  time,
}: Props) => {
  return (
    <Card>
      <Row>
        {flag && <Flag src={flag} imageSource={flag} />}
        <Content>
          <Details>
            <DetailsTitleContainer>
              {name && <DetailsTitle>{name}</DetailsTitle>}
              {currency && <CurrencyIcon>{currency}</CurrencyIcon>}
            </DetailsTitleContainer>
            <>
              {capital && <Caption>Capital: {capital}</Caption>}
              {languages && <Caption>Languages: {languages}</Caption>}
            </>
            <DetailsBottom>
              {population && (
                <DetailsBottomInner>
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
          <TimeContainer>
            <Time>{time[0]}</Time>
          </TimeContainer>
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
