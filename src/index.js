import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from 'history';
import {Router, Route, Switch} from "react-router-dom"

//Components imports
import Home from "./components/Home"
import AlgoVisual from './components/projects/AlgoVisual/AlgoVisual';

var hist = createBrowserHistory()

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/algo-visual" component={AlgoVisual}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
