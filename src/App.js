import React, {Component} from 'react';
import Letter from './letter';
import Music from './music';
import Menu from './menu';
import User from './user';
import Report from './report';
import Tabla from './tabla';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return(
    <Router>
      <Menu />
      <Route path='/' exact component={Letter} />
      <Route path='/music' component={Music} />
      <Route path='/user' component={User} />
      <Route path='/report/:id' component={Report} />
      <Route path='/tabla' component={Tabla} />
    </Router>
  );
}