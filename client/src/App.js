import React, { Fragment, useEffect } from 'react';

import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
const App = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
