import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home'
import Info from './components/pages/Info'
import Servicios from './components/pages/Servicios'
import Proximas from './components/pages/Proximas'
import Contacto from './components/pages/Contacto'
import Sesion from './components/pages/Sesion'

import Navbar from './components/Navbar'

import './App.css';
import Signup from './components/Signup';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/info' exact component={Info} />
          <Route path='/servicios' exact component={Servicios} />
          <Route path='/proximas' exact component={Proximas} />
          <Route path='/contacto' exact component={Contacto} />
          <Route path='/sesion' exact component={Sesion} />
          <Route path='/signup' exact component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
