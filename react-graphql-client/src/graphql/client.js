import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'

const link = createHttpLink({
  uri: 'http://localhost:8000/graphql',
})

// client for graphql requests
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
})
