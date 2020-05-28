import React, { useCallback, useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import CountryCard from '../components/CountryCard/CountryCard';
import Input from '../components/Input/Input';
import { LoadingSpinner } from '../components/Spinner/styles';
import { FilterButtonRow } from './styles';
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
  const [countriesData, setCountriesData] = useState<Countries[]>();
  const { loading, error, data } = useQuery<CountriesData>(COUNTRIES);
  const [order, setOrder] = useState<null | number>(null);
  const [filterTerm, setFilterTerm] = useState('');
  const [selectedFilterText, setSelectedFilterText] = useState('All languages');
  const [selectedSortText, setSelectedSortText] = useState('Sort A-Z');

  /** EFFECTS */

  useEffect(() => {
    if (data) {
      setCountriesData(data.countries);
    }
  }, [data]);

  /** CALLBACKS */

  const getLanguages = useCallback(
    (languages: Languages[]) =>
      languages.map((language) => language.name).join(', '),
    []
  );

  const handleSearchInputChange = useCallback(
    (searchTermValue) => {
      const filtered = data
        ? data.countries.filter(
            (country) =>
              country.name
                .toLowerCase()
                .indexOf(searchTermValue.toLowerCase()) !== -1
          )
        : [...countriesData];

      setCountriesData(filtered);
    },
    [countriesData]
  );

  const handleFilterPress = useCallback(
    (selectedFilterTerm, closeMenuCallback) => {
      closeMenuCallback();
      setFilterTerm(selectedFilterTerm);
      setSelectedFilterText(selectedFilterTerm);
    },
    [order]
  );

  const handleSortChange = useCallback(
    (direction, closeMenuCallback) => {
      closeMenuCallback();

      if (direction.toLowerCase() === 'descending') {
        setSelectedSortText('Z-A');
        return setOrder(1);
      }

      setSelectedSortText('A-Z');
    },
    [order, selectedSortText]
  );

  /** STATE */

  const getLanguageArrayList = data
    ? data.countries.reduce<string[]>(
        (a, b) => [...a, ...b.languages.map(({ name }) => name)],
        []
      )
    : [];

  const sortedCountriesData =
    order === 1 && countriesData ? countriesData.reverse() : countriesData;

  const derivedCountriesData =
    filterTerm && sortedCountriesData
      ? sortedCountriesData.filter((x) =>
          x.languages.some((g) => filterTerm.includes(g.name))
        )
      : sortedCountriesData;

  return (
    <>
      <Input onTextChange={(value) => handleSearchInputChange(value)} />
      <FilterButtonRow>
        <MenuButton
          listData={[...new Set(getLanguageArrayList)]}
          title={selectedFilterText}
          onItemClicked={handleFilterPress}
        />
        <MenuButton
          listData={['Ascending', 'Descending']}
          title={selectedSortText}
          onItemClicked={handleSortChange}
        />
      </FilterButtonRow>
      {derivedCountriesData && !loading ? (
        derivedCountriesData.map((country) => {
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
