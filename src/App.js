import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import AllProductsPage from './pages/AllProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={AllProductsPage} />
          <Route path="/products/:id" component={ProductDetailsPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;