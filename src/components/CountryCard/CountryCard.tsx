import React from 'react';
import {
  Card,
  Flag,
  Content,
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
  MediaDetails,
  MediaDetailsBottom,
  DetailsTop,
  MediaTime,
} from './styles';
import { Small, Caption } from '../Typography/Typography';
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
            <MediaTime>{time[0]}</MediaTime>
            <DetailsTop>
              {capital && <Caption>Capital: {capital}</Caption>}
              {languages && <Caption>Languages: {languages}</Caption>}
            </DetailsTop>
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
      <MediaDetails>
        <>
          {capital && <Small>Capital: {capital}</Small>}
          {languages && <Small>Languages: {languages}</Small>}
          <MediaDetailsBottom>
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
          </MediaDetailsBottom>
        </>
      </MediaDetails>
    </Card>
  );
};

export default CountryCard;
