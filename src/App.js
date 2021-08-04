import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Portfolio from './Pages/Portfolio/Portfolio';


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path= '/portfolio' component={Portfolio} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
