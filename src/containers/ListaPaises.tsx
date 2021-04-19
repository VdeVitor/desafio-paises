import React, { useCallback, useState, useEffect, } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import CardPais from '../components/CardPais/CardPais';
import { FilterButtonRow } from './styles';
import MenuButton from '../components/MenuButton/MenuButton';
import { withApollo, WithApolloClient } from 'react-apollo';
import { formatNumber } from '../utils';
import { Caption } from '../components/Typography/Typography';


interface Flag {
  svgFile: string;
}

interface Region {
  name: string;
}

interface Subregion {
  name: string;
  region: Region;
}

export interface Country {
  _id: number;
  name: string;
  capital: string;
  flag: Flag;
  population: number;
  subregion: Subregion;
}

export interface Countries {
  Country: Country[];
}

export enum OptionTypes {
  FiltrarAlfabetico = 'Filtrar A-Z',
  FiltrarPopulacao = 'Filtrar por População (Maior)',
}

const SORT_OPTIONS = [
  'Filtrar A-Z',
  'Filtrar por População (Maior)',
];

const COUNTRIES = gql`
  {
    Country {
      _id
      name
      population
      populationDensity
      capital
      subregion {
        name
        region {
          name
        }
      }
      flag {
        svgFile
      }
    }
  }
`;

const ListaPaises = ({ client }: WithApolloClient<{}>) => {
  const { loading: initiallyLoading, error, data } = useQuery<Countries>(
    COUNTRIES
  );
  const [countries, setCountries] = useState<Country[]>([]);
  const [countriesDistanceFrom, setCountriesDistanceFrom] = useState<Country[]>(
    []
  );
  const [sortedCountries, setSortedCountries] = useState<Country[]>([]);
  const [filterTerm, setFilterTerm] = useState('');
  const [selectedSort, setSelectedSort] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setSelectedSort(OptionTypes.FiltrarAlfabetico);
  }, []);


  useEffect(() => {
    let distanceArray: number | undefined;

    if (data && countriesDistanceFrom) {
      const countriesWithDistanceFrom = data.Country.map((country, index) => {
        return {
          ...country
        };
      });
      setCountries(countriesWithDistanceFrom);
    }
    // eslint-disable-next-line
  }, [data, countriesDistanceFrom]);

  useEffect(() => {
    let result = [...countries];

    if (selectedSort === OptionTypes.FiltrarAlfabetico) {
      result = result.sort((a, b) =>
        a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0
      );
    }

    if (selectedSort === OptionTypes.FiltrarPopulacao) {
      result = result.sort((a, b) => b.population - a.population);
    }

    setSortedCountries(result);

    if (!initiallyLoading) {
      setLoading(false);
    }

    // eslint-disable-next-line
  }, [countries, filterTerm, selectedSort]);

  const handleSort = useCallback((sortType, callback) => {
    callback();
    setSelectedSort(sortType);
  }, []);


  const remove = (id: any) => {
    var removeIndex = sortedCountries.map(function(country) { return country._id; }).indexOf(id);
    sortedCountries.splice(removeIndex, 1);
  }

  return (
    <>
      {!loading && (
        <>
          <FilterButtonRow>
            <h4>Filtro: </h4>
            <button></button>
            <MenuButton
              listData={SORT_OPTIONS}
              title={selectedSort}
              onItemClicked={handleSort}
            />
          </FilterButtonRow>
          {sortedCountries.map((country) => {
            console.log(country)
            if(country.subregion === null){
              remove(country._id)
            } else {
            return (
              <CardPais
                key={country.name}
                name={country.name}
                capital={country.capital}
                flag={country.flag.svgFile}
                subregion={country.subregion.name}
                population={formatNumber(country.population)}
              />
            );}
          })}
        </>
      )}
      {!loading && !sortedCountries.length && (
        <Caption>Oops! No Results Found</Caption>
      )}

      {error && <Caption>Oops! Something went wrong. Try back later</Caption>}
    </>
  );
};

export default withApollo(ListaPaises);
