import React from 'react';
import {Switch, Route} from 'react-router-dom';

import orderPage from './modules/order/pages/order';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={orderPage}/>
      </Switch>
    </div>
  );
}

export default App;
