import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import Home from '../containers/Home';

// styles
import '../static/styles/main.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
