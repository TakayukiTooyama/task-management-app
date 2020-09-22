/** @format */

import React from 'react';
import { Switch, Route } from 'react-router';
import {
  BoardContainer,
  Header,
  ShowActiveBoard,
} from './components/templates';

function App() {
  return (
    <div>
      <Header />
      <main className="c-main">
        <Switch>
          <Route exact path="/" component={BoardContainer} />
          <Route exact path="/boards/:id" component={ShowActiveBoard} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
