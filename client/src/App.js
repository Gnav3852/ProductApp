import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Family from "./components/family";
import Product from "./components/product";
import Test from './components/Test'

import { Provider } from "react-redux";
import store from "./store";
import Navbar from './menu'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar/>
          <Route exact path="/family" component={Family} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/upsell" component={Test}/>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
