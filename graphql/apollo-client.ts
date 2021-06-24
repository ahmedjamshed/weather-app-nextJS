import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: "https://graphql-weather-api.herokuapp.com/",
      headers: {
        lang: 'en',
      },
    }),
    cache: new InMemoryCache(),
  });
}

export default createApolloClient;