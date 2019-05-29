import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import client from "./apollo";
import Home from "./Home";
import Details from "./Detail";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact={true} path={"/"} component={Home} />
        <Route path={"/details/:movieId"} component={Details} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
