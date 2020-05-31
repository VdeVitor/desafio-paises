import styled from 'styled-components';
import { Card as MuiCard } from '@material-ui/core';
import { symbols } from '../../themes/symbols';
import { Title, SmallBold, Caption } from '../Typography/Typography';

export const Card = styled(MuiCard)`
  display: flex;
  flex-direction: column;
  padding: ${symbols.spacing._12} ${symbols.spacing._12} ${symbols.spacing._16}
    ${symbols.spacing._12};
  margin-bottom: ${symbols.spacing._12};
  border-radius: 4px;
  box-shadow: 0 ${symbols.borders.shadows._2} ${symbols.borders.shadows._4} 0
    ${symbols.colors.black01};
  background-color: ${symbols.colors.white};

  @media (min-width: ${symbols.media.tabletDevice}) {
    padding-bottom: ${symbols.spacing._12};
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Flag = styled.img<{ imageSource: string }>`
  width: ${symbols.size.flagWidthSmall};
  height: ${symbols.size.flagHeightSmall};
  margin-right: ${symbols.spacing._24};
  border-radius: ${symbols.borders.radius._2};

  @media (min-width: ${symbols.media.tabletDevice}) {
    width: ${symbols.size.flagWidth};
    height: ${symbols.size.flagHeight};
    border-radius: ${symbols.borders.radius._6};
  }
`;

export const DetailsTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const DetailsTitle = styled(Title)`
  float: left;
  margin-right: ${symbols.spacing._8};
`;

export const Content = styled(Row)`
  width: 100%;
`;

export const Details = styled.div``;

export const DetailsTop = styled.div`
  display: none;

  @media (min-width: ${symbols.media.tabletDevice}) {
    display: block;
  }
`;

export const DetailsBottom = styled(Row)`
  margin-top: ${symbols.spacing._16};
  display: none;

  @media (min-width: ${symbols.media.tabletDevice}) {
    display: block;
    display: flex;
    flex-direction: row;
  }
`;

export const DetailsBottomInner = styled(Row)`
  margin-right: ${symbols.spacing._16};
`;

export const DetailsBottomText = styled(SmallBold)`
  padding-left: ${symbols.spacing._4};
`;

export const MediaDetails = styled.div`
  margin-top: ${symbols.spacing._20};
  @media (min-width: ${symbols.media.tabletDevice}) {
    display: none;
  }
`;

export const MediaDetailsBottom = styled(Row)`
  margin-top: ${symbols.spacing._16};
`;

export const CurrencyIcon = styled.span`
  background-color: ${symbols.colors.currency};
  float: left;
  min-width: ${symbols.spacing._12};
  min-height: ${symbols.spacing._14};
  padding: ${symbols.spacing._2} ${symbols.spacing._4};
  border-radius: 50%;
  font-size: ${symbols.font.size._10};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TimeContainer = styled.div`
  display: none;

  @media (min-width: ${symbols.media.tabletDevice}) {
    display: block;
    display: flex;
    justify-content: flex-end;
    flex: 1;
  }
`;

export const Time = styled(Caption)`
  color: ${symbols.font.colors.tertiary};
`;

export const MediaTime = styled(Time)`
  @media (min-width: ${symbols.media.tabletDevice}) {
    display: none;
  }
`;
