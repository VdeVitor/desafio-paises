import React, { useCallback, useState, useEffect, useMemo } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import CountryCard from '../components/CountryCard/CountryCard';
import Input from '../components/Input/Input';
import { FilterButtonRow, ContentLoaderContainer } from './styles';
import MenuButton from '../components/MenuButton/MenuButton';
import { withApollo, WithApolloClient } from 'react-apollo';
import { formatNumber } from '../utils';
import moment from 'moment-timezone';
import ContentLoader from '../components/ContentLoader/ContentLoader';
import { Caption } from '../components/Typography/Typography';

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

interface Timezones {
  name: string;
}

export interface Distance {
  distanceInKm: number;
  countryName: string;
}

export interface Country {
  name: string;
  capital: string;
  flag: Flag;
  currencies: Currency[];
  officialLanguages: Languages[];
  distanceToOtherCountries: Distance[];
  distanceToGB: number | undefined;
  population: number;
  timezones: Timezones[];
}

export interface Countries {
  Country: Country[];
}

export enum OptionTypes {
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

const COUNTRY_DISTANCE = gql`
  {
    Country(alpha2Code: "GB") {
      distanceToOtherCountries {
        distanceInKm
        countryName
      }
    }
  }
`;

const COUNTRIES = gql`
  {
    Country {
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
      officialLanguages {
        name
      }
      currencies {
        name
        symbol
      }
      flag {
        svgFile
      }
      timezones {
        name
      }
    }
  }
`;

const ViewCountries = ({ client }: WithApolloClient<{}>) => {
  const { loading: initiallyLoading, error, data } = useQuery<Countries>(
    COUNTRIES
  );
  const [countries, setCountries] = useState<Country[]>([]);
  const [countriesDistanceFrom, setCountriesDistanceFrom] = useState<Country[]>(
    []
  );
  const [sortedCountries, setSortedCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTerm, setFilterTerm] = useState('');
  const [selectedSort, setSelectedSort] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setFilterTerm(OptionTypes.FilterAllLanguages);
    setSelectedSort(OptionTypes.SortByAlphabet);
  }, []);

  useEffect(() => {
    const queryDistanceFromCountry = async () =>
      await client
        .query({
          query: COUNTRY_DISTANCE,
        })
        .then((res) => setCountriesDistanceFrom(res.data.Country));

    queryDistanceFromCountry();
  }, [client]);

  useEffect(() => {
    let distanceArray: number | undefined;

    if (data && countriesDistanceFrom) {
      const countriesWithDistanceFrom = data.Country.map((country, index) => {
        if (countriesDistanceFrom.length) {
          distanceArray = mapCountryDistance(
            country.name,
            countriesDistanceFrom[0].distanceToOtherCountries
          );
        }
        return {
          ...country,
          distanceToGB: distanceArray,
        };
      });
      setCountries(countriesWithDistanceFrom);
    }
    // eslint-disable-next-line
  }, [data, countriesDistanceFrom]);

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

    if (selectedSort === OptionTypes.SortByDistance) {
      result = result.sort((a, b) =>
        a.distanceToGB && b.distanceToGB ? a.distanceToGB - b.distanceToGB : 0
      );
    }

    if (selectedSort === OptionTypes.SortByPopulation) {
      result = result.sort((a, b) => b.population - a.population);
    }

    setSortedCountries(result);

    if (!initiallyLoading) {
      setLoading(false);
    }

    // eslint-disable-next-line
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

  const getLocalTime = useCallback(
    (timezones: Timezones[]) =>
      timezones.map((zone, index) =>
        moment(new Date()).zone(zone.name).format('HH:mm')
      ),
    []
  );

  const mapCountryDistance = useCallback(
    (name: string, distanceArr: Distance[]) => {
      const result = distanceArr.filter((item) => {
        return item.countryName.includes(name);
      });

      if (result.length) {
        return Math.floor(result[0].distanceInKm);
      }
    },
    []
  );

  const getLanguageArrayList = useMemo(
    () =>
      data?.Country.reduce<string[]>(
        (a, b) => [...a, ...b.officialLanguages.map(({ name }) => name)],
        []
      ).sort((a, b) => (a !== b ? (a < b ? -1 : 1) : 0)),
    [data]
  );

  return (
    <>
      <Input
        text={searchTerm}
        onTextChange={(value) => setSearchTerm(value)}
        clearSearch={() => setSearchTerm('')}
      />
      {loading && (
        <>
          <ContentLoaderContainer>
            {[...Array(10)].map((_, index) => (
              <ContentLoader key={index} />
            ))}
          </ContentLoaderContainer>
        </>
      )}
      {!loading && (
        <>
          <FilterButtonRow>
            <MenuButton
              listData={[
                OptionTypes.FilterAllLanguages,
                ...new Set(getLanguageArrayList),
              ]}
              title={filterTerm}
              onItemClicked={handleFilter}
              removeFilter={() => setFilterTerm(OptionTypes.FilterAllLanguages)}
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
                distance={country.distanceToGB}
                population={formatNumber(country.population)}
                time={getLocalTime(country.timezones)}
              />
            );
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

export default withApollo(ViewCountries);
