import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { Container } from '@material-ui/core';

import ViewCountries from './containers/ViewCountries';

const client = new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Container>
        <ViewCountries />
      </Container>
    </ApolloProvider>
  );
}

export default App;
