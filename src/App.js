import React from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Movies from "./components/Movies";
import Series from "./components/Series";

import {BrowserRouter as Router, Route, Switch  } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/movies" component={Movies} />
      <Route exact path="/series" component={Series} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
