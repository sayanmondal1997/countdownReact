import './App.css';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import  {Routes}  from './router'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

function App(props) {
  // this.router = new Router();
  return (
    <div className="App">
      <BrowserRouter>
        <div>
        <Switch>
            {Routes.map(route => route.redirectTo? <Redirect key={route.path} to={route.redirectTo} /> : <Route key={route.path} exact={route.exact} path={route.path} component={route.component} />)}
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
const mapStateToProps = state => state;
export default connect(mapStateToProps)(App);

