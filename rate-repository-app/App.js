import { StatusBar } from "expo-status-bar";
import React from "react";
import { NativeRouter } from "react-router-native";

import createApolloClient from "./utils/apolloClient";
import { ApolloProvider } from "@apollo/client";
import Main from "./components/Main";

const client = createApolloClient();

const App = () => {
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={client}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
};

export default App;
