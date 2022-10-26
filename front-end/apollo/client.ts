import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "주소",
    cache: new InMemoryCache(),
});

export default client;