import React, { useCallback, useState } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import CountryCard from '../components/CountryCard/CountryCard';
import Input from '../components/Input/Input';
import { LoadingSpinner } from '../components/Spinner/styles';
import { FilterButtonRow } from './styles';
import Button from '../components/Button/Button';
import { symbols } from '../themes/symbols';

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
  const { loading, error, data } = useQuery<CountriesData>(COUNTRIES);
  const [searchTerm, setSearchTerm] = useState('');

  /** CALLBACKS */

  const getLanguages = (languages: Languages[]) =>
    languages.map((language) => language.name).join(', ');

  const handleSearchInputChange = useCallback((searchTermValue) => {
    setSearchTerm(searchTermValue);
  }, []);

  /** DERIVED STATE */

  const filteredCountries = data
    ? data.countries.filter((country) => {
        return (
          country.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
        );
      })
    : [];

  return (
    <>
      <Input onTextChange={(value) => handleSearchInputChange(value)} />
      <FilterButtonRow>
        <Button
          onClick={() => console.log('Hi')}
          marginStyle={{ marginRight: symbols.spacing._12 }}
        >
          All languages
        </Button>
        <Button onClick={() => console.log('Hi')}>Sort A - Z</Button>
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
