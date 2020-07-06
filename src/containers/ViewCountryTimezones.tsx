import React, { useState } from 'react';
import CountryDrawer from '../components/CountryDrawer/CountryDrawer';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_SINGLE_COUNTRY = gql`
  query Country($id: String) {
    Country(_id: $id) {
      name
      nativeName
      timezones {
        _id
        name
        countries {
          name
          nativeName
        }
      }
    }
  }
`;

const ViewCountryTimeZones = ({
  id,
  onClose,
  open,
}: {
  id: number;
  open: boolean;
  onClose: () => void;
}) => {
  const { loading, error, data } = useQuery(GET_SINGLE_COUNTRY, {
    variables: { id },
  });

  console.log(loading);
  console.log(data);

  return <CountryDrawer open={open} onClose={onClose} />;
};

export default ViewCountryTimeZones;
