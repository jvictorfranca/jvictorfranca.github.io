import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import {Helmet} from "react-helmet";

import './App.css';

import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Portfolio from './Pages/Portfolio/Portfolio';
import Footer from './Components/Footer/Footer';
import Programming from './Pages/Programming/Programming';
import Metallurgy from './Pages/Metallurgy/Metallurgy';
import Contact from './Pages/Contact/Contact'


function App() {
  return (
  <HashRouter basename="/">
      <Helmet>
        <title>Joao Victor</title>
        <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
      </Helmet>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path= '/portfolio' component={Portfolio} />
      <Route exact path= '/programming' component={Programming} />
      <Route exact path= '/metallurgy' component={Metallurgy} />
      <Route exact path= '/contact' component={Contact} />
    </Switch>
    <Footer />
  </HashRouter>
  );
}

export default App;
