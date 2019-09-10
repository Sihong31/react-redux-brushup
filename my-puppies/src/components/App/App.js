import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import './App.scss';
import history from '../../history';
import Header from '../Header/Header';
import PuppyList from '../puppies/PuppyList/PuppyList';
import PuppyCreate from '../puppies/PuppyCreate/PuppyCreate';
import PuppyDetails from '../puppies/PuppyDetails/PuppyDetails';

const App = () => {
  return (
    <>
      <Router history={ history }>
        <>
          <Header />
          <div className="App container">
            <Switch>
              <Route path="/" exact component={ PuppyList } />
              <Route path="/puppies/new" component={ PuppyCreate } />
              <Route path="/puppies/edit/:id" component={ PuppyCreate } />
              <Route path="/puppies/:id" component={ PuppyDetails } />
            </Switch>
          </div>
        </>
      </Router>
    </>
  );
}

export default App;
