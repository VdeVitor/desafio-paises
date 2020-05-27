import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import CountryCard from '../components/CountryCard/CountryCard';
import { LoadingSpinner } from '../components/Spinner/styles';
import Input from '../components/Input/Input';

export interface Languages {
  name: string;
  code: string;
}

export interface Countries {
  name: number;
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

  const getLanguages = (languages: Languages[]) =>
    languages.map((language) => language.name).join(', ');

  return (
    <>
      <Input />
      {data && !loading ? (
        data.countries.map((country) => {
          return (
            <>
              <CountryCard
                name={country.name}
                capital={country.capital}
                emoji={country.emoji}
                currency={country.currency}
                languages={getLanguages(country.languages)}
              />
            </>
          );
        })
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

export default ViewCountries;
