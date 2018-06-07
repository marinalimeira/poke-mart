
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { withClientState, ApolloLink } from 'apollo-link-state';

const httpLink = new HttpLink({ uri: 'http://localhost:3030/graphql' })

const cache = new InMemoryCache();

const stateLink = withClientState({
  cache,
  resolvers: {
    Mutation: {
      updateItemQuantity: (_, { quantity }, { cache }) => {
        const data = {
          cart: {
            __typename: 'ItemQuantity',
            quantity,
          },
        };
        cache.writeData({ data });
        return null;
      },
    },
  },
  defaults: {
    cart: {
      __typename: 'ItemQuantity',
      quantity: 0,
    },
  },

});

export const client = new ApolloClient({
  link: ApolloLink.from([stateLink, httpLink]),
  cache,
})
