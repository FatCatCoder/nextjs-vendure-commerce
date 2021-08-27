// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:5000/shop-api",
    cache: new InMemoryCache(),
    connectToDevTools: true,
});

export default client;