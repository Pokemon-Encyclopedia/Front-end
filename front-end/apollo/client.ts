import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://10.120.74.59:8081/graphql",
    cache: new InMemoryCache(),
});

export default client;