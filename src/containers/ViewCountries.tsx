import React, { useCallback, useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import CountryCard from '../components/CountryCard/CountryCard';
import Input from '../components/Input/Input';
import { LoadingSpinner } from '../components/Spinner/styles';
import { FilterButtonRow } from './styles';
import MenuButton from '../components/MenuButton/MenuButton';

interface Languages {
  name: string;
  code: string;
}

interface Flag {
  svgFile: string;
}

interface Currency {
  name: string;
  symbol: string;
}

export interface Country {
  name: string;
  capital: string;
  flag: Flag;
  currencies: Currency[];
  officialLanguages: Languages[];
}

export interface Countries {
  Country: Country[];
}

enum OptionTypes {
  SortByAlphabet = 'Sort A-Z',
  SortByDistance = 'Sort by distance (closest)',
  SortByPopulation = 'Sort by population (highest)',
  FilterAllLanguages = 'All languages',
}

const SORT_OPTIONS = [
  'Sort A-Z',
  'Sort by distance (closest)',
  'Sort by population (highest)',
];

const COUNTRIES = gql`
  {
    Country {
      name
      population
      populationDensity
      capital
      location {
        latitude
        longitude
      }
      numericCode
      subregion {
        name
        region {
          name
        }
      }
      officialLanguages {
        iso639_1
        iso639_2
        name
        nativeName
      }
      currencies {
        name
        symbol
      }
      flag {
        svgFile
      }
    }
  }
`;

const ViewCountries = () => {
  const { loading, error, data } = useQuery<Countries>(COUNTRIES);
  const [countries, setCountries] = useState<Country[]>([]);
  const [sortedCountries, setSortedCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTerm, setFilterTerm] = useState('');
  const [selectedSort, setSelectedSort] = useState('');

  useEffect(() => {
    setFilterTerm(OptionTypes.FilterAllLanguages);
    setSelectedSort(OptionTypes.SortByAlphabet);
  }, []);

  useEffect(() => {
    if (data) {
      setCountries(data.Country);
    }
  }, [data]);

  useEffect(() => {
    let result = [...countries];

    if (searchTerm) {
      result = result.filter(
        (country) =>
          country.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      );
    }

    if (filterTerm && filterTerm !== OptionTypes.FilterAllLanguages) {
      result = result.filter((country) =>
        country.officialLanguages.some((g) => filterTerm.includes(g.name))
      );
    }

    if (selectedSort === OptionTypes.SortByAlphabet) {
      result = result.sort((a, b) =>
        a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0
      );
    }

    setSortedCountries(result);
  }, [searchTerm, countries, filterTerm, selectedSort]);

  const getFormattedLanguages = useCallback(
    (languages: Languages[]) =>
      languages.map((language) => language.name).join(', '),
    []
  );

  const getCurrencySymbol = useCallback(
    (currencies: Currency[]) => currencies.map((currency) => currency.symbol),
    []
  );

  const handleFilter = useCallback((filterTerm, callback) => {
    callback();
    setFilterTerm(filterTerm);
  }, []);

  const handleSort = useCallback((sortType, callback) => {
    callback();
    setSelectedSort(sortType);
  }, []);

  const getLanguageArrayList = data?.Country.reduce<string[]>(
    (a, b) => [...a, ...b.officialLanguages.map(({ name }) => name)],
    []
  );

  return (
    <>
      <Input onTextChange={(value) => setSearchTerm(value)} />
      {countries && !loading ? (
        <>
          <FilterButtonRow>
            <MenuButton
              listData={[
                OptionTypes.FilterAllLanguages,
                ...new Set(getLanguageArrayList),
              ]}
              title={filterTerm}
              onItemClicked={handleFilter}
            />
            <MenuButton
              listData={SORT_OPTIONS}
              title={selectedSort}
              onItemClicked={handleSort}
            />
          </FilterButtonRow>
          {sortedCountries.map((country) => {
            return (
              <CountryCard
                key={country.name}
                name={country.name}
                capital={country.capital}
                flag={country.flag.svgFile}
                currency={getCurrencySymbol(country.currencies)}
                languages={getFormattedLanguages(country.officialLanguages)}
              />
            );
          })}
        </>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

export default ViewCountries;
