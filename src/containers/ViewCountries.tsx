import React, { useCallback, useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import CountryCard from '../components/CountryCard/CountryCard';
import Input from '../components/Input/Input';
import { LoadingSpinner } from '../components/Spinner/styles';
import { FilterButtonRow } from './styles';
import Button from '../components/Button/Button';
import { symbols } from '../themes/symbols';
import MenuList from '../components/MenuButton/MenuButton';
import MenuButton from '../components/MenuButton/MenuButton';

export interface Languages {
  name: string;
  code: string;
}

export interface Countries {
  name: string;
  capital: string;
  emoji: string;
  currency: number;
  languages: Languages[];
}

interface CountriesData {
  countries: Countries[];
}

const COUNTRIES = gql`
  {
    countries {
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;

const ViewCountries = () => {
  const [countriesData, setCountriesData] = useState<CountriesData>();
  const { loading, error, data } = useQuery<CountriesData>(COUNTRIES, {
    onCompleted: setCountriesData,
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [sortValue, setSortValue] = useState('');

  /** CALLBACKS */

  const getLanguages = useCallback(
    (languages: Languages[]) =>
      languages.map((language) => language.name).join(', '),
    []
  );

  const handleSearchInputChange = useCallback((searchTermValue) => {
    setSearchTerm(searchTermValue);
  }, []);

  /** DERIVED STATE */

  const filteredCountries = countriesData
    ? countriesData.countries.filter((country) => {
        return (
          country.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
        );
      })
    : [];

  const getLanguageArrayList = countriesData
    ? countriesData.countries.reduce<string[]>(
        (a, b) => [...a, ...b.languages.map(({ name }) => name)],
        []
      )
    : [];

  return (
    <>
      <Input onTextChange={(value) => handleSearchInputChange(value)} />
      <FilterButtonRow>
        <MenuButton
          listData={[...new Set(getLanguageArrayList)]}
          title="All languages"
          onItemClicked={setFilterValue}
        />
        <MenuButton
          listData={['Ascending', 'Descending']}
          title="Sort A-Z"
          onItemClicked={setSortValue}
        />
      </FilterButtonRow>
      {filteredCountries && !loading ? (
        filteredCountries.map((country) => {
          return (
            <CountryCard
              key={country.name}
              name={country.name}
              capital={country.capital}
              emoji={country.emoji}
              currency={country.currency}
              languages={getLanguages(country.languages)}
            />
          );
        })
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

export default ViewCountries;
