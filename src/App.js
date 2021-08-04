import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Helmet} from "react-helmet";

import './App.css';
import Header from './Components/Header/Header';
import Test from './Components/Test';
import Home from './Pages/Home/Home';
import Portfolio from './Pages/Portfolio/Portfolio';
import icon from './Data/projectIcons/lessonslearned.png'


function App() {
  return (
  <BrowserRouter>
      <Helmet>
        <title>Joao Victor</title>
      </Helmet>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path= '/portfolio' component={Portfolio} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
