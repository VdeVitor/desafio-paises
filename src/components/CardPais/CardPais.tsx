import React from 'react';
import {
  Card,
  Flag,
  Content,
  Row,
  Details,
  DetailsTitle,
  DetailsBottomInner,
  DetailsBottomText,
  DetailsTitleContainer,
  MediaDetails,
  MediaDetailsBottom,
  DetailsTop,
} from './styles';
import { Small, Caption } from '../Typography/Typography';

interface Props {
  name: string;
  capital: string;
  flag: string;
  subregion: string;
  population: string | number;
}

const CardPais = ({
  name,
  capital,
  flag,
  subregion,
  population,
}: Props) => {
  return (
    <Card>
      <Row>
        {flag && <Flag src={flag} imageSource={flag} />}
        <Content>
          <Details>
            <DetailsTitleContainer>
              {name && <DetailsTitle>{name}</DetailsTitle>}
            </DetailsTitleContainer>
            <DetailsTop>
              {capital && <Caption>Capital: {capital}</Caption>}
              {subregion && <Caption>Sub-área: {subregion}</Caption>}
              {population && <Caption>População: {population}</Caption>}
            </DetailsTop>
            
          </Details>
        </Content>
      </Row>
      <MediaDetails>
        <>
          {capital && <Small>Capital: {capital}</Small>}
          <MediaDetailsBottom>
            {population && (
              <DetailsBottomInner>
                <DetailsBottomText>População: {population}</DetailsBottomText>
              </DetailsBottomInner>
            )}
          </MediaDetailsBottom>
        </>
      </MediaDetails>
    </Card>
  );
};

export default CardPais;
