import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import Layout from '../components/Layout';
import Home from '../containers/Home';

// styles
import '../static/styles/main.scss';

// provider
import AppProvider from '../context/AppContext';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
