import styled from 'styled-components';
import { Card as MuiCard } from '@material-ui/core';
import { symbols } from '../../themes/symbols';
import { Title } from '../Typography/Typography';

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

export const Flag = styled.span<{ imageSource: string }>`
  background: ${(props) => `url('${props.imageSource}')`};
  background-size: cover;
  width: ${symbols.size.flagWidth};
  height: ${symbols.size.flagHeight};
  border-radius: ${symbols.borders.radius._6};
  margin-right: ${symbols.spacing._24};
  @media (min-width: ${symbols.media.tabletDevice}) {
  }
`;

export const Name = styled(Title)`
  float: left;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Details = styled.div`
  display: none;

  @media (min-width: ${symbols.media.tabletDevice}) {
    display: block;
  }
`;

export const DetailsMobile = styled.div`
  margin-left: ${symbols.spacing._4};
  @media (min-width: ${symbols.media.tabletDevice}) {
    display: none;
  }
`;

export const CurrencyIcon = styled.span`
  background-color: ${symbols.colors.currency};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: ${symbols.borders.radius._50};
  float: left;
  padding: ${symbols.spacing._6};
  margin-left: ${symbols.spacing._8};
  margin-top: ${symbols.spacing._2};
`;
