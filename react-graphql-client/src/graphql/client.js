import {ApolloClient,createHttpLink, InMemoryCache} from "@apollo/client";

const link = createHttpLink({
    uri: 'http://localhost:8000/graphql',
    // fetchOptions: {
    //     mode: 'no-cors',
    //   },
  });

  
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});
