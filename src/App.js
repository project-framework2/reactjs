import React from 'react';
import Welcome from './Welcome';
import logo from './logo.svg';
import './App.css';

import {Home} from './Home'
import {Carrousel} from './Carrousel'
import {Formulaire} from './Formulaire'
import {Navigation} from './Navigation'

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navigation/>

        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/carrousel' component={Carrousel}/>
          <Route path='/formulaire' component={Formulaire}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
