import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./utils/reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.scss";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          allListings: {
            keyArgs: false,
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          }
        }
      }
    }
  }),
});

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
        redirectUri={window.location.origin}
      >
        <App/>
      </Auth0Provider>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
