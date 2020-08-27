import * as React from "react";
import * as Realm from "realm-web";
import { useRealmApp } from "./RealmApp";
import { createClient, Provider, Client } from "urql";
import { ApolloClient, NormalizedCacheObject, HttpLink, InMemoryCache, ApolloProvider } from "@apollo/client";

const RealmApolloProvider: React.FC = ({ children }) => {
  const { id, user } = useRealmApp();
  console.log(id);
  const [client, setClient] = React.useState(createApolloClient(id, user as Realm.User));
  React.useEffect(() => {
    setClient(createApolloClient(id, user as Realm.User));
  }, [id, user]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
export default RealmApolloProvider;

function createApolloClient(realmAppId: string, user: Realm.User): ApolloClient<NormalizedCacheObject> {
  const graphql_url = `https://realm.mongodb.com/api/client/v2.0/app/${realmAppId}/graphql`;

  return new ApolloClient({
    link: new HttpLink({
      uri: graphql_url,
      fetch: async (uri: RequestInfo, options: RequestInit) => {
        if (!options.headers) {
          options.headers = {} as Record<string, string>;
        }
        // Refreshing custom data also ensures a valid access token
        await user.refreshCustomData();
        const authenticatedOptions: RequestInit = {
          ...options,
          headers: {
            ...options.headers,
            Authorization: `Bearer ${user.accessToken}`,
          },
        };
        return fetch(uri, authenticatedOptions);
      },
    }),
    cache: new InMemoryCache(),
  });
}

// TODO: Implement createApolloClient()
function createUrqlClient(realmAppId: string, user: Realm.User): Client {
  const graphql_url = `https://realm.mongodb.com/api/client/v2.0/app/${realmAppId}/graphql`;

  const client = createClient({
    url: graphql_url,
    fetch: async (uri: RequestInfo, options: RequestInit | undefined) => {
      if (!options) {
        options = {};
      }
      if (!options.headers) {
        options.headers = {} as Record<string, string>;
      }
      console.log(realmAppId);
      // Refreshing custom data also ensures a valid access token
      await user.refreshCustomData();
      const authenticatedOptions: RequestInit = {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${user.accessToken}`,
        },
      };
      return fetch(uri, authenticatedOptions);
    },
  });

  return client;
}
