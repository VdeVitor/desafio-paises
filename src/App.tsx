import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';

import './App.css';
import ViewCountries from './containers/ViewCountries';

const httpLink = createHttpLink({
  uri: 'https://countries.trevorblades.com/',
});

const link = ApolloLink.from([httpLink]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ViewCountries />
    </ApolloProvider>
  );
}

export default App;
