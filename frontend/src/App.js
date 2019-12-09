import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Departments from './containers/Departments'
import Products from './containers/Products'
import CreateProduct from './containers/CreateProduct'
import CreateDepartment from './containers/CreateDepartment'
import Promotions from './containers/Promotions'
import CreatePromotion from './containers/CreatePromotion';
import AddPromotionToProduct from './containers/AddPromotionToProduct'

function App() {
  return (
    <Router>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/departments?page=1&per_page=15" className="nav-link">Departments</Link>
              </li>
              <li className="nav-item">
                <Link to="/products?page=1&per_page=15" className="nav-link">Products</Link>
              </li>
              <li className="nav-item">
                <Link to="/promotions?page=1&per_page=15" className="nav-link">Promotions</Link>
              </li>
            </ul>
          </div>
        </div>

      </nav>
      <div className="container py-4">
        <Switch>
          <Route path="/products/:id/add_promotion" component={AddPromotionToProduct} />
          <Route path="/products/new" component={CreateProduct} />
          <Route path="/departments/new" component={CreateDepartment} />
          <Route path="/promotions/new" component={CreatePromotion} />
          <Route path="/departments" component={Departments} />
          <Route path="/products" component={Products} />
          <Route path="/promotions" component={Promotions} />
          
        </Switch>

      </div>
    </Router>
  );
}

export default App;
