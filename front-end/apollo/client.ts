import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://192.168.0.93:8081/graphql",
    cache: new InMemoryCache(),
});

export default client;